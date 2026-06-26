---
repo: "KyuRish/mcp-dashboards"
name: "mcp-dashboards"
description: "Turn your data into interactive dashboards inside any AI client - MCP Apps powered"
url: "https://github.com/KyuRish/mcp-dashboards"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["ai", "chartjs", "charts", "claude", "dashboard", "data-visualization", "export", "interactive", "mcp", "mcp-apps"]
stars: 33
forks: 6
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-02-23T19:19:27Z"
lastCommitAt: "2026-06-26T23:40:25Z"
lastReleaseAt: "2026-03-13T12:50:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 13
maintainers: ["KyuRish"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ce27bfedafcb871063226eb4896f7eeda66900862dff249af0f2efe3f879c60/KyuRish/mcp-dashboards"
---

# MCP Dashboards

### Your AI can talk about data. Now it can show it.

  <br>
  <br><sub>Click any thumbnail to see full size</sub>
</p>

## The problem

We use AI for everything - analysis, reports, strategy. But when it comes to actually *seeing* the story in your data, you're stuck copying numbers into a spreadsheet and building charts yourself. The conversation has the insight. The visualization is somewhere else.

## The solution

MCP Dashboards renders interactive charts, dashboards, and KPI widgets directly inside your AI conversation. 31 chart tools covering 44+ chart subtypes (bar has stacked/drilldown, hero has 11 variants, etc.), 21 themes, 4 visual discovery catalogs, live polling, PNG/PPT/A4 export - all from a single MCP server. No browser tabs, no copy-paste, no context switching.

## Quick Start

### Claude Desktop

Add to your `claude_desktop_config.json`:

- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "dashboard": {
      "command": "npx",
      "args": ["-y", "mcp-dashboards", "--stdio"]
    }
  }
}
```

### Claude Code / VS Code…
