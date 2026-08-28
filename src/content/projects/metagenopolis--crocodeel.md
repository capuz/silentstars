---
repo: "metagenopolis/CroCoDeEL"
name: "CroCoDeEL"
description: "CroCoDeEL detects cross-sample contamination in shotgun metagenomic data"
readmeQualityOk: true
url: "https://github.com/metagenopolis/CroCoDeEL"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["contamination-detection", "metagenomics", "quality-control"]
stars: 32
forks: 0
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-04-25T14:55:11Z"
lastCommitAt: "2026-08-28T14:30:46Z"
lastReleaseAt: "2026-02-09T14:52:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 58
maintainers: ["fplazaonate"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/791882790/7adc8ef3-8b26-4053-aa8f-cdf7e22a36d1"
discussionCount: 0
---

# CroCoDeEL: Cross-sample Contamination Detection and Estimation of its Level 🐊

## Introduction

### What is CroCoDeEL?
CroCoDeEL is a tool that detects cross-sample contamination (aka well-to-well leakage) in shotgun metagenomic data.\
It accurately identifies contaminated samples but also pinpoints contamination sources and estimates contamination rates.\
CroCoDeEL relies only on species abundance tables and does not need negative controls nor sample position during processing (i.e. plate maps).

### What CroCoDeEL is not
- CroCoDeEL is not designed to detect external or reagent contamination, as addressed by tools such as [decontam](https://doi.org/10.1186/s40168-018-0605-2) or [SCRuB](https://doi.org/10.1038/s41587-023-01696-w).
- CroCoDeEL detects and quantifies cross-contamination, but it does not yet provide a decontamination module.
- CroCoDeEL was developed for complex microbial communities and is not intended for isolate genomics or low-complexity microbial communities.

</p>

## Installation

CroCoDeEL is available on [bioconda](https://anaconda.org/channels/bioconda/packages/crocodeel/overview):
```
conda create --name crocodeel_env -c conda-forge -c bioconda…
