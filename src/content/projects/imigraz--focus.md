---
repo: "imigraz/FOCUS"
name: "FOCUS"
description: "⚠️ OUTDATED: see imigraz/PRISM (Medical Image Analysis), the extended version that also contains this code. Official code for FOCUS (MICCAI 2025)."
readmeQualityOk: true
url: "https://github.com/imigraz/FOCUS"
homepage: "https://doi.org/10.1007/978-3-032-05185-1_22"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["continual-learning", "domain-incremental-learning", "feature-replay", "medical-image-segmentation", "mri", "nnunet", "privacy-preserving", "pytorch"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-06-18T11:41:07Z"
lastCommitAt: "2026-11-20T08:15:01Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 49
maintainers: ["Piakor"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae7a43867550aa056357c687f84ef732fd25f19100fd699eebd3111d4cbf5d32/imigraz/FOCUS"
---

# FOCUS: Feature Replay with Optimized Channel-Consistent Dropout for U-Net Skip-Connections

> **Warning**
>
> **This repository is outdated and no longer maintained.**
> FOCUS has been extended to **PRISM** (*Medical Image Analysis*), whose repository also contains the FOCUS code.
> **Please use [github.com/imigraz/PRISM](https://github.com/imigraz/PRISM) instead.**

[Paper](https://doi.org/10.1007/978-3-032-05185-1_22)
## Abstract

This repository contains the official implementation of **FOCUS** (Feature Replay with Optimized Channel-Consistent Dropout for U-Net Skip-Connections), a continual learning method for medical image segmentation across domain shifts. Unlike existing feature replay approaches that sacrifice U-Net skip-connections, FOCUS preserves these essential connections while maintaining privacy constraints and storage efficiency. Our method combines strong domain generalization techniques (GIN) with sparse feature replay using domain-balanced sampling (DBS), where sparsity is induced via channel-consistent dropout (CCD). 

## 📝 Citation

If you find this work useful in your research, please consider citing our paper:
