---
repo: "imazen/heic"
name: "heic"
description: "Pure Rust HEIC/HEIF image decoder"
url: "https://github.com/imazen/heic"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 8
forks: 3
openIssues: 8
closedIssues: 9
watchers: 1
contributors: 1
recentReleases: 6
createdAt: "2026-01-22T02:38:50Z"
lastCommitAt: "2026-06-28T01:45:10Z"
lastReleaseAt: "2026-05-19T06:44:52Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 88
undervaluedScore: 57
maintainers: ["lilith"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a66ba34d66a5415c70cbf7a0c7593bafded205624072e8fbd0cd53457ac89d4/imazen/heic"
---

# heic [](https://github.com/imazen/heic/actions/workflows/ci.yml) [](https://crates.io/crates/heic) [](https://lib.rs/crates/heic) [](https://docs.rs/heic) [](https://doc.rust-lang.org/cargo/reference/manifest.html#the-rust-version-field) [](#license)

HEIC/HEIF image decoder for Rust. Ships with a pure-Rust HEVC backend AND optional native backends for Windows (Media Foundation), Apple (VideoToolbox), Android (MediaCodec), and Linux (VA-API) — pick the patent-licensed path that ships with the platform, or fall back to the pure-Rust decoder. The parent crate is `#![forbid(unsafe_code)]`; FFI lives in isolated subcrates.

> ⚠️ **Patent notice:** HEVC/HEIF may be covered by third-party patents
> (Access Advance and others). Imazen grants copyright permissions
> only — see [Patents](#patents).

- `#![forbid(unsafe_code)]` — zero unsafe blocks in the entire codebase
- `no_std + alloc` compatible (compiles for wasm32-unknown-unknown)
- Multi-codec: HEVC (built-in), AV1 via [rav1d-safe] (`av1` feature), uncompressed HEIF via [zenflate] (`unci` feature)
- AVX2/SSE4.1/NEON SIMD acceleration with automatic scalar fallback
- Cooperative cancellation via [enough] — all decode paths check…
