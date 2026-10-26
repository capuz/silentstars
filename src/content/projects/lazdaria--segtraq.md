---
repo: "LazDaria/SegTraQ"
name: "SegTraQ"
description: "A Python toolkit for quantitative and visual quality control of segmentation and transcript assignment in spatial omics data."
readmeQualityOk: true
url: "https://github.com/LazDaria/SegTraQ"
homepage: "https://lazdaria.github.io/SegTraQ/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 37
forks: 2
openIssues: 4
closedIssues: 87
watchers: 0
contributors: 5
recentReleases: 3
createdAt: "2025-07-29T13:48:25Z"
lastCommitAt: "2026-10-26T09:17:31Z"
lastReleaseAt: "2026-10-07T12:30:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 66
maintainers: ["MeyerBender", "LazDaria", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/c850906e767af990c4ed3a38f993120a0b15a66a9bc85f2b53411b45da79b468/LazDaria/SegTraQ"
---

# SegTraQ

> ⚠️ Note: SegTraQ is under active development. 
> Features, interfaces, and functionality may change in upcoming releases. 
> SegTraQ currently supports imaging-based spatial transcriptomics data only. 
> Support for sequencing-based spatial transcriptomics is in development and will be included in a future release.
> To install the latest development version, run `pip install git+https://github.com/LazDaria/SegTraQ`.

SegTraQ (**Seg**mentation and **Tra**nscript Assignment **Q**uality Assessment) is a Python toolkit for quantitative and visual quality assessment of segmentation and transcript assignment in spatial omics data.

## Getting Started
Please refer to the [documentation](https://lazdaria.github.io/SegTraQ) for details on the API and tutorials.

## Installation

To install `SegTraQ`, first create a python environment and install the package using 

```
pip install segtraq
```

The installation of the package should take less than a minute.

## Configuration

The number of CPU cores used by SegTraQ can be set globally via `segtraq.settings.n_jobs` or individually for each metric using the `n_jobs` parameter. By default, SegTraQ uses one core (`n_jobs=1`).…
