---
repo: "tile-ai/TileOPs"
name: "TileOPs"
description: "High-performance LLM operator library built on TileLang."
readmeQualityOk: true
url: "https://github.com/tile-ai/TileOPs"
homepage: "https://tile-ai.github.io/TileOPs.github.io/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 193
forks: 62
openIssues: 44
closedIssues: 1004
watchers: 3
contributors: 30
recentReleases: 0
createdAt: "2025-06-03T07:48:40Z"
lastCommitAt: "2026-10-12T11:15:59Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 46
maintainers: ["lcy-seso", "FeathBow", "zhen8838"]
openGraphImageUrl: "https://opengraph.githubassets.com/d797ad7aa41e6936c001e35f00d84e0d80853dc8e69dc52755c4eda4d3f030ce/tile-ai/TileOPs"
---

## Built for agents

An implementation can be regenerated from its spec; a spec cannot be recovered from an
implementation. TileOPs is built on that asymmetry. Agents build the whole library, not just
its kernels, so the library has to stay coherent as it grows: a consistent structure, no
drift, no bloat, code that stays maintainable. The design serves three goals:

- **Maintainable.** Every op starts as a self-contained YAML spec, and code generation reads
  the spec and nothing else. Ops in a family share interfaces and rules, and checks enforce
  the boundary between the Python op and the TileLang kernel, because a convention nobody
  enforces does not survive automated edits.
- **Verifiable.** Correctness is checked against the reference implementation the spec names,
  performance against the modelled roofline bound. Both criteria are declared in the spec
  before the code exists, and CI validates the spec, the generated code, the tests and the
  benchmarks.
- **Tunable.** The roofline model reports each kernel's gap to its bound, and nightly
  benchmarks compare each kernel with the fastest other implementation on the same GPU.

## Built with TileFoundry

TileOPs kernels are…
