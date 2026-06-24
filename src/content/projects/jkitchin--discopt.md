---
repo: "jkitchin/discopt"
name: "discopt"
description: "A discrete optimization package with interior point and exterior swagger"
url: "https://github.com/jkitchin/discopt"
homepage: "http://kitchingroup.cheme.cmu.edu/discopt/"
language: "Python"
languages: ["Python"]
languagePcts: [84]
stars: 16
forks: 4
openIssues: 19
closedIssues: 105
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-02-07T02:10:25Z"
lastCommitAt: "2026-06-24T00:20:04Z"
lastReleaseAt: "2026-05-17T13:43:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 55
maintainers: ["jkitchin", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/f113fbac0731e2a5e520179212bfd4a326494cf8bf7ae8e5b5327ff177a70ad3/jkitchin/discopt"
---

# discopt

![PyPI Downloads](https://img.shields.io/pypi/dm/discopt.svg)

A hybrid Mixed-Integer Nonlinear Programming (MINLP) solver combining a Rust backend, JAX automatic differentiation, and Python orchestration. Solves MINLP problems via NLP-based spatial Branch and Bound with JIT-compiled objective/gradient/Hessian evaluation.

## Features

- **Algebraic modeling API** -- continuous, binary, and integer variables with operator overloading
- **Spatial Branch and Bound** -- Rust-powered node pool, branching, and pruning
- **JIT-compiled NLP evaluation** -- objective, gradient, Hessian, and constraint Jacobian via JAX
- **Three NLP backends** -- POUNCE (pure-Rust Ipopt port; default for single solves), pure-JAX interior-point method (vmap-batched B&B node engine), cyipopt (Ipopt)
- **Convex relaxations** -- McCormick envelopes (28 functions including sigmoid/softplus/tanh and the trig/inverse-trig/`erf` families), piecewise McCormick, alphaBB underestimators
- **Neural network embedding** -- embed trained feedforward networks (ReLU, sigmoid, tanh, softplus) as MINLP constraints via big-M, full-space, and reduced-space strategies; interval arithmetic bound propagation; ONNX…
