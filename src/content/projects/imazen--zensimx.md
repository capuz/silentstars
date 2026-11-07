---
repo: "imazen/zensimx"
name: "zensimx"
description: "zensim research: training, evaluation and experiment records. The published zensim crate lives in imazen/zensim."
readmeQualityOk: true
url: "https://github.com/imazen/zensimx"
homepage: "https://imazen.github.io/zensimx/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [50, 43]
stars: 7
forks: 2
openIssues: 12
closedIssues: 24
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-22T18:37:22Z"
lastCommitAt: "2026-11-07T09:29:28Z"
lastReleaseAt: "2026-03-29T15:36:47Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 90
undervaluedScore: 64
maintainers: ["lilith"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c8662ba93f9c209ad80297ca812dcd47fe277c7ea99dcbd88ae0a64731b2ce5/imazen/zensimx"
---

# zensim [](https://github.com/imazen/zensimx/actions/workflows/ci.yml) [](https://crates.io/crates/zensim) [](https://lib.rs/crates/zensim) [](https://docs.rs/zensim) [](https://doc.rust-lang.org/cargo/reference/manifest.html#the-rust-version-field) [](#license)

> **This is zensimx, the zensim research repository** (renamed from imazen/zensim on 2026-10-28):
> training, evaluation, experiment records and the research API. The published `zensim` crate is
> developed and released from [imazen/zensim](https://github.com/imazen/zensim), which continues from
> zensim 0.2.7. The `zensim` and `zensim-regress` packages here are `publish = false`.

A perceptual image quality score for codec quality targeting: users choose one
score, and encoders choose the settings to reach it.

Built on the same psychovisual foundations as SSIMULACRA2 and butteraugli — multi-scale SSIM, edge artifacts, detail loss, and high-frequency features in XYB color space — but with trained weights, fused SIMD kernels, and multi-threaded computation.

**Current checkout (2026-10-19):** the user-facing control is one target score.
`codec_target()` returns **B / zensim-b: diff+frag-820 (Rev5)**; D is an explicit…
