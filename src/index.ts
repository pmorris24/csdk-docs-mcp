#!/usr/bin/env node

import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { readFileSync, readdirSync, statSync, existsSync } from "fs";
import { join, resolve, relative } from "path";

// ── Types ──

interface DocChunk {
  text: string;
  source: string;
  heading: string;
  tags?: string[];  // "beta", "alpha", "internal", "fusionEmbed"
}

interface DocFile {
  path: string;       // relative path like "guides/charts.md"
  category: string;   // "guides", "react", "vue", "angular", "data"
  name: string;       // "charts.md"
  content: string;
  sizeKb: number;
  description: string; // from INDEX.md or derived
}

// ── Tag Detection & Filtering ──

const BADGE_RE = /<Badge\s+type="([^"]+)"\s+text="[^"]*"\s*\/?>/g;
const TAG_RE = /@(internal|sisenseInternal|beta|alpha)\b/g;

// Tags that should be completely excluded from results
const EXCLUDED_TAGS = new Set(['internal', 'sisenseInternal']);

// Tags that should be flagged with a warning
const WARNING_TAGS = new Set(['beta', 'alpha']);

function extractTags(text: string): string[] {
  const tags = new Set<string>();
  for (const m of text.matchAll(BADGE_RE)) tags.add(m[1]);
  for (const m of text.matchAll(TAG_RE)) tags.add(m[1]);
  return [...tags];
}

function hasExcludedTag(tags: string[]): boolean {
  return tags.some(t => EXCLUDED_TAGS.has(t));
}

function getWarnings(tags: string[]): string {
  const warnings = tags.filter(t => WARNING_TAGS.has(t));
  if (warnings.length === 0) return '';
  return `\n\n> **Warning:** This API is marked as ${warnings.join(', ')}. It may change without notice in future releases.`;
}

// ── TF-IDF Search Engine ──

const STOP_WORDS = new Set([
  'the','a','an','is','are','was','were','be','been','being','have','has','had',
  'do','does','did','will','would','could','should','may','might','shall','can',
  'to','of','in','for','on','with','at','by','from','as','into','through','during',
  'before','after','above','below','between','out','off','over','under','again',
  'further','then','once','here','there','when','where','why','how','all','each',
  'every','both','few','more','most','other','some','such','no','nor','not','only',
  'own','same','so','than','too','very','and','but','or','if','this','that','these',
  'those','it','its','what','which','who','whom','any','just',
  'const','let','var','function','return','import','export','from','default',
  'true','false','null','undefined','new','class','extends','implements',
]);

const FRAMEWORK_SOURCES: Record<string, string[]> = {
  react:   ['csdk_guides.md', 'csdk_full_compact.md', 'csdk_api_sdk_ui.md', 'csdk_api_sdk_data.md'],
  angular: ['csdk_guides.md', 'csdk_full_compact.md', 'csdk_api_sdk_ui_angular.md', 'csdk_api_sdk_data.md'],
  vue:     ['csdk_guides.md', 'csdk_full_compact.md', 'csdk_api_sdk_ui_vue.md', 'csdk_api_sdk_data.md'],
};

class SearchEngine {
  private chunks: DocChunk[] = [];
  private invertedIndex = new Map<string, Map<number, number>>();
  private idf = new Map<string, number>();

  load(docsDir: string): void {
    const chunksPath = join(docsDir, 'chunks.json');
    let rawChunks: DocChunk[];
    try {
      const raw = readFileSync(chunksPath, 'utf-8');
      rawChunks = JSON.parse(raw);
    } catch {
      rawChunks = this.loadFromMarkdown(docsDir);
    }

    // Tag each chunk and filter out @internal / @sisenseInternal
    let excluded = 0;
    for (const chunk of rawChunks) {
      chunk.tags = extractTags(chunk.text);
      if (hasExcludedTag(chunk.tags)) {
        excluded++;
        continue;
      }
      this.chunks.push(chunk);
    }

    this.buildIndex();
    process.stderr.write(`CSDK Docs MCP: indexed ${this.chunks.length} chunks (${excluded} internal excluded), ${this.invertedIndex.size} terms\n`);
  }

  private loadFromMarkdown(docsDir: string): DocChunk[] {
    const chunks: DocChunk[] = [];
    const walkDir = (dir: string): void => {
      for (const entry of readdirSync(dir)) {
        const full = join(dir, entry);
        if (statSync(full).isDirectory()) {
          walkDir(full);
        } else if (entry.endsWith('.md') && entry !== 'INDEX.md' && entry !== 'README.md') {
          const content = readFileSync(full, 'utf-8');
          const source = full.replace(docsDir + '/', '');
          const sections = content.split(/\n(?=# )/);
          for (const section of sections) {
            const headingMatch = section.match(/^# (.+)/);
            const heading = headingMatch?.[1] ?? 'General';
            const text = section.trim();
            if (text.length <= 2500) {
              if (text.length > 50) chunks.push({ text, source, heading });
            } else {
              const paragraphs = text.split(/\n\n/);
              let current = '';
              for (const p of paragraphs) {
                if (current.length + p.length > 2000 && current.length > 50) {
                  chunks.push({ text: current.trim(), source, heading });
                  current = '';
                }
                current += p + '\n\n';
              }
              if (current.trim().length > 50) {
                chunks.push({ text: current.trim(), source, heading });
              }
            }
          }
        }
      }
    };
    walkDir(docsDir);
    return chunks;
  }

  private tokenize(text: string): string[] {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]/g, ' ')
      .split(/\s+/)
      .filter(t => t.length > 2 && !STOP_WORDS.has(t));
  }

  private extractCodeSignals(code: string): string[] {
    const signals: string[] = [];
    const importMatches = code.matchAll(/import\s*\{([^}]+)\}\s*from\s*['"]@sisense\/[^'"]+['"]/g);
    for (const m of importMatches) {
      signals.push(...m[1].split(',').map(s => s.trim()).filter(Boolean));
    }
    const componentMatches = code.matchAll(/<(Chart|ColumnChart|BarChart|LineChart|AreaChart|PieChart|FunnelChart|ScatterChart|TreemapChart|SunburstChart|IndicatorChart|PolarChart|BoxplotChart|AreamapChart|ScattermapChart|AreaRangeChart|ChartWidget|Dashboard|DashboardById|WidgetById|Widget|SisenseContextProvider|ThemeProvider)/g);
    for (const m of componentMatches) signals.push(m[1]);
    const hookMatches = code.matchAll(/use(ExecuteQuery|ExecuteQueryByWidgetId|ExecutePivotQuery|GetDashboardModel|GetDashboardModels|GetWidgetModel|ComposedDashboard|GetFilterMembers|GetNlgInsights|GetDataSourceDimensions)/g);
    for (const m of hookMatches) signals.push('use' + m[1]);
    const factoryMatches = code.matchAll(/(measureFactory|filterFactory|analyticsFactory)\.([\w]+)/g);
    for (const m of factoryMatches) signals.push(m[1], m[2]);
    if (code.includes('dashboardModelTranslator')) signals.push('dashboardModelTranslator', 'toDashboardProps');
    if (code.includes('widgetModelTranslator')) signals.push('widgetModelTranslator', 'toChartWidgetProps');
    const typeMatches = code.matchAll(/([\w]*StyleOptions|[\w]*Config|DrilldownOptions|FilterRelations|WidgetsPanelColumnLayout|ChartDataOptions|MeasureColumn)/g);
    for (const m of typeMatches) signals.push(m[1]);
    if (code.includes('onBeforeRender')) signals.push('onBeforeRender', 'Highcharts', 'styling', 'chart design');
    if (code.includes('ThemeProvider')) signals.push('ThemeProvider', 'ThemeSettings', 'palette');
    if (code.includes('useComposedDashboard')) signals.push('useComposedDashboard', 'custom layout', 'composed');
    return [...new Set(signals)];
  }

  search(
    query: string,
    options: { framework?: string; codeContext?: string; maxResults?: number } = {}
  ): Array<{ text: string; source: string; heading: string; score: number; tags?: string[] }> {
    const { framework, codeContext = '', maxResults = 8 } = options;

    const codeSignals = codeContext ? this.extractCodeSignals(codeContext) : [];
    const combinedQuery = codeSignals.length > 0
      ? `${query} ${codeSignals.join(' ')}`
      : query;

    const queryTerms = this.tokenize(combinedQuery);
    if (queryTerms.length === 0) return [];

    const scores = new Float64Array(this.chunks.length);
    const allowed = framework ? new Set(FRAMEWORK_SOURCES[framework] ?? []) : null;

    for (const term of queryTerms) {
      const postings = this.invertedIndex.get(term);
      const termIdf = this.idf.get(term) ?? 0;
      if (!postings) continue;
      for (const [idx, tf] of postings) {
        if (allowed && !allowed.has(this.chunks[idx].source)) continue;
        scores[idx] += tf * termIdf;
      }
    }

    const results: Array<{ idx: number; score: number }> = [];
    for (let i = 0; i < scores.length; i++) {
      if (scores[i] > 0) results.push({ idx: i, score: scores[i] });
    }
    results.sort((a, b) => b.score - a.score);

    return results.slice(0, maxResults).map(r => ({
      ...this.chunks[r.idx],
      score: r.score,
    }));
  }

  private buildIndex(): void {
    this.chunks.forEach((chunk, idx) => {
      const words = this.tokenize(chunk.text);
      if (words.length === 0) return;

      const tf: Record<string, number> = {};
      words.forEach(w => { tf[w] = (tf[w] || 0) + 1; });

      for (const [term, count] of Object.entries(tf)) {
        if (!this.invertedIndex.has(term)) this.invertedIndex.set(term, new Map());
        this.invertedIndex.get(term)!.set(idx, count / words.length);
      }
    });

    const N = this.chunks.length;
    for (const [term, postings] of this.invertedIndex) {
      this.idf.set(term, Math.log(N / (1 + postings.size)));
    }
  }

  get chunkCount(): number {
    return this.chunks.length;
  }
}

// ── Structured Doc Loader ──

class DocStore {
  private files: DocFile[] = [];
  private categories = new Map<string, DocFile[]>();

  load(docsDir: string): void {
    // Load structured docs from the skill-style directory layout
    const structuredDir = join(docsDir, 'docs');
    const dir = existsSync(structuredDir) ? structuredDir : docsDir;

    const categories = ['guides', 'react', 'vue', 'angular', 'data'];
    for (const cat of categories) {
      const catDir = join(dir, cat);
      if (!existsSync(catDir)) continue;

      // Parse INDEX.md for descriptions
      const descriptions = this.parseIndex(join(catDir, 'INDEX.md'));
      const catFiles: DocFile[] = [];

      for (const entry of readdirSync(catDir)) {
        if (!entry.endsWith('.md') || entry === 'INDEX.md' || entry === 'README.md') continue;
        const full = join(catDir, entry);
        if (!statSync(full).isFile()) continue;
        const content = readFileSync(full, 'utf-8');
        const docFile: DocFile = {
          path: `${cat}/${entry}`,
          category: cat,
          name: entry,
          content,
          sizeKb: Math.round(content.length / 1024),
          description: descriptions.get(entry) ?? entry.replace('.md', ''),
        };
        catFiles.push(docFile);
        this.files.push(docFile);
      }
      this.categories.set(cat, catFiles);
    }

    // Also load root-level design/supplemental docs
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      if (!entry.endsWith('.md') || !statSync(full).isFile()) continue;
      if (entry === 'INDEX.md' || entry === 'README.md') continue;
      const content = readFileSync(full, 'utf-8');
      const docFile: DocFile = {
        path: entry,
        category: 'design',
        name: entry,
        content,
        sizeKb: Math.round(content.length / 1024),
        description: entry.replace('.md', '').replace(/_/g, ' '),
      };
      this.files.push(docFile);
      if (!this.categories.has('design')) this.categories.set('design', []);
      this.categories.get('design')!.push(docFile);
    }

    process.stderr.write(`CSDK Docs MCP: loaded ${this.files.length} structured doc files across ${this.categories.size} categories\n`);
  }

  private parseIndex(indexPath: string): Map<string, string> {
    const descriptions = new Map<string, string>();
    if (!existsSync(indexPath)) return descriptions;
    const content = readFileSync(indexPath, 'utf-8');
    // Parse lines like: ### charts.md (24 KB)\nDescription text
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const match = lines[i].match(/^###\s+(\S+\.md)\s+\(.*?\)\s*$/);
      if (match && i + 1 < lines.length) {
        // Collect all non-empty lines until next heading as the description
        const descLines: string[] = [];
        for (let j = i + 1; j < lines.length && !lines[j].startsWith('###'); j++) {
          if (lines[j].trim()) descLines.push(lines[j].trim());
        }
        descriptions.set(match[1], descLines.join(' '));
      }
    }
    return descriptions;
  }

  getCategories(): string[] {
    return [...this.categories.keys()];
  }

  getFilesInCategory(category: string): DocFile[] {
    return this.categories.get(category) ?? [];
  }

  getFile(path: string): DocFile | undefined {
    return this.files.find(f => f.path === path);
  }

  getAllFiles(): DocFile[] {
    return this.files;
  }

  buildCategoryIndex(category: string): string {
    const files = this.getFilesInCategory(category);
    if (files.length === 0) return `No documentation found for category: ${category}`;
    const lines = files.map(f => `- **${f.name}** (${f.sizeKb} KB) — ${f.description}`);
    return `## ${category} documentation\n\n${lines.join('\n')}`;
  }

  buildFullIndex(): string {
    const sections: string[] = [];
    for (const [cat, files] of this.categories) {
      const lines = files.map(f => `  - **${f.name}** (${f.sizeKb} KB) — ${f.description}`);
      sections.push(`### ${cat}\n${lines.join('\n')}`);
    }
    return `## CSDK Documentation Structure\n\n${sections.join('\n\n')}\n\n**Total files:** ${this.files.length}`;
  }
}

// ── Main ──

const engine = new SearchEngine();
const docStore = new DocStore();

const DOCS_DIR = process.env.CSDK_DOCS_DIR
  ?? resolve(new URL('.', import.meta.url).pathname, '..');

engine.load(DOCS_DIR);
docStore.load(DOCS_DIR);

const server = new McpServer({
  name: "csdk-docs",
  version: "2.0.0",
});

// ── Resources: Structured doc access ──

// 1. Full index — lists all categories and files
server.resource(
  "csdk-index",
  "csdk://index",
  { description: "Complete index of all CSDK documentation files organized by category. Read this first to understand what documentation is available." },
  async () => ({
    contents: [{
      uri: "csdk://index",
      mimeType: "text/markdown",
      text: docStore.buildFullIndex(),
    }],
  })
);

// 2. Category indexes
for (const category of docStore.getCategories()) {
  server.resource(
    `csdk-${category}`,
    `csdk://${category}`,
    { description: `Index of ${category} documentation files. Lists all available ${category} docs with descriptions and sizes.` },
    async () => ({
      contents: [{
        uri: `csdk://${category}`,
        mimeType: "text/markdown",
        text: docStore.buildCategoryIndex(category),
      }],
    })
  );
}

// 3. Individual doc files via template
server.resource(
  "csdk-doc",
  new ResourceTemplate("csdk://{category}/{file}", { list: undefined }),
  { description: "Read a specific CSDK documentation file by category and filename." },
  async (uri, { category, file }) => {
    const path = `${category}/${file}`;
    const doc = docStore.getFile(path);
    if (!doc) {
      return {
        contents: [{
          uri: uri.href,
          mimeType: "text/plain",
          text: `Documentation file not found: ${path}\n\nAvailable categories: ${docStore.getCategories().join(', ')}`,
        }],
      };
    }
    return {
      contents: [{
        uri: uri.href,
        mimeType: "text/markdown",
        text: doc.content,
      }],
    };
  }
);

// ── Tools ──

// 1. TF-IDF search (existing)
server.tool(
  "search_csdk_docs",
  "Search Sisense Compose SDK documentation using TF-IDF search. Returns the most relevant documentation chunks for a given query. Use this for specific questions where you need targeted results.",
  {
    query: z.string().describe("The search query — e.g. 'how to create a bar chart with filters' or 'useExecuteQuery props'"),
    framework: z.enum(["react", "vue", "angular"]).optional().describe("Filter results to a specific framework. Omit to search all."),
    code_context: z.string().optional().describe("Optional code snippet to extract SDK identifiers from — improves relevance by detecting imports, components, hooks, and factories in use."),
    max_results: z.number().min(1).max(20).optional().default(8).describe("Number of results to return (default 8)."),
  },
  async ({ query, framework, code_context, max_results }) => {
    const results = engine.search(query, {
      framework,
      codeContext: code_context,
      maxResults: max_results,
    });

    if (results.length === 0) {
      return {
        content: [{ type: "text", text: "No matching documentation found for that query." }],
      };
    }

    const formatted = results.map((r, i) => {
      const warning = r.tags ? getWarnings(r.tags) : '';
      return `### Result ${i + 1} (score: ${r.score.toFixed(3)})\n**Source:** ${r.source} > ${r.heading}${warning}\n\n${r.text}`;
    }).join('\n\n---\n\n');

    return {
      content: [{
        type: "text",
        text: `## CSDK Documentation Search Results\n\nFound ${results.length} relevant chunks for: "${query}"${framework ? ` (${framework})` : ''}\n\n${formatted}`,
      }],
    };
  }
);

// 2. Browse docs by category (new — structured access)
server.tool(
  "browse_csdk_docs",
  "Browse CSDK documentation by category. Returns a list of available doc files in a category, or the full content of a specific file. Use this when you know which category or file you need, instead of searching.",
  {
    category: z.enum(["guides", "react", "vue", "angular", "data", "design"]).describe("Documentation category to browse."),
    file: z.string().optional().describe("Specific file to read, e.g. 'charts.md' or 'dashboards.md'. Omit to list all files in the category."),
  },
  async ({ category, file }) => {
    if (!file) {
      return {
        content: [{
          type: "text",
          text: docStore.buildCategoryIndex(category),
        }],
      };
    }

    const path = `${category}/${file}`;
    const doc = docStore.getFile(path);
    if (!doc) {
      const available = docStore.getFilesInCategory(category).map(f => f.name).join(', ');
      return {
        content: [{
          type: "text",
          text: `File not found: ${path}\n\nAvailable files in ${category}: ${available}`,
        }],
      };
    }

    const tags = extractTags(doc.content);
    const warning = getWarnings(tags);
    const tagNote = tags.length > 0
      ? `\n**Tags:** ${tags.join(', ')}${warning}\n`
      : '';

    return {
      content: [{
        type: "text",
        text: `## ${doc.path} (${doc.sizeKb} KB)${tagNote}\n\n${doc.content}`,
      }],
    };
  }
);

// 3. List topics (updated)
server.tool(
  "list_csdk_topics",
  "List all available documentation categories and files. Use this to understand the documentation structure before browsing or searching.",
  {},
  async () => ({
    content: [{
      type: "text",
      text: docStore.buildFullIndex() + `\n\n**Total indexed chunks for search:** ${engine.chunkCount}`,
    }],
  })
);

const transport = new StdioServerTransport();
await server.connect(transport);
