---
repo: "NiRuff/soupx-python"
name: "soupx-python"
description: "Python Reimplementation of the soupx scRNA ambient removal package"
readmeQualityOk: true
url: "https://github.com/NiRuff/soupx-python"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [96]
stars: 11
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-08-26T12:46:56Z"
lastCommitAt: "2026-10-30T10:22:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 28
maintainers: ["NiRuff"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2fd26852c90173465b01df1aa47cca558b63ed7864b0bd98d60806c1a898dcd/NiRuff/soupx-python"
---

# SoupX Python

A Python implementation of SoupX for removing ambient RNA contamination from droplet-based single-cell RNA sequencing data.
 
## Overview

Droplet-based single-cell RNA sequencing (scRNA-seq) experiments contain ambient RNA contamination from cell-free mRNAs present in the input solution. This "soup" of background contamination can significantly confound biological interpretation, particularly in complex tissues where contamination rates can exceed 20%.

SoupX addresses this by:
1. **Estimating** the ambient RNA expression profile from empty droplets
2. **Quantifying** contamination fraction in each cell using marker genes  
3. **Correcting** cell expression profiles by removing estimated background

This Python implementation maintains full compatibility with the original R package interface while integrating seamlessly with the Python scRNA-seq ecosystem (scanpy, anndata).

## Background & Citation

This implementation is based on the method described in:

> **Young, M.D., Behjati, S.** SoupX removes ambient RNA contamination from droplet-based single-cell RNA sequencing data. *GigaScience* 9, giaa151 (2020).…
