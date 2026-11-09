---
repo: "matrixarkai/matrixcache"
name: "matrixcache"
description: "Open-source Rust multi-tier cache: DRAM, resident and SSD tiers with admission control, cross-tier eviction, and asynchronous writeback"
readmeQualityOk: true
url: "https://github.com/matrixarkai/matrixcache"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["cache", "open-source", "rust", "storage", "matrixark", "apache-2-0"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-08-12T20:14:04Z"
lastCommitAt: "2026-11-09T11:59:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 43
maintainers: ["matrixarkai"]
openGraphImageUrl: "https://opengraph.githubassets.com/b38add2c77d1613902b9c5fa33d4b87c66105f1b832d0082db1f302de93e838a/matrixarkai/matrixcache"
---

# MatrixCache

`matrixcache` is an **open-source**, standalone, Rust-native multi-tier cache
library extracted from TemporalStore and reusable by any Rust service. It is
licensed under Apache-2.0 and open to anyone, anywhere: use it, fork it, change
it, ship it, and send the changes back if you want to. It manages a hot in-memory
(DRAM) tier, a persistent-memory-like resident tier, and an SSD tier, with
admission control, cross-tier eviction, read-through refill, pinned handles,
invalidation, and asynchronous writeback with backpressure accounting.

## Features

- Multi-tier placement across DRAM, a PMEM-like resident tier, and an SSD tier.
- Admission policy, cross-tier eviction, and read-through refill, with optional
  bounded background promotion for PMEM and SSD hits. Queue pressure falls back
  to immediate promotion so warming remains reliable.
- Opt-in bounded cold-tier migration prepositions least-recently-accessed DRAM
  and PMEM values in SSD when write-through is disabled, with value
  revalidation before each persistent write.
- Pinned (no-promotion) handles and pinned-acquire APIs.
- Shared-buffer reads for retrieval and scan paths that can consume cached
  bytes…
