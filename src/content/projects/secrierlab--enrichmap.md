---
repo: "secrierlab/EnrichMap"
name: "EnrichMap"
description: "EnrichMap: Spatially-informed enrichment analysis for functional interpretation of spatial transcriptomics."
readmeQualityOk: true
url: "https://github.com/secrierlab/EnrichMap"
homepage: "https://enrichmap.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["geneset-enrichment", "spatial-transcriptomics"]
stars: 17
forks: 4
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-05-19T12:49:41Z"
lastCommitAt: "2026-11-06T11:23:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 39
maintainers: ["cenk-celik"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/986326450/7f2ddb10-9923-462d-9f19-d3d12e8bff92"
---

# EnrichMap: Spatially-aware gene set enrichment

`EnrichMap` is a lightweight tool designed to compute and visualise enrichment scores of a given gene set or signature in spatial transcriptomics datasets across different platforms. It offers flexible scoring, batch correction, spatial smoothing and visual outputs for intuitive exploration of biological signatures.

## Features

- Fast computation of enrichment scores
- Scores standardised against a null model of expression-matched random gene sets, so a positive score means enrichment over random genes at that spot
- Support for batch correction and optional spatial covariate correction
- Built-in spatial smoothing
- Visualisation tools for intuitive mapping
- Easy integration with AnnData (.h5ad) objects

## System requirements

- **Operating system:** developed and tested on macOS 26 (Apple M2 Pro, 16 GB RAM) and Ubuntu 22.04 Server. `EnrichMap` is a pure-Python package with pip-installable dependencies, so it is expected to run on Linux and Windows as well, but these have not been tested.
- **Python:** ≥ 3.10. Tested with Python 3.11.9 and 3.12.4.
- **Hardware:** no non-standard hardware is required (no GPU). The demo below…
