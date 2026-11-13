---
repo: "STARDUSTLC666/dsh-sql"
name: "dsh-sql"
description: "DSH database tool: SQLite / MySQL / PostgreSQL querying, schema and statistics, read-only protection and write-operation confirmation. Issues and PRs are welcome."
originalDescription: "DSH 数据库工具：SQLite / MySQL / PostgreSQL 查询、结构与统计、只读保护和写操作确认。欢迎提交 issues 和 PR。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/STARDUSTLC666/dsh-sql"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [63, 37]
topics: ["database", "deepseek-harness", "dsh-plugin", "sql", "sqlite"]
stars: 9
forks: 4
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-14T21:13:21Z"
lastCommitAt: "2026-11-13T18:35:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 50
maintainers: ["STARDUSTLC666"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3c33935da3638c1763a23b545a411dea21986421a5dd89f7b7511bf609860c6/STARDUSTLC666/dsh-sql"
---

**Simplified Chinese** · [English](https://github.com/STARDUSTLC666/dsh-sql/blob/HEAD/README.en.md)

# SQL

**Check the table structure first, then answer questions with queries.**

**[Installation and usage](#安装) · [Usage workflow](#开始使用) · [Full documentation](https://github.com/STARDUSTLC666/dsh-sql/blob/master/docs/REFERENCE.zh.md)**

## Features

- Connect to SQLite, MySQL, or PostgreSQL.
- View the structure and overview, with limits on returned rows and query time.
- Verify the target and SQL before writing, and check the result with a query after completion.

## Installation

Install `dsh-sql` from the "Plugins" panel in the DSH desktop app. If the command line is already configured, you can also use:

```bash
dsh plugin --profile desktop add dsh-sql
```

For the web version, change `desktop` to `web`; after installing, restart the corresponding DSH. The host requirement is defined by the package declaration `>=0.2.2-rc.3`.

## Getting started

1. Add your own SQLite, MySQL, or PostgreSQL connection in the plugin settings, and confirm the target database.
2. Have the assistant read the table structure first, then use read-only queries to check a small number of records.
3.…
