---
repo: "powturbo/TurboBench"
name: "TurboBench"
description: "Compression Benchmark"
readmeQualityOk: true
url: "https://github.com/powturbo/TurboBench"
language: "C++"
languages: ["C++", "C"]
languagePcts: [47, 39]
topics: ["data-compression", "benchmark", "bwt", "lz77", "zlib", "zstd", "lz4", "brotli", "lzturbo", "compressor-benchmark"]
stars: 376
forks: 43
openIssues: 1
closedIssues: 39
watchers: 22
contributors: 9
recentReleases: 4
createdAt: "2015-11-16T10:25:01Z"
lastCommitAt: "2026-10-26T03:02:40Z"
lastReleaseAt: "2026-10-25T05:03:10Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 41
maintainers: ["powturbo", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/46267677/5a1ffc06-78e2-41b5-b43f-8e6c7ef045b4"
discussionCount: 1
---

## TurboBench:Compressor Benchmark

  <img
    alt="TurboBench Logo" src="turbobench_/TurboBench.jpeg"
    width="400px"
  >

# TurboBench: The Ultimate Data Compression Benchmark

**100+ Codecs. The Powerhouse in a Single Executable** — *The Compression Lie Detector*

Tired of misleading benchmarks with I/O overhead, cache effects, and CPU throttling? **TurboBench** delivers **high-precision, zero-overhead results** you can actually trust.

## Why TurboBench Stands Out

- **The only benchmark** that includes **LzTurbo** alongside **100+** popular, latest, and fastest compressors (LZ77, Rolz, BWT, Context Mixing, Entropy Coders, and more).
- **100% in-memory** testing — no disk I/O to skew your results.
- Supports **multiple files**, recursive directories, and smart concatenation of small files into multiblock tests.
- Built to avoid common pitfalls like cache scenarios and throttling found in other tools.
- Unlock peak performance — TurboBench reduces **throttling** by intelligently controlling the **CPU frequency**
- Automatic sorting, updating, and merging of result files.
- A **nightly github [release](https://github.com/powturbo/TurboBench/releases) and…
