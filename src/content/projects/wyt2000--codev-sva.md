---
repo: "wyt2000/CodeV-SVA"
name: "CodeV-SVA"
description: "[DAC 2026] QiMeng-CodeV-SVA: Training Specialized LLMs for Hardware Assertion Generation via RTL-Grounded Bidirectional Data Synthesis"
readmeQualityOk: true
url: "https://github.com/wyt2000/CodeV-SVA"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["data-synthesis", "formal-verification", "large-language-models", "systemverilog-assertions"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-16T07:29:35Z"
lastCommitAt: "2026-10-14T08:59:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 26
maintainers: ["wyt2000"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cbd4db86934b7d1b8f48a244548a3de486d2dc37184e91b4855c665c6a44d3c/wyt2000/CodeV-SVA"
---

# CodeV-SVA: Training Specialized LLMs for Hardware Assertion Generation via RTL-Grounded Bidirectional Data Synthesis

## Introduction

CodeV-SVA is a family of large language models designed to translate natural-language verification properties into SystemVerilog Assertions (SVAs). This repository provides the model-training framework, evaluation client, formal-verification server, data utilities, and metric scripts required for the complete CodeV-SVA workflow.

Open-source plan:

- Model ✓
- Evaluation code ✓
- Paper ✓
- Dataset ✓
- Data synthesis and training code ✓

## Repository structure

| Directory | Description |
| --- | --- |
| `LLaMA-Factory/` | Model training and fine-tuning framework. It contains training configurations, dataset registration, distributed training scripts, Docker files, and tests. CodeV-SVA training examples are under `examples/train_full/`, and cluster job examples are under `slurm/`. |
| `SVAClient/` | Client-side SVA workflows. It builds prompts, queries local or remote language models, requests formal verification, caches results, and runs tasks such as NL2SVA and Wave2SVA. |
| `SVAServer/` | HTTP formal-verification service. It wraps…
