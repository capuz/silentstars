---
repo: "Jabruson/UDBM"
name: "UDBM"
description: "Official code for ICML2026-Uncertainty-Aware Diffusion Bridge Model (UDBM)."
readmeQualityOk: true
url: "https://github.com/Jabruson/UDBM"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 17
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-29T06:57:04Z"
lastCommitAt: "2026-11-12T05:36:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 45
undervaluedScore: 15
maintainers: ["Jabruson"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbbd0196c08ab37c0b6086d0afeba672b591ff343b6d4bae278db73b18ea36ac/Jabruson/UDBM"
---

# UDBM-ICML26 [Link of the paper](https://proceedings.mlr.press/v306/tu26d.html)

Official training and evaluation code for **Uncertainty-Aware Diffusion Bridge Model (UDBM)**.

UDBM uses:

- **Stage 1**: an auxiliary restoration network for pixel-wise uncertainty prediction.
- **Stage 2**: an uncertainty-aware diffusion bridge with a denoising/restoration network.
- **Single-step inference** by default for the released evaluation script.

## Repository Structure

```text
UDBM-ICML26/
|-- train_s1.py                 # train Stage 1 uncertainty estimator
|-- train_s2.py                 # train Stage 2 UDBM bridge
|-- test_s2.py                  # evaluate Stage 2 checkpoints
|-- train_s1.sh                 # simple Stage 1 training command
|-- train_s2.sh                 # simple Stage 2 training command
|-- train.sh                    # simple two-stage training command
|-- test.sh                     # simple standard benchmark evaluation
|-- test_real.sh                # simple real-world evaluation
|-- test_cd11.sh                # simple CD11 evaluation
|-- requirements.txt
|-- scripts/                    # configurable shell wrappers
|-- data/                       #…
