---
repo: "Vitruves/carquet"
name: "carquet"
description: "A high-performance, SIMD-optimized, pure C library for reading and writing Apache Parquet files. "
readmeQualityOk: true
url: "https://github.com/Vitruves/carquet"
language: "C"
languages: ["C"]
languagePcts: [86]
topics: ["parquet", "parquet-files", "parquet-format", "c", "high-throughput"]
stars: 93
forks: 17
openIssues: 3
closedIssues: 28
watchers: 5
contributors: 5
recentReleases: 1
createdAt: "2025-12-29T14:09:43Z"
lastCommitAt: "2026-11-06T11:23:40Z"
lastReleaseAt: "2026-10-08T02:27:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 37
maintainers: ["Vitruves", "jburnhams", "mattermat"]
openGraphImageUrl: "https://opengraph.githubassets.com/1bbb77ca39c1e64ff1bfc70b9d9ba20c5f59a486e6a385e8322ef2c5bdac04df/Vitruves/carquet"
---

A fast, pure C library for reading and writing Apache Parquet files.

### Highlights

| | |
|---|---|
| <img src="res/img/icons/fast.svg" width="22" height="22" align="absmiddle" alt="" />&nbsp; **Fast** | Writes **2.3–5.9x faster** than Arrow C++ and reads compressed data **1.5–2.1x faster** from the very same file (Apple M3, 10M rows). Uncompressed reads are served straight from the mmap in **0.30 ms**. |
| <img src="res/img/icons/simd.svg" width="22" height="22" align="absmiddle" alt="" />&nbsp; **SIMD** | 30+ hand-written vector kernels for **SSE4.2, AVX, AVX2, AVX-512, NEON and SVE**: bit-unpacking and RLE levels, dictionary gathers, byte-stream split, min/max statistics, null bitmaps, Snappy / LZ4 match copies. One portable binary picks the widest kernel at runtime, with a scalar fallback. |
| <img src="res/img/icons/small.svg" width="22" height="22" align="absmiddle" alt="" />&nbsp; **Small** | Pure C11, a **~500 KB** library (Arrow C++: 50 MB+). Four compression dependencies (zstd, zlib, lz4, brotli), fetched automatically when missing. Builds in under a minute with a single `make` or `xmake`. |
| <img src="res/img/icons/complete.svg" width="22" height="22"…
