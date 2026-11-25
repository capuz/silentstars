---
repo: "struphy-hub/struphy"
name: "struphy"
description: "A Python package for plasma physics PDEs."
readmeQualityOk: true
url: "https://github.com/struphy-hub/struphy"
homepage: "https://struphy-hub.github.io/struphy/"
language: "Python"
languages: ["Python"]
languagePcts: [91]
topics: ["fusion", "hpc", "plasma-physics", "python", "simulations"]
stars: 43
forks: 6
openIssues: 88
closedIssues: 252
watchers: 0
contributors: 26
recentReleases: 0
createdAt: "2025-10-23T11:26:40Z"
lastCommitAt: "2026-11-25T13:20:33Z"
lastReleaseAt: "2026-02-28T08:51:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 57
maintainers: ["spossann", "nicolominichelli", "max-models"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1081847287/c4fabecd-9249-48bc-af3b-3238b3476f92"
discussionCount: 7
---

# Welcome!

**This is a Python package for solving partial differential equations (PDEs) mainly - but not exclusively - for plasma physics.**

**STRUPHY** stands for **STRU**cture-**P**reserving **HY**brid code (or **STRU**cture-preserving **PHY**sics code). The package provides off-the-shelf models for plasma physics problems, such as

- Maxwell’s equations
- Magneto-hydrodynamics (MHD)
- Multi-fluid models
- Vlasov-Poisson and Vlasov-Maxwell kinetic models
- Drift-kinetic models for strongly magnetized plasma
- MHD-kinetic hybrid models

All models can be run on multiple cores through MPI (distributed memory) and OpenMP (shared memory). The compute-intensive parts of the code are translated and compiled (“transpiled”) using [pyccel](https://github.com/pyccel/pyccel), giving you the speed of Fortran or C while working within the familiar Python environment.

Explore Struphy on its website **[struphy-hub.github.io](https://struphy-hub.github.io/)**: the models and their equations, the numerical methods, domains, equilibria and a gallery of examples.
