---
repo: "cerfacs/STADE.jl"
name: "STADE.jl"
description: "Low entry ticket to Scalable Differentiable Computing"
readmeQualityOk: true
url: "https://github.com/cerfacs/STADE.jl"
homepage: "https://cerfacs.github.io/STADE.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["automatic-differentiation", "differentiable-programming"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-23T13:25:08Z"
lastCommitAt: "2026-10-29T10:36:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 44
maintainers: ["luciano-drozda"]
openGraphImageUrl: "https://opengraph.githubassets.com/3be1d76d5a873d479e448a9ffe3da6218fac209dbe79f86b1a03217086ed4d9b/cerfacs/STADE.jl"
---

# STADE.jl 🏟️

*Low entry ticket to Scalable Differentiable Computing*

**Source Transformation Automatic Differentiation Engine** (STADE) generates source-verifiable GPU-ported (CUDA, AMDGPU, Metal, JACC)

- Adjoints
- Tangents
- Hessian-vector products (hvp)
- Primals

of monoprocessor numerical kernels written using the Julia programming language.

[Try STADE.jl out in our website!](https://cerfacs.github.io/STADE.jl)

## Why STADE.jl ?

This is a legitimate question since the Automatic Differentiation (AD) ecosystem in Julia is already rich (see [DifferentiationInterface.jl](https://github.com/JuliaDiff/DifferentiationInterface.jl)). In a nutshell, our motivations lean on obtaining:

- **Auditable** adjoints / tangents / hvp\
  STADE outputs human-readable Julia source code. This builds trust around AD tool usage to compute derivatives. It also eases debugging and development of new features.

- **Reproducible** gradient-based experiments (e.g., AI models training)\
  STADE-generated adjoints / tangents / hvp are bundled with primal source codes, such that numerical experiments are reproducible regardless of STADE availability or version in the machine they run.\
  Two limits…
