---
repo: "singhpratech/duckdbgpumetaldbram"
name: "duckdbgpumetaldbram"
description: "GPU-accelerated DuckDB extension on NVIDIA CUDA + Apple Silicon Metal — first SQL execution engine for Apple Silicon GPUs"
readmeQualityOk: true
url: "https://github.com/singhpratech/duckdbgpumetaldbram"
homepage: "https://theaivibe.org/blog/why-i-built-gpudb-gpu-sql-engine-cuda-apple-silicon"
language: "C++"
languages: ["C++"]
languagePcts: [51]
topics: ["apple-silicon", "cuda", "database", "duckdb", "gpgpu", "gpu", "hpc", "metal", "sql"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-05-09T19:33:47Z"
lastCommitAt: "2026-07-19T06:13:02Z"
lastReleaseAt: "2026-05-10T05:10:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 50
maintainers: ["singhpratech"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c87ba9e15c1e856a656ed786241e0012ac469d7271e75a8f7fe8b8bc75dad21/singhpratech/duckdbgpumetaldbram"
---

# gpudb — GPU-accelerated DuckDB on **NVIDIA CUDA + Apple Silicon Metal**

> **The first SQL execution engine for Apple Silicon GPUs**, built as a DuckDB extension that *also* runs on NVIDIA CUDA. One codebase, two backends, your existing DuckDB queries.

```sql
-- Real query, real GPU, real result on RTX 4090 + Apple M4 Max
SELECT gpu_sum(l_orderkey) FROM read_parquet('lineitem.parquet');
[gpudb] registered gpu_sum / gpu_min / gpu_max  (backend=CUDA)
gpu_sum(l_orderkey)
18005322964949
```

Apache-2.0 · Pre-alpha · Linux + macOS · DuckDB ≥ 1.0

---

## Why this exists

Every standalone GPU database from 2013-2024 was acqui-hired or pivoted (HEAVY.AI → NVIDIA 2025, BlazingSQL dormant, Voltron Data 50% layoff). Building "another GPU SQL engine" is not a viable bet.

What's open in 2026: **no published SQL engine targets Apple Silicon GPUs**. Sirius (UW + NVIDIA, CIDR 2026) is CUDA-only. cuDF is CUDA-only. So is everything else. Apple Silicon's unified memory architecture (up to 512 GB at 819 GB/s on M3 Ultra) is a genuine architectural advantage that nobody has wired into a database.

`gpudb` is a DuckDB *extension* (not a fork, not a new database) that closes that gap with a real…
