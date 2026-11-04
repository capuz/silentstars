---
repo: "frankyeh/DSI-Studio"
name: "DSI-Studio"
description: "A Tractography Tool for Diffusion MRI"
readmeQualityOk: true
url: "https://github.com/frankyeh/DSI-Studio"
homepage: "http://dsi-studio.labsolver.org"
language: "C++"
languages: ["C++"]
languagePcts: [100]
topics: ["dsi-studio"]
stars: 169
forks: 71
openIssues: 1
closedIssues: 99
watchers: 11
contributors: 8
recentReleases: 0
createdAt: "2012-08-21T18:34:17Z"
lastCommitAt: "2026-11-04T02:56:14Z"
lastReleaseAt: "2026-07-25T16:03:54Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 47
maintainers: ["frankyeh", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/82cc6e503011fff54fe41f0c51b6d00456b2c0e3523cbb72ca07d20b152d47ee/frankyeh/DSI-Studio"
fundingLinks: ["GITHUB:https://github.com/frankyeh"]
discussionCount: 0
---

# DSI Studio

Follow: [](https://twitter.com/FangChengYeh)  
Subscribe: [](https://www.youtube.com/c/FrankYeh)

**Official Website:** https://dsi-studio.labsolver.org  
**User Forum:** https://groups.google.com/g/dsi-studio

---

## Overview

DSI Studio is a standalone software package for **diffusion MRI (dMRI)** reconstruction, **deterministic tractography**, and **connectome analysis**. It is designed to be lightweight and practical for everyday use, while still supporting advanced analysis features for large studies and reproducible pipelines.

DSI Studio supports:
- End-to-end workflows from raw diffusion data to tractography and connectomes
- Interactive analysis in the GUI and automated batch processing via CLI
- Multiple reconstruction models (DTI, GQI, QSDR, and related derivatives)
- Export of tracts, voxelwise maps, region-to-region connectomes, and tract-to-region connectomes

If you use DSI Studio in your work, please cite the relevant methods (see [Citations](#citations)).

---

## Key Features

### Diffusion Reconstruction
- Import diffusion datasets from **DICOM** or **NIfTI**
- Reconstruct diffusion models and generate fiber data (`.fz`)
- Support for common…
