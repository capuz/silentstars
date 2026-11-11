---
repo: "knnmelprop/YAADO"
name: "YAADO"
description: "Automated multi-fidelity conceptual design and optimization pipeline for aerospace vehicles"
readmeQualityOk: true
url: "https://github.com/knnmelprop/YAADO"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["aerospace", "aerospace-engineering", "analysis", "cfd", "mdo", "optimization", "design"]
stars: 6
forks: 2
openIssues: 38
closedIssues: 53
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-07-09T21:11:41Z"
lastCommitAt: "2026-11-11T19:43:56Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 90
undervaluedScore: 51
maintainers: ["Arseni10Lk", "Aaqibhafeezkhan"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e54c240c5d0fd11306904a0b2fb84465a72e7dfabdd00deecf05b05f135f2f6/knnmelprop/YAADO"
discussionCount: 1
---

# YAADO — by MELprop
   [](https://deepwiki.com/knnmelprop/YAADO)

The project aims to be a user-friendly preliminary design and Multidisciplinary Design Optimization (MDO) environment for aerospace vehicles. YAADO's goal is to enable everybody to use variable-fidelity design analysis tools to move your designs from paper and laptop to the sky.

## Features
* **Declarative Design:** Build rockets and UAVs using simple TOML configurations — no Python programming required.
* **Variable-Fidelity Aerodynamics:** Seamlessly swap between empirical handbook formulas (DATCOM), Vortex Lattice Methods (AVL), 2D panel methods (XFOIL), and High-Fidelity CFD (SU2).
* **Propulsion Analysis:** Built-in 1-D thermodynamic engine cycle analysis and custom turbojet performance maps.

## Getting Started

> If you want to join the project please check [`ONBOARDING.md`](https://github.com/knnmelprop/YAADO/blob/HEAD/ONBOARDING.md). README is for end-users.

### 1. Installation
To use YAADO, clone the repository and install the environment. Because YAADO relies on heavily integrated physics engines, you must initialize the submodules:

```bash
git clone https://github.com/knnmelprop/YAADO.git
cd YAADO
uv…
