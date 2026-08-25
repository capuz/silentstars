---
repo: "Dicklesworthstone/frankensim"
name: "frankensim"
description: "Plan-first Rust continuum for certified geometry, physics simulation, optimization, and rendering."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/frankensim"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
stars: 48
forks: 10
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-07-06T01:53:04Z"
lastCommitAt: "2026-08-25T04:08:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 33
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1290489583/a8671c6b-128f-495e-9957-537548d238eb"
---

</div>

# FrankenSim

</div>

FrankenSim is an active Rust source workspace for deterministic geometry, certified numerics, meshing, execution, evidence, and design-ledger infrastructure for simulation and design optimization.

The tree contains 166 `fs-*` crate directories: 162 in the native Cargo workspace plus the standalone `fs-wasm`, `fs-flyer-wasm`, `fs-goddard-wasm`, and `fs-tesla-wasm` workspaces. They include repository policy tooling, conformance contracts, integration tests, and implementations across substrate/runtime, numerical kernels, geometry representations, meshing, physics, solvers, adjoints, optimization, imaging, evidence, packaging, and ledger layers.

The inventory numbers in this README are derived from the root workspace
manifest, each crate's declared layer metadata, and the portable tracked-input
registry in [`doc-facts-inventory.json`](https://github.com/Dicklesworthstone/frankensim/blob/HEAD/doc-facts-inventory.json) by
`cargo run -p xtask -- check-docs`. In a Git worktree the check requires that
registry to match the current index exactly; an RCH or archive source snapshot
without `.git` validates the same checked path set instead of counting…
