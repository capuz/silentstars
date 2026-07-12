---
repo: "xiaojieli0903/CKPD-FSCIL"
name: "CKPD-FSCIL"
description: "[ACM MM 2026] Official implementation of “Continuous Knowledge-Preserving Decomposition with Adaptive Layer Selection for Few-Shot Class-Incremental Learning”."
readmeQualityOk: true
url: "https://github.com/xiaojieli0903/CKPD-FSCIL"
homepage: "https://arxiv.org/pdf/2501.05017"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["continual-learning", "few-shot-learning", "image-classification", "knowledge-management", "stability-plasticity-dilemma", "vision-transformers"]
stars: 34
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-12-19T02:21:07Z"
lastCommitAt: "2026-07-12T06:17:45Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 28
maintainers: ["xiaojieli0903"]
openGraphImageUrl: "https://opengraph.githubassets.com/3274f6246aaf608304dae13731d68394d8f31c8f7885e0f9044b0d6710cc101c/xiaojieli0903/CKPD-FSCIL"
---

# Continuous Knowledge-Preserving Decomposition with Adaptive Layer Selection for Few-Shot Class-Incremental Learning

This is the official repository for **Continuous Knowledge-Preserving Decomposition with Adaptive Layer Selection for Few-Shot Class-Incremental Learning**, accepted at **ACM Multimedia 2026 (ACM MM 2026)**.

> **[Continuous Knowledge-Preserving Decomposition with Adaptive Layer Selection for Few-Shot Class-Incremental Learning](https://arxiv.org/abs/2501.05017)**
> [Xiaojie Li](https://xiaojieli0903.github.io/), Wei Liu, Bei Wang, [Jianlong Wu](https://wujianlong.hit.github.io), [Yue Yu](https://yuyue.github.io/), [Min Zhang](https://zhangmin2021.hit.github.io)
> **ACM Multimedia 2026**

## 🔨 Installation

1. **Create a Conda environment**:

   ```bash
   conda create --name ckpdfscil python=3.10 -y
   conda activate ckpdfscil
   ```

2. **Install dependencies**:

   ```bash
   pip install torch==1.12.1+cu113 torchvision==0.13.1+cu113 torchaudio==0.12.1 \
     --extra-index-url https://download.pytorch.org/whl/cu113

   pip install -U openmim
   mim install mmcv-full==1.7.0 mmengine==0.10.4

   pip install opencv-python matplotlib einops timm==0.6.12 \…
