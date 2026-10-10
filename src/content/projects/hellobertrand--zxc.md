---
repo: "hellobertrand/zxc"
name: "zxc"
description: "Lossless compression C library built for ultra-fast decode. Faster than LZ4 (40-75%+ on ARM64), at a better ratio. Official Rust, Python, Node.js, Go and WASM bindings. Write-once/read-many, with optional seekable archives for O(1) random access."
readmeQualityOk: true
url: "https://github.com/hellobertrand/zxc"
language: "C"
languages: ["C"]
languagePcts: [71]
topics: ["arm64", "c", "compression", "lz4", "high-performance", "compression-library", "lossless-compression", "lz77", "compression-algorithm", "decompression"]
stars: 471
forks: 12
openIssues: 4
closedIssues: 24
watchers: 7
contributors: 9
recentReleases: 0
createdAt: "2025-12-05T21:35:11Z"
lastCommitAt: "2026-10-10T10:04:02Z"
lastReleaseAt: "2026-01-20T11:41:12Z"
status: "thriving"
tags: ["needs_contributors", "funded"]
healthScore: 96
undervaluedScore: 30
maintainers: ["hellobertrand", "dependabot[bot]", "Vladexy88x"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b066780bf64bb52e382a12e5162a940307ae46473b953248078969043a871ab/hellobertrand/zxc"
fundingLinks: ["GITHUB:https://github.com/hellobertrand"]
discussionCount: 3
---

# ZXC - Lossless Compression Built for Ultra-Fast Decode

ZXC is a fast lossless compression algorithm, targeting write-once, read-many workloads: data compressed once at build time, then decompressed on every device that reads it. It features an extremely fast decoder, with speeds of multiple GB/s per core: levels -1 to -6 decode 1.1x to 2.6x faster than LZ4 (`lz4 --fast`, `lz4` or `lz4hc`, whichever matches the ratio) at an equal or better compression ratio.

Seven compression levels trade compression speed for ratio, and the decoder stays fast at every one of them: the densest level compresses better than `zstd -1` while decoding about twice as fast. ZXC also provides seekable archives for O(1) random access, in-place decompression, and dictionary compression for small data.

The ZXC format is fully specified in [FORMAT.md](https://github.com/hellobertrand/zxc/blob/HEAD/docs/FORMAT.md) and guarded by public conformance vectors. This repository is the reference implementation, provided as an open-source BSD 3-Clause licensed C library and a command line utility producing and decoding `.zxc` files, with official bindings for Rust, Python, Node.js, Go and WASM. The design is…
