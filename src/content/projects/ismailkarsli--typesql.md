---
repo: "ismailkarsli/TypeSQL"
name: "TypeSQL"
description: "Write SQL, get TypeScript types. No codegen."
readmeQualityOk: true
url: "https://github.com/ismailkarsli/TypeSQL"
homepage: "https://typesql.karsli.net"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["postgresql", "sql", "typescript"]
stars: 16
forks: 0
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-14T01:40:59Z"
lastCommitAt: "2026-10-25T02:46:02Z"
lastReleaseAt: "2026-10-22T10:13:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 42
maintainers: ["ismailkarsli", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/32d9822d9cc944fde6b1e6930f664313c1bffcf90bb7be0f5ecd594146daa94f/ismailkarsli/TypeSQL"
---

# TypeSQL

Write Postgres SQL in TypeScript and get exact types for rows and parameters. TypeSQL parses your SQL inside the type checker: no codegen, no database connection, no build step.

## Why TypeSQL

- **Plain SQL.** You write the SQL Postgres runs, not a query builder's version of it.
- **No codegen.** Types update as you type. There is no generate step to rerun and no database to keep running for it.
- **Mistakes are compile errors.** A misspelled column, an unknown table or a wrong parameter type is caught in your editor, worded like the error Postgres would give.
- **Real Postgres rules.** A `LEFT JOIN` makes columns nullable, `WHERE x IS NOT NULL` makes them non-null, and `count(*)` is never null.
- **Editor support.** SQL inside `sql()` strings gets completions and syntax highlighting, like code in a `.sql` file.

## Install

```sh
npm install @typesql/core @typesql/pg pg              # node-postgres
npm install @typesql/core @typesql/postgres postgres  # or postgres.js
```

Requires TypeScript 7.1 or later and Node.js 26 or later.

## Quick start

Describe your tables with Postgres type names, then write queries:

```ts
import { createSql, type Col, type Generated,…
