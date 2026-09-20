---
repo: "singhpratech/duckdbgpumetaldbram"
name: "duckdbgpumetaldbram"
description: "GPU-accelerated DuckDB extension on NVIDIA CUDA + Apple Silicon Metal — first SQL execution engine for Apple Silicon GPUs"
readmeQualityOk: true
url: "https://github.com/singhpratech/duckdbgpumetaldbram"
homepage: "https://theaivibe.org/blog/gpudb-first-sql-engine-apple-silicon-gpus-duckdb-community-extension"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [42, 28]
topics: ["apple-silicon", "cuda", "database", "duckdb", "gpgpu", "gpu", "hpc", "metal", "sql"]
stars: 25
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 5
createdAt: "2026-05-09T19:33:47Z"
lastCommitAt: "2026-09-20T08:45:07Z"
lastReleaseAt: "2026-08-28T22:34:30Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 47
maintainers: ["aiexplore369", "singhpratech"]
openGraphImageUrl: "https://opengraph.githubassets.com/419d39460864968e92c80579ed6c902251ecb86e143dc70baf49dc2aeb44594b/singhpratech/duckdbgpumetaldbram"
---

# gpudb — GPU-accelerated DuckDB on **Apple Silicon Metal + NVIDIA CUDA**

> **The first SQL execution engine for Apple Silicon GPUs**, built as a DuckDB extension that *also* runs on NVIDIA CUDA. One codebase, two backends, your existing DuckDB queries.

Now an official [**DuckDB Community Extension**](https://duckdb.org/community_extensions/extensions/gpudb) — install it straight from any DuckDB ≥ 1.5.5, no flags, no downloads:

```sql
INSTALL gpudb FROM community;
LOAD gpudb;
SELECT gpu_sum(value::BIGINT) FROM range(1000000) AS t(value);
```

```sql
-- upload a column to GPU memory once, then every query runs at silicon speed
SELECT gpu_upload('qty', l_quantity::BIGINT) FROM lineitem;   -- once
SELECT gpu_sum_resident('qty');                               -- 600M rows: 10 ms vs 99 ms native
SELECT gpu_last_stats();                                      -- proof: which processor ran, kernel time
-- op=resident_i64 backend=Metal reason=Hot_GpuAlwaysWins rows=600037902
--   wall_ms=9.702 kernel_ms=9.533 transfer_ms=0.000
```

```sql
-- v0.6.0: GROUP BY / HAVING / top-k on the device. Upload a (key, payload) pair once;
-- the GPU sorts it once, then every GROUP BY is a segmented…
