---
repo: "kokkos/kokkos-kernels"
name: "kokkos-kernels"
description: "Kokkos C++ Performance Portability Programming Ecosystem: Math Kernels - Provides BLAS, Sparse BLAS and Graph Kernels"
readmeQualityOk: true
url: "https://github.com/kokkos/kokkos-kernels"
homepage: "https://kokkos.org"
language: "C++"
languages: ["C++"]
languagePcts: [94]
topics: ["kokkos", "linear-algebra", "sparse-matrix", "performance-portability", "blas", "hpsf", "snl-science-libs"]
stars: 410
forks: 133
openIssues: 120
closedIssues: 802
watchers: 27
contributors: 84
recentReleases: 0
createdAt: "2017-01-10T20:49:21Z"
lastCommitAt: "2026-11-26T23:33:35Z"
lastReleaseAt: "2021-11-24T04:22:02Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 96
undervaluedScore: 39
maintainers: ["dependabot[bot]", "bcaddy", "lucbv"]
openGraphImageUrl: "https://opengraph.githubassets.com/d128c240e46c07676c4807c0fe858ae63ce07887c568f4d844e88f14260aa85b/kokkos/kokkos-kernels"
---

# Kokkos Kernels

Kokkos C++ Performance Portability Programming EcoSystem: Math Kernels -
Provides BLAS, Sparse BLAS and Graph Kernels

KokkosKernels implements local computational kernels for linear
algebra and graph operations, using the Kokkos shared-memory parallel
programming model.  "Local" means not using MPI, or running within a
single MPI process without knowing about MPI.  "Computational kernels"
are coarse-grained operations; they take a lot of work and make sense
to parallelize inside using Kokkos.  KokkosKernels can be the building
block of a parallel linear algebra library like Tpetra that uses MPI
and threads for parallelism, or it can be used stand-alone in your
application.

Computational kernels in this subpackage include the following:

* (Multi)vector dot products, norms, and updates (AXPY-like
    operations that add vectors together entry-wise)
* Sparse matrix-vector multiply and other sparse matrix / dense
    vector kernels
* Sparse matrix-matrix multiply
* Graph coloring
* Gauss-Seidel with coloring (generalization of red-black)
* Other linear algebra and graph operations

We organize this directory as follows:
