---
repo: "EngreitzLab/scE2G"
name: "scE2G"
description: "Pipeline to run scE2G"
readmeQualityOk: true
url: "https://github.com/EngreitzLab/scE2G"
language: "Python"
languages: ["Python", "R"]
languagePcts: [60, 36]
stars: 69
forks: 8
openIssues: 6
closedIssues: 21
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2023-10-30T18:45:59Z"
lastCommitAt: "2026-11-05T00:21:26Z"
lastReleaseAt: "2025-10-13T09:49:21Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 40
maintainers: ["kaybrand", "emattei", "mayasheth"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ab6b967822540b1efbe4b352a4b4dff8a618dc8eed24a5df208b17e0b4a9f3e/EngreitzLab/scE2G"
---

# scE2G

A computational pipeline for predicting genome-wide enhancer-gene regulatory links from single-cell ATAC-seq or paired ATAC and RNA-seq (multiome) data.

## Overview

**Input:** Single-cell ATAC-seq or paired ATAC and RNA-seq (multiome) data per cell cluster

**Output:** Genome-wide enhancer-gene regulatory link predictions per cell cluster

### Pipeline components

1. **ABC model predictions** - Compute ABC model predictions for each cell cluster
2. **E2G feature generation** - Generate element-gene features from ABC predictions  
3. **Correlation analysis** *(multiome only)* - Compute Kendall correlation and/or ARC-E2G score for each cell cluster
4. **Feature integration** - Combine components 2 & 3 to construct feature file for predictive model
5. **Model training** *(optional)* - Train predictive model using CRISPR-validated E-G pairs from K562 dataset
6. **Prediction** - Apply trained model to assign scores to each element-gene pair

## System requirements

### Hardware requirements

The scE2G pipeline necessitates a standard computer furnished with ample RAM to facilitate the operations as defined by a user. 
For optimal performance, we suggest using a computer…
