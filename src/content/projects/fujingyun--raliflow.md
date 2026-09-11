---
repo: "FuJingyun/RaLiFlow"
name: "RaLiFlow"
description: "Source code For AAAI 2026 paper: \"RaLiFlow: Scene Flow Estimation with 4D Radar and LiDAR Point Clouds\""
readmeQualityOk: true
url: "https://github.com/FuJingyun/RaLiFlow"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 15
forks: 0
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-14T23:48:05Z"
lastCommitAt: "2026-09-11T08:14:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 65
undervaluedScore: 28
maintainers: ["FuJingyun"]
openGraphImageUrl: "https://opengraph.githubassets.com/17160414ac40f42da0b5bf2e97e7ba720fbdc346ab2e0f8d7535f8d8b25fa837/FuJingyun/RaLiFlow"
---

# RaLiFlow: Scene Flow Estimation with 4D Radar and LiDAR Point Clouds
Source Code for AAAI 2026 paper: "RaLiFlow: Scene Flow Estimation with 4D Radar and LiDAR Point Clouds". 
[Paper Link](http://arxiv.org/abs/2512.10376)

## Cite Us
If you find it useful, please cite our work:

```bibtex
@inproceedings{fu2026raliflow,
  title={RaLiFlow: Scene Flow Estimation with 4D Radar and LiDAR Point Clouds},
  author={Fu, Jingyun and Xiang, Zhiyu and Zhao, Na},
  booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},
  volume={40},
  number={5},
  pages={4012--4021},
  year={2026}
}
```

## 0. Setup
**Environment**: Clone the repo and build the environment. We use conda to manage the environment.
check [detail installation](https://github.com/KTH-RPL/OpenSceneFlow/assets/README.md) for more information. 

```bash
conda env create -f environment.yaml
```

CUDA package (need install nvcc compiler):
```bash
# CUDA already install in python environment.
cd assets/cuda/chamfer3D && python ./setup.py install && cd ../../..
```

## 1. Data Preparation
### A. Download The View-of-Delft dataset [(VoD)](https://github.com/tudelft-iv/view-of-delft-dataset)
The dataset is organized…
