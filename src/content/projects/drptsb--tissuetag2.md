---
repo: "DRPTSB/TissueTag2"
name: "TissueTag2"
description: "Python package to interactively annotate histological images within a jupyter notebook"
readmeQualityOk: true
url: "https://github.com/DRPTSB/TissueTag2"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [99]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2023-11-29T17:38:53Z"
lastCommitAt: "2026-11-07T09:30:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 73
undervaluedScore: 55
maintainers: ["andr-kun", "nadavyayon"]
openGraphImageUrl: "https://opengraph.githubassets.com/2bac1fdd3625e5d2843c099499261d49fdd7d09825ee7bff93197873761f77cb/DRPTSB/TissueTag2"
---

# TissueTag2: a Jupyter-based tissue annotation tool for large scale and consistent analysis of spatial omics datasets

## Introduction

TissueTag2 is an interactive tissue-space annotation tool designed for seamless integration into Jupyter Notebook pipelines. TissueTag2 works on the image space and is thus compatible with any spatial modality that has a paired fluorescent and brightfield image. 

TissueTag2 consists of two major components:

1) **Jupyter-based image annotation tool**: Utilising the Bokeh Python library (http://www.bokeh.pydata.org) empowered by Datashader (https://datashader.org/index.html) and holoviews (https://holoviews.org/index.html) for pyramidal image rendering. This tool offers a streamlined annotation solution with subpixel resolution for quick interactive annotation of various image types (e.g., brightfield, fluorescence). TissueTag produces labelled images* (e.g., cortex, medulla) and logs all tissue labels, and annotation resolution and colours for reproducibility.

2) **Mapping annotations to data**: This components converts the pixel based annotations to an hexagonal grid to allow calculation of distances between morphological structures offering…
