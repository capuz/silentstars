---
repo: "certinia/debug-log-analyzer-mcp"
name: "debug-log-analyzer-mcp"
description: "Apex Log MCP Server - AI-powered Salesforce Apex debug log analysis. Find performance bottlenecks, slow methods, SOQL bottlenecks, and governor limit issues."
readmeQualityOk: true
url: "https://github.com/certinia/debug-log-analyzer-mcp"
homepage: "https://www.npmjs.com/package/@certinia/apex-log-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["apex", "debug-logs", "developer-tools", "log-analysis", "mcp", "mcp-server", "nodejs", "performance-analysis", "salesforce", "salesforce-cli"]
stars: 36
forks: 6
openIssues: 3
closedIssues: 79
watchers: 0
contributors: 6
recentReleases: 4
createdAt: "2025-09-17T10:41:51Z"
lastCommitAt: "2026-10-28T09:57:49Z"
lastReleaseAt: "2026-10-23T16:38:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 68
maintainers: ["lukecotter", "dependabot[bot]", "lcottercertinia"]
openGraphImageUrl: "https://opengraph.githubassets.com/17e66e2c29c87e6f2f51c8b6fb5748ec5e923dde28ecdabc0461f3432d222e23/certinia/debug-log-analyzer-mcp"
discussionCount: 1
---

# Apex Log MCP Server

**MCP Server to Analyze Salesforce Apex debug logs from your AI assistant. Finds slow methods, governor limit risks, and where a transaction spent its time. In your org, runs anonymous Apex, fetches logs, and sets trace flags.**

Instead of scrolling thousands of log lines, ask what's slow and why. Uses the same [Apex log parser](https://github.com/apex-dev-tools/apex-log-parser) as the [Apex Log Analyzer VS Code extension](https://github.com/certinia/debug-log-analyzer).

## Quick Start

Requires [Node.js](https://nodejs.org/) 22 or later. Add this to your MCP client config (`claude_desktop_config.json`, VS Code `mcp.json`, and so on):

```json
{
  "mcpServers": {
    "apex-log-mcp": {
      "command": "npx",
      "args": ["-y", "@certinia/apex-log-mcp"]
    }
  }
}
```

In VS Code `mcp.json`, use `"servers"` in place of `"mcpServers"`.

Then ask your assistant to analyze a log. The org tools - `apexlog_execute_anonymous`, `apexlog_list_org_logs`, `apexlog_get_org_logs` and `apexlog_create_trace_flag` - also need an org authenticated with the [Salesforce CLI](https://developer.salesforce.com/tools/salesforcecli).

## Example Prompts

- "Give me a summary…
