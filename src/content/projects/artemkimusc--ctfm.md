---
repo: "ArtemKimUSC/CTFM"
name: "CTFM"
description: "CT-FM (Cell Type Fine-Mapping) pipeline"
readmeQualityOk: true
url: "https://github.com/ArtemKimUSC/CTFM"
language: "R"
languages: ["R", "Shell"]
languagePcts: [36, 21]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-05-14T15:57:34Z"
lastCommitAt: "2026-11-05T00:22:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 52
maintainers: ["ArtemKimUSC"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2c26bf891b1e4fbc2d8c426276f9ee752086f35a26b7f045692fc1d8b942bf2/ArtemKimUSC/CTFM"
---

# Updates 2026

Since Python2 is discontinued, we are currently migrating CT-FM to a newer version of ldsc which works with Python3. For now, we integrated the ldsc version proposed by Stephen Dorn:
https://github.com/svdorn/ldsc-2.0.1<br />

We are now providing a summary of codes to generate the results from our preprint - https://www.medrxiv.org/content/10.1101/2024.05.17.24307556v2 - see [here](https://github.com/ArtemKimUSC/CTFM/blob/HEAD/CTFM_v1.ipynb) <br />

Our CT-FM paper is now published in Cell Genomics : https://www.cell.com/cell-genomics/fulltext/S2666-979X(26)00187-4

# CT-FM and CT-FM-SNP - Cell Type Fine-Mapping
**CT-FM** and **CT-FM-SNP** are statistical genetics methods to identify causal cell types underlying diseases/complex traits and particular candidate SNPs, respectively. We leverage cell type specific candidate cis-regulatory elements (cCREs) together with GWAS summary statistics while accounting for co-regulation of cis-regulatory effects across diverse cell types.

Contacts:<br /> 
Artem Kim artemkim@usc.edu<br />
Steven Gazal gazal@usc.edu<br />

# Installation

## Pre-requisites <br />

Make sure to have anaconda/conda and mamba installed in your…
