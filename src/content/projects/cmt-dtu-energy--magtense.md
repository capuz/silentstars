---
repo: "cmt-dtu-energy/MagTense"
name: "MagTense"
description: "MagTense - a micromagnetism and magnetostatic framework"
readmeQualityOk: true
url: "https://github.com/cmt-dtu-energy/MagTense"
homepage: "http://www.MagTense.org"
language: "Fortran"
languages: ["Fortran"]
languagePcts: [58]
stars: 38
forks: 16
openIssues: 3
closedIssues: 28
watchers: 3
contributors: 12
recentReleases: 0
createdAt: "2019-02-11T13:24:25Z"
lastCommitAt: "2026-09-11T08:16:22Z"
lastReleaseAt: "2025-09-30T06:44:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 62
maintainers: ["rasmusbj", "Ximtecs", "FrederikLD"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3e68681db901319ebe7c165be6d4bfff71eb04411dc4a0cb6a41fcb6b33ec17/cmt-dtu-energy/MagTense"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/cmt-dtu-energy/MagTense/refs/heads/master/docs/source/static/MagTenseLogo_White.svg" height=250>
  </picture>
  <br>
</div>
 
# MagTense

MagTense is a framework for magnetostatic and micromagnetic calculations.

## Features

- Interfaces for MATLAB and Python, with the core implemented in Fortran for speed;
- Fully analytical calculation of demagnetization tensor for cylinders, pieces of cylinders, prisms, circular pieces and tetrahedrons;
- Micromagnetic solutions of the Landau-Lifshitz equations, using the analytical demagnetization tensor described above;
- GPU-accelerated code with [CUDA®](https://developer.nvidia.com/cuda-zone) (requires NVIDIA graphics card).
- Uses Intel MKL for the micromagnetic simlations and can also utilize [CVODE](https://computing.llnl.gov/projects/sundials/cvode).
- Tested in Linux and Windows 11+ (macOS not supported at the moment).

## Installation and usage with the Python interface

Installation is recommended via `pip` (requires >=**Python 3.12**; wheels are built for Python 3.12, 3.13 and 3.14):

```
pip install magtense
```

Examples of how to…
