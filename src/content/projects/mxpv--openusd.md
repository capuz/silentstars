---
repo: "mxpv/openusd"
name: "openusd"
description: "Native Rust USD library"
readmeQualityOk: true
url: "https://github.com/mxpv/openusd"
homepage: "https://openusd.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["openusd", "rust", "usd", "usdz", "gamedev"]
stars: 120
forks: 20
openIssues: 3
closedIssues: 22
watchers: 3
contributors: 9
recentReleases: 3
createdAt: "2024-01-02T19:26:20Z"
lastCommitAt: "2026-08-16T04:06:21Z"
lastReleaseAt: "2026-08-02T01:02:48Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 97
undervaluedScore: 52
maintainers: ["mxpv", "NicTanghe", "bresilla"]
openGraphImageUrl: "https://opengraph.githubassets.com/a53d88ee26c7de4c908d43d340e21f20118a6bf342b3a2f6af6ad36452dc84cb/mxpv/openusd"
fundingLinks: ["GITHUB:https://github.com/mxpv"]
discussionCount: 1
---

</p>

# openusd

`openusd` is a Rust implementation of Pixar's [Universal Scene Description](https://openusd.org/release/index.html) (USD) format with no C++ dependencies.

For a detailed comparison with the C++ reference implementation and current progress, see the [Roadmap](https://github.com/mxpv/openusd/blob/HEAD/ROADMAP.md).

## Features

- File formats — reads and writes `.usda` (text), `.usdc` (binary), and `.usdz` (archive).
- Domain schema readers (opt-in [feature flags](#feature-flags), layered on the composed stage) — [`UsdGeom`](https://github.com/mxpv/openusd/blob/HEAD/src/schemas/geom), [`UsdLux`](https://github.com/mxpv/openusd/blob/HEAD/src/schemas/lux), [`UsdPhysics`](https://github.com/mxpv/openusd/blob/HEAD/src/schemas/physics), [`UsdRender`](https://github.com/mxpv/openusd/blob/HEAD/src/schemas/render), [`UsdSkel`](https://github.com/mxpv/openusd/blob/HEAD/src/schemas/skel), and [`UsdShade`](https://github.com/mxpv/openusd/blob/HEAD/src/schemas/shade).
- A fully featured [composition engine](https://github.com/mxpv/openusd/blob/HEAD/src/pcp) — [LIVRPS](https://docs.nvidia.com/learn-openusd/latest/creating-composition-arcs/strength-ordering/what-is-liverps.html)…
