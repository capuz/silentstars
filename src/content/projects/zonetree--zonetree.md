---
repo: "ZoneTree/ZoneTree"
name: "ZoneTree"
description: "ZoneTree is a persistent, high-performance, transactional, ACID-compliant ordered key-value database and LSM-tree storage engine for .NET."
readmeQualityOk: true
url: "https://github.com/ZoneTree/ZoneTree"
homepage: "https://zonetree.dev"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["lsm-tree", "key-value-store", "atomicity", "consistency", "durability", "isolation", "key-value-database", "database", "linux", "binary-tree"]
stars: 484
forks: 38
openIssues: 0
closedIssues: 48
watchers: 8
contributors: 5
recentReleases: 0
createdAt: "2022-07-06T13:02:20Z"
lastCommitAt: "2026-07-09T20:44:21Z"
lastReleaseAt: "2022-07-27T21:38:30Z"
status: "thriving"
tags: ["solo_builder", "community_hub"]
healthScore: 98
undervaluedScore: 38
maintainers: ["koculu"]
openGraphImageUrl: "https://opengraph.githubassets.com/984e034c61f1b17dec15f907bc2acba87b17442d052a6c0959a955598b09ad02/ZoneTree/ZoneTree"
discussionCount: 21
---

# ZoneTree

**The engine beneath serious .NET data systems.**

ZoneTree is a high-performance storage engine for ordered, persistent data. It is built for teams creating databases, indexes, search systems, queues, event stores, local-first applications, and custom data platforms in the .NET ecosystem.

---

## The missing layer

Modern data systems are not built on features alone.
They are built on storage layers that shape performance, reliability, and product architecture.

In a live 2M-profile benchmark with individual writes, secondary indexes, point reads, ordered scans, queries, and updates, ZoneTree completes the measured workload phases substantially faster than RocksDB, SQLite, and MySQL for this embedded profile-store scenario. See the full benchmark explanation and reference reports at [zonetree.dev/docs/benchmark](https://zonetree.dev/docs/benchmark/).

.NET has excellent databases and frameworks, but very few native storage engines that can be used as a foundation for building new data systems.

ZoneTree fills that layer.

It gives .NET systems a fast, programmable foundation for ordered data that must be written quickly, read predictably, persisted reliably, and…
