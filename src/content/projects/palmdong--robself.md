---
repo: "palmdong/RobSelf"
name: "RobSelf"
description: "[ECCV 2026] Robust Self-Supervised Cross-Modal Super-Resolution against Real-World Misaligned Observations"
readmeQualityOk: true
url: "https://github.com/palmdong/RobSelf"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 22
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-18T06:40:48Z"
lastCommitAt: "2026-09-04T08:09:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 66
undervaluedScore: 25
maintainers: ["palmdong"]
openGraphImageUrl: "https://opengraph.githubassets.com/65ab8b575376d01f90d50592c3d639538ed597acc4f7970e6bc6c0bf92a37d47/palmdong/RobSelf"
---

# RobSelf
PyTorch implementation of "Robust Self-Supervised Cross-Modal Super-Resolution against Real-World Misaligned Observations"  
[[arXiv](https://arxiv.org/abs/2602.18822), [supp](https://drive.google.com/file/d/1fqTYuSY7Qp7PFHiHViZs7y6lz6Bws7ws/view?usp=sharing)] [[ECCV poster](https://drive.google.com/file/d/1SgLUbdSARKdgiP4i1_KXqVYEEy8hujwW/view?usp=sharing)]

## Updates
**[2026/09/03]** The source code has been released.  
**[2026/07/30]** Our real-world misaligned dataset, RealMisSR, is now available.  
**[2026/06/18]** Our paper has been accepted to ECCV 2026. See you in Malmö, Sweden.  

## Overview

## Code
Download the RealMisSR dataset to `./data`.

Environment:

```bash
conda env create -f robself.yml
source activate RobSelf
```

Select the desired model variant in `model/network.py` by uncommenting its corresponding line:

```python
self.align_extractor = AlignExtractorDeform(scale, n_channels=64) # RobSelf-de (better performance)
# self.align_extractor = AlignExtractorEfficient(scale, n_channels=64) # RobSelf-re (higher efficiency)
```

Run the optimization (inference) script:

```bash
python infer_azure_depth.py
```

## RealMisSR Dataset
Our collected…
