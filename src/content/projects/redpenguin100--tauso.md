---
repo: "RedPenguin100/TAUSO"
name: "TAUSO"
description: "Code for the ASO design module by Tel Aviv University"
readmeQualityOk: true
url: "https://github.com/RedPenguin100/TAUSO"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [62, 38]
stars: 5
forks: 1
openIssues: 4
closedIssues: 2
watchers: 1
contributors: 5
recentReleases: 1
createdAt: "2025-11-07T13:49:26Z"
lastCommitAt: "2026-08-28T12:23:13Z"
lastReleaseAt: "2026-08-26T12:33:38Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 62
maintainers: ["RedPenguin100", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d943016999dbebaac14ca7f1737b2874fe0c668d955f1907ef6f9167cdcd059/RedPenguin100/TAUSO"
---

This work is NOT published as-of yet, and is in progress. Please stay tuned for the published version of our software.

Shield: [][cc-by-nc]

This work is licensed under a
[Creative Commons Attribution-NonCommercial 4.0 International License][cc-by-nc].

[cc-by-nc]: https://creativecommons.org/licenses/by-nc/4.0/

[cc-by-nc-image]: https://licensebuttons.net/l/by-nc/4.0/88x31.png

[cc-by-nc-shield]: https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg 

# TAUSO

Feature extraction and analysis utilities for antisense oligonucleotides (ASO) design, built for the TAU-Israel 2025
iGEM project.

## Features

* MOE (20-mer) and LNA (16-mer) candidate ranking pipeline with feature breakdown and off-target analysis.
* Features include GC content, hybridization, RNA accessibility, folding, and toxicity heuristics.
* Tool to download genomic sequences, annotations, and index them with `bowtie`.

## Getting Started

**→ New users: See [Quick Start Guide](https://github.com/RedPenguin100/TAUSO/blob/HEAD/documentation/QUICKSTART.md) for step-by-step instructions.**

## Installation

```bash
# One command - installs everything
mamba env create -f environment-dev.yml
mamba…
