---
repo: "rust-works/succinctly"
name: "succinctly"
description: "Succinct data structures"
readmeQualityOk: true
url: "https://github.com/rust-works/succinctly"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 53
forks: 3
openIssues: 148
closedIssues: 2131
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-12-25T22:38:29Z"
lastCommitAt: "2026-10-13T10:47:48Z"
lastReleaseAt: "2026-04-06T03:11:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 99
undervaluedScore: 44
maintainers: ["newhoggy"]
openGraphImageUrl: "https://opengraph.githubassets.com/39622188247c1ceec70b7cb54de085558d02e9879e149684e4b8f9b52618c8d2/rust-works/succinctly"
---

# succinctly

High-performance succinct data structures for Rust.

Succinctly provides space-efficient data structures with fast rank and select operations, optimized for both x86_64 (with AVX2/AVX-512) and ARM (NEON) architectures. The library is `no_std` compatible and designed for high-throughput applications.

## Features

- **Bitvector with O(1) rank and O(log n) select** - Poppy-style 3-level directory, tuned for query speed over compactness (~28-48% overhead)
- **Balanced parentheses for tree navigation** - RangeMin structure with O(1) operations and ~6% overhead
- **JSON semi-indexing with SIMD acceleration** - Up to 880 MiB/s throughput on x86_64 (AMD Zen 4) with table-driven PFSM parser
- **YAML semi-indexing** - Complete YAML 1.2 parser with anchor/alias resolution (~250-400 MiB/s)
- **DSV/CSV semi-indexing** - High-performance CSV/TSV parsing (85-1676 MiB/s) with BMI2 acceleration
- **jq/yq-style query expressions** - Navigate JSON and YAML without full parsing
- **`no_std` compatible** - Works in embedded and WASM environments
- **Cross-platform SIMD** - Runtime detection for AVX2, AVX-512, SSE4.2, and ARM NEON

### What is Semi-Indexing?

Unlike traditional parsers…
