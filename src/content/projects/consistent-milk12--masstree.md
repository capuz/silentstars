---
repo: "consistent-milk12/masstree"
name: "masstree"
description: "An implementation of the C++ Masstree data structure in Rust."
readmeQualityOk: true
url: "https://github.com/consistent-milk12/masstree"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 226
forks: 4
openIssues: 0
closedIssues: 6
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-12-14T13:18:07Z"
lastCommitAt: "2026-11-08T14:14:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 35
maintainers: ["consistent-milk12"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d31386f3e81b8e80fce93466cea771d3717eeaedfa91f86f90d557e2b4e8808/consistent-milk12/masstree"
---

# masstree

Disclaimer: Heavy use of AI to debug and diagnose issues from this commit onwards.

A high-performance concurrent ordered map for Rust. It stores keys as `&[u8]` and supports variable-length keys by building a trie of B+trees, based on the [Masstree paper](https://pdos.csail.mit.edu/papers/masstree:eurosys12.pdf)

**Disclaimer:** This is an independent implementation. It is not endorsed by, affiliated with, or connected to the original Masstree authors or their institutions.

## Status

Current Version: v1.0.0

Significantly reduced duplicate code through trait based abstractions, while improving performance further. All standard data structure features are implemented and streamlined, on top the specialized features like range scans and prefix queries. From latency analysis, it seems to have a surprisingly strong tail latency profile for a concurrent ordered map. The cache-line aligned layout design and aggressive prefetching seems to have paid off, on top of masstree's original excellent architecture.

The next issues to work on are the memory profile (some progress) and memcomparable mappings for general key types, before 1.0.

NOTE: All benchmarks were run with…
