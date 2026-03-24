# CSDK Docs MCP Server

An MCP server that provides TF-IDF search over the Sisense Compose SDK documentation. Works with Claude Code, Claude Desktop, or any MCP client.

## What it does

Exposes two tools to Claude:

| Tool | Description |
|------|-------------|
| `search_csdk_docs` | TF-IDF search over 2,000+ doc chunks. Returns the most relevant documentation for any query. |
| `list_csdk_topics` | Lists all available topics and categories. |

The `search_csdk_docs` tool supports:
- **Query** — natural language question or keyword search
- **Framework filter** — restrict results to React, Vue, or Angular docs
- **Code context** (optional) — if you tell Claude to include your current code with the search, it extracts SDK imports, components, hooks, and factories to boost relevant results. Try: "search the CSDK docs based on my current file"

## Install

```bash
git clone https://github.com/pmorris24/csdk-docs-mcp.git
cd csdk-docs-mcp
npm install && npm run build
```

## Connect to Claude Code

Add to your project's `.mcp.json`:

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

Once connected, Claude will automatically use `search_csdk_docs` when it needs SDK information. Just ask naturally:

```
"How do I query data with useExecuteQuery and display it in a ColumnChart?"
"What are the props for ChartWidget?"
"How do I use filterFactory.members to filter by specific values?"
"How do I embed a Fusion dashboard using DashboardById?"
"How do I decompose a dashboard with useGetDashboardModel and dashboardModelTranslator?"
"How do I add drilldown to a chart?"
"How do I customize chart colors with styleOptions?"
"How do I use onBeforeRender to modify Highcharts options directly?"
"How do I build a custom dashboard layout with useComposedDashboard?"
"How do I set up the Chatbot component for natural language queries?"
"What's the difference between Dashboard and DashboardById?"
"How do I use filterFactory.dateRange to filter the last 30 days?"
"How do I add a PivotTable with custom dataOptions?"
"How do I use widgetModelTranslator to customize a Fusion widget?"
"How do I generate a data model from my Sisense instance?"
"How do I troubleshoot CORS issues?"
"What formula functions are available for calculated measures?"
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

