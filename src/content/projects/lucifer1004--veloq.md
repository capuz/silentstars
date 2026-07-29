---
repo: "lucifer1004/VeloQ"
name: "VeloQ"
description: "Agent-friendly GPU profile-query CLI"
readmeQualityOk: true
url: "https://github.com/lucifer1004/VeloQ"
homepage: "https://lucifer1004.github.io/VeloQ/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["cli", "cuda", "gpu", "ncu", "nsys", "profiling"]
stars: 107
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 8
createdAt: "2026-06-05T01:14:24Z"
lastCommitAt: "2026-07-29T06:15:24Z"
lastReleaseAt: "2026-07-29T05:15:20Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 79
undervaluedScore: 22
maintainers: ["lucifer1004"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fe3f0ffd016e63a5a0bcd46a9410d8f6923669892bd169bd3013ce8ed32439d/lucifer1004/VeloQ"
discussionCount: 1
---

</p>

<h1 align="center">VeloQ</h1>

**Agent-friendly profile-query CLI family.** JSON by default, with
CSV/table projections where useful. One command answers one question.
VeloQ is designed for coding agents and scripts that need GPU profile
evidence without opening a GUI.

VeloQ covers three profile sources today — **Nsight Systems** (timeline
traces), **Nsight Compute** (kernel reports), and experimental
**PyTorch/Kineto** Chrome traces — through a single binary with a shared
envelope and a pluggable `ProfileSource` trait. The PyTorch/Kineto source
covers the Perfetto-style Chrome trace shape used by PyTorch profiler.

## Status

- 17 NSys verbs, including timeline analysis, static SVG figures,
  kernel overlap, NCU handoff, prep/cache helpers, and schema.
- 11 NCU verbs: `summary`, `launches`, `inspect`, `metrics`, `disasm`,
  `ranges`, `graphs`, `sources`, `source-metrics`, `warp-stalls`,
  and `schema`.
- 10 experimental PyTorch verbs: `summary`, `search`, `inspect`,
  `stats`, `correlate`, `timeline`, `slices`, `collectives`, `prep`,
  and `schema`.
- Six root meta verbs: `info`, `sources`, `clean`, `recipes`, `agent`,
  and `self-update`.

JSON output uses one `v1`…
