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
stars: 12
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-13T22:43:21Z"
lastCommitAt: "2026-07-31T06:30:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1157509554/f5e6db31-2c47-4cf4-8faf-01eca21e3c81?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260731%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260731T063200Z&X-Amz-Expires=300&X-Amz-Signature=3ad17846b2cd69365eb38b6ec765533d75bfdeef2e6f1dd37a54c643ba0f709a&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTQ3OTgyMCwibmJmIjoxNzg1NDc5NTIwLCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.L80yK7MxiU-EdqZKV_EqcRcVLFIlyZMBvG6gdG6z0ss"
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
