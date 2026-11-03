---
repo: "nekStab/nekStab"
name: "nekStab"
description: "Stability, bifurcation, and sensitivity analysis for Nek5000"
readmeQualityOk: true
url: "https://github.com/nekStab/nekStab"
homepage: "https://nekstab.github.io/nekStab/validation/"
language: "Python"
languages: ["Python", "Fortran"]
languagePcts: [45, 32]
topics: ["stability-analysis", "periodic-orbits", "sensitivity-analysis", "baseflow-computation", "eigenvalue-problem", "cfd", "nek5000", "fortran", "adjoint-methods", "bifurcation-analysis"]
stars: 28
forks: 9
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 2
createdAt: "2021-01-22T10:30:27Z"
lastCommitAt: "2026-11-03T10:52:41Z"
lastReleaseAt: "2026-10-20T21:32:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 64
maintainers: ["ricardofrantz"]
openGraphImageUrl: "https://opengraph.githubassets.com/4adbd518e798a50bdda872b5a0081c30ba5ded8df54262738738b9c56240a178/nekStab/nekStab"
---

| OS | Arch | Compiler | MPI | Status |
|:---|:----:|:---------|:----|:------:|
| Ubuntu 24.04 | x86_64 | gfortran 14 | OpenMPI / MPICH | [](https://github.com/nekStab/nekStab/actions/workflows/ci.yml) |
| Ubuntu 24.04 | x86_64 | ifort 2024 / ifx 2025 | Intel MPI | [](https://github.com/nekStab/nekStab/actions/workflows/ci.yml) |
| macOS 15 | ARM64 | gfortran 14 | OpenMPI | [](https://github.com/nekStab/nekStab/actions/workflows/ci.yml) |

**nekStab** is a toolbox for global stability and bifurcation analysis using the spectral element solver [Nek5000](https://github.com/Nek5000/Nek5000). Released under BSD-3-Clause license.

## Features

### Steady-State & Periodic Orbit Computation
| Method | Description |
|--------|-------------|
| **SFD** | Selective Frequency Damping for unstable steady states |
| **BoostConv** | Residual acceleration for slow convergence |
| **TDF** | Time-Delayed Feedback for periodic orbits |
| **Newton-Krylov** | Quadratic convergence for fixed points, UPOs (natural frequency), and forced periodic orbits |

### Global Stability Analysis
| Analysis | Steady Flows | Time-Periodic (Floquet) |
|----------|:------------:|:-----------------------:|
| **Direct…
