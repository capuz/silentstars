---
repo: "tyrofanfan/HTNav"
name: "HTNav"
description: "Code for:HTNav: A Hybrid Navigation Framework with Tiered Structure for Urban Aerial Vision-and-Language Navigation"
readmeQualityOk: true
url: "https://github.com/tyrofanfan/HTNav"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-12T15:00:12Z"
lastCommitAt: "2026-11-04T08:04:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 55
undervaluedScore: 16
maintainers: ["tyrofanfan"]
openGraphImageUrl: "https://opengraph.githubassets.com/20e83549641cdeb8236d95d249085d1c36174a8b74a029050bc25f0ba5db25a7/tyrofanfan/HTNav"
---

# 🚁 HTNav

## Overview

**HTNav: A Hybrid Navigation Framework with Tiered Structure for Urban Aerial Vision-and-Language Navigation**

Accepted by **CVPR 2026**

---
Code upload is still in progress.

This code was developed with Python 3.10, PyTorch 2.2.2, and CUDA 11.8 on Ubuntu 22.04.

To set up the environment, create the conda environment and install PyTorch.

```bash
conda create -n htnav python=3.10 &&
conda activate htnav &&
conda install pytorch torchvision pytorch-cuda=11.8 -c pytorch -c nvidia
```

Then install Set-of-Marks and its dependencies.

```bash
conda install mpi4py

pip install git+https://github.com/water-cookie/Segment-Everything-Everywhere-All-At-Once.git@package
pip install git+https://github.com/water-cookie/Semantic-SAM.git@package
pip install git+https://github.com/facebookresearch/segment-anything.git 

git clone https://github.com/water-cookie/SoM.git  &&
cd SoM/ops && ./make.sh && cd ..  &&
pip install --editable . && cd ..
```

```bash
pip install -r requirements.txt
```
