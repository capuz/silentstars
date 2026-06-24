---
repo: "garrekstemo/TransferMatrix.jl"
name: "TransferMatrix.jl"
description: "A general 4x4 transfer matrix for optical waves in layered media for Julia"
url: "https://github.com/garrekstemo/TransferMatrix.jl"
homepage: "https://garrekstemo.github.io/TransferMatrix.jl/stable/"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["optics", "optics-simulation", "transfer-matrix-method", "thin-films"]
stars: 18
forks: 1
openIssues: 15
closedIssues: 36
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-08-31T07:24:58Z"
lastCommitAt: "2026-06-24T00:25:31Z"
lastReleaseAt: "2025-03-06T04:08:20Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 87
undervaluedScore: 47
maintainers: ["garrekstemo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/83fac2923c9a22be014c4c1156dda2a8049924501c840abfb7b744efbb8e0935/garrekstemo/TransferMatrix.jl"
---

# TransferMatrix.jl

A general 4x4 transfer-matrix optics for layered media in Julia, with support for
isotropic stacks and polarization-resolved results.

## Highlights

- Isotropic multilayers with polarization-resolved reflection/transmission
- Angle and thickness sweeps for dispersion maps
- RefractiveIndex.jl integration plus custom dispersions
- Field profiles and interface positions for visualization
- Anisotropic layers and cross-polarization available but still experimental

## Installation

```julia
julia>]
pkg> add TransferMatrix
```

```julia
using TransferMatrix
```

## Quickstart

```julia
using TransferMatrix
using RefractiveIndex

λ = 0.6328  # μm
air = Layer(λ -> 1.0 + 0.0im, 0.0)
glass = Layer(RefractiveMaterial("main", "SiO2", "Malitson"), 0.5)

layers = [air, glass, air]
result = transfer(λ, layers; θ=0.0)
@show result.Rpp result.Tpp
```

## Anisotropic layer + angle sweep

```julia
using TransferMatrix

no = λ -> 1.658
ne = λ -> 1.486
crystal = Layer(no, no, ne, 0.5; euler=(0, pi/4, 0))
air = Layer(λ -> 1.0 + 0.0im, 0.0)

λs = range(0.45, 0.75, length=200)
θs = range(0.0, 0.8, length=150)
result = sweep_angle(λs, θs, [air, crystal, air])
Rpp = result.Rpp
```…
