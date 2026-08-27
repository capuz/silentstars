---
repo: "softwheel/homekv"
name: "homekv"
description: "HomeKV is a memory-first, strongly consistent distributed key-value database focused on predictable low latency, high throughput, and rigorous failure semantics."
readmeQualityOk: true
url: "https://github.com/softwheel/homekv"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 3
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-07-01T04:49:54Z"
lastCommitAt: "2026-08-27T14:26:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 36
maintainers: ["stillzhl"]
openGraphImageUrl: "https://opengraph.githubassets.com/3af8e4f812bb9b19d29a3ca96e49c37777b8f87b8d4659f6fe874530222ef5ca/softwheel/homekv"
---

# HomeKV

**HomeKV is a memory-first, strongly consistent distributed key-value database focused on predictable low latency, high throughput, and rigorous failure semantics.**

The project started as an in-memory Rust KV store with copy-on-write MVCC, gossip-based membership, a phi-accrual failure detector, and consistent hashing. The next generation of HomeKV is intentionally more database-centric: shard-local execution, replicated state machines, durable consensus, explicit consistency contracts, and reproducible performance engineering.

## North star

HomeKV aims to explore the same class of systems problems that appear in high-performance managed in-memory databases:

- sub-millisecond in-memory reads on the healthy-path
- linearizable writes and strongly consistent reads
- partitioned scale-out with independent replication groups
- durable replicated commit before acknowledging durable writes
- fast leader failover without split brain
- memory-efficient storage and predictable tail latency
- snapshots, recovery, rebalancing, and online membership changes
- benchmark-driven optimization of networking, batching, allocation, and CPU locality

"Fastest" is treated as a…
