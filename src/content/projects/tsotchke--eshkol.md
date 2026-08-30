---
repo: "tsotchke/eshkol"
name: "eshkol"
description: "High-Performance LISP-like language for Scientific Computing and AI written in C++"
readmeQualityOk: true
url: "https://github.com/tsotchke/eshkol"
homepage: "https://eshkol.ai"
language: "C++"
languages: ["C++", "C"]
languagePcts: [53, 24]
topics: ["ai", "autodiff", "differential-geometry", "lisp", "mathematical-programming", "scheme", "scientific-computing"]
stars: 143
forks: 18
openIssues: 5
closedIssues: 11
watchers: 10
contributors: 7
recentReleases: 4
createdAt: "2025-03-24T10:03:59Z"
lastCommitAt: "2026-08-30T00:44:26Z"
lastReleaseAt: "2026-07-16T22:36:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 48
maintainers: ["tsotchke"]
openGraphImageUrl: "https://opengraph.githubassets.com/4aa5a02089699a480643028c110beca642ee20bfca0be2b4fed9623b97bcb186/tsotchke/eshkol"
discussionCount: 3
---

<br>

# Eshkol

## A Programming Language for Mathematical Computing

Eshkol is a Scheme-based programming language that unifies functional programming with native automatic differentiation, providing a mathematically rigorous foundation for gradient-based optimization, numerical simulation, and machine learning research. Built on Homotopy Type Theory foundations and compiled to native code via LLVM, Eshkol delivers mathematical correctness and deterministic performance without sacrificing the elegance of homoiconic Lisp syntax.

**v1.3.4-evolve** — a resident-correctness release. On the native engine,
automatic per-iteration memory reclamation now matches explicit `with-region`
even for loops that mutate persistent state; `parallel-map` is race-free for collection-valued closures;
gradients are exact through every callable form (indirect and curried, no
finite-difference fallback); printed floats round-trip (R7RS 6.2.6); and the
strict type checker accepts idiomatic dynamic-but-validated code. It also lands
the high-precision numerics wave (Ozaki-II exact and reduced-precision GEMM
tiers, a mixed-precision linear solver, and a native 128-bit integer type
`i128`), a Moonlab v1.2.0…
