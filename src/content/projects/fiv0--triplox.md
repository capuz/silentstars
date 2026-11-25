---
repo: "FiV0/triplox"
name: "triplox"
description: "A Datalog triplestore on top of SlateDB with support for history and incremental queries  "
readmeQualityOk: true
url: "https://github.com/FiV0/triplox"
homepage: "https://triplox.xyz"
language: "Rust"
languages: ["Rust"]
languagePcts: [72]
topics: ["database", "datalog", "datomic", "ivm", "streaming", "immutability", "clojure", "object-storage", "rust", "slatedb"]
stars: 29
forks: 2
openIssues: 191
closedIssues: 130
watchers: 2
contributors: 4
recentReleases: 2
createdAt: "2024-09-15T15:39:44Z"
lastCommitAt: "2026-11-25T13:21:19Z"
lastReleaseAt: "2026-11-24T19:13:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 60
maintainers: ["FiV0", "sdil"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f0a6b449ac50e3836f392bd7a1ed7a252174949ad4883b87a2455889ca05d2a/FiV0/triplox"
---

> 🚧 **WARNING: Alpha Software** 🚧
> Triplox is alpha software. The index encoding has not yet stabilized. There will be ingestion and congestion issues. Incremental queries will likely be slow.

# Triplox

Triplox is a [Datomic](https://www.datomic.com/)-inspired general-purpose database on top of object storage. The backbone of the engine is [SlateDB](https://github.com/slatedb/slatedb/), a key-value store on top of object-storage. Datomic is the main inspiration and the data model, transaction semantics and query API closely follow Datomic.
