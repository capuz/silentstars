---
repo: "datnguye/dbt-docs"
name: "dbt-docs"
description: "Alternative dbt docs 🚀"
readmeQualityOk: true
url: "https://github.com/datnguye/dbt-docs"
homepage: "https://dbdocs.datnguye.me/"
language: "Python"
languages: ["Python"]
languagePcts: [59]
topics: ["catalog", "cll", "column-lineage", "dbt", "docs", "erd", "site", "static"]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-03-03T03:37:07Z"
lastCommitAt: "2026-11-14T10:45:39Z"
lastReleaseAt: "2026-06-25T15:44:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 72
undervaluedScore: 32
maintainers: ["il-dat", "datnguye"]
openGraphImageUrl: "https://opengraph.githubassets.com/3851690a08f9b240e240442dc7cb74e272d6697ec9bbe77fe5e484934032b5a8/datnguye/dbt-docs"
fundingLinks: ["GITHUB:https://github.com/datnguye", "BUY_ME_A_COFFEE:https://buymeacoffee.com/datnguye", "CUSTOM:https://www.buymeacoffee.com/datnguye"]
---

Turn your dbt artifacts into a self-contained docs site: a browsable catalog, an entity-relationship diagram, an interactive lineage DAG, and **column-level lineage** traced from your compiled SQL — all in one `dbdocs generate`. Serve it with `dbdocs serve`, or deploy versioned builds anywhere a static host will take them.

| Catalog | Model page | Lineage DAG | Health Check |
|---|---|---|---|
|  |  |  |  |

## Why dbdocs?

dbt's built-in docs stop short of telling you *which upstream column fed this downstream column*, *which tables relate to each other*, or *what changed between builds*. dbdocs fills those gaps — no documentation framework or separate ERD tool to install.

- **ERD + column-level lineage** — table relationships ([dbterd](https://github.com/datnguye/dbterd)) and column lineage from compiled SQL ([sqlglot](https://github.com/tobymao/sqlglot)).
- **Column impact analysis** — downstream dependents for any column.
- **Deep-link URLs** for every node, column, and DAG view.
- **Any sqlglot dialect**, auto-detected from your manifest.
- **Scales to 1 000s of models** without freezing the browser.
- **Fail-soft** — an unparseable model is skipped, not fatal.
- **Project…
