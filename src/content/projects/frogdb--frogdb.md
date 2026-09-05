---
repo: "frogdb/frogdb"
name: "frogdb"
description: "Fully Redis 8.x compatible database complete with replication, clustering, persistance, and hot/warm tiering."
readmeQualityOk: true
url: "https://github.com/frogdb/frogdb"
homepage: "https://frogdb.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["database", "distributed-database", "in-memory-database", "key-value", "nosql", "redis", "redis-compatible", "rust", "cache", "cloud-native"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-07T21:51:19Z"
lastCommitAt: "2026-09-05T07:49:25Z"
lastReleaseAt: "2026-04-02T19:40:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 81
undervaluedScore: 54
maintainers: ["nathanjordan"]
openGraphImageUrl: "https://opengraph.githubassets.com/2262873bf2f3d39bf4360b1a95a76b11a9350fd2ad40d6a7603e9295b303d8b1/frogdb/frogdb"
discussionCount: 0
---

</p>

<h3 align="center">A Redis 8.0-compatible, memory-first database built in Rust.</h3>

---

## What is FrogDB?

FrogDB is a memory-first database built in Rust with Tokio as the async engine (more on this below).
It is fully Redis wire protocol (RESP2 and RESP3) compatible so you can use it with any existing
Redis client. FrogDB aims to be faster, safer, and easier to operate than existing solutions while
supporting the full Redis 8 feature set, potentially adding additional features in the future.

## Goals

- **Correct** 
- **Fast** 
- **Scalable**
- **Easy to operate**

## Features

### Redis 8 Compatibility

Full RESP2/RESP3 wire protocol support with coverage across all Redis data structures:

- **Core types** — Strings, Lists, Sets, Sorted Sets, Hashes, Streams
- **Bitmaps & Bitfields** — BITCOUNT, BITOP, BITPOS, BITFIELD
- **JSON** — RedisJSON-compatible document storage with JSONPath
- **Time Series** — Gorilla-compressed time series with aggregation and downsampling
- **Vector Sets** — Approximate nearest-neighbor search
- **Probabilistic** — Bloom filters, Cuckoo filters, HyperLogLog, Count-Min Sketch, Top-K, T-Digest
- **Geospatial** — Geohash indexing and distance…
