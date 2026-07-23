---
repo: "Secondtonumb/IF-MDD"
name: "IF-MDD"
description: "[Interspeech'26 Long Paper] Beyond Acoustic Sparsity and Linguistic Bias: A Prompt-Free Paradigm for Mispronunciation Detection and Diagnosis"
readmeQualityOk: true
url: "https://github.com/Secondtonumb/IF-MDD"
homepage: "https://arxiv.org/html/2604.22133v1"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 13
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-07-17T14:16:57Z"
lastCommitAt: "2026-07-23T06:14:59Z"
status: "thriving"
tags: []
healthScore: 64
undervaluedScore: 33
maintainers: ["Secondtonumb"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a69e855e8b068433fe6c45a9255d51adcb62d560885150c32d7802a26b6b525/Secondtonumb/IF-MDD"
---

# IF-MDD

Official implementation of:

- [**IF-MDD: Indirect Fusion for Mispronunciation Detection and Diagnosis**](https://github.com/Secondtonumb/Secondtonumb.github.io/blob/main/docs/Geng_ICASSP_2026_final.pdf)
- [**Beyond Acoustic Sparsity and Linguistic Bias: A Prompt-Free Paradigm for Mispronunciation Detection and Diagnosis**](https://arxiv.org/html/2604.22133v1)

For more details, check the demo:

## Updates

- `2026-06`: `main` now focuses on the public core research tracks from the new paper: `CROTTC`, `IF-MDD`, `IF + CROTTC`, and `LLM-MDD`.
- `2026-06`: `PPATP` is the primary documented `LLM-MDD` path in this repository.
- `2025-10`: added timestamp-aware CTC decoding in `inference.py`.
- `2025-10`: released the pretrained CTC checkpoint and inference example.

## Installation

```bash
git clone https://github.com/Secondtonumb/IF-MDD.git
cd IF-MDD
conda create -n ifmdd python=3.10 -y
conda activate ifmdd
pip install -r requirements.txt
```

Notes:

- `LLM-MDD` experiments additionally rely on `accelerate`, `bitsandbytes`, and `peft` via `requirements.txt`.
- The representative public configs use relative paths by default. For local datasets or pretrained checkpoints…
