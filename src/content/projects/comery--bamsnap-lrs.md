---
repo: "comery/BamSnap-LRS"
name: "BamSnap-LRS"
description: "A newly designed version of Bamsnap with Long Read Support (LRS) which inspired by bamsnap (https://github.com/parklab/bamsnap)"
readmeQualityOk: true
url: "https://github.com/comery/BamSnap-LRS"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["genomics-visualization", "variant-annotation"]
stars: 14
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2023-12-23T12:25:34Z"
lastCommitAt: "2026-11-23T10:13:48Z"
lastReleaseAt: "2026-11-23T09:52:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 58
maintainers: ["wanyi0309"]
openGraphImageUrl: "https://opengraph.githubassets.com/230768505059a37f372f81c5f9c5625762a720ef1b008b09cac9ff9ee87fd42e/comery/BamSnap-LRS"
---

# BamSnap-LRS
v2.1 [](https://doi.org/10.5281/zenodo.24461007)

**A static genome browser for long-read sequencing data**

BamSnap-LRS is a command-line tool for generating snapshots of BAM/CRAM alignments. It supports DNA and RNA long reads, structural-variant (SV) regions, and VCF-guided SNV highlighting. Figures are rendered as SVG and can also be exported as PNG or PDF, without requiring a web browser or server.

> **Scope:** BamSnap-LRS focuses on genomic intervals within a shared reference assembly. It does not provide a dedicated cross-chromosome translocation/breakend (BND) viewer.

## Contents

- [Key Features](#-key-features)
- [Installation](#-installation)
- [Input files and indexes](#input-files-and-indexes)
- [Quick Start](#-quick-start)
- [Command Reference](#-command-reference)
- [Visual Elements](#-visual-elements)
- [Limitation](#-Limitation)
- [Advanced Usage](#-advanced-usage)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

## ✨ Key Features

###  Visualization
- Read pileups, coverage and base-composition tracks, genomic axes, and nucleotide-colored mismatches.
- Static, customizable figures suitable for batch workflows.
