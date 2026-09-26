---
repo: "imazen/butteraugli"
name: "butteraugli"
description: "Pure Rust implementation of Google's butteraugli perceptual image quality metric"
readmeQualityOk: true
url: "https://github.com/imazen/butteraugli"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
stars: 8
forks: 4
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-12-25T16:43:12Z"
lastCommitAt: "2026-09-26T08:48:36Z"
lastReleaseAt: "2026-04-17T14:45:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 68
maintainers: ["lilith"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b97c620ba340ab01768f3600d5ed962fa55ded8bf187d43bfa138f37a358c3f/imazen/butteraugli"
---

# butteraugli [](https://github.com/imazen/butteraugli/actions/workflows/ci.yml) [](https://crates.io/crates/butteraugli) [](https://lib.rs/crates/butteraugli) [](https://docs.rs/butteraugli)  [](#license) [](https://codecov.io/gh/imazen/butteraugli)

A pure-Rust port of **butteraugli**, the perceptual image-difference metric from
Google's [libjxl](https://github.com/libjxl/libjxl). It models human vision —
opsin dynamics, an opponent XYB color space, visual masking, and multi-scale
frequency analysis — to estimate how different two images *look*, where
pixel-wise metrics like PSNR and MSE do not. Scores are validated against
libjxl's `butteraugli_main` to within FMA rounding noise. No C dependencies;
runtime SIMD dispatch (AVX-512 / AVX2 / SSE4.2 / NEON / WASM) via
[`archmage`](https://crates.io/crates/archmage); safe Rust by default
(`unsafe-performance` is opt-in).

## Quick start

```toml
[dependencies]
butteraugli = "0.9.4"
```

```rust
use butteraugli::{butteraugli, ButteraugliParams, Img, RGB8};

// Two equally-sized images as packed RGB8 pixels (sRGB, gamma-encoded).
let reference: Vec<RGB8> = decode_reference();
let distorted: Vec<RGB8> = decode_distorted();

let r =…
