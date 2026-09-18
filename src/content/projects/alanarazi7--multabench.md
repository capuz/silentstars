---
repo: "alanarazi7/MulTaBench"
name: "MulTaBench"
description: "MulTaBench: A Multimodal Tabular Benchmark"
readmeQualityOk: true
url: "https://github.com/alanarazi7/MulTaBench"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 11
forks: 3
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-03T11:04:26Z"
lastCommitAt: "2026-09-18T14:03:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 82
undervaluedScore: 46
maintainers: ["alanarazi7", "eilamshapira"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f62a1399cab876b7a2103879938e6fe98b390d482f21c81a71969e1a7edc2d7/alanarazi7/MulTaBench"
---

# MulTaBench

A benchmark for multimodal tabular learning: tables whose columns include images or free text, not
just numbers and categories. It is 20 image-tabular and 20 text-tabular curated datasets, with 40
further datasets released alongside them, 80 in total. The benchmark evaluates tabular learners
under a target-aware setting, where the image and text encoders are fine-tuned on the task rather
than used frozen.

**Paper**: [MulTaBench: Benchmarking Multimodal Tabular Learning with Text and Image](https://arxiv.org/abs/2605.10616)  
**Datasets**: [kaggle.com/chico89](https://www.kaggle.com/chico89/datasets)

## Getting started

```bash
source init.sh && source .venv/bin/activate
cp .env.example .env     # Weights & Biases, Hugging Face and Kaggle credentials

python benchmark.py --model light --dataset_name MUL_IMAGE_PETFINDER --fold 0 --multimodal_state all
```

`benchmark.py` is the single entry point: it evaluates one model on one dataset and logs the
result to Weights & Biases. `--help` lists the available models and the feature combinations each
run can use, from tabular-only through fully multimodal with fine-tuned encoders.

## Datasets

Every dataset is hosted on…
