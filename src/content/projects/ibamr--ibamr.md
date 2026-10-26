---
repo: "IBAMR/IBAMR"
name: "IBAMR"
description: "An adaptive and distributed-memory parallel implementation of the immersed boundary (IB) method"
readmeQualityOk: true
url: "https://github.com/IBAMR/IBAMR"
homepage: "http://ibamr.github.io/"
language: "C++"
languages: ["C++"]
languagePcts: [92]
topics: ["immersed-boundary-method", "adaptive-mesh-refinement", "multiphase-flow", "finite-difference", "finite-elements", "c-plus-plus", "fortran", "mpi", "volume-penalization-method", "level-set-method"]
stars: 450
forks: 172
openIssues: 136
closedIssues: 339
watchers: 47
contributors: 38
recentReleases: 0
createdAt: "2014-04-18T03:50:44Z"
lastCommitAt: "2026-10-26T21:00:31Z"
lastReleaseAt: "2020-06-17T19:52:38Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 93
undervaluedScore: 38
maintainers: ["boyceg", "drwells"]
openGraphImageUrl: "https://opengraph.githubassets.com/443eff5272e44bcde17ce03c83008595fc0907ebc21fbba069e7807dbc8bf141/IBAMR/IBAMR"
discussionCount: 13
---

IBAMR
=====

An adaptive and distributed-memory parallel implementation of the immersed boundary (IB) method

What Is IBAMR?
--------------

IBAMR is a distributed-memory parallel implementation of the immersed boundary (IB) method with support for Cartesian grid adaptive mesh refinement (AMR).  Support for distributed-memory parallelism is via [MPI](http://www.mcs.anl.gov/research/projects/mpi), the Message Passing Interface.

Core IBAMR functionality relies upon several high-quality open-source libraries, including:
 * [SAMRAI](https://computing.llnl.gov/projects/samrai), the Structured Adaptive Mesh Refinement Application Infrastructure
 * [PETSc](http://www.mcs.anl.gov/petsc), the Portable, Extensible Toolkit for Scientific Computation
 * [libMesh](http://libmesh.sourceforge.net), a C++ finite element library
 * [*hypre*](https://computing.llnl.gov/projects/hypre-scalable-linear-solvers-multigrid-methods), a library of high performance preconditioners that features parallel multigrid methods for both structured and unstructured grid problems.

IBAMR also uses functionality provided by a number of additional third-party libraries, including: [Boost](http://www.boost.org);…
