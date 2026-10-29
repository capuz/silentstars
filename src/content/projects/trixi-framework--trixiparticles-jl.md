---
repo: "trixi-framework/TrixiParticles.jl"
name: "TrixiParticles.jl"
description: "TrixiParticles.jl: Particle-based multiphysics simulations in Julia"
readmeQualityOk: true
url: "https://github.com/trixi-framework/TrixiParticles.jl"
homepage: "https://trixi-framework.github.io/TrixiParticles.jl/"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["julia", "multiphysics", "simulation", "smoothed-particle-hydrodynamics", "sph"]
stars: 84
forks: 25
openIssues: 114
closedIssues: 93
watchers: 7
contributors: 25
recentReleases: 0
createdAt: "2022-06-20T13:16:09Z"
lastCommitAt: "2026-10-29T10:37:18Z"
lastReleaseAt: "2025-01-17T20:25:53Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 83
undervaluedScore: 47
maintainers: ["efaulhaber", "svchb", "LasNikas"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4a44bbe511b969f7cf47c666b64d1b7dba780b43f9651141b45113a2b574619/trixi-framework/TrixiParticles.jl"
---

# TrixiParticles.jl

**TrixiParticles.jl** is a high-performance numerical simulation framework for particle-based methods in complex multiphysics applications, written in [Julia](https://julialang.org).
It combines an accessible user interface with an extensible architecture for developing new methods, while offering high performance on both CPU and GPU.

TrixiParticles.jl focuses on the following use cases:

- Accurate and efficient physics-based modeling of complex multiphysics problems.
- Development of new particle-based methods and models.
- Accessible simulation setup for educational purposes, including student projects, coursework, and thesis work.

It offers intuitive configuration, robust pre- and post-processing, and vendor-agnostic GPU support based on the Julia package [KernelAbstractions.jl](https://github.com/JuliaGPU/KernelAbstractions.jl).

## Conference Talks

## Features
- Incompressible Navier-Stokes flows
  - Methods: Weakly Compressible Smoothed Particle Hydrodynamics (WCSPH), Entropically Damped Artificial Compressibility (EDAC),
    Implicit Incompressible Smoothed Particle Hydrodynamics (IISPH)
  - Models: Surface Tension, Open Boundaries
- Structural…
