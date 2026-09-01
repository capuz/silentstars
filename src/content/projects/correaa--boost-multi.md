---
repo: "correaa/boost-multi"
name: "boost-multi"
description: "Multidimensional arrays for C++. (Not an official Boost library) \\\\ This is a mirror of gitlab.com/correaa/boost-multi"
readmeQualityOk: true
url: "https://github.com/correaa/boost-multi"
homepage: "https://correaa.github.io/boost-multi/index.html"
language: "C++"
languages: ["C++"]
languagePcts: [78]
topics: ["cpp", "multidimensional-arrays"]
stars: 23
forks: 3
openIssues: 29
closedIssues: 6
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2024-04-18T18:02:57Z"
lastCommitAt: "2026-09-01T08:45:43Z"
lastReleaseAt: "2026-03-31T07:02:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 55
maintainers: ["alfC", "correaa"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/788592255/419d3f82-bdaf-44a8-aed9-6ee5457c3e1f"
---

# Boost.Multi

Boost.Multi provides owning multidimensional arrays containers and non-owning multidimensional views for C++17. It supports slicing, layout transformations, and CPU/GPU memory.

> **Project status:** Boost.Multi is not an official or accepted Boost library. It is being proposed for inclusion in [Boost](https://www.boost.org/) and has no Boost-library dependencies.

_© Alfredo A. Correa, 2018–2026_

## Why Boost.Multi?

* **Generic element type and dimensionality**
* **Natural multidimensional access:** write `A[i][j]...` or iterate recursively over rows, subarrays or elements.
* **Composable subarray views:** slice, transpo
se, rotate indices, and broadcast arrays without copying their elements.
* **Interoperability:** use standard algorithms (iterators and ranges), allocators, and legacy libraries for strided arrays (BLAS, FFTW, CUDA, HIP, MPI, etc.)

## Quick start

```bash
git clone https://github.com/correaa/boost-multi.git  # or gitlab.com/correaa/boost-multi.git
cd boost-multi
cmake -S . -B build
cmake --build build
ctest --test-dir build --output-on-failure
```

Read the…
