---
repo: "obsessiondb/chkit"
name: "chkit"
description: "ClickHouse schema and migration CLI for TypeScript projects"
readmeQualityOk: true
url: "https://github.com/obsessiondb/chkit"
homepage: "https://chkit.obsessiondb.com"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [54, 40]
topics: ["cli", "clickhouse", "clickhouse-migrations", "database", "migrations", "schema", "typescript"]
stars: 45
forks: 6
openIssues: 30
closedIssues: 124
watchers: 1
contributors: 10
recentReleases: 5
createdAt: "2026-02-09T16:06:39Z"
lastCommitAt: "2026-11-09T04:36:55Z"
lastReleaseAt: "2026-11-08T23:58:56Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 52
maintainers: ["KeKs0r", "alvarogar4", "Brian-1812"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f33335dda7e142dda07f18e26b2194a918dcf4517b9316926951c74c9c832fe/obsessiondb/chkit"
---

# chkit

**ClickHouse schema management in TypeScript.**

Define ClickHouse schemas in code, generate reviewable SQL migrations, and detect live schema drift from the terminal or CI. chkit manages tables, views, materialized views and dictionaries alongside your application.

**Define → generate → review → migrate → check.**

[Getting started](https://chkit.obsessiondb.com/getting-started/) · [Adopt an existing database](https://chkit.obsessiondb.com/getting-started/add-to-existing-project/) · [Zero-downtime structural migrations](https://chkit.obsessiondb.com/guides/data-preserving-migrations/) · [Documentation](https://chkit.obsessiondb.com)

## Quickstart

For a ready-made TypeScript project with two tables and an existing migration:

```sh
bun create chkit@latest my-app --example hello
# npm alternative:
npm create chkit@latest my-app -- --example hello
```

For an existing TypeScript project, install the CLI and schema DSL:

```sh
bun add -d chkit @chkit/core
# npm alternative (Node.js 22+):
npm install --save-dev chkit @chkit/core
```

Use matching versions of chkit and its plugins, and commit your package-manager lockfile. The examples below run from the project root; use…
