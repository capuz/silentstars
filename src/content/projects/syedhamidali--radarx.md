---
repo: "syedhamidali/radarx"
name: "radarx"
description: "Xarray Based Radar Toolkit"
readmeQualityOk: true
url: "https://github.com/syedhamidali/radarx"
homepage: "https://radarx.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["azimuth", "plot", "ppi", "radar", "rhi", "cappi"]
stars: 8
forks: 2
openIssues: 18
closedIssues: 146
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-09-04T20:18:03Z"
lastCommitAt: "2026-10-23T12:03:27Z"
lastReleaseAt: "2024-11-18T19:05:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 97
undervaluedScore: 80
maintainers: ["syedhamidali", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/67968fbcd37aa584680351a72912cb9bccf26a89f4770790dc0f1a3e3ea6ffff/syedhamidali/radarx"
discussionCount: 3
---

# Radarx

Radarx is a Python library for weather radar data processing and visualization. It builds on [xradar](https://xradar.readthedocs.io/en/latest/), which reads radar data from many formats into [xarray](https://docs.xarray.dev/) [DataTree](https://docs.xarray.dev/en/stable/user-guide/hierarchical-data.html) structures, and adds gridding, retrievals and plotting through the `.radarx` accessor.

> [!WARNING]
> **This project is currently in high development mode.**
> Features may change frequently, and some parts of the library may be incomplete or subject to change. Please proceed with caution.

## Key Features

- **Fast, accurate gridding**: Cone gridding interpolates within each sweep and then between sweeps, using the radar's own geometry. A compiled C++ kernel grids tens of millions of cells in a fraction of a second, with no smoothing radius to tune (`dtree.radarx.to_grid()`). Barnes interpolation is also available.
- **CAPPI retrieval**: Constant-altitude PPIs with several methods (`dtree.radarx.create_cappi()`).
- **Interactive plotting**: [hvplot](https://hvplot.holoviz.org/)-based range-azimuth, PPI, RHI, CAPPI and Max-CAPPI views on DataArrays, Datasets and…
