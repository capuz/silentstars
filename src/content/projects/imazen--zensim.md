---
repo: "imazen/zensim"
name: "zensim"
description: "Fast psychovisual image similarity metric"
readmeQualityOk: true
url: "https://github.com/imazen/zensim"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [56, 38]
stars: 6
forks: 2
openIssues: 11
closedIssues: 24
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-22T18:37:22Z"
lastCommitAt: "2026-10-18T08:16:42Z"
lastReleaseAt: "2026-03-29T15:36:47Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 91
undervaluedScore: 60
maintainers: ["lilith"]
openGraphImageUrl: "https://opengraph.githubassets.com/f12f62be4e02b04c2f1b290eca8baa7f145cc977136e9bae1c26bb6f4be23c43/imazen/zensim"
---

# zensim [](https://github.com/imazen/zensim/actions/workflows/ci.yml) [](https://crates.io/crates/zensim) [](https://lib.rs/crates/zensim) [](https://docs.rs/zensim) [](https://doc.rust-lang.org/cargo/reference/manifest.html#the-rust-version-field) [](#license)

A perceptual image quality score for codec quality targeting: users choose one
score, and encoders choose the settings to reach it.

Built on the same psychovisual foundations as SSIMULACRA2 and butteraugli — multi-scale SSIM, edge artifacts, detail loss, and high-frequency features in XYB color space — but with trained weights, fused SIMD kernels, and multi-threaded computation.

**Current checkout (2026-09-07):** the user-facing control is one target score.
`codec_target()` returns B; D is an explicit fast profile. Negative scores are
valid. The benchmark tables below are historical measurements, not a fresh
qualification of today's profiles. See the [current integration guide](https://github.com/imazen/zensim/blob/main/docs/CODEC_TARGET_METRIC.md)
for bake identities, actual consumer behavior and the remaining dial requirements.

**Interactive chart exploration**: <https://imazen.github.io/zensim/> — scatter zensim /…
