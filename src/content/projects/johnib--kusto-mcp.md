---
repo: "johnib/kusto-mcp"
name: "kusto-mcp"
description: "MCP server for Azure Data Explorer (Kusto), enabling AI agents to explore, query, and understand telemetry using KQL."
readmeQualityOk: true
url: "https://github.com/johnib/kusto-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai-agent", "azure", "azure-data-explorer", "claude", "cline", "kusto", "mcp-server"]
stars: 7
forks: 6
openIssues: 18
closedIssues: 26
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-04-01T11:51:16Z"
lastCommitAt: "2026-10-11T10:14:22Z"
lastReleaseAt: "2025-10-31T07:31:11Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 83
maintainers: ["dependabot[bot]", "johnib", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/086c65cd3690e2dd324322b651bde79e52aa797f22797de840726feaa39bbf6c/johnib/kusto-mcp"
---

# 🔍 Kusto MCP Server

**Turn your AI assistant into a data analyst in 2 minutes.**

Connect Cline, Cursor, Claude Desktop, or any AI tool to Azure Data Explorer. Ask questions in plain English, get insights from your data instantly - no KQL knowledge required.

## What You Can Do

- **"Show me error logs from the last hour"** → Get instant insights from telemetry data
- **"Which customers generated the most revenue this month?"** → Analyze business metrics effortlessly
- **"Find all failed authentication attempts"** → Investigate security incidents with AI help
- **"Summarize system performance trends"** → Get automated analysis of monitoring data

No more writing complex KQL queries. Just ask your AI assistant natural questions about your data.

## Quick Setup

### For Claude Code Users

Run this terminal command to install:

```bash
claude mcp add kusto-mcp -- npx -y kusto-mcp@latest
```

### For GitHub Copilot CLI Users

Run this terminal command to install:

```bash
copilot mcp add kusto-mcp -- npx -y kusto-mcp@latest
```

Or add this to `~/.copilot/mcp-config.json`:

```json
{
  "mcpServers": {
    "kusto-mcp": {
      "type": "local",
      "command": "npx",
      "args":…
