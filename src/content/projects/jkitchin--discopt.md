---
repo: "jkitchin/discopt"
name: "discopt"
description: "A discrete optimization package with interior point and exterior swagger"
readmeQualityOk: true
url: "https://github.com/jkitchin/discopt"
homepage: "http://kitchingroup.cheme.cmu.edu/discopt/"
language: "Python"
languages: ["Python"]
languagePcts: [88]
stars: 29
forks: 6
openIssues: 4
closedIssues: 680
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-02-07T02:10:25Z"
lastCommitAt: "2026-10-23T12:04:28Z"
lastReleaseAt: "2026-09-24T20:44:31Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 57
maintainers: ["claude", "jkitchin"]
openGraphImageUrl: "https://opengraph.githubassets.com/df7c3e232061b2fc2a4e131edf0930425508f572b57ce37980eb36e35d7da915/jkitchin/discopt"
fundingLinks: ["GITHUB:https://github.com/jkitchin"]
---

# discopt

A Mixed-Integer Nonlinear Programming (MINLP) solver built on a Rust core with
Python orchestration. Solves MINLPs by spatial Branch and Bound over rigorous
convex relaxations, with an in-house primal/dual simplex for the per-node LPs and
a Rust automatic-differentiation tape (via POUNCE) for objective, gradient,
Jacobian, and Hessian evaluation.

## Features

- **Algebraic modeling API** -- continuous, binary, and integer variables with operator overloading
- **Spatial Branch and Bound** -- Rust-powered node pool, branching, and pruning; the native Rust spatial B&B kernel is the default engine (`DISCOPT_NATIVE_SPATIAL_KERNEL=0` opts back to the Python tree)
- **Rust AD tape for NLP evaluation** -- objective, gradient, constraint Jacobian, and Lagrangian Hessian (dense and sparse) come from a POUNCE-backed tape with no JAX on the path; `DISCOPT_NLP_EVAL=jax` restores the legacy JAX evaluator
- **In-house LP/MILP engine** -- pure-Rust primal/dual simplex with warm starts and a sparse LU basis (`feral`); it drives every MINLP node LP. Models classified as *pure* LP/MILP at entry are routed to HiGHS instead, with discopt-verified certificates…
