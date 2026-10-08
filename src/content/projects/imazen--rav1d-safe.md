---
repo: "imazen/rav1d-safe"
name: "rav1d-safe"
description: "Slower, safer SIMD fork of rav1d - Rust AV1 decoder with safe intrinsics replacing 160k lines of assembly"
readmeQualityOk: true
url: "https://github.com/imazen/rav1d-safe"
language: "Assembly"
languages: ["Assembly", "Rust"]
languagePcts: [50, 46]
stars: 9
forks: 3
openIssues: 0
closedIssues: 451
watchers: 1
contributors: 4
recentReleases: 2
createdAt: "2026-02-05T04:30:39Z"
lastCommitAt: "2026-10-08T10:51:45Z"
lastReleaseAt: "2026-09-08T09:08:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 67
maintainers: ["lilith"]
openGraphImageUrl: "https://opengraph.githubassets.com/4468659b0fd702abafdcc6c16187d55e21008220e4c259aa7643133cf1cacab9/imazen/rav1d-safe"
---

# rav1d-safe [](https://github.com/imazen/rav1d-safe/actions/workflows/ci.yml) [](https://crates.io/crates/rav1d-safe) [](https://lib.rs/crates/rav1d-safe) [](https://docs.rs/rav1d-safe) [](https://github.com/imazen/rav1d-safe#license)

An AV1 decoder with a native **Rust API**: `Decoder`, `Settings`, `Frame`, and
borrowed pixel-plane views are available directly from `rav1d_safe`. Forked from
[rav1d](https://github.com/memorysafety/rav1d), with checked safe Rust SIMD enabled
by default. Rust callers need neither a C FFI wrapper nor the `c-ffi` feature.

Use [zenrav1e](https://github.com/imazen/zenrav1e) to encode raw AV1 and
[zenavif](https://github.com/imazen/zenavif) for complete AVIF files, including
container handling and color conversion. See the
[compiled Rust round-trip examples](https://github.com/imazen/rav1d-safe/blob/HEAD/docs/RUST_CODEC_WORKFLOW.md).

## Quick Start

Add to your `Cargo.toml`:
```toml
[dependencies]
rav1d-safe = "0.6.0"
```

Decode an AV1 bitstream:
```rust
use rav1d_safe::{Decoder, Planes};

fn decode(obu_data: &[u8]) -> Result<(), Box<dyn std::error::Error>> {
    let mut decoder = Decoder::new()?;

    // Feed raw OBU data (not IVF/WebM containers)…
