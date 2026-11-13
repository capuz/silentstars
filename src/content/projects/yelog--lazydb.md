---
repo: "yelog/lazydb"
name: "lazydb"
description: "A beautiful and convenient TUI database client with MCP support."
readmeQualityOk: true
url: "https://github.com/yelog/lazydb"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["coding-agent", "database", "db", "mcp", "mcp-server", "remote", "terminal", "tui"]
stars: 67
forks: 7
openIssues: 4
closedIssues: 10
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-27T09:54:19Z"
lastCommitAt: "2026-11-13T05:41:14Z"
lastReleaseAt: "2026-09-23T12:14:32Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 93
undervaluedScore: 38
maintainers: ["yelog", "gonzalobuassodev", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/658f18daeac0cd4164be9d8968369a97dc52ff1c2ad8a8174c97932803d6e4cd/yelog/lazydb"
---

# LazyDB

A keyboard-first database workspace for your terminal, built in Rust.

[Quickstart](#quickstart) · [Databases](#supported-databases) ·
[Documentation](https://github.com/yelog/lazydb/blob/HEAD/docs/README.md) · [Releases](https://github.com/yelog/lazydb/releases)

- **Explore databases** — browse schemas, table data, Redis/Valkey keys, and
  MongoDB documents.
- **Write SQL** — use Vim-style editing, catalog-aware completion, and multiple
  consoles with query results and transaction controls where supported.
- **Work in your tools** — integrate with Neovim, coding agents, MCP, and a JSON CLI.
- **Reach private databases** — attach managed SSH tunnels with system
  OpenSSH, agent/key/config authentication, strict host checks, and ProxyJump.

> LazyDB is in beta. Feature availability varies by database; see the
> [capability reference and current limitations](https://github.com/yelog/lazydb/blob/HEAD/docs/database-capabilities.md).

## Quickstart

**macOS / Linux**

```sh
curl -fsSL https://lazydb.yelog.org/install.sh | sh
```

**Windows (PowerShell, x86_64)**

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "irm…
