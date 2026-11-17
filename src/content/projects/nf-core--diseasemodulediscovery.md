---
repo: "nf-core/diseasemodulediscovery"
name: "diseasemodulediscovery"
description: "A pipeline for network-based disease module identification."
readmeQualityOk: true
url: "https://github.com/nf-core/diseasemodulediscovery"
homepage: "https://nf-co.re/diseasemodulediscovery"
language: "Nextflow"
languages: ["Nextflow", "Python"]
languagePcts: [54, 45]
topics: ["nextflow", "nf-core", "pipeline", "workfllow", "complex-diseases", "disease-mechanisms", "disease-modules", "drug-repurposing", "networks", "protein-protein-interaction"]
stars: 6
forks: 6
openIssues: 38
closedIssues: 56
watchers: 190
contributors: 186
recentReleases: 0
createdAt: "2023-08-29T10:07:28Z"
lastCommitAt: "2026-11-17T14:37:51Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "community_watch", "fork_magnet"]
healthScore: 86
undervaluedScore: 48
maintainers: ["JohannesKersting", "Schansiate", "nf-core-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff4cfc2b48bb0e83e842f961a03f848671b94e16271a5f112b5c5a77ff2f77ac/nf-core/diseasemodulediscovery"
---

## Introduction

**nf-core/diseasemodulediscovery** is a bioinformatics pipeline for network medicine hypothesis generation, designed for identifying active/disease modules. Developed and maintained by the [RePo4EU](https://repo4.eu/) consortium, it aims to characterize the molecular mechanisms of diseases by analyzing the local neighborhood of disease-associated genes or proteins (seeds) within a molecular interaction network. The pipeline includes multiple disease module detection algorithms and an evaluation framework to compare the results returned by different methods.

- Module inference (all enabled by default):
  - [`DOMINO`](https://github.com/Shamir-Lab/DOMINO)
  - [`DIAMOnD`](https://github.com/dinaghiassian/DIAMOnD)
  - [`ROBUST`](https://github.com/bionetslab/robust)
  - [`ROBUST (bias-aware)`](https://github.com/bionetslab/robust_bias_aware)
  - `1st Neighbors`
  - `random walk with restart (RWR)`
- Evaluation
  - Over-representation analysis ([`g:Profiler`](https://cran.r-project.org/web/packages/gprofiler2/index.html))
  - Functional coherence analysis ([`DIGEST`](https://pypi.org/project/biodigest/))
  - Network topology analysis…
