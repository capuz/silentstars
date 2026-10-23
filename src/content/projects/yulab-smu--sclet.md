---
repo: "YuLab-SMU/sclet"
name: "sclet"
description: "A State-Aware Single-Cell and Spatial Transcriptomics Toolkit for SingleCellExperiment"
readmeQualityOk: true
url: "https://github.com/YuLab-SMU/sclet"
homepage: "http://yulab-smu.top/sclet/"
language: "R"
languages: ["R"]
languagePcts: [99]
stars: 24
forks: 8
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2024-08-03T08:47:14Z"
lastCommitAt: "2026-10-23T12:04:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 69
maintainers: ["GuangchuangYu"]
openGraphImageUrl: "https://opengraph.githubassets.com/5bca61b8857ffe73f2ea99407ae9308d4dc7d4ce08fbbaa430a4cfbb83b06cce/YuLab-SMU/sclet"
---

# `sclet`: A State-Aware Single-Cell & Spatial Toolkit for SingleCellExperiment

Artistic-2.0](https://img.shields.io/badge/license-Artistic--2.0-blue.svg)](https://cran.r-project.org/web/licenses/Artistic-2.0)

`sclet` is a state-aware single-cell and spatial transcriptomics
analysis toolkit built around `SingleCellExperiment`. It does not treat
`SCE` as a low-level backend hidden behind another abstraction. Instead,
it takes `SCE` as the primary analysis object and builds a unified
`Run*` API around it, with `Run<Mainline>Workflow()` shells that tie
independent modules into coherent, inspectable journeys.

Several verbs carry the same names as their Seurat counterparts
(`NormalizeData()`, `FindVariableFeatures()`, `FindClusters()`,
`FindMarkers()`, `DimPlot()`), so the syntax will look familiar. `sclet`
is not a compatibility layer over Seurat: the object of record is the
`SingleCellExperiment` throughout. One backend —
`RunPhenotypeAssociation()` — converts to Seurat internally because
scPAS requires it, and returns the results back into the `SCE`; nothing
else on the standard path does.

The package introduces an explicit **Analysis-State Contract**. In
practice, the object…
