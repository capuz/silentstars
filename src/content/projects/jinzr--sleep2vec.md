---
repo: "JinZr/sleep2vec"
name: "sleep2vec"
description: "Modular self-supervised learning for sleep signals"
readmeQualityOk: true
url: "https://github.com/JinZr/sleep2vec"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2025-11-16T04:33:31Z"
lastCommitAt: "2026-11-07T16:11:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 60
maintainers: ["JinZr"]
openGraphImageUrl: "https://opengraph.githubassets.com/3fafe9ef4a47117efcb88077fa213086f94edbde16d2a2373e4e7b5d63c62091/JinZr/sleep2vec"
---

# sleep2vec

---

**Quick links** · `configs/` recipes · `sleep2vec/` source · `data/` datasets & loaders · `preprocess/` caching scripts · `utils/` helpers

---

## Table of Contents
- [sleep2vec](#sleep2vec)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Setup](#setup)
  - [Data Format \& Caches](#data-format--caches)
  - [Kaldi Backend Recipes](#kaldi-backend-recipes)
  - [Quick Start](#quick-start)
    - [Pretrain (contrastive)](#pretrain-contrastive)
    - [Adaptation — staged wearable expansion](#adaptation--staged-wearable-expansion)
    - [Finetune — classification](#finetune--classification)
    - [Finetune — regression](#finetune--regression)
  - [Inference Only](#inference-only)
  - [Configuration Knobs](#configuration-knobs)
  - [Diagnostics Mode](#diagnostics-mode)
  - [Working Tips](#working-tips)
  - [Repository Layout](#repository-layout)

---

## Overview
- Refactored training flow: **YAML defines architecture & loss**, **CLI sets training hyperparameters** (epochs, lr, devices, etc.).
- Supports contrastive pretraining, staged modality adaptation for new sensors, plus downstream classification or regression finetuning.
- Extensible…
