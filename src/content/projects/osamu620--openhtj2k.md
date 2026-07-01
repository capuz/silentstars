---
repo: "osamu620/OpenHTJ2K"
name: "OpenHTJ2K"
description: "An open source implementation of ITU-T Rec.814 | ISO 15444-15 (a.k.a. HTJ2K)."
url: "https://github.com/osamu620/OpenHTJ2K"
homepage: "https://htj2k-demo.pages.dev"
language: "C++"
languages: ["C++"]
languagePcts: [82]
topics: ["htj2k", "jpeg2000", "jpeg2000-part15", "wasm", "webassembly", "jpip"]
stars: 46
forks: 13
openIssues: 9
closedIssues: 31
watchers: 3
contributors: 9
recentReleases: 0
createdAt: "2021-06-15T09:01:07Z"
lastCommitAt: "2026-07-01T07:05:18Z"
lastReleaseAt: "2025-12-24T11:55:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 57
maintainers: ["osamu620", "palemieux"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c12e42fc3c948b372344978da3c7bb23849bede5640a042a973a12b5069172a/osamu620/OpenHTJ2K"
---

# OpenHTJ2K

OpenHTJ2K is an open-source C++ implementation of **JPEG 2000 Part 1**
(ITU-T Rec. T.800 | ISO/IEC 15444-1) and **High-Throughput JPEG 2000**
(Part 15; ITU-T Rec. T.814 | ISO/IEC 15444-15), with SIMD acceleration
across x86-64, AArch64, and WebAssembly, a built-in multi-threaded
pipeline, and a live RFC 9828 RTP receiver that sustains **4K @ 60 fps
on modern x86-64**.

**Links:** [🌐 Website](https://osamu620.github.io/OpenHTJ2K/) · [▶ Live demo](https://htj2k-demo.pages.dev/) · [📖 Docs](docs/README.md)

## Highlights

**Standards compliance**
- Full HTJ2K encode + decode and Part 1 decode; partial Part 2
  (Downsampling Factor Structures, Arbitrary Transform Kernels).
- Fully conformance-tested against ITU-T Rec. T.803 | ISO/IEC 15444-4; 582
  tests in CI.
- JPH (`.jph`) file format, including colour specification box parsing
  for automatic YCbCr colorspace detection.

**Performance**
- SIMD: **AVX2**, **AVX-512** (x86-64), **NEON** (AArch64), and
  **WASM SIMD** 128-bit — for color transform, DWT, and HT block coding.
- Built-in thread pool for both encode and decode.
- Three decode APIs so callers can pick their memory/latency tradeoff:
  `invoke()` (batch),…
