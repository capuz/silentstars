---
repo: "mtex-toolbox/pymtex"
name: "pymtex"
description: "MTEX is a python library for quantitative texture analysis."
readmeQualityOk: true
url: "https://github.com/mtex-toolbox/pymtex"
homepage: "http://mtex-toolbox.github.io/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["crystallography", "ebsd", "texture-analysis", "xrd"]
stars: 17
forks: 3
openIssues: 2
closedIssues: 3
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2026-09-22T19:15:10Z"
lastCommitAt: "2026-10-27T12:40:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 44
maintainers: ["ralfHielscher"]
openGraphImageUrl: "https://opengraph.githubassets.com/0641efb79c612e57a4e663120f386389d0fcf195b9480e456ec9097699bc50ec/mtex-toolbox/pymtex"
discussionCount: 2
---

# MTEX for Python

MTEX is the toolbox for crystallographic texture analysis. This package is MTEX in Python,
with the names, the syntax and the numbers of the MATLAB toolbox:

* crystal geometry: point groups, crystal frames, Miller indices, orientations and misorientations
* EBSD maps: import from every major vendor format, grains, boundaries, intragranular quantities,
  denoising, parent grain reconstruction, maps of volumes
* pole figures: import, and ODF reconstruction from them
* functions on the sphere and on the orientation space: density estimation, harmonic expansions,
  texture characteristics
* tensors: elasticity, plasticity, the Taylor model, optics
* publication ready plots: pole figures, inverse pole figures, ODF sections, maps, 3D scenes

## Installation

```
pip install "mtex[all]"
```

The plain `pip install mtex` needs NumPy, SciPy and finufft only. The extras add the rest:
`numba` compiled kernels (much faster, strongly recommended), `plot` matplotlib, `io` the HDF5
formats, `plot3d` PyVista for the 3D scenes, `wizard` the import window; `all` is all of them.
MTEX runs on Python 3.12 or later on Linux, macOS and Windows.

## A first look

```python
from mtex…
