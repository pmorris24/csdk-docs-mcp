#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { readFileSync, readdirSync, statSync } from "fs";
import { join, resolve } from "path";
// ── TF-IDF Search Engine (ported from playground's rag-service.ts) ──
const STOP_WORDS = new Set([
    'the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had',
    'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'shall', 'can',
    'to', 'of', 'in', 'for', 'on', 'with', 'at', 'by', 'from', 'as', 'into', 'through', 'during',
    'before', 'after', 'above', 'below', 'between', 'out', 'off', 'over', 'under', 'again',
    'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'each',
    'every', 'both', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only',
    'own', 'same', 'so', 'than', 'too', 'very', 'and', 'but', 'or', 'if', 'this', 'that', 'these',
    'those', 'it', 'its', 'what', 'which', 'who', 'whom', 'any', 'just',
    'const', 'let', 'var', 'function', 'return', 'import', 'export', 'from', 'default',
    'true', 'false', 'null', 'undefined', 'new', 'class', 'extends', 'implements',
]);
const FRAMEWORK_SOURCES = {
    react: ['csdk_guides.md', 'csdk_full_compact.md', 'csdk_api_sdk_ui.md', 'csdk_api_sdk_data.md'],
    angular: ['csdk_guides.md', 'csdk_full_compact.md', 'csdk_api_sdk_ui_angular.md', 'csdk_api_sdk_data.md'],
    vue: ['csdk_guides.md', 'csdk_full_compact.md', 'csdk_api_sdk_ui_vue.md', 'csdk_api_sdk_data.md'],
};
class SearchEngine {
    chunks = [];
    invertedIndex = new Map();
    idf = new Map();
    load(docsDir) {
        // Load from chunks.json if available
        const chunksPath = join(docsDir, 'chunks.json');
        try {
            const raw = readFileSync(chunksPath, 'utf-8');
            this.chunks = JSON.parse(raw);
        }
        catch {
            // Fall back to reading all markdown files and chunking them
            this.chunks = this.loadFromMarkdown(docsDir);
        }
        this.buildIndex();
        process.stderr.write(`CSDK Docs MCP: indexed ${this.chunks.length} chunks, ${this.invertedIndex.size} terms\n`);
    }
    loadFromMarkdown(docsDir) {
        const chunks = [];
        const walkDir = (dir) => {
            for (const entry of readdirSync(dir)) {
                const full = join(dir, entry);
                if (statSync(full).isDirectory()) {
                    walkDir(full);
                }
                else if (entry.endsWith('.md') && entry !== 'INDEX.md' && entry !== 'README.md') {
                    const content = readFileSync(full, 'utf-8');
                    const source = full.replace(docsDir + '/', '');
                    // Split by h1 headings
                    const sections = content.split(/\n(?=# )/);
                    for (const section of sections) {
                        const headingMatch = section.match(/^# (.+)/);
                        const heading = headingMatch?.[1] ?? 'General';
                        // Chunk into ~2000 char pieces
                        const text = section.trim();
                        if (text.length <= 2500) {
                            if (text.length > 50)
                                chunks.push({ text, source, heading });
                        }
                        else {
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
    tokenize(text) {
        return text
            .toLowerCase()
            .replace(/[^a-z0-9]/g, ' ')
            .split(/\s+/)
            .filter(t => t.length > 2 && !STOP_WORDS.has(t));
    }
    extractCodeSignals(code) {
        const signals = [];
        const importMatches = code.matchAll(/import\s*\{([^}]+)\}\s*from\s*['"]@sisense\/[^'"]+['"]/g);
        for (const m of importMatches) {
            signals.push(...m[1].split(',').map(s => s.trim()).filter(Boolean));
        }
        const componentMatches = code.matchAll(/<(Chart|ColumnChart|BarChart|LineChart|AreaChart|PieChart|FunnelChart|ScatterChart|TreemapChart|SunburstChart|IndicatorChart|PolarChart|BoxplotChart|AreamapChart|ScattermapChart|AreaRangeChart|ChartWidget|Dashboard|DashboardById|WidgetById|Widget|SisenseContextProvider|ThemeProvider)/g);
        for (const m of componentMatches)
            signals.push(m[1]);
        const hookMatches = code.matchAll(/use(ExecuteQuery|ExecuteQueryByWidgetId|ExecutePivotQuery|GetDashboardModel|GetDashboardModels|GetWidgetModel|ComposedDashboard|GetFilterMembers|GetNlgInsights|GetDataSourceDimensions)/g);
        for (const m of hookMatches)
            signals.push('use' + m[1]);
        const factoryMatches = code.matchAll(/(measureFactory|filterFactory|analyticsFactory)\.([\w]+)/g);
        for (const m of factoryMatches)
            signals.push(m[1], m[2]);
        if (code.includes('dashboardModelTranslator'))
            signals.push('dashboardModelTranslator', 'toDashboardProps');
        if (code.includes('widgetModelTranslator'))
            signals.push('widgetModelTranslator', 'toChartWidgetProps');
        const typeMatches = code.matchAll(/([\w]*StyleOptions|[\w]*Config|DrilldownOptions|FilterRelations|WidgetsPanelColumnLayout|ChartDataOptions|MeasureColumn)/g);
        for (const m of typeMatches)
            signals.push(m[1]);
        if (code.includes('onBeforeRender'))
            signals.push('onBeforeRender', 'Highcharts', 'styling', 'chart design');
        if (code.includes('ThemeProvider'))
            signals.push('ThemeProvider', 'ThemeSettings', 'palette');
        if (code.includes('useComposedDashboard'))
            signals.push('useComposedDashboard', 'custom layout', 'composed');
        return [...new Set(signals)];
    }
    search(query, options = {}) {
        const { framework, codeContext = '', maxResults = 8 } = options;
        const codeSignals = codeContext ? this.extractCodeSignals(codeContext) : [];
        const combinedQuery = codeSignals.length > 0
            ? `${query} ${codeSignals.join(' ')}`
            : query;
        const queryTerms = this.tokenize(combinedQuery);
        if (queryTerms.length === 0)
            return [];
        const scores = new Float64Array(this.chunks.length);
        const allowed = framework ? new Set(FRAMEWORK_SOURCES[framework] ?? []) : null;
        for (const term of queryTerms) {
            const postings = this.invertedIndex.get(term);
            const termIdf = this.idf.get(term) ?? 0;
            if (!postings)
                continue;
            for (const [idx, tf] of postings) {
                if (allowed && !allowed.has(this.chunks[idx].source))
                    continue;
                scores[idx] += tf * termIdf;
            }
        }
        const results = [];
        for (let i = 0; i < scores.length; i++) {
            if (scores[i] > 0)
                results.push({ idx: i, score: scores[i] });
        }
        results.sort((a, b) => b.score - a.score);
        return results.slice(0, maxResults).map(r => ({
            ...this.chunks[r.idx],
            score: r.score,
        }));
    }
    buildIndex() {
        this.chunks.forEach((chunk, idx) => {
            const words = this.tokenize(chunk.text);
            if (words.length === 0)
                return;
            const tf = {};
            words.forEach(w => { tf[w] = (tf[w] || 0) + 1; });
            for (const [term, count] of Object.entries(tf)) {
                if (!this.invertedIndex.has(term))
                    this.invertedIndex.set(term, new Map());
                this.invertedIndex.get(term).set(idx, count / words.length);
            }
        });
        const N = this.chunks.length;
        for (const [term, postings] of this.invertedIndex) {
            this.idf.set(term, Math.log(N / (1 + postings.size)));
        }
    }
    get chunkCount() {
        return this.chunks.length;
    }
}
// ── Main ──
const engine = new SearchEngine();
// Find docs — look for chunks.json relative to this script, or use env var
const DOCS_DIR = process.env.CSDK_DOCS_DIR
    ?? resolve(new URL('.', import.meta.url).pathname, '..');
engine.load(DOCS_DIR);
const server = new McpServer({
    name: "csdk-docs",
    version: "1.0.0",
});
server.tool("search_csdk_docs", "Search Sisense Compose SDK documentation using TF-IDF semantic search. Returns the most relevant documentation chunks for a given query. Use this to find API references, code examples, guides, and usage patterns.", {
    query: z.string().describe("The search query — e.g. 'how to create a bar chart with filters' or 'useExecuteQuery props'"),
    framework: z.enum(["react", "vue", "angular"]).optional().describe("Filter results to a specific framework. Omit to search all."),
    code_context: z.string().optional().describe("Optional code snippet to extract SDK identifiers from — improves relevance by detecting imports, components, hooks, and factories in use."),
    max_results: z.number().min(1).max(20).optional().default(8).describe("Number of results to return (default 8)."),
}, async ({ query, framework, code_context, max_results }) => {
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
    const formatted = results.map((r, i) => `### Result ${i + 1} (score: ${r.score.toFixed(3)})\n**Source:** ${r.source} > ${r.heading}\n\n${r.text}`).join('\n\n---\n\n');
    return {
        content: [{
                type: "text",
                text: `## CSDK Documentation Search Results\n\nFound ${results.length} relevant chunks for: "${query}"${framework ? ` (${framework})` : ''}\n\n${formatted}`,
            }],
    };
});
server.tool("list_csdk_topics", "List available documentation topics and categories. Use this to understand what documentation is available before searching.", {}, async () => {
    const topics = `## Available CSDK Documentation Topics

### Framework API (React, Vue, Angular)
- **Charts** — AreaChart, BarChart, ColumnChart, LineChart, PieChart, FunnelChart, ScatterChart, TreemapChart, SunburstChart, IndicatorChart, PolarChart, BoxplotChart, AreamapChart, ScattermapChart, AreaRangeChart
- **Dashboards** — Dashboard, DashboardById, Widget, WidgetById, ChartWidget, PivotTableWidget, useComposedDashboard
- **Contexts** — SisenseContextProvider, ThemeProvider
- **Interfaces** — Chart props/styles, Dashboard props, Filter types, Theme settings, Data options, AI interfaces

### Data API (shared)
- **filterFactory** — members, greaterThan, lessThan, between, dateRange, contains, equals, etc.
- **measureFactory** — sum, count, average, min, max, median, countDistinct, etc.
- **analyticsFactory** — boxWhisker functions

### Guides
- Quickstart (React, Vue, Angular)
- Authentication & Security
- Embedded Dashboards
- Drilldown
- Chart Types
- External Charts
- Custom Widgets
- Theming & Styling
- Generative AI (NLG, NLQ, Chatbot)
- Data Model
- Internationalization
- Tutorials
- Troubleshooting
- Formula Functions
- Migration guides (0.x→1.0, 1.x→2.0)

### Design
- Chart design guidance
- UI/UX best practices

**Total indexed chunks:** ${engine.chunkCount}`;
    return { content: [{ type: "text", text: topics }] };
});
const transport = new StdioServerTransport();
await server.connect(transport);
