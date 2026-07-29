---
repo: "ShenShan123/OpenYield"
name: "OpenYield"
description: "This project is a open-source yield analysis for SRAM circuits"
readmeQualityOk: true
url: "https://github.com/ShenShan123/OpenYield"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 27
forks: 5
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2025-02-12T02:03:19Z"
lastCommitAt: "2026-07-29T06:12:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 60
maintainers: ["MaJunhao-6", "W1Y1K1"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa8742dfe107f5a1b010c207dc5fcaa71cda553b6e2edc99e11f7784925c1989/ShenShan123/OpenYield"
---

# OpenYield: SRAM yield analysis and optimization

**OpenYield** generates 6T and 10T SRAM netlists for Xyce and evaluates noise margin, delay, power, area, and yield. The repository includes transistor-level arrays, an equivalent-cell model for unused cells, selectable process-variation flows, and sizing/architecture optimization drivers.

The circuit generator models parasitic capacitance/resistance, leakage coupling, and variation in peripheral circuits such as sense amplifiers and write drivers.

The main simulation backend is Xyce. FreePDK45 model cards are included under `tran_models/`.

## Key Features

* **Xyce Integration:** Utilizes the Xyce parallel circuit simulator for transistor-level simulations.
* **Monte Carlo Simulation Support:**
    * Built-in Monte Carlo simulations within Xyce.
    * Support for user-defined Monte Carlo simulations, allowing for custom process parameter generation.
* **SRAM Cell Types:** Supports 6T and 10T SRAM cells.
* **Equivalent Circuit Modeling:** Fast approximate equivalent circuits for unused SRAM cells (5-capacitor parasitic model: `c_bl`, `c_blb`, `c_wl`, `c_wl_bl`, `c_wl_blb`) to speed up large-array simulation.
* **Performance…
