---
repo: "nao1215/sqlode"
name: "sqlode"
description: "Generate type-safe Gleam code from SQL schemas and queries. sqlc-style workflow with PostgreSQL, MySQL, and SQLite support."
readmeQualityOk: true
url: "https://github.com/nao1215/sqlode"
homepage: "https://hexdocs.pm/sqlode"
language: "Gleam"
languages: ["Gleam"]
languagePcts: [96]
topics: ["cli", "code-generation", "codegen", "database", "erlang", "gleam", "mysql", "postgresql", "sql", "sqlite"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 287
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-12T11:33:39Z"
lastCommitAt: "2026-11-19T05:07:09Z"
lastReleaseAt: "2026-04-26T02:15:09Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 60
maintainers: ["nao1215", "renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c665b56650ccd45fe3abd799fa5d7d1ee104cdf7d95d1027c76a7de0e214afd1/nao1215/sqlode"
fundingLinks: ["GITHUB:https://github.com/nao1215"]
---

# sqlode

sqlode reads SQL schema and query files and generates typed Gleam code. It follows the sqlc workflow: write SQL, run the generator, call the generated functions.

sqlode is inspired by [sqlc](https://sqlc.dev/) but is not a drop-in replacement. Macros use the `sqlode.*` prefix — `sqlc.*` is not accepted.

Supported engines (raw and native): PostgreSQL (`pog`), MySQL 8.0 (`shork`), SQLite (`sqlight`). The per-engine support matrix lives in [`doc/capabilities.md`](https://github.com/nao1215/sqlode/blob/HEAD/doc/capabilities.md).

First time here? [`doc/tutorials/getting-started-sqlite.md`](https://github.com/nao1215/sqlode/blob/HEAD/doc/tutorials/getting-started-sqlite.md) walks through a SQLite project end to end, and [`examples/sqlite-basic/`](https://github.com/nao1215/sqlode/blob/HEAD/examples/sqlite-basic/) is the runnable version of the same tutorial. The rest of this README is reference material.

## Quickstart (SQLite)

The shortest empty-project to typed Gleam path. No daemon, no Docker, no
escript install — just `gleam` and `sqlode` as a dependency.
