---
repo: "ptkjw1997/DGMRec"
name: "DGMRec"
description: "Missing Modality Generation for Recommendaton"
readmeQualityOk: true
url: "https://github.com/ptkjw1997/DGMRec"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 36
forks: 3
openIssues: 3
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-01-13T05:18:37Z"
lastCommitAt: "2026-07-23T06:14:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 56
undervaluedScore: 28
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/2aa929c00688624aa2250ce774ffd96817233c7ada8bb7387c1221b0b7306f48/ptkjw1997/DGMRec"
---

# DGMRec

The official source code for [**DGMRec: Disentangling and Generating Modalities for Recommendation in Missing Modality Scenarios**](https://arxiv.org/abs/2504.16352) (**SIGIR 2025**) and its extended journal version, *Towards Robust Real-World Multi-Modal Recommendation: Disentangling and Generating Missing Modalities* (under review at ACM TORS).

> `main` contains the extended version used for the journal submission: all compared baselines in a single pipeline, pinned per-model configurations and seeds, and one-command reproduction. The original SIGIR 2025 release is preserved on the [`sigir25`](https://github.com/ptkjw1997/DGMRec/blob/HEAD/../../tree/sigir25) branch.

## Overview

Multi-modal recommender systems (MRSs) have demonstrated significant success in improving personalization by leveraging diverse modalities such as images, text, and audio. However, they face two critical challenges: (1) addressing missing modality scenarios and (2) effectively disentangling shared and unique characteristics of modalities.
To overcome these challenges, we propose **D**isentangling and **G**enerating **M**odality **Rec**ommender (DGMRec), a novel framework designed for missing…
