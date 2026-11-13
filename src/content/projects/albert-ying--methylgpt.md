---
repo: "albert-ying/MethylGPT"
name: "MethylGPT"
description: "This is the official codebase for methylGPT : a foundation model for the DNA methylome."
readmeQualityOk: true
url: "https://github.com/albert-ying/MethylGPT"
homepage: "https://www.biorxiv.org/content/10.1101/2024.10.30.621013v2"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 69
forks: 17
openIssues: 5
closedIssues: 3
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2024-12-16T18:42:13Z"
lastCommitAt: "2026-11-13T11:21:12Z"
lastReleaseAt: "2026-11-12T10:22:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 31
maintainers: ["albert-ying"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e2a64feda368ad494b880903265f3018e0e921e377f884beec1efcf1ab92aa7/albert-ying/MethylGPT"
---

# MethylGPT

**MethylGPT: a foundation model for the DNA methylome**

MethylGPT is a foundation model that learns the co-methylation structure of the human DNA methylome without labels from 169,010 public DNA methylation profiles (145,700 for training) and reads profiles from 27K, 450K, EPIC v1 and EPIC v2 arrays, measured completely or in part. Trained further on age, sex, tissue and 25 published clock outputs, it returns imputed values, latent scores, sample embeddings, age, sex, tissue and the distilled clock outputs.

## Code and weights

[`methylgpt/`](https://github.com/albert-ying/MethylGPT/blob/HEAD/methylgpt/) holds the `methylgpt` package (version 1.1.2) with its tutorial and test, the analysis code of the paper, and the vocabulary and split tables; its README explains how to install and run the package. The weights (bundle `methylgpt-1.1`) are attached to the release [v1.1.2](https://github.com/albert-ying/MethylGPT/releases/tag/v1.1.2).

## Data

Training data are available from GEO, the [EWAS Data Hub](https://bigd.big.ac.cn/ewas/datahub) and [ClockBase](https://clockbase.org); `methylgpt/release_tables/` gives each profile's identifier, dataset group and split. The…
