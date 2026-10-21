---
repo: "astromadiv/ALMASim"
name: "ALMASim"
description: "A Web / CLI application to download, unpack, calibrate and image ALMA Observations and simulate them"
readmeQualityOk: true
url: "https://github.com/astromadiv/ALMASim"
homepage: "https://astromadiv.github.io/ALMASim/"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 13
forks: 0
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2022-06-10T07:32:42Z"
lastCommitAt: "2026-10-21T08:49:21Z"
lastReleaseAt: "2026-05-08T16:28:51Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 72
maintainers: ["MicheleDelliVeneri"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/501944702/34746947-149d-4016-9a3c-34465007bb83"
discussionCount: 0
---

# ALMASim

ALMASim is a **library-first** Python environment for simulating ALMA observations, exploring ALMA metadata, downloading science products, and building ML-ready radio/mm-wave datasets.

It provides reusable services in [`src/almasim`](https://github.com/astromadiv/ALMASim/blob/HEAD/src/almasim) that can be driven by CLI scripts, Jupyter notebooks, a FastAPI backend, or direct Python code — all through the same staged API.

---

## Table of Contents

- [Key Capabilities](#key-capabilities)
- [Architecture](#architecture)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Staged Simulation API](#staged-simulation-api)
- [Skymodels](#skymodels)
- [Compute Backends](#compute-backends)
- [Metadata and Downloads](#metadata-and-downloads)
- [Backend Service](#backend-service)
- [Examples](#examples)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

---

## Key Capabilities

**Simulation**
- Build clean sky cubes from point, Gaussian, extended, molecular-cloud, diffuse, Galaxy Zoo, and Hubble-100 source models
- Simulate single-pointing ALMA interferometric observations with multi-configuration support (12m, 7m, TP)
-…
