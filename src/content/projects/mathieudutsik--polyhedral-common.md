---
repo: "MathieuDutSik/polyhedral_common"
name: "polyhedral_common"
description: "A library and some programs for working polytopes and quadratic forms."
readmeQualityOk: true
url: "https://github.com/MathieuDutSik/polyhedral_common"
language: "C++"
languages: ["C++"]
languagePcts: [90]
stars: 12
forks: 5
openIssues: 1
closedIssues: 4
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2018-07-23T10:26:26Z"
lastCommitAt: "2026-10-19T09:14:51Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 96
undervaluedScore: 70
maintainers: ["MathieuDutSik"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e23f62c59b83bac082f51bc35212c755348d0c36b8078d829d78f012a4c56e1/MathieuDutSik/polyhedral_common"
---

Polyhedral: Computational Tools for Polytopes, Lattices, and Quadratic Forms
============================================================================

This is the set of functionality for dealing with polytopes,
quadratic forms and lattices.

The general approach is to use polytope and polyhedral
structures and groups are used to make everything faster
as a general rule.

The goal is to get extreme speed in order to solve record
problems.

General organization of the code
--------------------------------

The program are in several independent subdirectory. The software of each
directory can be compiled independently of the others:
  * *src_group*: for computting the groups of a polytope.
  * *src_poly*: for polyhedral computations.
  * *src_delaunay*: for computing Delaunay polytopes and space of Delaunay tesselations. Also optimizes the sphere covering density over those spaces, for lattices and for periodic point sets, see [doc/COVERING_OPTIMIZATION.md](https://github.com/MathieuDutSik/polyhedral_common/blob/HEAD/doc/COVERING_OPTIMIZATION.md).
  * *src_dualdesc*: for computing dual description on serial computers.
  * *src_copos*: for copositivity / strict copositivity…
