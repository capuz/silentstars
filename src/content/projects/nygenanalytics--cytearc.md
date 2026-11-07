---
repo: "NygenAnalytics/CyteArc"
name: "CyteArc"
description: "Fast, out-of-core single-cell analysis in Python for RNA, ATAC, protein, and multi-omic data, scaling to 100M+ cells. Mount remote datasets, work within a memory budget, and trace every result through built-in provenance."
readmeQualityOk: true
url: "https://github.com/NygenAnalytics/CyteArc"
homepage: "https://docs.nygen.io/CyteArc/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["batch-correction", "bioinformatics", "cite-seq", "object-storage", "out-of-core", "provenance-tracking", "python", "scatac-seq", "scrna-seq", "scrna-seq-analysis"]
stars: 9
forks: 2
openIssues: 4
closedIssues: 22
watchers: 1
contributors: 4
recentReleases: 6
createdAt: "2026-10-07T12:03:02Z"
lastCommitAt: "2026-11-07T10:37:01Z"
lastReleaseAt: "2026-10-23T23:59:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 63
maintainers: ["parashardhapola"]
openGraphImageUrl: "https://opengraph.githubassets.com/b40d6ae07ed391fb5aab3ff5fa0edec453f535f3a13b0eadf8c9c4445b02ce1e/NygenAnalytics/CyteArc"
---

CyteArc is a Python framework for **single-cell RNA, ATAC, protein, and matched multi-omic analysis**. Its Zarr layout and read engine are designed together for efficient access by cell or gene, locally or directly from remote storage.

CyteArc analysed **Tahoe-100M in under 20 hours on commodity hardware**, from cell filtering through UMAP, clustering, and marker gene identification, **without downsampling the dataset or using GPUs**. The same workflow processed one million cells within 15 minutes.

Mount remote datasets, combine studies into **virtual datasets**, and run pipelines with provenance stored alongside the results.

[Documentation](https://docs.nygen.io/CyteArc/) · [Quick start](https://docs.nygen.io/CyteArc/quickstart) · [Methods and validation](https://docs.nygen.io/CyteArc/reference/methods)

## Capabilities

| Analysis | What you can do |
| :-- | :-- |
| **[Data access](https://docs.nygen.io/CyteArc/tutorials/remote-stores)** | Mount local or remote stores; combine cells across studies into virtual datasets without copying their counts |
| **[Cell calling and QC](https://docs.nygen.io/CyteArc/tutorials/quality-control)** | EmptyDrops cell calling, ambient RNA…
