---
repo: "aspragueumkc/hydra2dgpu"
name: "hydra2dgpu"
description: "GPU-accelerated 2D shallow water equation solver for QGIS — CUDA finite-volume method with unstructured mesh support"
readmeQualityOk: true
url: "https://github.com/aspragueumkc/hydra2dgpu"
homepage: "https://github.com/aspragueumkc/hydra2dgpu"
language: "Python"
languages: ["Python"]
languagePcts: [74]
topics: ["cuda", "finite-volume-method", "gis", "gpu-computing", "hydraulic-modeling", "hydrodynamics", "qgis", "shallow-water-equations"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-06-10T16:36:55Z"
lastCommitAt: "2026-08-04T06:11:05Z"
lastReleaseAt: "2026-07-11T14:04:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 66
maintainers: ["aspragueumkc"]
openGraphImageUrl: "https://opengraph.githubassets.com/45c2114fe52ea3f618171dc137b60e70cb756642a6d9c5f96192d40f6b49b23b/aspragueumkc/hydra2dgpu"
discussionCount: 0
---

# HYDRA — GPU-Accelerated 2D Shallow Water Equation Plugin for QGIS

[MIT License](https://github.com/aspragueumkc/hydra2dgpu/blob/HEAD/LICENSE)

HYDRA is a QGIS plugin for 2D shallow water equation (SWE) modeling with a CUDA-accelerated finite-volume solver. It couples surface hydrodynamics, 1D urban drainage networks, hydraulic structures (weirs, culverts, gates, bridges, pumps), and rainfall/infiltration — all within the QGIS map canvas.

## Features

- **GPU-accelerated solver** — Full CUDA path with graph caching for high throughput
- **Unstructured mesh FVM** — Triangles, quads, and general polygons via Gmsh,  or built in backend (triangles only)
- **Multiple spatial schemes** — First-order, MUSCL (Fast/MinMod/MC/Van Leer), WENO5
- **Multiple temporal schemes** — Euler, RK2, RK4, Graph-safe RK4/RK5
- **Boundary conditions** — Wall, inflow, stage, open, normal depth, hydrograph timeseries
- **1D drainage coupling** — SWMM-style pipe networks (EGL, Diffusion, Dynamic wave)
- **Hydraulic structures** — FHWA HDS-5 culverts, weirs, gates, bridges, pumps
- **Rainfall & infiltration** — Rain-on-grid with SCS Curve Number
- **Results export** — GeoPackage, UGRID NetCDF, GeoTIFF, CSV…
