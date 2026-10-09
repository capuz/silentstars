---
repo: "HelgeSverre/fsdb"
name: "fsdb"
description: "A MySQL-compatible database server in idiomatic F# — wire protocol, FParsec SQL grammar, DU-based relational algebra, SQLite-style function registration"
readmeQualityOk: true
url: "https://github.com/HelgeSverre/fsdb"
language: "F#"
languages: ["F#"]
languagePcts: [94]
topics: ["database", "dotnet", "fsharp", "mysql", "sql", "wire-protocol"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 21
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-14T21:18:24Z"
lastCommitAt: "2026-10-09T08:30:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 55
maintainers: ["HelgeSverre"]
openGraphImageUrl: "https://opengraph.githubassets.com/df3bbf46f8875c06c3a54286150a97bb5a63cda128123d7c700b4d348428d1bf/HelgeSverre/fsdb"
---

# fsdb

A MySQL-compatible database server in idiomatic F#. It speaks the MySQL wire
protocol, so clients such as `mysql`, PDO, and MySqlConnector connect without
an fsdb-specific adapter. Internally, a query follows one readable pipeline:
bytes → command → AST → logical plan → lazy `seq`.

MySQL 8.4 is the compatibility oracle; SQLite is not. Readable F# is the
primary design constraint, ahead of raw performance. The default server is
in-memory, with an opt-in binary WAL and snapshots for durable use. The
[compatibility guide](https://github.com/HelgeSverre/fsdb/blob/HEAD/docs/compatibility.md) explains how behavior is
validated; [GAPS.md](https://github.com/HelgeSverre/fsdb/blob/HEAD/GAPS.md) is the live ledger of known differences.

## Contents

- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Security and deployment](#security-and-deployment)
- [How it works](#how-it-works)
  - [Parser](#parser)
  - [Engine](#engine)
  - [Collations and charsets](#collations--charsets)
  - [Prepared statements](#prepared-statements)
- [SQL surface](#sql-surface)
- [Persistence format](#persistence-format)
  - [Write-ahead log](#write-ahead-log)
  - [Snapshots](#snapshots)
-…
