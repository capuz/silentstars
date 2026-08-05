---
repo: "cparsania/VISTA"
name: "VISTA"
description: "Visualization and Integrated System for Transcriptomic Analysis"
readmeQualityOk: true
url: "https://github.com/cparsania/VISTA"
homepage: "https://cparsania.github.io/VISTA/"
language: "R"
languages: ["R"]
languagePcts: [100]
stars: 9
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-17T02:48:43Z"
lastCommitAt: "2026-08-05T06:07:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 82
undervaluedScore: 47
maintainers: ["cparsania", "jwokaty"]
openGraphImageUrl: "https://opengraph.githubassets.com/c82d0234873ad7437b540929da7e1706ecf7dd42cb60fafa502a617c82808cb6/cparsania/VISTA"
---

# VISTA <img src="man/figures/logo.png" align="right" height="200" alt="VISTA logo"/>

> **V**isualization and **I**ntegrated **S**ystem for **T**ranscriptomic **A**nalysis

**Bioconductor**

**Development**

VISTA is a Bioconductor framework for RNA-seq differential expression that keeps
counts, statistics, annotations, and figures in a single validated
`SummarizedExperiment`-based object — so you can go from raw counts to a
publication-ready narrative without rebuilding the same glue code each project.

```r
BiocManager::install("VISTA")
```

- 📦 **One object, one grammar** — `DESeq2`, `edgeR`, `limma-voom`, and a DESeq2/edgeR consensus behind a single entry point.
- 🎨 **40+ publication-ready plots** — QC, differential expression, expression patterns, fold-change structure, enrichment, and deconvolution.
- 🧬 **Bioconductor-native** — extends `SummarizedExperiment`, so `assay()`, `rowData()`, `colData()`, and `[` all work as expected.
- 📄 **Reproducible reporting** — export helpers plus a YAML-driven Quarto workflow.

---

## Contents

[Installation](#installation) · [Quick start](#quick-start) · [Why VISTA](#why-vista) · [Core workflow](#core-workflow) · [Plot…
