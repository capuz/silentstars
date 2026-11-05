---
repo: "osauer/canary"
name: "canary"
description: "Canary is a local risk desk for your brokerage account: daily brief, portfolio and market evidence, read-only MCP tools, CLI, paired app and a Go client. Runs with Interactive Brokers today; the broker layer is its own package. Gated broker actions need the separate trading build."
readmeQualityOk: true
url: "https://github.com/osauer/canary"
homepage: "https://osauer.dev/canary/"
language: "Go"
languages: ["Go"]
languagePcts: [91]
topics: ["claude-code", "claude-desktop", "finance", "golang", "ibkr", "interactive-brokers", "mcp", "mcp-server", "options", "trading"]
stars: 10
forks: 3
openIssues: 2
closedIssues: 131
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-09T17:59:39Z"
lastCommitAt: "2026-11-05T08:03:02Z"
lastReleaseAt: "2026-05-13T19:41:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 57
maintainers: ["osauer"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1234071553/b5c61d36-7576-48b9-9feb-1d503c0f3416"
discussionCount: 1
---

# Canary

繁體中文：[網站及入門指南](https://osauer.dev/canary/zh-hant/) · 简体中文：[网站及入门指南](https://osauer.dev/canary/zh-hans/)

**A risk desk for your Interactive Brokers account. It reads your account for
you and your AI agent, checks it against your limits, and, in the trading build,
places the trades you authorise.**

Canary runs beside your IB Gateway or TWS and nothing runs on a server of mine.
It tells you what needs attention today. It runs twenty discipline checks
against limits you set and names the ones your positions breach. It shows
exposure by underlying. Canary Edge shows what the price did 1, 5 and 20
sessions after your past stock and ETF trades, from your broker statements,
where a decision repeated often enough to count. The same readings come as
text, as JSON, in a paired phone app, and as MCP tools for Claude Desktop,
Claude Code, Cursor or Zed.

It comes in two builds. The standard binary reads; it has no compiled order
path. The trading binary, a separate download, also executes orders, and only
the ones you authorised: a transaction you confirmed, or a close or reduction
the daemon runs under a bucket you listed in your written policy, a list that
ships empty. Every…
