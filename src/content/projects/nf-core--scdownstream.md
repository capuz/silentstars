---
repo: "nf-core/scdownstream"
name: "scdownstream"
description: "A single cell transcriptomics pipeline for QC, integration and making the data presentable"
readmeQualityOk: true
url: "https://github.com/nf-core/scdownstream"
homepage: "https://nf-co.re/scdownstream"
language: "Nextflow"
languages: ["Nextflow"]
languagePcts: [81]
topics: ["clustering", "dimensionality-reduction", "integration", "quality-control", "scverse", "single-cell", "nextflow", "nf-core", "pipeline", "workflow"]
stars: 118
forks: 69
openIssues: 11
closedIssues: 123
watchers: 165
contributors: 193
recentReleases: 0
createdAt: "2024-06-11T06:38:31Z"
lastCommitAt: "2026-10-26T09:18:02Z"
status: "thriving"
tags: ["solo_builder", "community_watch", "fork_magnet"]
healthScore: 95
undervaluedScore: 45
maintainers: ["nictru", "mashehu", "nf-core-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1ee68703e6301fbf939c9101ec072fca2fb577c674143067161cb31ddba4abb/nf-core/scdownstream"
---

## Introduction

**nf-core/scdownstream** is a bioinformatics pipeline that can be used to process already quantified single-cell RNA-seq data.
It takes a samplesheet and H5AD-, SingleCellExperiment/Seurat- or CSV files as input and performs quality control, integration, dimensionality reduction and clustering.
The pipeline produces an integrated H5AD file and an extensive QC report.
With `--tords`, it also converts the final H5AD file to a SingleCellExperiment RDS file.

The pipeline is based on the learnings and implementations from the following pipelines (alphabetical):

- [panpipes](https://github.com/DendrouLab/panpipes)
- [scFlow](https://combiz.github.io/scFlow/)
- [scRAFIKI](https://github.com/Mye-InfoBank/scRAFIKI)
- [YASCP](https://github.com/wtsi-hgi/yascp)

# 

The pipeline uses the following tools:

1. Per-sample preprocessing
   1. Convert all RDS files to H5AD format
   2. Create filtered matrix (if not provided)
      - [CellBender](https://cellbender.readthedocs.io/en/latest/)
      - [EmptyDrops](https://bioconductor.org/packages/release/bioc/html/DropletUtils.html)
   3. Present QC for raw counts ([`MultiQC`](http://multiqc.info/))
   4. Remove ambient RNA…
