---
repo: "pnnl/fast.ssgsea"
name: "fast.ssgsea"
description: "A high-performance variant of pre-ranked Gene Set Enrichment Analysis (GSEA) that is capable of testing gene sets where each gene has an expected direction of change from prior experiments."
url: "https://github.com/pnnl/fast.ssgsea"
language: "R"
languages: ["R", "C++"]
languagePcts: [61, 31]
topics: ["enrichment-analysis", "gene-set-enrichment-analysis", "gene-sets", "pathways", "permutation"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 3
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-07-26T04:14:20Z"
lastCommitAt: "2026-06-28T02:02:22Z"
lastReleaseAt: "2025-08-23T17:18:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 32
maintainers: ["TylerSagendorf"]
openGraphImageUrl: "https://opengraph.githubassets.com/450fa83dadf85f9bd51edf9bc86e0e63585c1c672b31e3f8becf7a4f87df977f/pnnl/fast.ssgsea"
discussionCount: 0
---

- [fast.ssgsea](#fastssgsea)
  - [Overview](#overview)
  - [Installation](#installation)
    - [macOS](#macos)
    - [Windows](#windows)
    - [Linux](#linux)
    - [Install](#install)
  - [Usage](#usage)
    - [Simulate Data](#simulate-data)
    - [Runtime and Results](#runtime-and-results)
    - [Session Information](#session-information)
  - [Benchmarking](#benchmarking)
    - [fast-ssGSEA](#fast-ssgsea)
    - [FGSEA-simple](#fgsea-simple)
  - [References](#references)

# fast.ssgsea

**NOTICE:** While this R package was based on the
[ssGSEA2.0](https://github.com/broadinstitute/ssGSEA2.0) repository,
neither perform single-sample Gene Set Enrichment Analysis (ssGSEA) as
originally described by Barbie, *et al.* ([Barbie et al.
2009](#ref-barbie-systematic-2009)). They are instead modifications of
pre-ranked GSEA that calculate the enrichment score (ES) differently and
support testing directional gene sets (details below). The package and
fast-ssGSEA name will be changed in the future.

## Overview

`fast.ssgsea` is an R package ([R Core Team 2026](#ref-R-core-team)) for
a highly optimized variant of pre-ranked Gene Set Enrichment Analysis
(GSEA) ([Subramanian et al.…
