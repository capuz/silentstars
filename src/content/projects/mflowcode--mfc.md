---
repo: "MFlowCode/MFC"
name: "MFC"
description: "Exascale multiphase flow solver — 2025 Gordon Bell Prize Finalist | 200T grid points on 43K+ GPUs"
readmeQualityOk: true
url: "https://github.com/MFlowCode/MFC"
homepage: "https://mflowcode.github.io/"
language: "Fortran"
languages: ["Fortran", "Python"]
languagePcts: [59, 36]
topics: ["gpu", "exascale", "cfd", "fortran", "hpc", "mpi", "multiphase", "fluid-dynamics", "amd-gpu", "computational-fluid-dynamics"]
stars: 439
forks: 186
openIssues: 181
closedIssues: 465
watchers: 14
contributors: 60
recentReleases: 0
createdAt: "2019-07-23T17:12:54Z"
lastCommitAt: "2026-11-07T16:12:55Z"
lastReleaseAt: "2023-01-30T14:17:43Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 93
undervaluedScore: 39
maintainers: ["sbryngelson", "danieljvickers", "aliencaocao"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/198475661/b7e3edbe-e0d8-4d91-90d9-15fb90155d66"
---

> **2025 Gordon Bell Prize Finalist** - MFC simulates compressible multi-phase flows at exascale, using [Fypp](https://fypp.readthedocs.io/en/stable/fypp.html) metaprogramming in ~40K lines of Fortran. It conducted the [largest known public CFD simulation](https://arxiv.org/abs/2505.07392) at **200 trillion grid points** and 1 quadrillion degrees of freedom, scaling ideally to >43K AMD APUs on [El Capitan](https://hpc.llnl.gov/hardware/compute-platforms/el-capitan) and >33K AMD GPUs on [Frontier](https://www.olcf.ornl.gov/frontier/).

## Why MFC?

- **Performant at exascale** - Ideal weak scaling to 43K+ GPUs. Near compute-roofline behavior. [Compile-time case optimization](https://mflowcode.github.io/documentation/running.html) for ~10x speedup.
- **Compact code** - ~40K lines of Fortran with [Fypp](https://fypp.readthedocs.io/en/stable/fypp.html) metaprogramming. Small enough to read and modify; powerful enough for [Gordon Bell](https://awards.acm.org/bell).
- **Native multi-phase** - 4, 5, and 6-equation models, phase change, surface tension, bubble dynamics, and Euler-Lagrange particle tracking, all built in.
- **Portable** - NVIDIA and AMD GPUs, CPUs, laptops to exascale.…
