---
repo: "NMPPMaxPlanck/GEMPICX"
name: "GEMPICX"
description: "GEMPICX: a Geometric ElectroMagnetic Particle-In-Cell code based on AMReX"
readmeQualityOk: true
url: "https://github.com/NMPPMaxPlanck/GEMPICX"
language: "C++"
languages: ["C++"]
languagePcts: [95]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 18
recentReleases: 0
createdAt: "2026-03-03T16:49:15Z"
lastCommitAt: "2026-07-06T07:03:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 43
maintainers: ["EmilBPoulsen", "nischild", "chichilalescu"]
openGraphImageUrl: "https://opengraph.githubassets.com/699260bcee9a86f65c37cdf967506f1afa1b3e9a5be53a9699a35726464f5ff7/NMPPMaxPlanck/GEMPICX"
---

# GEMPICX

## Overview
GEMPICX stands for Geometric Electro-Magnetic Particle-In-Cell for eXascale. It is an open-source C++20 [AMReX](https://github.com/AMReX-Codes/amrex)-based framework for structure-preserving plasma physics numerics based on a geometric discretization related to Mimetic Finite Difference.  
Through a field discretization following the de Rham structure of Maxwell's equations and a particle-in-cell approach, equations of motions are derived from a discrete action principle.  
Degrees of freedom are defined as point-values, edge-, face- and volume integrals on a primal and its dual grid.  
For implementation details, see the [documentation](https://gempic.pages.mpcdf.de/gempic/)  
For mathematical details, see [references](#references).

A list of example simulations can be found in the [`Examples`](https://github.com/NMPPMaxPlanck/GEMPICX/blob/HEAD/Examples) directory. The documentation for these can be found [here](https://gempic.pages.mpcdf.de/gempic/latex/Examples.html), but a brief overview is:

| Example Simulation                                                                                          | Directory                                       |…
