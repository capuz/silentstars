---
repo: "solvcon/solvcon"
name: "solvcon"
description: "Toolkit for solving partial differential equations"
url: "https://github.com/solvcon/solvcon"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [52, 41]
stars: 64
forks: 64
openIssues: 91
closedIssues: 193
watchers: 14
contributors: 37
recentReleases: 0
createdAt: "2019-12-20T13:19:29Z"
lastCommitAt: "2026-06-23T23:27:26Z"
lastReleaseAt: "2024-08-02T13:53:28Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "community_hub", "fork_magnet"]
healthScore: 93
undervaluedScore: 56
maintainers: ["yungyuc", "tigercosmos", "ExplorerRay"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e47846adb0b69187ce070facef6f9a85782877f2df358a4e08026484986c6f3/solvcon/solvcon"
discussionCount: 29
---

# solvcon: modules to solve conservation laws with unstructured meshes

solvcon is a modularized code implementing [the space-time conservation element
and solution element (CESE)
method](https://yyc.solvcon.net/en/latest/cese/index.html) based on
unstructured meshes of mixed element to solve conservation laws. It is
developed by using C++ and Python to provide:

1. Contiguous buffers and multi-dimensional arrays.
2. Linear algebra built on BLAS and LAPACK, including a general eigensolver,
   LU factorization, and a Kalman filter.
3. Integral transform (the Fourier transform).
4. One-dimensional solvers for the Euler and linear scalar equations to
   demonstrate the CESE method.
5. Two- and three-dimensional solvers for the Euler equations using the
   CESE method. (Under development.)
6. Mesh and field file input and output for the Gmsh and Plot3D formats.
7. A geometry processor with polygons, Bezier curves, and R-tree spatial
   indexing.
8. Two- and three-dimensional body mesh generation. (Under development.)
9. An integrated runtime profiler.
10. A graphical user interface (GUI) application based on Qt for the spatial
    data and analysis.

An experimental Windows binary…
