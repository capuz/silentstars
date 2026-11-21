---
repo: "rust-works/succinctly"
name: "succinctly"
description: "Succinct data structures"
readmeQualityOk: true
url: "https://github.com/rust-works/succinctly"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 54
forks: 4
openIssues: 169
closedIssues: 3463
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-25T22:38:29Z"
lastCommitAt: "2026-11-21T12:50:53Z"
lastReleaseAt: "2026-04-06T03:11:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 99
undervaluedScore: 48
maintainers: ["newhoggy"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e4b8458b71b107e71ad32b12f0502cb2378d8887087d1234a6c494c3285631b/rust-works/succinctly"
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
- **jq/yq-style query expressions** - Navigate JSON and YAML without full parsing (`succinctly jq` follows jq 1.7.1; `succinctly yq` is a preview, see [CLI Tool](#cli-tool))
- **`no_std` compatible** - Works in embedded and…
