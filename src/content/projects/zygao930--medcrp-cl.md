---
repo: "zygao930/MedCRP-CL"
name: "MedCRP-CL"
description: "MedCRP-CL: Continual Medical Image Segmentation via Bayesian Nonparametric Semantic Modality Discovery"
readmeQualityOk: true
url: "https://github.com/zygao930/MedCRP-CL"
homepage: "https://icml.cc/virtual/2026/poster/60965"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bayesian-methods", "continual-learning", "medical-vision-language-models", "catastrophic-forgetting", "chinese-restaurant-process", "low-rank-adaptation", "medical-image-segmentation"]
stars: 15
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-10T15:46:02Z"
lastCommitAt: "2026-09-19T02:48:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 15
maintainers: ["zygao930"]
openGraphImageUrl: "https://opengraph.githubassets.com/b92022f60194cb5ccf3a87037f637ed1d6162b2753c9e8919a1f03d5a163895a/zygao930/MedCRP-CL"
---

# MedCRP-CL

**Continual Medical Image Segmentation via Bayesian Nonparametric Semantic Modality Discovery**

## Update — September 18, 2026

I have released the JSON annotation files used in my experiments for 15 of the 16 datasets to improve reproducibility. The released annotation files can be found in the `anns/` directory.

The CVC-300 annotations are currently being re-checked to ensure consistency with the original [MedVLSM](https://github.com/naamiinepal/medvlsm) resources and the standard CVC-300 dataset. I am contacting the original authors for further clarification and will update the repository if necessary.

## Abstract

Medical image segmentation faces a fundamental challenge in continual learning: data arrives sequentially from heterogeneous sources, yet effective continual learning requires discovering which tasks share sufficient structure to benefit from joint learning. Existing methods either apply uniform constraints across all tasks, causing catastrophic forgetting when tasks conflict, or require predefined task groupings that cannot anticipate future task diversity. We introduce MedCRP-CL, a framework that performs online task structure discovery and…
