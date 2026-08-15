---
repo: "SciML/DiffEqGPU.jl"
name: "DiffEqGPU.jl"
description: "GPU-acceleration routines for DifferentialEquations.jl and the broader SciML scientific machine learning ecosystem"
readmeQualityOk: true
url: "https://github.com/SciML/DiffEqGPU.jl"
homepage: "https://docs.sciml.ai/DiffEqGPU/stable/"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["gpu", "gpu-parallelism", "differentialequations", "differential-equations", "ode", "sde", "dae", "dde", "neural-ode", "neural-differential-equations"]
stars: 325
forks: 41
openIssues: 30
closedIssues: 71
watchers: 6
contributors: 50
recentReleases: 0
createdAt: "2019-06-24T19:22:02Z"
lastCommitAt: "2026-08-15T04:03:03Z"
lastReleaseAt: "2020-07-09T04:03:25Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded"]
healthScore: 92
undervaluedScore: 38
maintainers: ["ChrisRackauckas", "ChrisRackauckas-Claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/18f085edc15ba75a67f8e902cfc22b1464ec3016e441d4e348a43594e366a8df/SciML/DiffEqGPU.jl"
fundingLinks: ["GITHUB:https://github.com/SciML"]
---

# DiffEqGPU

This library is a component package of the DifferentialEquations.jl ecosystem. It includes
functionality for making use of GPUs in the differential equation solvers.

## The two ways to accelerate ODE solvers with GPUs

There are two very different ways that one can
accelerate an ODE solution with GPUs. There is one case where `u` is very big and `f`
is very expensive but very structured, and you use GPUs to accelerate the computation
of said `f`. The other use case is where `u` is very small but you want to solve the ODE
`f` over many different initial conditions (`u0`) or parameters `p`. In that case, you can
use GPUs to parallelize over different parameters and initial conditions. In other words:

| Type of Problem                           | SciML Solution                                                                                           |
|:----------------------------------------- |:-------------------------------------------------------------------------------------------------------- |
| Accelerate a big ODE                      | Use [CUDA.jl's](https://cuda.juliagpu.org/stable/) CuArray as `u0`                                       |
| Solve the same…
