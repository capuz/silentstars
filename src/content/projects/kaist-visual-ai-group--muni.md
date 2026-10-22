---
repo: "KAIST-Visual-AI-Group/MUNI"
name: "MUNI"
description: "[NeurIPS 2026] Official Implementation of MUNI: Multimodal Unified Latent Diffusion for Coherent Any-to-Any Generation"
readmeQualityOk: true
url: "https://github.com/KAIST-Visual-AI-Group/MUNI"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 16
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-08-19T11:12:12Z"
lastCommitAt: "2026-10-22T08:51:13Z"
status: "thriving"
tags: []
healthScore: 70
undervaluedScore: 1
maintainers: ["32V"]
openGraphImageUrl: "https://opengraph.githubassets.com/599c16fa28f3d7a4f48b5aeaee96b87b3c8b4720396d6543c942ec6830edb4c4/KAIST-Visual-AI-Group/MUNI"
---

# MUNI: Multimodal Unified Latent Diffusion for Coherent Any-to-Any Generation

[Kyeongmin Yeo](https://32v.github.io/)\*,
[Yunhong Min](https://myh4832.github.io/)\*,
[Minhyuk Sung](https://mhsung.github.io/)  
KAIST  
\* Equal contribution

NeurIPS 2026

[Paper](https://arxiv.org/abs/2606.16408) |
[Project Page](https://muni-proj.github.io/)

Official PyTorch implementation of MUNI. Modality-specific Gaussian posteriors
are combined through product-of-experts or Hellinger aggregation, with encoders
and decoders trained jointly with a flow-based latent prior.

Experiments cover image-text-audio, PolyMNIST-Quadrant-Labels, and GMM.

## Installation

Use Python 3.10 and PyTorch 2.9.1. The example below uses CUDA 12.8; choose
another build from the [PyTorch installation guide](https://docs.pytorch.org/get-started/previous-versions/)
if needed.

```bash
conda create -n muni python=3.10
conda activate muni

# Example: PyTorch 2.9.1 with CUDA 12.8
pip install torch==2.9.1 torchvision==0.24.1 torchaudio==2.9.1 \
  --index-url https://download.pytorch.org/whl/cu128

pip install -r requirements.txt
```

```bash
export DATA_ROOT=/path/to/data
export CKPT_ROOT=/path/to/checkpoints
```…
