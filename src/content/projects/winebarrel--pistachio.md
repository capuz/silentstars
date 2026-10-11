---
repo: "winebarrel/pistachio"
name: "pistachio"
description: "pistachio is a declarative schema management tool for PostgreSQL with a Terraform-like plan/apply workflow."
readmeQualityOk: true
url: "https://github.com/winebarrel/pistachio"
homepage: "https://winebarrel.github.io/pistachio/"
language: "Go"
languages: ["Go"]
languagePcts: [91]
topics: ["db-migration", "postgresql", "golang", "schema-migrations", "postgres", "declarative-migrations", "database-migration", "database-migrations", "schema-migration", "schema-management"]
stars: 59
forks: 1
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-21T01:22:56Z"
lastCommitAt: "2026-10-11T10:14:30Z"
lastReleaseAt: "2026-04-20T13:14:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 42
maintainers: ["winebarrel", "claude", "pistachio-release[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1163021307/0a3b9ec0-9509-40fc-8be0-28b3487ba578"
---

pistachio is a declarative schema management tool for PostgreSQL with a Terraform-like plan/apply workflow. You write the schema you want as DDL in SQL files. pistachio compares the database with the files and prints the DDL that makes the database match.

`pista plan` prints that DDL. `pista apply` runs it. `pista dump` writes the files from an existing database.

> [!NOTE]
> Since 1.81.0, pistachio supports Amazon Aurora DSQL with `--engine dsql`. See the [Aurora DSQL guide](https://winebarrel.github.io/pistachio/guides/aurora-dsql/). This should not change how pistachio works with PostgreSQL. If you find a problem, please [open an issue](https://github.com/winebarrel/pistachio/issues).

> [!TIP]
> The [playground](https://pistachio-demo.winebarrel.workers.dev) runs `pista diff` on two schemas that you edit in the page. There is nothing to install.

**[Documentation](https://winebarrel.github.io/pistachio/)** | [Getting started](https://winebarrel.github.io/pistachio/getting-started/) | [Guides](https://winebarrel.github.io/pistachio/guides/) | [Commands](https://winebarrel.github.io/pistachio/reference/commands/) | [Supported…
