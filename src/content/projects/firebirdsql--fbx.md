---
repo: "FirebirdSQL/fbx"
name: "fbx"
description: "Firebird Driver for Go"
readmeQualityOk: true
url: "https://github.com/FirebirdSQL/fbx"
homepage: "https://pkg.go.dev/github.com/firebirdsql/fbx"
language: "Go"
languages: ["Go", "C++"]
languagePcts: [40, 35]
topics: ["firebird", "golang"]
stars: 6
forks: 6
openIssues: 31
closedIssues: 3
watchers: 1
contributors: 19
recentReleases: 1
createdAt: "2026-10-20T17:42:34Z"
lastCommitAt: "2026-11-25T12:23:17Z"
lastReleaseAt: "2026-10-26T09:14:32Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 75
undervaluedScore: 61
maintainers: ["P1cheneG", "smirnoffjr", "MrTeeett"]
openGraphImageUrl: "https://opengraph.githubassets.com/8182762d0421548548842fda49b32ea8d20f1758e97fe39c4654807901bfa39a/FirebirdSQL/fbx"
---

# fbx - Firebird Driver for Go

fbx is a pure Go driver for Firebird.

The driver is designed as a richer native Go client than a minimal
`database/sql` adapter: it exposes a high-level `fbx.Conn` API, connection
pooling for production workloads, a `database/sql` compatibility layer, typed
Firebird values, tracing hooks, and modern Firebird features.

## Supported Features

- Pure Go implementation of the Firebird wire protocol
- Native `fbx.Conn` API with `context.Context` support for connect, query, transaction, BLOB, and low-level operations
- `database/sql` compatibility layer registered as the `fbx` driver
- Concurrency-safe `fbxpool` connection pool for application workloads, with lifecycle hooks, health checks, configurable ping behavior, acquire tracing, release tracing, and pool statistics
- URL and keyword/value connection strings, environment variable support, and multi-host fallback configuration
- Database creation and deletion through `CreateDatabase`, `DropDatabase`, and related config helpers
- Services manager API for server-side logical and physical backup/restore (nbackup), database statistics, gfix maintenance, and trace session management through…
