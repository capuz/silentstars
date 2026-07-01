---
repo: "hugr-lab/mssql-extension"
name: "mssql-extension"
description: "DuckDB extension for Microsoft SQL Server (TDS + TLS), with catalog integration and pushdown."
url: "https://github.com/hugr-lab/mssql-extension"
homepage: "https://hugr-lab.github.io"
language: "C++"
languages: ["C++"]
languagePcts: [89]
topics: ["duckdb", "duckdb-extension", "hugr", "mssql", "sql", "sqlserver"]
stars: 117
forks: 9
openIssues: 9
closedIssues: 44
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2026-01-14T17:58:49Z"
lastCommitAt: "2026-07-01T07:04:30Z"
lastReleaseAt: "2026-01-27T22:02:59Z"
status: "thriving"
tags: ["funded"]
healthScore: 96
undervaluedScore: 32
maintainers: ["oluies", "dependabot[bot]", "VGSML"]
openGraphImageUrl: "https://opengraph.githubassets.com/642399b0e5561d98d400be1dbb4eb33a57292a57464c1a2b8ed2b168619ffc9b/hugr-lab/mssql-extension"
fundingLinks: ["GITHUB:https://github.com/hugr-lab"]
discussionCount: 15
---

# DuckDB MSSQL Extension

A DuckDB extension for connecting to Microsoft SQL Server databases using native TDS protocol - no ODBC, JDBC, or external drivers required.

### 📈 Community Extension Downloads

📊 **[Interactive chart](https://hugr-lab.github.io/mssql-extension/)** — queried live in your browser with DuckDB-Wasm.

> Latest published version **v0.2.1** · **4,441** downloads in the trailing 7 days (snapshot 2026-06-09 UTC). Counts are a Cloudflare estimate of `INSTALL mssql FROM community` events, aggregated across DuckDB versions and platforms. Source: [DuckDB Community Extensions download metrics](https://duckdb.org/community_extensions/download_metrics).

> **Experimental**: This extension is under active development. APIs and behavior may change between releases. We welcome contributions, bug reports, and testing feedback!

## Features

- Native TDS protocol implementation (no external dependencies)
- Stream query results directly into DuckDB without buffering
- Full DuckDB catalog integration with three-part naming and lazy metadata loading
- Row identity (`rowid`) support for tables with primary keys
- Connection pooling with configurable limits and automatic…
