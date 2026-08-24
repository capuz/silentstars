---
repo: "nao1215/filesql"
name: "filesql"
description: "loads CSV, TSV, LTSV, JSON, JSONL, Parquet, XLSX, ACH, and Fedwire files into SQLite; includes prep and frame for cleanup and in-memory transforms"
readmeQualityOk: true
url: "https://github.com/nao1215/filesql"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["csv", "go", "golang", "ltsv", "sql", "tsv", "parquet", "excel", "sqlite3", "ach"]
stars: 377
forks: 10
openIssues: 0
closedIssues: 123
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-08-23T13:53:01Z"
lastCommitAt: "2026-08-24T04:22:44Z"
lastReleaseAt: "2025-11-27T08:09:00Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 100
undervaluedScore: 35
maintainers: ["nao1215", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1043269436/5a595494-6608-41df-9898-bf8b9e67e24d"
fundingLinks: ["GITHUB:https://github.com/nao1215"]
---

# filesql

filesql loads files into an in-memory SQLite database. Open CSV, TSV, LTSV, JSON, JSONL, Parquet, XLSX, ACH, or Fedwire inputs, then query them with normal SQLite syntax.

The same module also includes two companion packages for work that usually happens before or after SQL:

- [`prep`](https://pkg.go.dev/github.com/nao1215/filesql/prep) cleans and validates rows before they become tables.
- [`frame`](https://pkg.go.dev/github.com/nao1215/filesql/frame) handles small in-memory transforms in plain Go.

[sqly](https://github.com/nao1215/sqly) is the shell built on the same core.

## Why filesql?

filesql is for cases where the data is already in a file and the fastest useful tool is SQL.

- Open files as tables without setting up a server.
- Join across CSV, TSV, LTSV, JSON, JSONL, Parquet, XLSX, ACH, and Fedwire.
- Keep edits in memory until you decide to save them.
- Clean inputs with `prep` before loading them.
- Reshape small datasets with `frame` when SQL is not the right fit.

## Features

- Query file data with standard SQLite syntax, including joins, CTEs, and `json_extract()`.
- Optionally query with MySQL, PostgreSQL, or GoogleSQL syntax via `WithDialect`…
