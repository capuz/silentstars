---
repo: "jkitchin/discopt"
name: "discopt"
description: "A discrete optimization package with interior point and exterior swagger"
readmeQualityOk: true
url: "https://github.com/jkitchin/discopt"
homepage: "http://kitchingroup.cheme.cmu.edu/discopt/"
language: "Python"
languages: ["Python"]
languagePcts: [87]
stars: 24
forks: 4
openIssues: 8
closedIssues: 327
watchers: 1
contributors: 3
recentReleases: 4
createdAt: "2026-02-07T02:10:25Z"
lastCommitAt: "2026-08-30T00:43:43Z"
lastReleaseAt: "2026-08-16T19:08:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 56
maintainers: ["jkitchin", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/944fbfa3586a0c0476ee5d075ac38e9b3f69f7084a2b5797016a1d9dfa394ae4/jkitchin/discopt"
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
- **In-house LP/MILP engine** -- pure-Rust primal/dual simplex with warm starts and a sparse LU basis (`feral`); HiGHS is no longer on the LP/MILP path
- **NLP backends** -- POUNCE (pure-Rust Ipopt port, the universal default) and cyipopt (Ipopt); `nlp_solver="simplex"` selects the…
