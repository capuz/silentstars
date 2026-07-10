---
repo: "Galxe/gravity-reth"
name: "gravity-reth"
description: "Gravity’s Performance-Optimized Reth Fork"
readmeQualityOk: true
url: "https://github.com/Galxe/gravity-reth"
language: "Rust"
languages: ["Rust", "HTML"]
languagePcts: [72, 27]
stars: 20
forks: 18
openIssues: 2
closedIssues: 12
watchers: 2
contributors: 368
recentReleases: 2
createdAt: "2024-10-15T04:37:17Z"
lastCommitAt: "2026-07-10T07:01:17Z"
lastReleaseAt: "2026-04-28T06:46:44Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 94
undervaluedScore: 78
maintainers: ["AshinGau", "nekomoto911", "ByteYue"]
openGraphImageUrl: "https://opengraph.githubassets.com/86b7c267a5124d400226acb9bef9fd813f1e3a117a18a92c0beb828aca230bc0/Galxe/gravity-reth"
---

# Gravity Reth: The Fastest Open-Source EVM Execution Client

For EVM-based ecosystems, the execution client is a critical component of the system stack, often representing a
significant performance bottleneck that limits on-chain throughput and raises transaction costs. While modern clients
like Reth have made substantial strides in performance, their architectures are **not** primarily optimized for
high-performance Layer 1s and Layer 2 roll-ups, which target **sub-second finality and massive scalability**, require a
fundamental rethinking of client design to overcome bottlenecks in transaction execution, state commitment, and
expensive I/O.

We introduce Gravity Reth, an open-source, performance-engineered fork of Reth, designed to push the upper bounds of EVM
execution speed. Through a suite of architectural innovations—including Grevm, a DAG-based optimistic parallel EVM; a
**fully parallelized merklization** framework, a **high-performance caching** layer, an **optimized mempool,** and **a
pipelined execution architecture**—Gravity Reth achieves state-of-the-art performance.

_ERC20 Transfer Performance Comparison Across Different Account Scales_

In an ERC20 transfers…
