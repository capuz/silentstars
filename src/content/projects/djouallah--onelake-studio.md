---
repo: "djouallah/onelake_studio"
name: "onelake_studio"
description: "VS Code extension to browse Microsoft Fabric OneLake — tables, files and Power BI semantic models, read only."
readmeQualityOk: true
url: "https://github.com/djouallah/onelake_studio"
homepage: "https://djouallah.github.io/onelake_studio/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
topics: ["microsoft-fabric", "onelake", "power-bi", "vscode-extension"]
stars: 10
forks: 2
openIssues: 2
closedIssues: 17
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-07-25T11:03:58Z"
lastCommitAt: "2026-11-09T11:59:57Z"
lastReleaseAt: "2026-11-07T21:22:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 63
maintainers: ["djouallah"]
openGraphImageUrl: "https://opengraph.githubassets.com/a309346fb1e025179f8a49fd719afa761f00e1628f24cf785032fa437a9e82e6/djouallah/onelake_studio"
---

# OneLake Studio for VS Code

Browse and query your Microsoft Fabric data in VS Code, signed in with the Microsoft account
VS Code already uses.

Fabric is treated as one catalog: tables, files and semantic models (views over tables), each with
a unique name, queried with SQL. Read only, cache first, and it works offline.

## What you can do

- **Browse OneLake.** Workspaces, lakehouses, warehouses, SQL and mirrored databases, their tables
  and files, in one tree. Pin workspaces, or filter to one type, such as semantic models.
- **Query with SQL.** Every table has one name, `lakehouse.workspace.item.schema.table`, and every
  semantic model is `semanticmodel.workspace.model`. The type comes first because a lakehouse and
  a warehouse can share a name. Join across items and workspaces;
  `SHOW ALL TABLES` lists every one it knows about. Write it in a tab's SQL box; Ctrl+Enter runs
  the statement under the cursor, and the results show in that tab. Whatever you open gets a tab of its own.
- **Look at a table in a click.** Columns, row count, first rows, and Delta or Iceberg stats and
  history.
- **Open lakehouse files.** Parquet, CSV, JSON, Excel, DuckDB and SQLite, even inside a…
