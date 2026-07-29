---
repo: "Apich-Organization/bincode"
name: "bincode"
description: "Bincode-next: The next rust implementation of bincode"
readmeQualityOk: true
url: "https://github.com/Apich-Organization/bincode"
homepage: "http://bincode-next.apich.org/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["crate", "crates", "deserialization", "foundations", "high-performance", "performance", "rust", "rust-crate", "serialization"]
stars: 52
forks: 6
openIssues: 2
closedIssues: 20
watchers: 2
contributors: 112
recentReleases: 0
createdAt: "2025-12-19T11:58:54Z"
lastCommitAt: "2026-07-29T06:14:20Z"
lastReleaseAt: "2026-03-29T03:37:52Z"
status: "thriving"
tags: ["needs_contributors", "funded", "community_hub"]
healthScore: 94
undervaluedScore: 42
maintainers: ["panayang", "google-labs-jules[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/edbb84dc2466ef59674d62e411574c8eaccc0520af3e4af4eb8aa2da0d3a51d7/Apich-Organization/bincode"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/bincode-next"]
discussionCount: 29
---

# Bincode-Next

**Bincode-Next** is a high-performance binary encoder/decoder pair that uses a zero-fluff encoding scheme. It is a modernized fork of the original `bincode` library, maintained by the Apich Organization to ensure continued development and extreme performance optimizations for the Rust ecosystem.

The size of the encoded object will be the same or smaller than the size that the object takes up in memory in a running Rust program.

## Key Features

- **Performance**: Leverages SIMD (SSE2 on x86_64, NEON on AArch64) for rapid varint scanning and bulk primitive copying for massive throughput.
- **Zero-Copy**: Nested zero-copy support via Relative Pointers and const alignment. (optional `zero-copy` feature)
- **Bit-Packing**: Bit-level packing for space-optimized serialization. (`BitPacked` derive + `config.with_bit_packing()`)
- **Schema Fingerprinting**: 64-bit schema hash covering field names, types, order, and full configuration — format changes (Bincode vs CBOR), endianness, integer encoding, and CBOR options all produce distinct fingerprints. (`Fingerprint` derive + `config.with_fingerprint()`)
- **Compile-time Memory Bounds**: `StaticSize` gives a worst-case byte…
