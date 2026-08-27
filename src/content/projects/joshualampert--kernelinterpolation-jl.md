---
repo: "JoshuaLampert/KernelInterpolation.jl"
name: "KernelInterpolation.jl"
description: "Multivariate (generalized) scattered data interpolation with symmetric (conditionally) positive definite kernel functions in arbitrary dimension"
readmeQualityOk: true
url: "https://github.com/JoshuaLampert/KernelInterpolation.jl"
homepage: "https://joshualampert.github.io/KernelInterpolation.jl/"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["interpolation", "kernel-methods", "radial-basis-function", "julia", "collocation-method", "numerical-simulation-framework", "meshfree", "simulation"]
stars: 20
forks: 2
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-10-30T14:18:52Z"
lastCommitAt: "2026-08-27T14:27:32Z"
lastReleaseAt: "2024-12-04T16:55:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 66
maintainers: ["JoshuaLampert", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/36e1a9aec5d9e3450ec5583098d92f637a978dd370176b07f9a958c80252fc54/JoshuaLampert/KernelInterpolation.jl"
---

# KernelInterpolation.jl

**KernelInterpolation.jl** is a [Julia](https://julialang.org/) package that
implements methods for multivariate interpolation in arbitrary dimension based on symmetric (conditionally) positive-definite kernels
with a focus on radial basis functions. It can be used for classical interpolation of scattered data, as well as for generalized
(Hermite-Birkhoff) interpolation by using a meshfree collocation approach. This can be used to solve partial differential equations both
stationary ones and time-dependent ones by using some time integration method from [OrdinaryDiffEq.jl](https://github.com/SciML/OrdinaryDiffEq.jl).
Additionally, local radial basis function finite differences (RBF-FD) are supported for sparse PDE discretization.

## Installation

If you have not yet installed Julia, then you first need to [download Julia](https://julialang.org/downloads/). Please
[follow the instructions for your operating system](https://julialang.org/downloads/platform/). KernelInterpolation.jl
works with Julia v1.10 and newer. KernelInterpolation.jl is a registered Julia package. Therefore, you can install it by
executing the following commands from the Julia REPL…
