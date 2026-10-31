---
repo: "rust-works/succinctly"
name: "succinctly"
description: "Succinct data structures"
readmeQualityOk: true
url: "https://github.com/rust-works/succinctly"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 52
forks: 4
openIssues: 81
closedIssues: 2660
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-25T22:38:29Z"
lastCommitAt: "2026-10-31T01:45:42Z"
lastReleaseAt: "2026-04-06T03:11:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 99
undervaluedScore: 47
maintainers: ["newhoggy"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb3fd61b3e8f5c1cd02bbdd09cf996879267c48b5e545b70fc4325730ac55749/rust-works/succinctly"
---

# succinctly

High-performance succinct data structures for Rust.

Succinctly provides space-efficient data structures with fast rank and select operations, optimized for both x86_64 (with AVX2/AVX-512) and ARM (NEON) architectures. The library is `no_std` compatible and designed for high-throughput applications.

## Features

- **Bitvector with O(1) rank and sampled select** - Poppy-style 3-level directory, tuned for query speed over compactness (~28-48% overhead)
- **Balanced parentheses for tree navigation** - hierarchical min-excess index for fast `find_close`/`enclose`, plus an O(1) rank directory (~58% overhead, tuned for speed)
- **JSON semi-indexing with SIMD acceleration** - Up to 880 MiB/s throughput on x86_64 (AMD Zen 4) with table-driven PFSM parser
- **YAML semi-indexing** - Complete YAML 1.2 parser with anchor/alias resolution (~250-400 MiB/s)
- **DSV/CSV semi-indexing** - High-performance CSV/TSV parsing (85-1676 MiB/s) with BMI2 acceleration
- **jq/yq-style query expressions** - Navigate JSON and YAML without full parsing
- **`no_std` compatible** - Works in embedded and WASM environments
- **Cross-platform SIMD** - Runtime detection for AVX2, AVX-512, SSE4.2, and…
