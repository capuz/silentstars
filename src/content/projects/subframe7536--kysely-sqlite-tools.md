---
repo: "subframe7536/kysely-sqlite-tools"
name: "kysely-sqlite-tools"
description: "Kysely dialect of sql.js / sqlite-wasm / wa-sqlite / node-sqlite3-wasm / sqlite worker / Tauri sql plugin (sqlite) / bun:sqlite"
url: "https://github.com/subframe7536/kysely-sqlite-tools"
homepage: "https://subframe7536.github.io/kysely-sqlite-tools/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["bun", "kysely-dialect", "sqlite", "sqlite-wasm", "tauri"]
stars: 103
forks: 7
openIssues: 1
closedIssues: 18
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2023-04-23T09:28:57Z"
lastCommitAt: "2026-06-27T00:46:19Z"
lastReleaseAt: "2023-05-29T14:59:29Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 27
maintainers: ["subframe7536"]
openGraphImageUrl: "https://opengraph.githubassets.com/3137963abcc6a3c5af4e6f1f6f0c28e68f223d190a56fbd5de361a7be6108264/subframe7536/kysely-sqlite-tools"
---

# Kysely SQLite Utils

Various dialects for Kysely using SQLite

## Base Dialect

[dialect](packages/dialect-generic-sqlite) for generic SQLite, support run in current or worker thread

## Multiple Dialects

Base on `kysely-generic-sqlite`

- [dialect](packages/dialect-wasm) for `wasm`, run SQLite in browser
- [dialect](packages/dialect-sqlite-worker) for [`better-sqlite3`](https://github.com/WiseLibs/better-sqlite3), running sql in worker_thread
- [dialect](packages/dialect-wasqlite-worker) for [`wa-sqlite`](https://github.com/rhashimoto/wa-sqlite), running sql in web worker, store data in OPFS or IndexedDB
- [dialect](packages/dialect-tauri) for [`Tauri`](https://tauri.app/), using [official sql plugin](https://github.com/tauri-apps/plugins-workspace/tree/v2/plugins/sql)
- [dialect](packages/dialect-bun-worker/) for [`Bun SQLite`](https://bun.sh/docs/api/sqlite), running sql in worker

## Other Old Utils
- ~~[plugin](packages/plugin-serialize) that auto serialize and deserialize params~~ move to [kysely-plugin-serialize](https://github.com/subframe7536/kysely-plugin-serialize)
- ~~[sqlite utils](packages/sqlite-utils) useful utils for SQLite~~ deprecated
- ~~[sqlite…
