---
repo: "Zhou-Jiangcheng/dyncfs"
name: "dyncfs"
description: "This Python package serves as the frontend for computing static and dynamic Coulomb Failure Stress changes in layerd media."
readmeQualityOk: true
url: "https://github.com/Zhou-Jiangcheng/dyncfs"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 20
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-10T06:47:45Z"
lastCommitAt: "2026-09-15T08:36:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 66
undervaluedScore: 44
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/ecad42668863bb50957e2d4fd8d63bdf53dda2452427c02ab29616dfdcabd62c/Zhou-Jiangcheng/dyncfs"
---

# Introduction

This Python package serves as the frontend for computing static and dynamic Coulomb Failure Stress changes in layered media. The current backend dispatch uses EDGRN2/EDCMP2 for static stress, QSEIS2025 for layered dynamic stress, and QSSP2020 for spherical dynamic stress, based on programs developed by Rongjiang Wang and modified by Jiangcheng Zhou. The generation and retrieval of Green's function libraries are handled by the [pygrnwang](https://github.com/Zhou-Jiangcheng/pygrnwang) package, while travel-time calculations and geographic coordinate transformations are implemented using [obspy](https://github.com/obspy/obspy).

# Documentation

The local documentation follows the pygrnwang Sphinx / MyST / PyData layout.
Start with [the documentation home](https://github.com/Zhou-Jiangcheng/dyncfs/blob/HEAD/docs/index.md), [quickstart](https://github.com/Zhou-Jiangcheng/dyncfs/blob/HEAD/docs/quickstart.md),
or [中文入门](https://github.com/Zhou-Jiangcheng/dyncfs/blob/HEAD/docs/zh/index.md). Build and preview instructions are in
[docs/README.md](https://github.com/Zhou-Jiangcheng/dyncfs/blob/HEAD/docs/README.md); generated HTML is at `docs/_build/html/index.html`.
The…
