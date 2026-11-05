---
repo: "pivotlake/pivot"
name: "pivot"
description: "Pivot is a high-performance real time analytics database on open data formats."
readmeQualityOk: true
url: "https://github.com/pivotlake/pivot"
homepage: "https://pivotlake.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["ai", "analytics", "big-data", "database", "dbms", "embedded", "lakehouse", "olap", "pivot", "rust"]
stars: 128
forks: 10
openIssues: 15
closedIssues: 11
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2026-03-17T16:33:06Z"
lastCommitAt: "2026-11-05T11:22:03Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 31
maintainers: ["giladkl", "maorsaleh", "ThinkRedstone"]
openGraphImageUrl: "https://opengraph.githubassets.com/37cd8f4b082b6955578816fe9ecd9202bf1ca9ea8d84318d4b0d47a5c5470ca4/pivotlake/pivot"
discussionCount: 2
---

Pivot is a high-performance analytics database that runs on open data formats. It delivers low-latency queries and high concurrency without replicating data into a dedicated real-time analytics database such as ClickHouse / Druid.

## Key features

- **Fast** - Written in Rust and built on state-of-the-art columnar execution techniques, including morsel-driven parallelism, SIMD, NUMA-aware execution, and cache-conscious aggregation and joins, in addition to a few novel additions.
- **Scalable** - With object storage as its backing store, Pivot can be scaled up, down, or to zero almost instantly.
- **Portable** -     Pivot can run both as a server serving backends and clients, or as a local engine where users and agents query the source of truth directly—allowing local ad-hoc and agentic analytics to share the same engine and architecture as traditional dashboards and in-app analytics
- **Open** - Pivot is open source and built on open data formats (Delta Lake and Iceberg). This means you can use Pivot with data already stored in your data warehouse, while data ingested by Pivot remains accessible to other query engines.

## Getting started

```sh
curl https://pivotlake.io | sh
```…
