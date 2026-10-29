---
repo: "Dicklesworthstone/frankensim"
name: "frankensim"
description: "Plan-first Rust continuum for certified geometry, physics simulation, optimization, and rendering."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/frankensim"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["computational-geometry", "finite-element-method", "numerical-methods", "optimization", "physics-simulation", "rust", "scientific-computing", "simulation", "wasm"]
stars: 76
forks: 15
openIssues: 3
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2026-07-06T01:53:04Z"
lastCommitAt: "2026-10-29T21:25:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 25
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1290489583/a8671c6b-128f-495e-9957-537548d238eb"
---

# FrankenSim

FrankenSim is an active Rust source workspace for deterministic geometry, certified numerics, meshing, execution, evidence, and design-ledger infrastructure for simulation and design optimization.

The tree contains 184 `fs-*` crate directories: 164 in the native Cargo workspace
and 20 standalone workspaces listed below. They include numerical kernels,
geometry representations, meshing, physics, solvers, adjoints, optimization,
imaging, evidence, packaging and ledger implementations, together with their
contracts and tests.

The inventory numbers in this README are derived from the root workspace
manifest, each crate's declared layer metadata, and the portable tracked-input
registry in [`doc-facts-inventory.json`](https://github.com/Dicklesworthstone/frankensim/blob/HEAD/doc-facts-inventory.json) by
`cargo run -p xtask -- check-docs`. The inventory includes committed paths;
the check also checks their presence in the current index. Staged removals can
therefore block this check until their inventory change lands. An RCH or archive source snapshot
without `.git` validates the same checked path set instead of counting arbitrary
filesystem dirt. Untracked files are…
