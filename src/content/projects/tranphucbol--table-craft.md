---
repo: "tranphucbol/table-craft"
name: "table-craft"
description: "A desktop database IDE in the spirit of DataGrip"
readmeQualityOk: true
url: "https://github.com/tranphucbol/table-craft"
homepage: "https://github.com/tranphucbol/table-craft/releases"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["bun", "codemirror", "database-client", "database-gui", "database-ide", "datagrip-alternative", "desktop-app", "electron", "explain-plan", "mysql"]
stars: 14
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-21T18:37:06Z"
lastCommitAt: "2026-10-31T15:58:12Z"
lastReleaseAt: "2026-10-25T03:40:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 52
maintainers: ["tranphucbol", "nguyenphucphat"]
openGraphImageUrl: "https://opengraph.githubassets.com/03c9a4b4bf0d0de53785c19e43da369647ceb50c4c3e6a20321c41b5f1feceb2/tranphucbol/table-craft"
---

# TableCraft

A desktop database IDE in the spirit of JetBrains DataGrip, for PostgreSQL, MySQL, SQLite, Oracle,
SQL Server, Redis and etcd.
Connections, a database explorer, SQL consoles with schema-aware completion, a result grid, a table
data editor, DDL and SQL generation, query history and EXPLAIN plans, in one Electron app. Databases
are reached through datasource plugins loaded at runtime.

## Highlights

- [DataGrip's keymap and layout](https://github.com/tranphucbol/table-craft/blob/HEAD/docs/guide/shortcuts.md#search-everywhere): tool windows, `⇧⇧` Search Everywhere, `⇧⌘A`
  Find Action, and the chords your hands already know.
- [Completion that knows your schema](https://github.com/tranphucbol/table-craft/blob/HEAD/docs/guide/completion.md): tables after `FROM`, whole join
  conditions after `JOIN`, and the columns of an alias after `o.`.
- [A table editor that shows its SQL](https://github.com/tranphucbol/table-craft/blob/HEAD/docs/guide/data.md#table-data-editor): edit cells, add and delete rows, preview
  the statements, and submit them in one transaction.
- [Explain Plan as a tree](https://github.com/tranphucbol/table-craft/blob/HEAD/docs/guide/console.md#explain):…
