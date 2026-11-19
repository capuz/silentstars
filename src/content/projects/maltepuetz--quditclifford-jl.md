---
repo: "maltepuetz/QuditClifford.jl"
name: "QuditClifford.jl"
description: "Qudit Clifford circuit and stabilizer-state simulation in Julia, for qubits and odd prime dimensions."
readmeQualityOk: true
url: "https://github.com/maltepuetz/QuditClifford.jl"
homepage: "https://maltepuetz.github.io/QuditClifford.jl/"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["clifford", "clifford-circuits", "julia", "quantum-computing", "quantum-information", "quantum-simulation", "qudit", "qudits", "stabilizer", "stabilizer-formalism"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2025-01-28T14:44:54Z"
lastCommitAt: "2026-11-19T11:50:08Z"
lastReleaseAt: "2026-11-12T18:22:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 83
maintainers: ["maltepuetz", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf7a021b8a62f7830d25800c1acff8457e6dcb6b3c0d8fd6cefe1a16386ccab2/maltepuetz/QuditClifford.jl"
---

# QuditClifford.jl

QuditClifford.jl simulates qubit and qudit Clifford circuits with stabilizer
tableaux, for any prime local dimension `d` and for pure and mixed stabilizer
states.

- **Clifford unitaries:** named gates for every prime `d`, general Clifford
  operators with composition and inversion, and uniformly random Cliffords and
  stabilizer states.
- **Measurements and expectation values:** projective Pauli measurements,
  exact expectation values, and dephasing, trace-out and reset channels.
- **Entanglement:** entropy, negativity, and mutual, conditional and
  tripartite information as exact integers in units of `log d`.
- **Inspection:** exact kets, state vectors and density matrices of small
  states, for debugging.

> **Development status:** QuditClifford.jl is under active development and has
> not yet reached a stable release. APIs may change before version 1.0.

## Installation

```julia
using Pkg
Pkg.add("QuditClifford")
```

QuditClifford requires Julia 1.10 or later.

## Quick start

Prepare an entangled pair of qutrits, measure one of them, and watch the
entanglement disappear:
