---
repo: "nf-core/diseasemodulediscovery"
name: "diseasemodulediscovery"
description: "A pipeline for network-based disease module identification."
url: "https://github.com/nf-core/diseasemodulediscovery"
homepage: "https://nf-co.re/diseasemodulediscovery"
language: "Python"
languages: ["Python", "Nextflow"]
languagePcts: [50, 49]
topics: ["nextflow", "nf-core", "pipeline", "workfllow", "complex-diseases", "disease-mechanisms", "disease-modules", "drug-repurposing", "networks", "protein-protein-interaction"]
stars: 5
forks: 6
openIssues: 37
closedIssues: 55
watchers: 199
contributors: 171
recentReleases: 0
createdAt: "2023-08-29T10:07:28Z"
lastCommitAt: "2026-06-30T06:51:26Z"
status: "watched"
tags: ["hidden_gem", "community_watch", "fork_magnet"]
healthScore: 85
undervaluedScore: 48
maintainers: ["JohannesKersting", "Schansiate", "nf-core-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb9866a05e13a08682af0895ef0bd8536e17e9e84d97eccd92f09e8e2335a2df/nf-core/diseasemodulediscovery"
---

<h1>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/images/nf-core-diseasemodulediscovery_logo_dark.png">
  </picture>
</h1>

## Introduction

**nf-core/diseasemodulediscovery** is a bioinformatics pipeline for network medicine hypothesis generation, designed for identifying active/disease modules. Developed and maintained by the [RePo4EU](https://repo4.eu/) consortium, it aims to characterize the molecular mechanisms of diseases by analyzing the local neighborhood of disease-associated genes or proteins (seeds) within the interactome. This approach can help identify potential drug targets for drug repurposing.

- Module inference (all enabled by default):
  - [`DOMINO`](https://github.com/Shamir-Lab/DOMINO)
  - [`DIAMOnD`](https://github.com/dinaghiassian/DIAMOnD)
  - [`ROBUST`](https://github.com/bionetslab/robust)
  - [`ROBUST (bias-aware)`](https://github.com/bionetslab/robust_bias_aware)
  - `1st Neighbors`
  - `random walk with restart (RWR)`
- Evaluation
  - Over-representation analysis ([`g:Profiler`](https://cran.r-project.org/web/packages/gprofiler2/index.html))
  - Functional coherence analysis ([`DIGEST`](https://pypi.org/project/biodigest/))…
