---
repo: "n24q02m/wet"
name: "wet"
description: "Open-source MCP server for AI agents: web search, content extraction, and library docs -- 5-strategy scraping, runs without API keys."
readmeQualityOk: true
url: "https://github.com/n24q02m/wet"
homepage: "https://mcp.n24q02m.com/servers/wet-mcp/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["crawl4ai", "mcp", "mcp-server", "model-context-protocol", "open-source", "python", "searxng", "docker", "web-scraping", "web-search"]
stars: 17
forks: 4
openIssues: 3
closedIssues: 144
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-03T04:20:30Z"
lastCommitAt: "2026-09-13T08:30:21Z"
lastReleaseAt: "2026-02-04T04:43:25Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 56
maintainers: ["n24q02m", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/10bd386bb9bd8667174230c97e5576b46181b9af88481e88dac0b370acd27948/n24q02m/wet"
fundingLinks: ["GITHUB:https://github.com/n24q02m"]
discussionCount: 3
---

# WET - Web Extended Toolkit MCP Server

mcp-name: io.github.n24q02m/wet-mcp

> **Renamed (2026-09-13):** package/repo is now `wet` (CLI-first). Install: `pip install wet`. The MCP server remains available: run `wet` with no subcommand (bare = MCP passthrough); legacy package name `wet-mcp` still installs the old CLI.

**Open-source MCP server for AI agents: web search, content extraction, and library docs.**

| Phase | Status | Scope |
|---|---|---|
| Phase 1 | Shipped | web-core ScrapingAgent migration, smart chunks output, search polish, media slim |
| Phase 2 | Shipped | Context7-level docs search: library index (Tier 1 + Tier 2), version-aware queries with token cap, project lock (Cabinets) |
| Phase 3 | **Shipped** | `extract.agent` multi-step research with cited synthesis, `extract.interact` click/fill/submit via patchright (optional session persistence), `docs_004_chunk_summaries` migration, **`media.analyze` removed (v2.0.0)** |

> **Current release: v3.x.** `media(action="analyze")` was removed in the
> v2.0.0 BREAKING release. Use
> [`imagine-mcp`](https://github.com/n24q02m/imagine-mcp)'s
> `understand` action for vision/audio/video analysis. See
>…
