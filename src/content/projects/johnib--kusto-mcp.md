---
repo: "johnib/kusto-mcp"
name: "kusto-mcp"
description: "MCP server for Azure Data Explorer (Kusto), enabling AI agents to explore, query, and understand telemetry using KQL."
readmeQualityOk: true
url: "https://github.com/johnib/kusto-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["ai-agent", "azure", "azure-data-explorer", "claude", "cline", "kusto", "mcp-server"]
stars: 7
forks: 5
openIssues: 2
closedIssues: 14
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-04-01T11:51:16Z"
lastCommitAt: "2026-08-07T05:16:41Z"
lastReleaseAt: "2025-10-31T07:31:11Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 85
maintainers: ["dependabot[bot]", "johnib", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7b30a0bf61e7f012a99412efbf8e799860fea96e9279a4d75c5d37ffe86f66b/johnib/kusto-mcp"
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

### For Cline Users

Add this to your `cline_mcp_settings.json` file:

```json
{
  "mcpServers": {
    "github.com/johnib/kusto-mcp": {
      "command": "npx",
      "args": ["-y", "kusto-mcp@latest"],
      "env": {},
      "disabled": false,
      "autoApprove": […
