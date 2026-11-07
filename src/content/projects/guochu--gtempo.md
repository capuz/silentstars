---
repo: "guochu/GTEMPO"
name: "GTEMPO"
description: "Grassmann time-evolving matrix product operator for fermionic impurity problems"
readmeQualityOk: true
url: "https://github.com/guochu/GTEMPO"
language: "Julia"
languages: ["Julia"]
languagePcts: [95]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 9
recentReleases: 0
createdAt: "2023-12-25T14:25:53Z"
lastCommitAt: "2026-11-07T09:30:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 68
maintainers: ["guochu"]
openGraphImageUrl: "https://opengraph.githubassets.com/6aca8c70deffeb50c1fff7f948adae93af5f59291a108cd83c062c4aef5f6e3f/guochu/GTEMPO"
---

# GTEMPO.jl

GTEMPO is a Julia package that solves quantum impurity problems with
**Grassmann temporal basis representations**, a tensor-network formulation of
the influence-functional (IF) method built on Grassmann-number-valued matrix
product states (GMPS). GTEMPO is a fermionic analogy of the time-evolving
matrix product operator (TEMPO) method, where the latter is aimed for bosonic
impurity problems. It supports imaginary-time (Matsubara), real-time
(Keldysh) and mixed-time (Kadanoff–Baym) contours, multi-orbital impurities,
bosonic (electron–phonon) and superconducting (BCS) baths.

## Features

- **Contours**: imaginary time, real time, mixed (Kadanoff–Baym) time, and
  retarded-interaction orderings; ~25 Grassmann orderings with automatic
  conversion between them.
- **IF construction algorithms**: `PartialIF`, `XTRGIF`, `ExactTTIIF` and
  `TDVPIF`, with exact (zip-up) and boundary-MPS integration of GMPS products.
- **Observables**: Matsubara/real-time Green's functions, greater/lesser GFs,
  occupations, particle and heat currents (also in cached and fast MPO
  variants), with cached evaluation via environment tensors.
- **Impurities**: single-orbital Anderson (two bands)…
