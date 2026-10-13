---
repo: "UniStuttgart-VISUS/uadapy"
name: "uadapy"
description: "Uncertainty-aware Data Analysis with Python"
readmeQualityOk: true
url: "https://github.com/UniStuttgart-VISUS/uadapy"
homepage: "https://unistuttgart-visus.github.io/uadapy/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 4
openIssues: 1
closedIssues: 26
watchers: 4
contributors: 14
recentReleases: 0
createdAt: "2024-01-30T14:26:45Z"
lastCommitAt: "2026-10-13T10:57:16Z"
lastReleaseAt: "2025-10-22T11:39:42Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 81
maintainers: ["hageldave", "marinaevers", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/97d7d168c84c2b24ff88c3b4f8ed84cd45c6de42d69e010fab735d362b9300d6/UniStuttgart-VISUS/uadapy"
---

# UADAPy - Uncertainty-aware Data Analysis with Python

UADAPy is a Python package to support an easy analysis of uncertain data.

The library provides:
- a unified `Distribution` class that wraps around various other distribution types such as `scipy.stats.<class>`
- a `TimeSeries` class that models uncertain time series and builds on the `Distribution` class
- implementations of uncertainty-propagating visualization algorithms, e.g., UAPCA, UAMDS, UASTL
- simple plotting API that already contains all the boilerplate code to visualize distributions
  - specializes in iso-contour plotting for distributions (determines probability densities that correspond to specific quantiles, automatic grid positioning, orientation, and sizing for density sampling)
- uncertain/distributional datasets, e.g. *Student Grades dataset*

## Installation
The package is available through PyPI and can be installed via pip
```
pip install uadapy
```
To get bleeding edge features, you can also install it from git
```
pip install git+https://github.com/UniStuttgart-VISUS/uadapy@<ref>
```

## Documentation
You can find the documentation here: https://unistuttgart-visus.github.io/uadapy/

It also contains an…
