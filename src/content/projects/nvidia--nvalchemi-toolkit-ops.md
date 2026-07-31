---
repo: "NVIDIA/nvalchemi-toolkit-ops"
name: "nvalchemi-toolkit-ops"
description: "ALCHEMI Toolkit-Ops is a collection of optimized batch kernels to accelerate computational chemistry and material science workflows."
readmeQualityOk: true
url: "https://github.com/NVIDIA/nvalchemi-toolkit-ops"
homepage: "https://nvidia.github.io/nvalchemi-toolkit-ops/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 218
forks: 33
openIssues: 6
closedIssues: 28
watchers: 9
contributors: 19
recentReleases: 1
createdAt: "2025-12-01T18:34:52Z"
lastCommitAt: "2026-07-31T05:56:48Z"
lastReleaseAt: "2026-07-13T18:10:13Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 34
maintainers: ["laserkelvin", "zubatyuk", "dallasfoster"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4e94b8a8b8d660567dcfa5d975f4a758e5c78ab28fad889d0484c8729648290/NVIDIA/nvalchemi-toolkit-ops"
discussionCount: 0
---

# NVIDIA ALCHEMI Toolkit-Ops

## High-performance NVIDIA Warp primitives for computational chemistry

NVIDIA ALCHEMI Toolkit-Ops is a collection of **GPU-optimized**, **batched**
primitives for accelerating atomistic simulations. High performance compute
kernels are written in [NVIDIA `warp-lang`](https://github.com/NVIDIA/warp).

### Key Features

- **Neighbor lists**
  - Naive, cell-list, and tiled cluster-pair methods
  - Matrix and COO formats
  - Automatic method selection
  - Custom pair functions
- **Molecular dynamics**
  - NVE, NVT, NPT, and NPH ensembles
  - Langevin, Nosé-Hoover Chain, and velocity-rescaling thermostats
- **Geometry optimization with FIRE and FIRE2**, supporting coordinate and
  lattice relaxation
- **Interatomic interactions**
  - DFT-D3(BJ) dispersion
  - DSF, Ewald, and PME electrostatics
  - Ewald and PME for charges and multipoles (Warp/PyTorch)
- **Differentiable electrostatics for PyTorch training**, with automatic
  differentiation for forces, charge gradients, virials, and stress
- **Core kernels written in `warp-lang`** with PyTorch and JAX bindings

Kernels are naturally intended to be highly scalable (>100,000 atoms) and generally
optimized…
