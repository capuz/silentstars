---
repo: "scavio-ai/scavio-mcp"
name: "scavio-mcp"
description: "Production ready MCP server with real-time search & extract in Google, Amazon, YouTube, Walmart, Reddit, TikTok and Instagram"
readmeQualityOk: true
url: "https://github.com/scavio-ai/scavio-mcp"
homepage: "https://scavio.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["ai", "amazon", "claude", "cursor", "google-search", "mcp", "mcp-server", "model-context-protocol", "search-api", "tiktok"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-04T18:52:04Z"
lastCommitAt: "2026-11-23T10:20:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 64
maintainers: ["phanarch", "scavio-ai"]
openGraphImageUrl: "https://opengraph.githubassets.com/4820ba5ac88817cfc628ab58cca3285488f4b68fe39e4a07381cd428db3cf4d7/scavio-ai/scavio-mcp"
---

# Scavio MCP Server

[Scavio](https://scavio.dev?utm_source=npm-mcp&utm_medium=package&utm_campaign=readme) is a unified [Web Search API](https://scavio.dev/docs/search-api?utm_source=npm-mcp&utm_medium=package&utm_campaign=readme) and MCP server that gives AI agents web search, page extraction, and structured data from e-commerce, social, travel, jobs, real-estate, app-store, ad-library and company-filing sources. 754 tools across 97 platforms plus Extract, Company Enrich, map, crawl and batch, one API key.

**The 22 platforms added in 0.13.0 are opt-in.** Registering all 754 tools puts ~1437KB of tool definitions — roughly 90k tokens — into every session before you type anything. So the default is the platform set 0.12.x already had, plus Extract and Company Enrich: 143 tools, 114KB. Upgrading never removes a tool you were using. Everything else is one env var away: see [Choosing which tools load](#choosing-which-tools-load).

## Remote MCP Server

Connect directly to Scavio's remote MCP server without any local installation:

```
https://mcp.scavio.dev/mcp
```

Two ways to authenticate:
