---
repo: "sagar87/spatialproteomics"
name: "spatialproteomics"
description: "Spatialproteomics is a light weight wrapper around xarray with the intention to facilitate the data exploration and analysis of highly multiplexed immunohistochemistry data. Docs available here:  https://sagar87.github.io/spatialproteomics/ ."
readmeQualityOk: true
url: "https://github.com/sagar87/spatialproteomics"
homepage: "https://sagar87.github.io/spatialproteomics/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 83
forks: 13
openIssues: 1
closedIssues: 54
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2022-08-12T07:02:40Z"
lastCommitAt: "2026-10-23T12:04:30Z"
lastReleaseAt: "2024-07-01T10:57:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 43
maintainers: ["MeyerBender", "maren-ha", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/780777cef3fb26af62a45485fe71a3af99179172f7755d85c7211fd9693448cc/sagar87/spatialproteomics"
---

# spatialproteomics

`Spatialproteomics` is an interoperable toolbox for analyzing highly multiplexed fluorescence image data. This analysis involves a sequence of steps, including segmentation, image processing, marker quantification, cell type classification, and neighborhood analysis. 

## Principles

Multiplexed imaging data comprises at least 3 dimensions (i.e. `channels`, `x`, and `y`) and often contains additional data such as segmentation masks or cell type annotations associated with it. In `spatialproteomics`, we use `xarray` to create a data structure that keeps all of these data dimension in sync. This data structure can then be used to apply all sorts of operations to the data. Users can segment cells, perform different image processing steps, quantify protein expression, predict cell types, and plot their data in various ways. By providing researchers with those tools, `spatialproteomics` can be used to quickly explore highly multiplexed spatial proteomics data directly within jupyter notebooks.

## Getting Started

Please refer to the [documentation](https://sagar87.github.io/spatialproteomics) for details on the API and tutorials.

If you work with an AI coding…
