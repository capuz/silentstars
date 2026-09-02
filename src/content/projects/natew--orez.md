---
repo: "natew/orez"
name: "orez"
description: "Zero on PGLite and SQLite-WASM - An experimental dev server to run Postgres and Zero Sync in dev mode instantly and easily with no configuration."
readmeQualityOk: true
url: "https://github.com/natew/orez"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
stars: 27
forks: 2
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-09T04:35:24Z"
lastCommitAt: "2026-09-02T08:04:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 32
maintainers: ["natew", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a23c63380f6f81838b5bef8504903481607cc8cc05e0932cb21f9d0097609366/natew/orez"
---

# oreZ

Run [Zero](https://zero.rocicorp.dev) locally with zero native dependencies. No Postgres install, no SQLite compilation, no Docker.

Read the [Orez documentation](https://orez-docs.natewienert.workers.dev).

```
bunx orez
```

oreZ makes Zero work on [PGlite](https://pglite.dev) (Postgres in WASM) and [bedrock-sqlite](https://www.npmjs.com/package/bedrock-sqlite) (SQLite in WASM), bundled together so local development is as simple as `bun install && bunx orez`.

## Lite Sync

Lite Sync is the separate SQLite-native Zero engine. The current preview ships
as [`orez-lite`](https://www.npmjs.com/package/orez-lite) while its package
boundary is being split from Orez. It runs on Cloudflare and other constrained
hosts, replaces Zero's server side, and speaks the Zero protocol to the real
`@rocicorp/zero` client. `orez-lite/client` supplies the transport without
forking Zero's query or mutation API. Read the
[Lite Sync documentation](https://lite-sync-docs.natewienert.workers.dev).

`orez-lite/aggregate` maintains queryable count and sum columns until Zero ships
aggregate queries. One declaration generates the SQLite migration and triggers
and projects the same change during…
