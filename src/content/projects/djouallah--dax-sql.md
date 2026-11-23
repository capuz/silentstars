---
repo: "djouallah/dax-sql"
name: "dax-sql"
description: "A DAX to SQL compiler for Tabular (TMSL) semantic models"
readmeQualityOk: true
url: "https://github.com/djouallah/dax-sql"
homepage: "https://djouallah.github.io/dax-sql/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
stars: 6
forks: 0
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-10-09T08:41:17Z"
lastCommitAt: "2026-11-23T10:29:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 58
maintainers: ["djouallah", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/51f1711275c7c1b6ea3e259444fc6c6423f8962c6930e158be26bb530b74d622/djouallah/dax-sql"
---

# dax-sql

Initially written by [N.S. Devaraj](https://github.com/nsdevaraj).

Compiles a DAX or SQL query over a semantic model to one SQL `SELECT`. No dependencies. `npm install dax-sql`; API, example and everything it does in [DESIGN.md](https://github.com/djouallah/dax-sql/blob/HEAD/DESIGN.md); anything not there is not implemented.

| Feature | Supported |
|---|---|
| Semantic model | `.bim`, TMDL, Ossie YAML |
| Measure dialect | DAX, Ossie SQL |
| Query | DAX `SUMMARIZECOLUMNS(…)`, SQL `SELECT dim, AGG(measure) FROM model` |
| Target | DuckDB, T-SQL (Fabric), PostgreSQL |

DAX is tested against Power BI's answers ([conformance/](https://github.com/djouallah/dax-sql/blob/HEAD/conformance/README.md)), SQL against Apache Ossie's compliance cases. Errors: `SYNTAX`, `SEMANTIC`, `UNSUPPORTED`; `CATALOG` for semantic views.
