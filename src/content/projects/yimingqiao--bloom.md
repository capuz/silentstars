---
repo: "YimingQiao/bloom"
name: "bloom"
description: "A DuckDB Extension: Adaptive robust predicate transfer for faster analytical joins in DuckDB."
readmeQualityOk: true
url: "https://github.com/YimingQiao/bloom"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [71, 29]
topics: ["bloom-filter", "database-systems", "duckdb", "query-optimization", "join-optimization", "predicate-transfer", "cpp", "duckdb-extension", "robust-predicate-transfer"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-22T10:28:41Z"
lastCommitAt: "2026-10-27T09:16:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 39
maintainers: ["YimingQiao"]
openGraphImageUrl: "https://opengraph.githubassets.com/0684ca143113b9af2b0ec31439aa74d84b99baf55ebdd0e3f57ce5333f3e711c/YimingQiao/bloom"
---

Adaptive predicate transfer, built into your query plan.</p>

Bloom is a DuckDB extension for accelerating analytical queries that join many
tables. It is designed for queries where filtering one table can eliminate
substantial work in the others, including workloads such as the Join Order
Benchmark (JOB).

Built on **robust predicate transfer (RPT)**, Bloom filters data early and adapts
its decisions as it learns more about the query. Load the extension and keep
using your existing SQL: Bloom applies these optimizations automatically within
DuckDB's query planner.

**Up to 8.69× faster on an individual JOB query.**
[See the measurements →](#benchmarks)

## How it works

Bloom uses what it learns from one table to rule out irrelevant rows in others.
It adjusts as it goes, so later steps process less data. Your SQL and results
stay the same.

## Build and load

For **DuckDB v2.0.0**. Build from this repository:

```bash
git submodule update --init --recursive
make release -j"$(nproc)"
```

Load the extension in DuckDB started with `-unsigned`:

```sql
LOAD 'build/release/extension/bloom/bloom.duckdb_extension';
```

## Benchmarks

DuckDB v2.0.0, one thread. Totals are sums of…
