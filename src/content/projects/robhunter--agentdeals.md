---
repo: "robhunter/agentdeals"
name: "agentdeals"
description: "MCP server aggregating free tiers, startup credits & developer tool deals. 4 tools, 54 categories, 1,525+ offers."
readmeQualityOk: true
url: "https://github.com/robhunter/agentdeals"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["developer-tools", "free-tier", "mcp", "mcp-server", "model-context-protocol"]
stars: 18
forks: 3
openIssues: 152
closedIssues: 710
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-02-18T18:38:02Z"
lastCommitAt: "2026-09-19T02:47:29Z"
lastReleaseAt: "2026-04-05T10:08:20Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 48
maintainers: ["robhunterclaude", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4285b13495f969746e0f89f0c78de1128ab406e6b0331c914f416de2f4469817/robhunter/agentdeals"
---

# AgentDeals

An MCP server that aggregates free tiers, startup credits, and developer tool deals — so your AI agent (or you) can find the best infrastructure offers without leaving the workflow.

AgentDeals indexes real, verified pricing data from 1,500+ developer infrastructure vendors across 60 categories. Available on [npm](https://www.npmjs.com/package/agentdeals) for local use or as a hosted remote server. Connect any MCP-compatible client and search deals by keyword, category, or eligibility.

**Live:** [agentdeals.dev](https://agentdeals.dev)

**Free tiers for AI and LLM APIs:** [a dated, sourced list of 31 vendors](https://github.com/robhunter/agentdeals/blob/HEAD/artifacts/free-llm-api-index/README.md), regenerated from the catalogue whenever a record moves. Every row carries the date we last read that vendor's own page and the URL we read it on, and the rows whose terms changed carry the terms they replaced.

## Install

### Option A: Claude Code Plugin (one-click)

Install AgentDeals in Claude Code with a single command:

```bash
claude plugin install robhunter/agentdeals
```

This auto-configures the remote MCP server — no local setup needed. All 4 tools and 6 prompt…
