---
repo: "buraksocial/IgnisDB"
name: "IgnisDB"
description: "IgnisDB is a key-value database built from scratch in Python. v2 introduces a Log-Structured Merge Tree (LSM-Tree) storage engine that keeps RAM usage fixed at 64–128 MB regardless of dataset size, while providing unlimited disk-backed storage."
readmeQualityOk: true
url: "https://github.com/buraksocial/IgnisDB"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 53
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-06-10T23:03:34Z"
lastCommitAt: "2026-10-29T14:07:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 48
maintainers: ["buraksocial"]
openGraphImageUrl: "https://opengraph.githubassets.com/dfe1f5b03ed781a432e359b1ecd44093e27792cf02f7c0c8fbd01c16e8688413/buraksocial/IgnisDB"
---

# 🔥 IgnisDB v2: LSM-Tree + Tiered Storage Database

> High-performance key-value database with LSM-Tree storage engine, tiered caching,
> and unlimited storage capacity — all in pure Python.

## What is IgnisDB?

IgnisDB is a key-value database built from scratch in Python. **v2** introduces a
Log-Structured Merge Tree (LSM-Tree) storage engine that keeps RAM usage fixed at
64–128 MB regardless of dataset size, while providing unlimited disk-backed storage.

It supports two modes:
- **Embedded**: Direct API calls, zero network overhead
- **Server**: RESP protocol TCP server, backward compatible with v1 clients

## Performance Benchmarks

Benchmarked on Linux x86_64, 100K keys × 100 bytes each:

| Metric | Result |
|---|---|
| **Write throughput** | **20,037 ops/sec** |
| **Read throughput (hot cache)** | **857,382 ops/sec** |
| **Read throughput (sequential)** | **963,234 ops/sec** |
| **ZADD (sorted set)** | **1,427,362 ops/sec** |
| **ZRANGEBYSCORE** | **6,902 ops/sec** |
| **Full-text indexing** | **196,289 docs/sec** |
| **Full-text search** | **15,031 searches/sec** |
| **RAM usage (100K keys)** | **90.5 MB** |
| **Cache hit rate** | **100%** |

### Memory Efficiency

|…
