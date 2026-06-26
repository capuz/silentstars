---
repo: "SciML/NonlinearSolve.jl"
name: "NonlinearSolve.jl"
description: "High-performance and differentiation-enabled nonlinear solvers (Newton methods), bracketed rootfinding (bisection, Falsi), with sparsity and Newton-Krylov support."
url: "https://github.com/SciML/NonlinearSolve.jl"
homepage: "https://docs.sciml.ai/NonlinearSolve/stable/"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["nonlinear-equations", "steady-state", "equilibrium", "deep-equilibrium-models", "bracketing", "newton-raphson", "sparse-matrices", "high-performance-computing", "differential-equations", "factorization"]
stars: 300
forks: 70
openIssues: 48
closedIssues: 194
watchers: 9
contributors: 82
recentReleases: 0
createdAt: "2020-08-30T10:54:01Z"
lastCommitAt: "2026-06-26T21:30:49Z"
lastReleaseAt: "2021-01-30T12:18:41Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded"]
healthScore: 94
undervaluedScore: 40
maintainers: ["ChrisRackauckas", "ChrisRackauckas-Claude", "Proektsoft-EOOD"]
openGraphImageUrl: "https://opengraph.githubassets.com/b679aacc3015523f3c63747da6fabce1471c6e79e67ff79af946fe5748c9998f/SciML/NonlinearSolve.jl"
fundingLinks: ["GITHUB:https://github.com/SciML"]
---

# NonlinearSolve.jl

Fast implementations of root finding algorithms in Julia that satisfy the SciML common interface.

For information on using the package,
[see the stable documentation](https://docs.sciml.ai/NonlinearSolve/stable/). Use the
[in-development documentation](https://docs.sciml.ai/NonlinearSolve/dev/) for the version of
the documentation which contains the unreleased features.

## High Level Examples

```julia
using NonlinearSolve, StaticArrays

f(u, p) = u .* u .- 2
u0 = @SVector[1.0, 1.0]
prob = NonlinearProblem(f, u0)
sol = solve(prob)

## Bracketing Methods

f(u, p) = u .* u .- 2.0
u0 = (1.0, 2.0) # brackets
prob = IntervalNonlinearProblem(f, u0)
sol = solve(prob)
```

## Citation

If you found this library to be useful in academic work, then please cite:

```bibtex
@article{pal2024nonlinearsolve,
  author = {Pal, Avik and Holtorf, Flemming and Larsson, Axel and Loman, Torkel and Utkarsh and Sch\"{a}fer, Frank and Qu, Qingyu and Edelman, Alan and Rackauckas, Chris},
  title = {NonlinearSolve.jl: High-Performance and Robust Solvers for Systems of Nonlinear Equations in Julia},
  year = {2025},
  publisher = {Association for Computing Machinery},
  address = {New…
