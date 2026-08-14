---
repo: "chombo-discharge/chombo-discharge"
name: "chombo-discharge"
description: "chombo-discharge: A research code for low-temperature plasma which uses a Cartesian cut-cell formalism."
readmeQualityOk: true
url: "https://github.com/chombo-discharge/chombo-discharge"
homepage: "https://chombo-discharge.github.io/chombo-discharge/"
language: "C++"
languages: ["C++"]
languagePcts: [97]
stars: 22
forks: 12
openIssues: 5
closedIssues: 268
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-04-07T14:00:33Z"
lastCommitAt: "2026-08-14T05:13:31Z"
lastReleaseAt: "2024-02-01T07:02:47Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 65
maintainers: ["rmrsk"]
openGraphImageUrl: "https://opengraph.githubassets.com/aeeded8a5deb70dcb6ead73de815f36cb88f34a2e40be6631003b88cc0af9a2d/chombo-discharge/chombo-discharge"
discussionCount: 8
---

chombo-discharge
----------------

This is ``chombo-discharge``, a multiphysics code which uses ``Chombo`` for discharge simulations with adaptive mesh refinement (AMR) on embedded boundary grids.
``chombo-discharge`` is aimed at performant electric discharge simulations (e.g., Townsend discharges, streamer discharges, sprites, etc.), and scales to tens of thousands of CPU cores.

``chombo-discharge`` features include:

* Fully written in C++.
* Parallelized with OpenMP, MPI, or MPI+OpenMP.
* Scales to tens of thousands of CPUs.
* Supports complex geometries (electrodes/dielectrics).
* Parallel I/O with HDF5.
* Efficient geometric multigrid solvers.
* Support for dual-grid operations with individual load-balancing of particle and fluid solvers.
* Support for both particle and fluids, including particle-mesh operations (e.g., Particle-In-Cell).

A modified version of ``Chombo`` is distributed together with this code.

Gallery
-------

</p align="center">

</p align="center">

</p align="center">

Installation
------------

Installation of ``chombo-discharge`` depends on the level of parallelism that is desired (if any). 
The code supports OpenMP, MPI, and MPI+OpenMP types of…
