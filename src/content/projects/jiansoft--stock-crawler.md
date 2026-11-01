---
repo: "jiansoft/stock_crawler"
name: "stock_crawler"
description: "Taiwan stock crawler"
originalDescription: "Taiwan stock crawler"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/jiansoft/stock_crawler"
homepage: "https://jiansoft.mooo.com/stock/revenues"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["rust", "rust-lang", "rustlang", "crawler"]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-09-22T03:32:11Z"
lastCommitAt: "2026-11-01T22:59:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 66
maintainers: ["jiansoft", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/135c57f7835c5557d3d3d36e4d87105ea0d02dbafd3c462e0f42b18077c10954/jiansoft/stock_crawler"
---

### Taiwan stock crawler

Taiwan stock market data collection, scheduled updates, derived indicator calculation, Telegram notifications, manual backfill, a read-only Data API, and gRPC/HTTP management interface services.

UI Demo: https://jiansoft.mooo.com/stock/revenues
API: https://github.com/jiansoft/stock_api

## Related Projects

+ [stock_go](https://github.com/jiansoft/stock_go): Web frontend (Next.js) and Go API that read directly from the PostgreSQL database written by this service; manual backfill is forwarded to this service via gRPC.
+ stock-mcp-go: MCP server that provides AI assistant query tools through this service's Data API (`/api/v1/*`).

## Project Features and Purpose

+ Collects data on a schedule: Taiwan stock master data, revenue, financial statements (including the income statement, balance sheet, and cash flow statement, the three major statements), dividends, capital reductions, the three major institutional investors, margin trading and short selling, major trader flows, TDCC shareholding distribution, director and supervisor shareholdings and pledges, ETFs, daily closing quotes, indices, and foreign shareholding data.
+ Calculates estimated prices…
