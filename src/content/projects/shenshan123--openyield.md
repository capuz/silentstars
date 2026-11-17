---
repo: "ShenShan123/OpenYield"
name: "OpenYield"
description: "This project is a open-source yield analysis for SRAM circuits"
readmeQualityOk: true
url: "https://github.com/ShenShan123/OpenYield"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 33
forks: 7
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 9
recentReleases: 0
createdAt: "2025-02-12T02:03:19Z"
lastCommitAt: "2026-11-17T14:44:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 60
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/3727cf61c97da26faca4429d09ecead5e3a71c371d4586adee985850df6e07c2/ShenShan123/OpenYield"
---

# OpenYield V2.2.9

OpenYield builds transistor-level 6T and 10T SRAM netlists, runs DC and transient analyses with Xyce, and provides circuit-backed and offline sizing optimizers. The compiler models distributed RC wiring and samples independent local `vth0`, `u0`, and `voff` variation for each retained MOS by default.

The [layout flow](https://github.com/ShenShan123/OpenYield/blob/HEAD/sram_compiler/layout/README.md) defaults to a
1125 × 395 nm point-symmetric 6T cell, two column halves around one shared
decoder, and pitch-aligned periphery with a 2:1 column mux. Use
`layout bank --with-controller` for TIME_CONTROL, data registers, the RWL
driver and output latch. The explicit `--compact-cell --split-columns` flags
remain accepted. The [compact design record](https://github.com/ShenShan123/OpenYield/blob/HEAD/docs/design/layout/COMPACT_CELL_V2_2_8.md)
contains current geometry, physical evidence and limits; its
[annotated bitcell](https://github.com/ShenShan123/OpenYield/blob/HEAD/docs/design/layout/COMPACT_CELL_V2_2_8.png) identifies all
six MOS instances. Component and standalone controller tools remain available.
Physical checks do not qualify autonomous bank operation.…
