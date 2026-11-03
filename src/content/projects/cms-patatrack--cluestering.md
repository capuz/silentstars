---
repo: "cms-patatrack/CLUEstering"
name: "CLUEstering"
description: "High-performance density-based weighted clustering library developed at CERN "
readmeQualityOk: true
url: "https://github.com/cms-patatrack/CLUEstering"
homepage: "https://cms-patatrack.github.io/CLUEstering/"
language: "C++"
languages: ["C++"]
languagePcts: [77]
topics: ["cern", "clustering", "cpp", "pybind11", "python", "alpaka", "cuda", "tbb", "openmp"]
stars: 34
forks: 22
openIssues: 31
closedIssues: 63
watchers: 6
contributors: 17
recentReleases: 0
createdAt: "2022-08-05T10:03:12Z"
lastCommitAt: "2026-11-03T11:14:57Z"
lastReleaseAt: "2025-02-18T13:12:46Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 63
maintainers: ["sbaldu", "dependabot[bot]", "mmarriot"]
openGraphImageUrl: "https://opengraph.githubassets.com/1963a9ecc6e5c2dd0da610d6699a9b8094d851975a6318641d0d804b37afd2d4/cms-patatrack/CLUEstering"
---

# CLUEstering — High-Performance Density-Based Weighted Clustering for Heterogeneous Computing

**CLUEstering** is a general-purpose, density-based, weighted clustering library designed for high-performance scientific computing.  
It is written in **C++20** and provides both **C++** and **Python** interfaces.

CLUEstering is based on [**CLUE**](https://www.frontiersin.org/articles/10.3389/fdata.2020.591315/full), a clustering algorithm developed at **CERN**.
CLUE combines the flexibility of density-based clustering with the generality of weighted clustering. Unlike traditional density-based methods,
CLUE integrates point weights directly into the computation of local densities—making weights an intrinsic part of the clustering logic rather than an external modifier.

CLUE is also designed for parallel execution, scaling linearly with problem size and performing efficiently on massively parallel architectures such as **GPUs** and **FPGAs**.  
To maximize hardware portability and performance, CLUEstering’s backend is implemented using [**alpaka**](https://github.com/alpaka-group/alpaka),
a high-efficiency abstraction library for performance portability across CPUs, GPUs, and other…
