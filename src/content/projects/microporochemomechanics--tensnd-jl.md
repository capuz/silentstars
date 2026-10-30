---
repo: "MicroPoroChemoMechanics/TensND.jl"
name: "TensND.jl"
description: "Package allowing tensor calculations in arbitrary coordinate systems."
readmeQualityOk: true
url: "https://github.com/MicroPoroChemoMechanics/TensND.jl"
homepage: "https://microporochemomechanics.github.io/TensND.jl/"
language: "Julia"
languages: ["Julia"]
languagePcts: [98]
topics: ["coordinate-systems", "numeric", "symbolic", "tensor", "differential-calculation"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-08-11T08:12:33Z"
lastCommitAt: "2026-10-30T10:22:59Z"
lastReleaseAt: "2026-07-22T06:02:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 83
maintainers: ["jfbarthelemy"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b7a209365a6f362c57e39e8b299409930ccd592f978db38a3f1ca3bcd0bce3d/MicroPoroChemoMechanics/TensND.jl"
---

# TensND.jl

*Symbolic and numerical tensor calculations in arbitrary coordinate systems.*

## Introduction

`TensND.jl` handles tensors of any order and dimension in arbitrary coordinate
systems — cartesian, polar, cylindrical, spherical, spheroidal, or user-defined.
A basis carries its metric, so covariant and contravariant components are
related rather than assumed, and the differential operators follow from the
chart. The same code runs **symbolically** (via
[SymPyPythonCall.jl](https://github.com/jverzani/SymPyPythonCall.jl) and
[Symbolics.jl](https://github.com/JuliaSymbolics/Symbolics.jl)) and
**numerically** (via [ForwardDiff.jl](https://github.com/JuliaDiff/ForwardDiff.jl)).

### Key features

- **Basis types**: canonical, rotated, orthogonal, and fully general non-orthogonal bases, with covariant/contravariant components and the metric that relates them
- **Tensor algebra**: products (`⊗`, `⊗ˢ`, `⊠`, `⊠ˢ`, `⋅`, `⊡`, `⊙`), change of basis, variance management
- **Structured tensors**: isotropic (`TensISO`), transversely isotropic (`TensTI`), cubic (`TensCubic`), orthotropic (`TensOrtho`) — 2, 5, 3 and 9 stored scalars instead of 81 components, with closed-form products…
