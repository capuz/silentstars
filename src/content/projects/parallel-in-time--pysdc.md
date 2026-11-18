---
repo: "Parallel-in-Time/pySDC"
name: "pySDC"
description: "pySDC is a Python implementation of the spectral deferred correction (SDC) approach and its flavors, esp. the multilevel extension MLSDC and PFASST."
readmeQualityOk: true
url: "https://github.com/Parallel-in-Time/pySDC"
homepage: "http://www.parallel-in-time.org/pySDC"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [54, 44]
topics: ["parallel-in-time", "python", "iterative-methods", "parallel-computing", "partial-differential-equations", "ordinary-differential-equations", "collocation-method", "multigrid", "pfasst", "spectral-deferred-corrections"]
stars: 45
forks: 39
openIssues: 4
closedIssues: 119
watchers: 7
contributors: 16
recentReleases: 0
createdAt: "2014-11-04T10:56:53Z"
lastCommitAt: "2026-11-18T12:06:30Z"
lastReleaseAt: "2019-02-14T13:57:13Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 65
maintainers: ["pancetta", "brownbaerchen", "tlunet"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/26165004/69e39d50-b70d-4d19-813d-2f3bab31afec"
discussionCount: 3
---

# Welcome to pySDC!

The `pySDC` project is a Python implementation of the
spectral deferred correction (SDC) approach and its flavors, esp. the
multilevel extension MLSDC and PFASST. It is intended for rapid
prototyping and educational purposes. New ideas like e.g. sweepers or
predictors can be tested and first toy problems can be easily
implemented.

## Features

-   Variants of SDC: explicit, implicit, IMEX, multi-implicit, Verlet,
    multi-level, diagonal, multi-step
-   Variants of PFASST: virtually parallel or MPI-based parallel,
    classical or multigrid perspective
-   9 tutorials: from setting up a first collocation problem to SDC,
    PFASST, advanced topics and ParaDiag
-   Projects: many documented projects with defined and tested outcomes
-   Many different examples, collocation types, data types already
    implemented
-   Works with [Firedrake](https://www.firedrakeproject.org/) finite
    elements (in mass-matrix form, also from weak forms alone),
    [mpi4py-fft](https://mpi4py-fft.readthedocs.io/en/latest/),
    [PETSc](https://petsc.org/) (through
    [petsc4py](https://petsc.org/release/petsc4py/)), PyTorch and CuPy
-   Continuous integration via…
