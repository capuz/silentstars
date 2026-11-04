---
repo: "PTsolvers/JustRelax.jl"
name: "JustRelax.jl"
description: "Pseudo-transient accelerated iterative solvers"
readmeQualityOk: true
url: "https://github.com/PTsolvers/JustRelax.jl"
homepage: "https://ptsolvers.github.io/JustRelax.jl/dev/"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["cuda", "geodynamics", "hpc", "julialang", "parallel"]
stars: 46
forks: 13
openIssues: 2
closedIssues: 22
watchers: 4
contributors: 18
recentReleases: 0
createdAt: "2021-09-01T20:03:23Z"
lastCommitAt: "2026-11-04T13:06:31Z"
lastReleaseAt: "2024-10-13T08:06:53Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 58
maintainers: ["albert-de-montserrat", "aelligp", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/402188367/150d5001-955a-4e73-afb2-9b1305fa456c"
discussionCount: 1
---

> Need to solve a large multiphysics problem on many GPUs in parallel? Just Relax!

JustRelax.jl is a Julia package for geodynamic modeling with matrix-free, accelerated pseudo-transient solvers. It supports two- and three-dimensional applications on CPUs and GPUs, including distributed-memory runs with MPI.

JustRelax.jl supports Julia 1.10 through 1.12. Start with the CPU backend, then
use the [backend guide](https://ptsolvers.github.io/JustRelax.jl/dev/man/backend)
to configure CUDA, AMDGPU, or MPI workflows.

The package is part of the [PTSolvers organisation](https://ptsolvers.github.io/) and was developed within the [GPU4GEO project](https://www.pasc.ch/projects/2021-2024/gpu4geo/). For an overview of the methods and examples, see the [documentation](https://ptsolvers.github.io/JustRelax.jl/dev/).

## Highlights

- Matrix-free iterative solvers for Stokes, thermal, and coupled geodynamic problems.
- CPU and GPU backends, with support for CUDA and AMDGPU through Julia’s package extensions.
- MPI-based domain decomposition via [ImplicitGlobalGrid.jl](https://github.com/omlins/ImplicitGlobalGrid.jl).
- Building blocks for material properties, particle methods, and constitutive…
