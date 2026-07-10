---
repo: "russellromney/walrust"
name: "walrust"
description: "Lightweight SQLite WAL sync to S3 in Rust with emphasis on memory footprint"
readmeQualityOk: true
url: "https://github.com/russellromney/walrust"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
stars: 14
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-11T00:32:06Z"
lastCommitAt: "2026-07-10T07:01:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 42
maintainers: ["russellromney"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7f4ada0c47b831cd4105dd6792345853ff91eb296fa75a2c6988c4ad070a3f2/russellromney/walrust"
---

</p>

# walrust

> **Experimental.** walrust is under active development and contains bugs. Be careful.

**Lightweight SQLite replication to S3 in Rust as a CLI or an embedded library.**

Walrust continuously replicates SQLite databases to any S3-compatible storage
(AWS S3, Tigris, R2, MinIO, etc.). You get durability and read replicas without
running an HA cluster, and keep SQLite's fast local reads and writes.

walrust's specific goals are to be performant and memory efficient.

Part of the [hadb](https://github.com/russellromney/hadb) ecosystem. Shared
infrastructure (S3, retry, webhooks, retention) provided by
[hadb-io](https://github.com/russellromney/hadb/tree/main/hadb-io).

## How it works

**Embedded** — your app uses walrust as a library:

```
┌───────────────────┐
│     Your App      │
│ ┌───────────────┐ │     ┌──────┐
│ │    SQLite     │─┼────>│  S3  │
│ │   + walrust   │ │     └──────┘
│ └───────────────┘ │
└───────────────────┘
```

**Sidecar** — walrust runs as a separate process, with optional read replicas:

```
  Primary machine                                    Replica machine
┌─────────────────────────────────────┐            ┌──────────────────┐
│…
