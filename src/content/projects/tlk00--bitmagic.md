---
repo: "tlk00/BitMagic"
name: "BitMagic"
description: "BitMagic Library"
readmeQualityOk: true
url: "https://github.com/tlk00/BitMagic"
homepage: "http://bitmagic.io"
language: "C++"
languages: ["C++"]
languagePcts: [89]
topics: ["bit-vector", "bit-array", "integer-compression", "information-retrieval", "bit-manipulation", "indexing-engine", "sparse-matrix", "sparse-vector", "c-plus-plus", "c"]
stars: 457
forks: 51
openIssues: 11
closedIssues: 21
watchers: 19
contributors: 13
recentReleases: 0
createdAt: "2017-08-22T22:54:04Z"
lastCommitAt: "2026-11-09T04:34:23Z"
lastReleaseAt: "2018-10-08T14:11:21Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 90
undervaluedScore: 35
maintainers: ["tlk00"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0d1a8ecf80397446ca6f996a2a261a45b856779d7c2b3d404e5f1b0143168e9/tlk00/BitMagic"
---

# BitMagic C++ Library

**Compact data. Searchable representations. Hardware-efficient computation.**

BitMagic is a header-only C++17 library for compressed bit-vectors and succinct integer, string, and floating-point vectors. It provides building blocks for information retrieval, data management, data science, and scientific applications that need to search and process large datasets within a practical memory and bandwidth budget.

BitMagic treats data representation as part of the algorithm. Its containers combine memory efficiency with search-friendly layouts, Boolean operations, rank/select support, and data-parallel processing. Applications can use BitMagic to build indexes, search compact columns without separate secondary indexes, or combine both approaches.

The library supports a complete data lifecycle: construct compact containers, search and combine selections, gather values for computation, serialize to storage, and restore selected data when needed.

- **Searchable data:** evaluate supported predicates on bit-transposed columns using scanners and logical operations.
- **Compressed sets and indexes:** represent posting lists, row selections, membership information,…
