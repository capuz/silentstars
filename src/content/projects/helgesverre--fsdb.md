---
repo: "HelgeSverre/fsdb"
name: "fsdb"
description: "A MySQL-compatible database server in idiomatic F# — wire protocol, FParsec SQL grammar, DU-based relational algebra, SQLite-style function registration"
readmeQualityOk: true
url: "https://github.com/HelgeSverre/fsdb"
language: "F#"
languages: ["F#"]
languagePcts: [99]
topics: ["database", "dotnet", "fsharp", "mysql", "sql", "wire-protocol"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 21
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-14T21:18:24Z"
lastCommitAt: "2026-08-29T10:14:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 55
maintainers: ["HelgeSverre"]
openGraphImageUrl: "https://opengraph.githubassets.com/554a9af69cfd4d7d7c97b18ef846d2da1cb733aa5f29de77f87435a8b38e0ac7/HelgeSverre/fsdb"
---

# fsdb

A MySQL-compatible database server in idiomatic F#, speaking the MySQL wire
protocol so clients like `mysql`, PDO, and MySqlConnector work without a
custom adapter. An in-memory engine built as a pipeline: bytes → command →
AST → logical plan → lazy `seq`.

## Contents

- [Quick start](#quick-start)
- [How it works](#how-it-works)
- [SQL surface](#sql-surface)
- [Persistence format](#persistence-format)
- [Embedding & extensibility](#embedding--extensibility)
- [Benchmarking](#benchmarking)
- [Development](#development)
- [Documentation](#documentation)

## Quick start

Requires the .NET 10 SDK pinned by `global.json`. A MySQL client is needed for
the CLI walkthrough below; [`just`](https://github.com/casey/just) is optional
but provides the repository's standard commands.

```sh
dotnet run --project src/Fsdb        # listens on 127.0.0.1:3307
mysql --protocol=tcp -h127.0.0.1 -P3307 -uroot -e 'SELECT 1'
```

With `just`, the same two-terminal workflow is `just run` and `just client`.

Port 3307 avoids a real MySQL on 3306 (`--port` overrides). A `root` account
with all privileges and no password exists out of the box; accounts, `GRANT`s,
and passwords are managed with the…
