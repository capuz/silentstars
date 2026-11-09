---
repo: "natew/orez"
name: "orez"
description: "Zero on PGLite and SQLite-WASM - An experimental dev server to run Postgres and Zero Sync in dev mode instantly and easily with no configuration."
readmeQualityOk: true
url: "https://github.com/natew/orez"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
stars: 62
forks: 4
openIssues: 2
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-09T04:35:24Z"
lastCommitAt: "2026-11-09T11:59:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 40
maintainers: ["natew", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/26451c66f7756d92386dd7c41ed1803b450cd633634b9f724248adffc0ada5b2/natew/orez"
---

# oreZ

Run [Zero](https://zero.rocicorp.dev) locally with zero native dependencies. No Postgres install, no SQLite compilation, no Docker.

Read the [Orez documentation](https://orez-docs.natewienert.workers.dev).

```
bunx orez
```

oreZ makes Zero work on [PGlite](https://pglite.dev) (Postgres in WASM) and [bedrock-sqlite](https://www.npmjs.com/package/bedrock-sqlite) (SQLite in WASM), bundled together so local development is as simple as `bun install && bunx orez`.

## Lime Sync

Lime Sync is the separate SQLite-native Zero engine, published as
[`limesync`](https://www.npmjs.com/package/limesync) (formerly `orez-lite`). It runs on Cloudflare and other constrained
hosts, replaces Zero's server side, and speaks the Zero protocol to the real
`@rocicorp/zero` client. `limesync/client` supplies the transport without
forking Zero's query or mutation API. Read the
[Lime Sync documentation](https://lime-sync.natewienert.workers.dev).

`limesync/aggregate` maintains queryable count and sum columns until Zero ships
aggregate queries. One declaration generates the SQLite migration and triggers
and projects the same change during optimistic on-zero mutations. See the
[aggregate…
