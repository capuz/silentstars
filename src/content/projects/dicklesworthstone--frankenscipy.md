---
repo: "Dicklesworthstone/frankenscipy"
name: "frankenscipy"
description: "Clean-room Rust reimplementation of SciPy with Condition-Aware Solver Portfolio (CASP) — runtime algorithm selection driven by conditioning diagnostics, stability certificates, and decision-theoretic policy controllers"
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/frankenscipy"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["condition-number", "linear-algebra", "math", "numerical-analysis", "numerical-methods", "rust", "scientific-computing", "scipy", "differential-conformance", "solver-portfolio"]
stars: 14
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-02-13T22:43:21Z"
lastCommitAt: "2026-09-10T08:20:27Z"
lastReleaseAt: "2026-09-08T04:12:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 49
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1157509554/f5e6db31-2c47-4cf4-8faf-01eca21e3c81"
---

# FrankenSciPy

</div>

</p>

> **FrankenSciPy is a clean-room Rust reimplementation of SciPy's core numerical
> routines with a Condition-Aware Solver Portfolio (CASP) at its center.**
> The dense linear-solve family (`solve_with_casp`, `solve_with_audit`,
> `lstsq_with_casp` and their siblings in `fsci-linalg`) goes through a runtime
> that probes matrix conditioning and structure, picks the solver that minimizes
> expected loss against a calibrated 5×4 decision matrix, falls back on failure,
> and returns a certificate proving the decision was justified. The sparse,
> optimize and special crates carry their own rule-based selectors that record a
> rationale; wiring them onto the same loss-matrix machinery is roadmap work.

---

## TL;DR

### The Problem

SciPy is the bedrock of scientific Python, but the runtime it sits on is showing its age:

- The CPython GIL and Python's object model make it awkward to use as a high-throughput library inside a service, a notebook kernel cluster, or a multi-agent system.
- Most of the numerical kernels are wrapped C, Fortran, or LAPACK (fast in microbenchmarks), but the *Python* glue layer is where memory churn, type-coercion overhead, and…
