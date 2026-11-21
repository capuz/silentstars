---
repo: "pvthinker/Fluids2d"
name: "Fluids2d"
description: "A versatile Python CFD code that solves a large class of 2D flows"
readmeQualityOk: true
url: "https://github.com/pvthinker/Fluids2d"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-11-22T10:08:39Z"
lastCommitAt: "2026-11-21T13:29:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 66
undervaluedScore: 53
maintainers: ["pvthinker"]
openGraphImageUrl: "https://opengraph.githubassets.com/d034d348f954e24e7a9efea2b95bf3e347801a684b9c81c3befcae303aae82ec/pvthinker/Fluids2d"
---

# Fluids2d

-----

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [First experiment](#first-experiment)
- [License](#license)

## Description

`Fluids2d` is a versatile Python CFD code that solves a large
class of 2D flows. It is designed to be used easily by Students
learning Fluid Mechanics or Geophysical Fluid Dynamics and by their
professors willing to illustrate their course and to organize
numerical practicals. The idea is to visualize flows on the fly, as
they are computed. The effect of parameter changes can be seen
immediately.

`Fluids2d` is based on `Fluid2d` (without "s"), with an easier
install, a better implementation, a better numerics and soon more
equations. It already includes the RSW equations and the QG equations
solved with a projection method (Thiry et al 2024). The code is fast,
thanks to the Python modules `numba` and `scipy.sparse.linalg`.
