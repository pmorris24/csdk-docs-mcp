# CSDK Docs MCP Server

An MCP server that provides both **structured browsing** and **TF-IDF search** over the Sisense Compose SDK documentation. Works with Claude Code, Claude Desktop, or any MCP client.

## What it does

### Tools

| Tool | Description |
|------|-------------|
| `search_csdk_docs` | TF-IDF search over 1,700+ doc chunks. Returns the most relevant documentation for any query. |
| `browse_csdk_docs` | Browse docs by category (`guides`, `react`, `vue`, `angular`, `data`, `design`). List files in a category or read a specific file. |
| `list_csdk_topics` | Lists all available categories, files, and their descriptions. |

### Resources

The server also exposes structured resources that MCP clients can browse directly:

| Resource | URI | Description |
|----------|-----|-------------|
| Full index | `csdk://index` | Complete documentation index across all categories |
| Category index | `csdk://{category}` | List files in a category (e.g., `csdk://react`, `csdk://guides`) |
| Doc file | `csdk://{category}/{file}` | Read a specific doc file (e.g., `csdk://react/charts.md`) |

### Two ways to access docs

1. **Search** (`search_csdk_docs`) — when you have a question and need the most relevant chunks. Uses TF-IDF scoring across 1,700+ pre-indexed chunks.
2. **Browse** (`browse_csdk_docs` or resources) — when you know which category or file you need. Returns the full structured document, organized by the monorepo's own folder structure.

The `search_csdk_docs` tool also supports:
- **Framework filter** — restrict results to React, Vue, or Angular docs
- **Code context** (optional) — pass a code snippet and it extracts SDK imports, components, hooks, and factories to boost relevant results

## Install

```bash
git clone https://github.com/pmorris24/csdk-docs-mcp.git
cd csdk-docs-mcp
npm install && npm run build
```

## Connect to Claude Code

The repo includes `.mcp.json` — just open Claude Code in the repo directory and the server connects automatically.

Or add to any project's `.mcp.json`:

```json
{
  "mcpServers": {
    "csdk-docs": {
      "command": "node",
      "args": ["/absolute/path/to/csdk-docs-mcp/dist/index.js"]
    }
  }
}
```

## Connect to Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "csdk-docs": {
      "command": "node",
      "args": ["/absolute/path/to/csdk-docs-mcp/dist/index.js"]
    }
  }
}
```

## Usage

Once connected, Claude will automatically use the tools when it needs SDK information. Just ask naturally:

```
"How do I query data with useExecuteQuery and display it in a ColumnChart?"
"What are the props for ChartWidget?"
"How do I embed a Fusion dashboard using DashboardById?"
"How do I customize chart colors with styleOptions?"
"How do I use onBeforeRender to modify Highcharts options directly?"
"How do I build a custom dashboard layout with useComposedDashboard?"
```

## Complements the Sisense MCP Server

This works alongside the official [sisense-mcp-server](https://github.com/sisense/sisense-mcp-server):

| Server | What it does |
|--------|-------------|
| **Sisense MCP** | Queries your Sisense instance — get data sources, fields, build charts |
| **This server** | Searches SDK documentation — how to write the code to use that data |

Use both together: Sisense MCP tells Claude what data you have, this server tells Claude how to build the UI with the Compose SDK.

## Updating docs

Docs are pulled directly from the official [Sisense Compose SDK monorepo](https://github.com/sisense/compose-sdk-monorepo) (`docs-md/sdk/`). When Sisense releases a new SDK version:

```bash
./scripts/update-docs.sh
npm run build
```

To pull from a specific branch:

```bash
./scripts/update-docs.sh --branch dev
```

## Supported frameworks

- React
- Vue
- Angular
