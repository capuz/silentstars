---
repo: "russellromney/walrust"
name: "walrust"
description: "Lightweight SQLite WAL sync to S3 in Rust with emphasis on memory footprint"
readmeQualityOk: true
url: "https://github.com/russellromney/walrust"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
stars: 14
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-11T00:32:06Z"
lastCommitAt: "2026-07-08T05:42:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 41
maintainers: ["russellromney"]
openGraphImageUrl: "https://opengraph.githubassets.com/8efce7f27b434a3c2eeb8b63bba11920f4ed4115c971b49806dac81891cfa499/russellromney/walrust"
---

</p>

# walrust

> **Experimental.** walrust is under active development and contains bugs. Be careful.

**Lightweight SQLite replication to S3 in Rust.**

Walrust continuously replicates SQLite databases to any S3-compatible storage (AWS S3, Tigris, R2, MinIO, etc.), ensuring minimal data loss on server crashes, power failures, or disk corruption.

This design means durability and availability without running a HA cluster, plus fast local reads and writes.

walrust's specific goal is to be embeddable and memory efficient.

Part of the [hadb](https://github.com/russellromney/hadb) ecosystem. Shared infrastructure (S3, retry, webhooks, retention) provided by [hadb-io](https://github.com/russellromney/hadb/tree/main/hadb-io).

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
┌─────────────────────────────────────┐…
