---
repo: "FusionComputingLab/freegs4e"
name: "freegs4e"
description: "Free boundary Grad-Shafranov solver for time evolution"
readmeQualityOk: true
url: "https://github.com/FusionComputingLab/freegs4e"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 12
forks: 10
openIssues: 0
closedIssues: 6
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2024-08-09T16:33:20Z"
lastCommitAt: "2026-08-29T10:22:20Z"
lastReleaseAt: "2025-03-31T09:27:41Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 81
maintainers: ["kpentland", "nicamo", "georgeholt1"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0390dedccecf9508e3b3c2c4f69e33b082f163428918c8f01f8c6110a106afc/FusionComputingLab/freegs4e"
---

# FreeGS4E: Free-boundary Grad-Shafranov for Evolution

FreeGS4E is a package forked from [FreeGS](https://github.com/freegs-plasma/freegs) (v0.6.1), which has the capability to solve the static inverse free-boundary Grad-Shafranov problem for plasma equilibria in tokamak devices.

Its intended usage is as an underlying solver for the dynamic (time-dependent) free-boundary equilibrium solver [FreeGSNKE](https://github.com/FusionComputingLab/freegsnke).

The addtion and removal of certain features within FreeGS, as well as some performance optimisation, were neccesary to enable this and so FreeGS4E has now diverged significantly from original FreeGS codebase.

Therefore, FreeGS4E is **not intended to be a drop in replacement solver for FreeGS** but rather is designed for use explicitly **within** [FreeGSNKE](https://github.com/FusionComputingLab/freegsnke).

## Installation

Given FreeGS4E is not a standalone equilibrium solver, we recommend following the [installation instructions for FreeGSNKE](https://docs.freegsnke.com/#installation) (which will install FreeGS4E automatically). 

If you would, however, like to contribute to FreeGS4E directly, please see the installation…
