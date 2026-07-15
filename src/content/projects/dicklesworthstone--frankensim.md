---
repo: "Dicklesworthstone/frankensim"
name: "frankensim"
description: "Plan-first Rust continuum for certified geometry, physics simulation, optimization, and rendering."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/frankensim"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 34
forks: 9
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-07-06T01:53:04Z"
lastCommitAt: "2026-07-15T05:54:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 36
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1290489583/a8671c6b-128f-495e-9957-537548d238eb"
---

</div>

# FrankenSim

</div>

FrankenSim is a working Rust workspace for deterministic geometry, certified numerics, meshing, execution, evidence, and design-ledger infrastructure for simulation and design optimization.

The tree contains 127 `fs-*` crate directories: 126 in the native Cargo workspace plus the standalone nested `fs-wasm` workspace. They include repository policy tooling, conformance contracts, integration tests, and working implementations across substrate/runtime, numerical kernels, geometry representations, meshing, physics, solvers, adjoints, optimization, imaging, evidence, packaging, and ledger layers.

There is not yet a packaged end-user simulation application or crates.io release. Today, FrankenSim is usable as a source workspace and library substrate.

## TL;DR

**The problem:** simulation systems often split physical units, numerical error, runtime behavior, geometry validity, evidence, and reproducibility across separate tools. That makes it too easy for an optimization run to produce an answer without a durable explanation of which assumptions, approximations, kernels, and machine conditions made the answer valid.

**The solution:** FrankenSim builds…
