---
repo: "pgenie-io/pgenie"
name: "pgenie"
description: "SQL-first, type-safe PostgreSQL client code generator"
readmeQualityOk: true
url: "https://github.com/pgenie-io/pgenie"
homepage: "https://pgenie.io"
language: "Haskell"
languages: ["Haskell"]
languagePcts: [100]
topics: ["cli", "compiler", "db-first", "sql", "sql-first"]
stars: 154
forks: 2
openIssues: 2
closedIssues: 11
watchers: 1
contributors: 2
recentReleases: 6
createdAt: "2026-02-12T21:04:04Z"
lastCommitAt: "2026-07-11T05:57:43Z"
lastReleaseAt: "2026-05-21T22:38:55Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 94
undervaluedScore: 35
maintainers: ["nikita-volkov", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1775abdd0adf1d0ad200c071f0b19724ecd8033adfee1fb2c565ae0fcb9b8252/pgenie-io/pgenie"
discussionCount: 4
---

# pGenie

pGenie turns PostgreSQL migrations and parameterized queries into fully typed client code.

You write plain SQL. pGenie validates it against a real PostgreSQL instance and generates idiomatic, type-safe client libraries for your application.

This repository contains the source code for the `pgn` CLI tool.

📚 **Full documentation:** [pgenie.io/docs](https://pgenie.io/docs/)

## Quick Start

New to pGenie? The **[Learn pGenie in Y minutes](https://pgenie.io/docs/tutorials/learn-pgenie-in-y-minutes/)** tutorial gets you up and running fast.

Want to explore a working project right away? Check out the **[demo repository](https://github.com/pgenie-io/demo)** — a ready-to-run project you can clone and experiment with immediately.

## Installation

### From a Binary Distribution

Pre-built binaries are available for common platforms. See the **[Installation Guide](https://pgenie.io/docs/guides/installation/)** for instructions.

### Building from Source

#### Prerequisites

- **Docker** *(optional)* — Required only when `--database-url` is **not** provided. pGenie can spin up a temporary PostgreSQL container automatically, but you can skip Docker entirely by pointing it at a…
