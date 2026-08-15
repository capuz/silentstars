---
repo: "SciML/SciMLBase.jl"
name: "SciMLBase.jl"
description: "The Base interface of the SciML ecosystem"
readmeQualityOk: true
url: "https://github.com/SciML/SciMLBase.jl"
homepage: "https://docs.sciml.ai/SciMLBase/stable"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["julia", "ode", "sciml", "dae", "dde", "differentialequations", "ordinary-differential-equations", "scientific-machine-learning", "sde"]
stars: 175
forks: 128
openIssues: 88
closedIssues: 157
watchers: 9
contributors: 107
recentReleases: 0
createdAt: "2021-01-26T03:30:55Z"
lastCommitAt: "2026-08-15T04:03:07Z"
lastReleaseAt: "2021-02-01T22:34:06Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded", "fork_magnet"]
healthScore: 92
undervaluedScore: 47
maintainers: ["ChrisRackauckas-Claude", "ChrisRackauckas", "JamesWrigley"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6d797b73dfbf1accbd9a89a0a61f23500332cfaa4db3fe3686539a85c9d70cf/SciML/SciMLBase.jl"
fundingLinks: ["GITHUB:https://github.com/SciML"]
---

# SciMLBase

SciMLBase.jl is the core interface definition of the SciML ecosystem. It is a
low dependency library made to be depended on by the downstream libraries to
supply the common interface and allow for interexchange of mathematical problems.

## v3.0 Breaking Changes

#### RecursiveArrayTools v4: Solution types are now AbstractArrays (#1297)

**Most impactful change.** `AbstractVectorOfArray` (and thus `ODESolution`, `DDESolution`, `RODESolution`, `DAESolution`) now subtypes `AbstractArray`:

- **`sol[i]` returns the `i`th scalar element** (column-major), not the `i`th timestep. Use `sol.u[i]` or `sol[:, i]` for timesteps.
- **`length(sol)` returns total elements** (`prod(size(sol))`). Use `length(sol.u)` for number of timesteps.
- **`iterate(sol)` iterates scalar elements**. Use `sol.u` for timestep iteration.
- **`map(f, sol)` maps over elements**. Use `map(f, sol.u)` for timesteps.

#### Ensemble RNG redesign (#1252)

- `prob_func(prob, i, repeat)` → `prob_func(prob, ctx)` where `ctx::EnsembleContext`
- `output_func(sol, i)` → `output_func(sol, ctx)`
- `EnsembleContext` includes `sim_id`, `repeat`, `rng`, `sim_seed`, `worker_id`, `master_rng`
- New…
