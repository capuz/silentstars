---
repo: "PMEAL/kabs"
name: "kabs"
description: "A tool for finding the absolute permeability from a volumetric image using the lattice Boltzmann method"
readmeQualityOk: true
url: "https://github.com/PMEAL/kabs"
homepage: "https://kabs.poromics.org"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [58, 42]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-28T15:24:37Z"
lastCommitAt: "2026-08-27T14:25:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 74
undervaluedScore: 41
maintainers: ["jgostick", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/1cd25a8e9395d60d98e450d3da56d9c36f7473db030a758ae4c881de30711289/PMEAL/kabs"
discussionCount: 0
---

`kabs` computes the absolute (Darcy) permeability of a porous material from its 3D tomographic image using the Lattice Boltzmann Method (LBM). Given a boolean voxel image of the pore space, it solves single-phase incompressible creeping flow, returning results in lattice units or physical units.



Two LBM implementations are offered. One is adapted from
[Taichi-LBM3D](https://github.com/yjhp1016/taichi_LBM3D)
([DOI](https://doi.org/10.3390/fluids7080270)) by Jianhui Yang. The other is adapted from the [XLB package](https://github.com/Autodesk/XLB) offered by Autodesk.

---

## Installation

```bash
git clone https://github.com/PMEAL/kabs.git
cd kabs
uv sync
```

Alternatively, install with `pip install -e .`. This installs both solvers:
Taichi and XLB, with `warp-lang==1.10.0` pinned for compatibility with XLB.

Key dependencies: `taichi` (GPU/CPU acceleration), `xlb`, `numpy`, `pyevtk`.
Optional: `porespy` (used in the examples below to generate synthetic images).

---

## Quick start

```python
import taichi as ti
import porespy as ps
from kabs import solve_flow, compute_permeability

ti.init(arch=ti.cpu)  # use ti.gpu for GPU acceleration

# Generate a…
