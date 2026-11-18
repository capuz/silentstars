---
repo: "GridTools/gt4py"
name: "gt4py"
description: "Python library for generating high-performance implementations of stencil kernels for weather and climate modeling from a domain-specific language (DSL)."
readmeQualityOk: true
url: "https://github.com/GridTools/gt4py"
homepage: "https://GridTools.github.io/gt4py"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 155
forks: 62
openIssues: 136
closedIssues: 317
watchers: 9
contributors: 39
recentReleases: 0
createdAt: "2019-11-05T09:12:36Z"
lastCommitAt: "2026-11-18T12:03:01Z"
lastReleaseAt: "2025-09-04T06:38:17Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 92
undervaluedScore: 46
maintainers: ["havogt", "edopao", "egparedes"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a9932fba539ff0f6ee3fd888dca6c9af7021d367284ab43b77418c8adc1f242/GridTools/gt4py"
---

# GT4Py: GridTools for Python

GT4Py is a Python library for generating high performance implementations of stencil kernels from a high-level definition using regular Python functions. GT4Py is part of the GridTools framework, a set of libraries and utilities to develop performance portable applications in the area of weather and climate modeling.

**NOTE:** The `gt4py.next` subpackage contains a new version of GT4Py which is not compatible with the current _stable_ version defined in `gt4py.cartesian`. The new version is still experimental.

## 📃 Description

GT4Py is a Python library for expressing computational motifs as found in weather and climate applications. These computations are expressed in a domain specific language (GTScript) which is translated to high-performance implementations for CPUs and GPUs.

The DSL expresses computations on a 3-dimensional Cartesian grid. The horizontal axes (`I`, `J`) are always computed in parallel, while the vertical (`K`) can be iterated in sequential, forward or backward, order. Cartesian offsets are expressed relative to a center index.
