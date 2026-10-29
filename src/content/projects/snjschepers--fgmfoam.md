---
repo: "SNJSchepers/FGMFoam"
name: "FGMFoam"
description: "An OpenFOAM solver including FGM chemistry"
readmeQualityOk: true
url: "https://github.com/SNJSchepers/FGMFoam"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [77, 20]
stars: 7
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-10-03T11:30:17Z"
lastCommitAt: "2026-10-29T14:06:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 64
undervaluedScore: 61
maintainers: ["SNJSchepers"]
openGraphImageUrl: "https://opengraph.githubassets.com/2fe2dbf7aec80352a5cc89d74d108d85d63c127b2f7404d16127bcf719fa4306/SNJSchepers/FGMFoam"
---

# FGMFoam

## Overview

FGMFoam is an OpenFOAM combustion solver using Flamelet Generated Manifolds (FGM) [1]. It is developed by Stijn Schepers at Eindhoven University of Technology and built on top of OpenFOAM-com (ESI/OpenCFD branch).

FGM is a tabulated chemistry approach that reduces the computational cost of combustion simulations by pre-computing the flame chemistry on a low-dimensional manifold, parameterised by a small set of control variables such as a progress variable and enthalpy. At runtime, all thermochemical quantities are retrieved from the pre-computed table rather than solved through detailed chemistry, making industrial-scale combustion simulations feasible.

FGMFoam is designed as a modular framework: all FGM-related functionality (field management, control variable transport equations, and table lookup) is self-contained in a single library with no complex cross-dependencies. Multiple FGM models can coexist in the same solver and are selected at runtime through the input files, making it straightforward to extend the framework with new FGM models for your own research without modifying the rest of the codebase.

An optional **conversational agent** (`agent/`)…
