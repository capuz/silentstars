---
repo: "julioczn/graphite"
name: "graphite"
description: "One fast desktop app for 24 databases — PostgreSQL, MySQL, SQL Server, Oracle, MongoDB, Redis, DynamoDB, ClickHouse and more — with an AI assistant and an MCP server that ask before they write."
readmeQualityOk: true
url: "https://github.com/julioczn/graphite"
homepage: "https://julioczn.github.io/graphite/"
language: "JavaScript"
languages: ["JavaScript", "Vue"]
languagePcts: [67, 32]
topics: ["ai", "database", "desktop-app", "electron", "mariadb", "mcp", "mysql", "postgresql", "sql", "sql-client"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-11-21T23:05:23Z"
lastCommitAt: "2026-11-23T13:27:10Z"
lastReleaseAt: "2026-11-22T15:26:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 50
maintainers: ["julioczn"]
openGraphImageUrl: "https://opengraph.githubassets.com/636229a91d2dfa3692b19687b0e304daac73d29a63d40d6576618af790bf944d/julioczn/graphite"
---

A fast, keyboard-friendly desktop client for <b>24 databases</b>: SQL, NoSQL and cloud warehouses<br>
  with an AI assistant and an MCP server for your own agents.

## Features

- **SQLite, PostgreSQL, MySQL, MariaDB, TiDB, CockroachDB, GreengageDB and LibSQL/Turso** ([full list](#supported-databases)) with saved connections (passwords encrypted by the OS keychain), a
  **Test** button, **Import from URL** (paste `postgres://…`, `mysql://…`, `mongodb+srv://…`, JDBC, `DATABASE_URL=…`,
  libpq or ADO.NET strings and the form fills itself in) and a ready-to-use **demo** database.
- **SQL editor** (CodeMirror 6): table/column autocomplete, current-statement highlight, several results per run,
  inline errors. `⌘/Ctrl+Enter` runs everything or the selection, `⌘/Ctrl+Shift+Enter` runs the statement under the cursor.
- **SQL snippets**: type a shortcut (`sel`, `ij`, `ups`, `ct`…) and pick it from autocomplete; templates adapt to each database.
- **Table browser**: pagination, sorting, `WHERE` filter, structure tab (columns, indexes, DDL).
- **Inline editing** of tables and query results (when the primary key is in the result), applied in a single
  transaction.
