---
repo: "singhpratech/ArrowMetal"
name: "ArrowMetal"
description: "Apache Arrow compute on Apple silicon GPUs through Metal: Arrow columns in unified memory, copy-free where the producer's buffers are page aligned; null-aware GPU kernels; Arrow C Data, C Device and C Stream interop"
readmeQualityOk: true
url: "https://github.com/singhpratech/ArrowMetal"
homepage: "https://arrowmetal.org"
language: "Swift"
languages: ["Swift", "Python"]
languagePcts: [56, 28]
topics: ["apache-arrow", "apple-silicon", "gpu", "metal", "swift", "columnar", "duckdb", "go", "pandas", "polars"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-09-06T16:03:12Z"
lastCommitAt: "2026-09-30T09:28:25Z"
lastReleaseAt: "2026-09-26T23:21:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 54
maintainers: ["singhpratech"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf1790141de34d6216cbf04c9405e8c37bc562479882b219c987a4ae2ca543f6/singhpratech/ArrowMetal"
---

# ArrowMetal

**ArrowMetal runs Apache Arrow compute on the Apple silicon GPU: Arrow arrays that live in Metal shared
memory, GPU kernels that keep Arrow's semantics (validity bitmaps, packed booleans, the C Data and C
Device Data Interfaces), and one C ABI reachable from Swift, Python, Rust, Go, TypeScript, R and C.**

Apple silicon has one physical memory shared by the CPU and the GPU, so an Arrow buffer placed in a
Metal shared buffer is at once a valid CPU Arrow buffer and a valid GPU buffer: a column is used where
it already is, with no copy across a bus in either direction. While a kernel runs, the CPU is free for
the rest of the application, and every table in this repository shows the CPU time of each call next
to its wall time.

One row, the same in-process data in every column:

| `sum by int32 key (1000 groups)`, 50,000,000 rows | wall ms | CPU ms of that call |
|---|---:|---:|
| ArrowMetal | **4.89** | 1.2 |
| pyarrow Acero (`Table.group_by`, 16 threads) | 18.45 | 250 |
| Polars lazy (16 threads) | 81.93 | 1,186 |
| pandas | 247.93 | 248 |

From `Benchmarks/results/full_matrix_2026-09-07-parallel.csv`, Apple M4 Max (16 CPU cores, 64 GB), best of
up to five calls after…
