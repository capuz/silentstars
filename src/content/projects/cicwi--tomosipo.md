---
repo: "cicwi/tomosipo"
name: "tomosipo"
description: "A library for painless 3D tomographic reconstruction"
readmeQualityOk: true
url: "https://github.com/cicwi/tomosipo"
homepage: "https://cicwi.github.io/tomosipo"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [82]
topics: ["tomography", "cuda", "python3", "scientific-computing"]
stars: 107
forks: 25
openIssues: 0
closedIssues: 22
watchers: 7
contributors: 8
recentReleases: 0
createdAt: "2018-09-25T12:42:26Z"
lastCommitAt: "2026-07-24T06:09:16Z"
lastReleaseAt: "2025-04-30T13:41:13Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 85
undervaluedScore: 41
maintainers: ["askorikov"]
openGraphImageUrl: "https://opengraph.githubassets.com/21aeeda48101da61feea7ec0a38f87704202a772b955c533b8a499ac07f47cae/cicwi/tomosipo"
---

<h1 align="center">
</h1><br>

Tomosipo is a powerful, pythonic interface for the ASTRA Toolbox of high-performance GPU
primitives for tomography.

The aim of this library is to:

-   Expose a user-friendly API for high-performance 3D tomography, while allowing strict
    control over resource usage
    -   The [ts_algorithms](https://github.com/ahendriksen/ts_algorithms) library
        contains implementations of reconstruction algorithms using Tomosipo
-   Enable easy manipulation and visualization of 3D geometries
-   Provide easy integration with
    -   Deep learning toolkits, such as [PyTorch](https://pytorch.org)
    -   [The operator discretization library (ODL)](https://github.com/odlgroup/odl) for
        optimization in inverse problems
    -   [PyQtGraph](http://pyqtgraph.org/) for interactive visualization of geometries
        and data

The documentation can be found [here](https://cicwi.github.io/tomosipo/index.html).
An introduction and demonstration of `tomosipo` was published in [Optics Express](https://doi.org/10.1364/oe.439909).

-  [Installation](#installation)
-  [Usage](#usage)
    - [Create and visualize geometries](#create-and-visualize-geometries)
    -…
