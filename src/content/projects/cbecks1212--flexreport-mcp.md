---
repo: "cbecks1212/flexreport-mcp"
name: "flexreport-mcp"
description: "MCP server for real-time equity research: real-time market events, 13F ownership, earnings transcripts, fundamentals, estimates & insider filings on 2,900+ companies for Claude and other AI agents."
readmeQualityOk: true
url: "https://github.com/cbecks1212/flexreport-mcp"
homepage: "https://app.flexreportfinapi.com/mcp"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agentic-ai", "agentic-research", "equity-research", "stock-analysis", "stock-market", "mcp", "mcp-server"]
stars: 20
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-29T18:10:26Z"
lastCommitAt: "2026-10-13T10:57:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 41
maintainers: ["cbecks1212"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef468e4a5a774f93efec9e3e896073a7c1089a9b0303fea0e670624fbc04b942/cbecks1212/flexreport-mcp"
---

# flexreport-mcp

A standalone **MCP microservice** that exposes the [FlexReport](https://app.flexreportfinapi.com/api-docs)
equity backend's **live events**, **research-report artifacts**, and **database of
750M+ datapoints** as on-demand tools for Claude (and any MCP client).

It supercharges AI agents with real-time market events and curated, golden-source
data spanning fundamentals, transcripts, filings, insider trades (Forms 3, 4, and 5),
ratios, macro data, IR decks pulled straight from each company's investor relations
site, and more.

## Quick Install

Add the connector to Claude Code

```bash
claude mcp add --transport http flexreport https://mcp.flexreportfinapi.com/mcp
```

Or add to Codex

```bash
codex mcp add flexreport --url https://mcp.flexreportfinapi.com/mcp
```

Then start Claude and just ask (e.g. *"pull the biggest movers from flexreport"*).
On the first data call your MCP client runs an OAuth sign-in in your browser —
sign in or register when prompted; you never paste a token. Add `--scope user` to
make it available in every directory. See [Auth](#auth) for details.

## Demo

**Stream real-time events in the terminal.** Ask Claude to watch the market and…
