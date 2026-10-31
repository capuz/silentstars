---
repo: "jkitchin/pounce"
name: "pounce"
description: "Pure-Rust port of Ipopt (NLP/IPM solver)"
readmeQualityOk: true
url: "https://github.com/jkitchin/pounce"
homepage: "https://kitchingroup.cheme.cmu.edu/pounce/"
language: "Rust"
languages: ["Rust", "Jupyter Notebook"]
languagePcts: [56, 26]
topics: ["nonlinear-optimization"]
stars: 81
forks: 9
openIssues: 7
closedIssues: 480
watchers: 2
contributors: 6
recentReleases: 2
createdAt: "2026-05-12T14:51:25Z"
lastCommitAt: "2026-10-31T19:01:33Z"
lastReleaseAt: "2026-09-03T21:00:57Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 40
maintainers: ["claude", "jkitchin"]
openGraphImageUrl: "https://opengraph.githubassets.com/f58a6564e430ead56f31087443986cd1a170a90000b820cb51c7e5c4ed905989/jkitchin/pounce"
fundingLinks: ["GITHUB:https://github.com/jkitchin"]
---

# POUNCE

POUNCE is a pure-Rust interior-point optimization solver. Its
nonlinear-programming core began as a faithful port of
[Ipopt](https://github.com/coin-or/Ipopt) — the same filter line-search
algorithm, console output, and option semantics, so anyone used to reading
`ipopt` logs can drop in `pounce` without relearning where the numbers
live — and it has since grown into a *family* of solvers sharing one
numerical backbone:

- **Nonlinear programming** — the filter line-search interior-point method
  (the Ipopt port), plus an active-set SQP path, for general smooth problems
  `min f(x)  s.t.  g_L ≤ g(x) ≤ g_U,  x_L ≤ x ≤ x_U`. Complementarity
  constraints (AMPL `complements`, Pyomo `mpec`) are declared rather than
  hand-lowered: POUNCE picks the formulation and certifies the answer's
  stationarity ([Complementarity Constraints](https://jkitchin.github.io/pounce/complementarity.html)).
- **Conic & quadratic** — dedicated interior-point solvers for LP, convex QP,
  second-order (SOCP), positive-semidefinite (SDP), and the non-symmetric
  exponential and power cones — each solved to the global optimum, with
  infeasibility certificates, warm starts, and post-optimal…
