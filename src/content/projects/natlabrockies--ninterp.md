---
repo: "NatLabRockies/ninterp"
name: "ninterp"
description: "Numerical interpolation in N-dimensions over rectilinear grids"
readmeQualityOk: true
url: "https://github.com/NatLabRockies/ninterp"
homepage: "https://crates.io/crates/ninterp"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["interpolation", "multidimensional", "rust", "multilinear", "numerical-analysis"]
stars: 17
forks: 13
openIssues: 7
closedIssues: 19
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2024-11-22T14:20:21Z"
lastCommitAt: "2026-08-22T04:07:20Z"
lastReleaseAt: "2025-03-07T04:11:36Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 94
undervaluedScore: 74
maintainers: ["kylecarow"]
openGraphImageUrl: "https://opengraph.githubassets.com/1604dd58ecb0c7550ca0fa0c78337f9b67188fb3243727dc23369b4b5abf828b/NatLabRockies/ninterp"
---

# ninterp

[<img alt="docs.rs" src="https://img.shields.io/badge/docs.rs-ninterp-F74C00?style=for-the-badge&logo=docs.rs" height=25>](https://docs.rs/ninterp/latest/ninterp)
[<img alt="crates.io" src="https://img.shields.io/crates/v/ninterp?style=for-the-badge&color=FFC932&logo=rust" height=25>](https://crates.io/crates/ninterp)
[<img alt="github.com" src="https://img.shields.io/badge/github-NatLabRockies/ninterp-0076BD?style=for-the-badge&logo=github" height=25>](https://github.com/NatLabRockies/ninterp/)

The `ninterp` crate provides [multivariate interpolation](https://en.wikipedia.org/wiki/Multivariate_interpolation#Regular_grid) over rectilinear grids of any dimensionality.

It is built on [`ndarray`](https://crates.io/crates/ndarray) and uses ndarray arrays/views throughout its API.
`ndarray` and [`num_traits`](https://crates.io/crates/num_traits) are re-exposed as `ninterp::ndarray` and
`ninterp::num_traits` for convenience.

Hard-coded interpolators are provided for N = 1, 2, and 3, based on the observed runtime tradeoff versus a general N-D implementation.
For higher dimensionalities (N >= 4), use `InterpND`.
All interpolators work with both owned and borrowed arrays…
