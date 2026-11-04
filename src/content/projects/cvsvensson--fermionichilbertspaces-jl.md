---
repo: "cvsvensson/FermionicHilbertSpaces.jl"
name: "FermionicHilbertSpaces.jl"
description: "Tensor products, partial traces and operators on fermionic hilbert spaces."
readmeQualityOk: true
url: "https://github.com/cvsvensson/FermionicHilbertSpaces.jl"
homepage: "https://cvsvensson.github.io/FermionicHilbertSpaces.jl/"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["fermionic-information-theory", "fermions", "quantum", "quantum-information"]
stars: 11
forks: 0
openIssues: 10
closedIssues: 14
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-06-08T07:04:49Z"
lastCommitAt: "2026-11-04T11:28:25Z"
lastReleaseAt: "2025-07-03T06:56:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 69
maintainers: ["cvsvensson-robot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8806c4f8317f92dd41d2f6c93ff45dce2e5ff336b59a18f2f25b6ea3f859a909/cvsvensson/FermionicHilbertSpaces.jl"
---

# FermionicHilbertSpaces.jl

FermionicHilbertSpaces.jl turns symbolic fermion, boson and spin operators into matrices on Hilbert spaces, so you never index vectors and matrices by hand.
- **Symbolic operators:** fermions, bosons and spins are combined algebraically, e.g. `f[1]'f[2] + hc`, and simplified with their commutation relations. `representation` turns them into matrices on any Hilbert space.
- **Hilbert spaces:** spaces keep track of their basis states and ordering, so you never index by hand. They can be restricted by particle number, parity or any rule on the basis states ([constrained spaces](https://cvsvensson.github.io/FermionicHilbertSpaces.jl/dev/conservation/)).
- **Tensor products and partial traces:** spaces combine and split, as in `partial_trace(ρ, H => Hsub)`, with fermionic signs handled automatically ([fermionic conventions](https://cvsvensson.github.io/FermionicHilbertSpaces.jl/dev/fermions/)).
- **Extensible:** custom operators and spaces can be added, see [Extending](https://cvsvensson.github.io/FermionicHilbertSpaces.jl/dev/extending/).

It is not a solver: combine it with LinearAlgebra, KrylovKit or ODE solvers for eigenstates and time evolution.…
