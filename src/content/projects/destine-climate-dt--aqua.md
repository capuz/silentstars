---
repo: "DestinE-Climate-DT/AQUA"
name: "AQUA"
description: "AQUA model evaluation framework"
readmeQualityOk: true
url: "https://github.com/DestinE-Climate-DT/AQUA"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 29
forks: 5
openIssues: 57
closedIssues: 1126
watchers: 11
contributors: 31
recentReleases: 0
createdAt: "2022-09-06T12:27:37Z"
lastCommitAt: "2026-09-15T08:54:27Z"
lastReleaseAt: "2023-12-01T10:09:13Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 57
maintainers: ["oloapinivad", "jhardenberg", "mcadau"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c4aa279d6b57f04eebd10fdf83194f37708ca680be090370218fe34172b6b04/DestinE-Climate-DT/AQUA"
discussionCount: 3
---

# AQUA

The Application for QUality Assessment (AQUA) is a model evaluation framework designed for running diagnostics on high-resolution climate models, specifically for Climate DT climate simulations being part of Destination Earth activity. The package provides a flexible and efficient python3 framework to process and analyze large volumes of climate data. With its modular design, AQUA offers seamless integration of core functions and a wide range of diagnostic tools that can be run in parallel. AQUA offers:

- Efficient handling of large datasets from high-resolution climate models;
- Support for various data formats, such as NetCDF, GRIB, Zarr or FDB;
- Robust and fast regridding functionality based on CDO;
- Averaging and aggregation tools for temporal and spatial analyses;
- Modular design for easy integration of new diagnostics.

## Installation

AQUA requires python>=3.11,<3.15. Recommended installation should be done through a package manager for conda-forge (e.g. [Miniforge](https://github.com/conda-forge/miniforge)).

### Create conda/mamba environment and install packages

```
git clone git@github.com:DestinE-Climate-DT/AQUA.git
cd AQUA
mamba env create -f…
