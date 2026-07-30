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
stars: 374
forks: 10
openIssues: 2
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-08-23T13:53:01Z"
lastCommitAt: "2026-07-30T06:07:15Z"
lastReleaseAt: "2025-11-27T08:09:00Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 92
undervaluedScore: 31
maintainers: ["nao1215", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1043269436/5a595494-6608-41df-9898-bf8b9e67e24d?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260730%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260730T061110Z&X-Amz-Expires=300&X-Amz-Signature=0ef98977f60056d721b7fc3652b19be4ee9be29f1c753ee7b50e372145d6b3d3&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTM5MjE3MCwibmJmIjoxNzg1MzkxODcwLCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.UUbd2vrWEZrGlVbHZA8q-T8MroPAjV_6sF5YcDks5yE"
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
