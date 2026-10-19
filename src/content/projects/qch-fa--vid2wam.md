---
repo: "qch-FA/Vid2WAM"
name: "Vid2WAM"
description: "The implementation codebase for Vid2WAM: Distilling Video Diffusion Priors into World Action Models."
readmeQualityOk: true
url: "https://github.com/qch-FA/Vid2WAM"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-10T13:07:46Z"
lastCommitAt: "2026-10-19T09:09:00Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 61
undervaluedScore: 12
maintainers: ["qch-FA"]
openGraphImageUrl: "https://opengraph.githubassets.com/1edb224a6ae117e30729c670cbb9baf2b8e2a539f7c289be436433f9857eceaf/qch-FA/Vid2WAM"
---

# Vid2WAM: Distilling Video Diffusion Priors into World Action Models

This repository contains the implementation code for Vid2WAM: Distilling Video Diffusion Priors into World Action Models.

## Release Progress

- [x] Checkpoints and evaluation code
- [x] Teacher and IDM training code
- [ ] Pseudo-data generation code
- [ ] Distillation training code

## Checkpoints

Download each checkpoint together with its matching normalization statistics. Our model checkpoints on both regimes for LIBERO/LIBERO-Plus and RoboTwin can be downloaded with:

```bash
python - <<'PY'
from huggingface_hub import snapshot_download

snapshot_download(
    repo_id="FaLLAut/vid2wam_ckpts",
    local_dir="checkpoints/vid2wam_ckpts",
    allow_patterns=["*.pt", "dataset_stats/*.json"],
)
PY
```

## Environment Setup

Clone the repository:

```bash
git clone https://github.com/qch-FA/Vid2WAM.git
cd Vid2WAM
conda create -n vid2wam python=3.10 -y
conda activate vid2wam
python -m pip install --upgrade pip setuptools wheel
pip install torch==2.7.1 torchvision==0.22.1 --index-url https://download.pytorch.org/whl/cu128
pip install -e .
```

For evaluation, download the Wan2.2 VAE, BF16 UMT5-XXL encoder, and…
