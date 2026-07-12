---
repo: "Dicklesworthstone/frankenscipy"
name: "frankenscipy"
description: "Clean-room Rust reimplementation of SciPy with Condition-Aware Solver Portfolio (CASP) — runtime algorithm selection driven by conditioning diagnostics, stability certificates, and decision-theoretic policy controllers"
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/frankenscipy"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["condition-number", "linear-algebra", "math", "numerical-analysis", "numerical-methods", "rust", "scientific-computing", "scipy", "differential-conformance", "solver-portfolio"]
stars: 10
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-13T22:43:21Z"
lastCommitAt: "2026-07-12T06:17:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/1157509554/f5e6db31-2c47-4cf4-8faf-01eca21e3c81"
---

# FrankenSciPy

</div>

</p>

> **FrankenSciPy is a clean-room Rust reimplementation of SciPy's core numerical
> routines with a Condition-Aware Solver Portfolio (CASP) at its center.**
> Every solve, decomposition, transform, optimization, and integration goes
> through a runtime that inspects matrix conditioning, sparsity, stiffness,
> and convergence behavior, then picks an algorithm that minimizes expected
> loss against a calibrated 5×4 decision matrix, and emits an audit trail
> proving the decision was justified.

---

## TL;DR

### The Problem

SciPy is the bedrock of scientific Python, but the runtime it sits on is showing its age:

- The CPython GIL and Python's object model make it awkward to use as a high-throughput library inside a service, a notebook kernel cluster, or a multi-agent system.
- Most of the numerical kernels are wrapped C, Fortran, or LAPACK (fast in microbenchmarks), but the *Python* glue layer is where memory churn, type-coercion overhead, and packaging headaches actually live.
- Numerical-stability decisions are buried inside per-routine heuristics. There is no first-class way to ask "which algorithm did you pick for this problem instance, and how…
