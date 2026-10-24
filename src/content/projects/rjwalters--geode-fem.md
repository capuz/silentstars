---
repo: "rjwalters/geode-fem"
name: "geode-fem"
description: "A FEM/DG electromagnetic solver using tensor compilation"
readmeQualityOk: true
url: "https://github.com/rjwalters/geode-fem"
language: "Rust"
languages: ["Rust", "Python", "Shell"]
languagePcts: [34, 27, 25]
topics: ["burn", "computational-physics", "dg", "electromagnetics", "fem", "gpu", "mie-scattering", "palace", "rust"]
stars: 5
forks: 4
openIssues: 44
closedIssues: 562
watchers: 0
contributors: 4
recentReleases: 7
createdAt: "2026-05-24T20:42:40Z"
lastCommitAt: "2026-10-24T08:08:35Z"
lastReleaseAt: "2026-10-04T22:29:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 76
maintainers: ["rjwalters"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4ad3ee9276c73600048cfe59a9b078b1af223dceb2bc19b4985a47b20f1c2f9/rjwalters/geode-fem"
---

# GEODE-FEM

**GPU-accelerated Electromagnetic Open Differentiable Engine — FEM/DG**

> Status: driven + eigenmode FEM with multi-mode wave ports landed. End-to-end
> stack (mesh I/O → P1 + Nédélec kernels → autodiff-preserving sparse `[nnz]`
> assembly → direct LU and Krylov COCG + ILU(0) solvers → PEC / Silver-Müller /
> matched UPML / Leontovich / lumped + multi-mode wave ports → S-parameter and
> NTFF extraction) is on `main`, validated across five benchmarks: Mie sphere
> (eigenmode + driven scattering), patch antenna (S11 / bandwidth / NTFF /
> efficiency), spiral inductor (L/Q), and the SLCFET 3HP capstone. See
> **Highlights** below.

GEODE-FEM is a [Burn](https://burn.dev)-based Rust implementation of a high-order
finite-element / discontinuous-Galerkin electromagnetic solver. It targets the
same use cases as [AWS Labs Palace](https://awslabs.github.io/palace/stable/) —
eigenmode analysis, frequency-domain driven simulation, time-domain — but built
natively on a differentiable tensor IR with GPU acceleration as a first-class
concern.

## Why

Palace is a state-of-the-art open-source FEM EM solver, but its C++/MFEM-based
implementation predates the era of tensor IRs with…
