---
repo: "ozgurcd/gograph"
name: "gograph"
description: "Local-only Go static analysis engine with a built-in MCP server. Gives AI coding agents deterministic structural awareness: call graphs, impact analysis, symbol search, and more."
url: "https://github.com/ozgurcd/gograph"
homepage: "https://github.com/ozgurcd/gograph"
language: "Go"
languages: ["Go", "HTML"]
languagePcts: [54, 44]
topics: ["ast", "cli", "code-navigation", "developer-tools", "go", "golang", "static-analysis", "agentic-coding", "ai-coding-assistant", "antigravity"]
stars: 188
forks: 12
openIssues: 0
closedIssues: 9
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-05-08T23:15:18Z"
lastCommitAt: "2026-06-23T23:16:39Z"
lastReleaseAt: "2026-05-09T16:34:08Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 35
maintainers: ["ozgurcd", "shvmgyl15", "Arvuno"]
openGraphImageUrl: "https://opengraph.githubassets.com/9192692a5fdd304a691aecc82857dc3b7041693bb2d8827ec244a434692e3813/ozgurcd/gograph"
discussionCount: 1
---

# gograph

**Stop burning tokens on `grep`. Give your AI agent a graph.**

`gograph` builds a local, AST-aware call graph of your Go repository and exposes **50+ query tools** via CLI and MCP so coding agents can navigate packages, symbols, call chains, routes, SQL, env vars, and tests — without reading raw files.

> **Zero network. Zero execution. Zero secrets read.** `gograph` is purely static analysis — it never runs your code, makes API calls, or opens non-`.go` files.

## Quick Start

```bash
# Install
brew install ozgurcd/tap/gograph

# Build the graph
gograph build . --precise

# Try it — who calls ValidateToken?
gograph callers "ValidateToken"

# Full context in ONE call (node + source + callers + callees + tests)
gograph context "ValidateToken"

# Change plan before editing (callers, tests, routes, SQL, env risk)
gograph plan "ValidateToken"
```

## Why gograph?

*Benchmarked on gograph's own codebase (70 files, 518 symbols, 16 packages):*
| Task | `grep -rn` | `gograph` | Savings |
|---|---|---|---|
| Find callers of `loadGraph` | 158 noisy lines (comments, docs, vars) | 56 exact structural call sites | ~65% noise eliminated |
| Locate symbol definitions | 842 lines…
