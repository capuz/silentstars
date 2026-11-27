---
repo: "singhpratech/duckdbgpumetaldbram"
name: "duckdbgpumetaldbram"
description: "GPU-accelerated plain DuckDB SQL — Apple Silicon Metal + NVIDIA CUDA. The first SQL execution engine for Apple Silicon GPUs."
readmeQualityOk: true
url: "https://github.com/singhpratech/duckdbgpumetaldbram"
homepage: "https://singhpratech.github.io/duckdbgpumetaldbram/"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [38, 32]
topics: ["apple-silicon", "cuda", "database", "duckdb", "gpgpu", "gpu", "hpc", "metal", "sql"]
stars: 33
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2026-05-09T19:33:47Z"
lastCommitAt: "2026-11-27T12:56:24Z"
lastReleaseAt: "2026-09-20T20:34:16Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 48
maintainers: ["aiexplore369", "singhpratech"]
openGraphImageUrl: "https://opengraph.githubassets.com/7abdd22b7ef9f314aa345fcf66a6cd96d1d3ea78c6b52fae9ca502661ceee736/singhpratech/duckdbgpumetaldbram"
---

# gpudb — GPU-accelerated DuckDB on **Apple Silicon Metal + NVIDIA CUDA**

> **The first SQL execution engine for Apple Silicon GPUs**, built as a DuckDB extension that *also* runs on NVIDIA CUDA. One codebase, two backends, your existing DuckDB queries.

> **Important**
>
> **New in v0.7 — plain DuckDB SQL runs on the GPU.** No `gpu_*` calls, no query changes: write the SQL you already write, and the GPU answers it when that is measured faster — DuckDB answers everything else, with the same rows either way.

Now an official [**DuckDB Community Extension**](https://duckdb.org/community_extensions/extensions/gpudb) — install it straight from any DuckDB ≥ 1.5.5, no flags, no downloads:

```sql
INSTALL gpudb FROM community;
LOAD gpudb;
SELECT gpu_sum(value::BIGINT) FROM range(1000000) AS t(value);
```
