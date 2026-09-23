---
repo: "SciML/LinearSolve.jl"
name: "LinearSolve.jl"
description: "LinearSolve.jl: High-Performance Unified Interface for Linear Solvers in Julia. Easily switch between factorization and Krylov methods, add preconditioners, and all in one interface."
readmeQualityOk: true
url: "https://github.com/SciML/LinearSolve.jl"
homepage: "https://docs.sciml.ai/LinearSolve/stable/"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["julia", "scientific-machine-learning", "differential-equations", "sciml", "linear-solvers", "amg", "distributed-computing", "factorization", "gpu", "krylov-methods"]
stars: 293
forks: 93
openIssues: 13
closedIssues: 319
watchers: 7
contributors: 94
recentReleases: 0
createdAt: "2021-07-02T19:56:38Z"
lastCommitAt: "2026-09-23T08:47:32Z"
lastReleaseAt: "2021-12-16T22:22:33Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 42
maintainers: ["AJ0070", "ChrisRackauckas-Claude", "ChrisRackauckas"]
openGraphImageUrl: "https://opengraph.githubassets.com/061933f3e15d48776a7a385df78611257ba9dfa9305434261cdf44e8adf468c8/SciML/LinearSolve.jl"
fundingLinks: ["GITHUB:https://github.com/SciML"]
---

# LinearSolve.jl

Fast implementations of linear solving algorithms in Julia that satisfy the SciML
common interface. LinearSolve.jl makes it easy to define high level algorithms
which allow for swapping out the linear solver that is used while maintaining
maximum efficiency. Specifically, LinearSolve.jl includes:

  - Fast pure Julia LU factorizations which outperform standard BLAS
  - KLU for faster sparse LU factorization on unstructured matrices
  - UMFPACK for faster sparse LU factorization on matrices with some repeated structure
  - MKLPardiso wrappers for handling many sparse matrices faster than SuiteSparse (KLU, UMFPACK) methods
  - Sparspak.jl for sparse LU factorization in pure Julia for generic number types and for non-GPL distributions
  - GPU-offloading for large dense matrices
  - Wrappers to all of the Krylov implementations (Krylov.jl, IterativeSolvers.jl, KrylovKit.jl) for easy
    testing of all of them. LinearSolve.jl handles the API differences, especially with the preconditioner
    definitions
  - A polyalgorithm that smartly chooses between these methods
  - A caching interface which automates caching of symbolic factorizations and numerical factorizations…
