---
repo: "spectrochempy/spectrochempy"
name: "spectrochempy"
description: "SpectroChemPy is a framework for processing, analyzing and modeling spectroscopic data for chemistry with Python"
readmeQualityOk: true
url: "https://github.com/spectrochempy/spectrochempy"
homepage: "https://www.spectrochempy.fr"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["spectroscopy", "chemistry", "data-analysis", "processing", "datasets", "python", "infrared", "nmr-spectroscopy", "uv-vis", "ftir-data-analysis"]
stars: 187
forks: 36
openIssues: 11
closedIssues: 302
watchers: 5
contributors: 9
recentReleases: 0
createdAt: "2020-05-13T06:20:05Z"
lastCommitAt: "2026-10-24T08:21:34Z"
lastReleaseAt: "2022-01-10T18:18:02Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "community_hub"]
healthScore: 99
undervaluedScore: 45
maintainers: ["fernandezc", "atravert", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/263542899/f03193ee-9386-418c-a3d1-04dcc5f5b51d"
discussionCount: 50
---

SpectroChemPy

## What is SpectroChemPy?

SpectroChemPy (SCPy) is a framework for processing, analyzing, and modeling
spectroscopic data for chemistry with Python. It is cross-platform (Linux,
Windows, macOS) and combines a lightweight scientific core with optional
plugins for domain-specific workflows.

Its central object, `NDDataset`, provides numerical data together with
coordinates, units, masks, labels, history, and metadata, making it easier
to build reproducible spectroscopy workflows in Python.

The history records participating operations on a dataset. It is inspectable,
but it is not a complete provenance record; reproducibility also requires the
originating script or notebook, inputs, environment, and parameters.

## Key Features

* **Core Data Structure**: `NDDataset` with coordinates, units, masks, labels,
  history, and metadata
* **Project Management**: Organize and manipulate multiple datasets within a
  `Project`
* **Data Processing**:
  * Unit-aware mathematical operations
  * Baseline correction, automatic subtraction, interpolation, FFT workflows
  * Core processing with plugin-specific extensions where appropriate
* **Analysis Tools**:
  * SVD, PCA, MCR-ALS,…
