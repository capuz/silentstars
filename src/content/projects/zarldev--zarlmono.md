---
repo: "zarldev/zarlmono"
name: "zarlmono"
description: "mono repo"
url: "https://github.com/zarldev/zarlmono"
language: "Go"
languages: ["Go"]
languagePcts: [90]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-06-13T14:03:06Z"
lastCommitAt: "2026-06-24T23:37:06Z"
lastReleaseAt: "2026-06-24T23:39:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 48
maintainers: ["zarldev"]
openGraphImageUrl: "https://opengraph.githubassets.com/4eba9d97ca330fd2cf52e3ec333ed5304f0ba26e4a704393dfad43fde251c0be/zarldev/zarlmono"
---

# zarlmono

`zarlmono` is the home of **`zkit`** — a toolkit of small, independent Go
packages for building AI applications: an agent loop, a tool system,
guardrails, history compaction, an LLM provider layer, and the
infrastructure underneath. The tools in this repo (`zarlcode`, `zarlai`,
`swebench-eval`) are all built with it.

## Install

### zarlcode

```bash
# go install (recommended)
go install github.com/zarldev/zarlmono/zarlcode/cmd@v0.1.2

# or via homebrew
brew install zarldev/tap/zarlcode

# or build from source
go run ./zarlcode/cmd
```

`zarlcode upgrade` self-updates from GitHub Releases:

```bash
zarlcode upgrade source set zarldev/zarlmono
zarlcode upgrade
```

### zkit (library)

```bash
go get github.com/zarldev/zarlmono/zkit@v0.1.2
```

Docs: **[zarldev.github.io/zarlmono](https://zarldev.github.io/zarlmono)**

## Modules
`go.work` joins six Go modules:

| Path | Module | Purpose |
|---|---|---|
| `zkit/` | `github.com/zarldev/zarlmono/zkit` | **The toolkit.** Agent runner, LLM providers, tools, guardrails, compaction, MCP, plus the foundation packages (cache, filesystem, HTTP/RPC/logging, notifications, sync primitives). |
| `zarlcode/` |…
