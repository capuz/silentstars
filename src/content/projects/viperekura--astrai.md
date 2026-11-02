---
repo: "ViperEkura/AstrAI"
name: "AstrAI"
description: "A lightweight Transformer training & inference framework"
readmeQualityOk: true
url: "https://github.com/ViperEkura/AstrAI"
language: "Python"
languages: ["Python"]
languagePcts: [81]
topics: ["torch", "transformers", "llm", "cuda"]
stars: 112
forks: 18
openIssues: 5
closedIssues: 7
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2025-01-14T06:24:21Z"
lastCommitAt: "2026-11-02T15:16:57Z"
lastReleaseAt: "2026-07-05T11:41:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 43
maintainers: ["ViperEkura", "0z5a", "dorodo0721"]
openGraphImageUrl: "https://opengraph.githubassets.com/a709967abf86bd601f9c18cc361b28ed2dcb9835bc483d24aa058de2b4cd8c8d/ViperEkura/AstrAI"
discussionCount: 0
---

## Overview

AstrAI is a PyTorch framework for preparing data, training models, evaluating
checkpoints and serving inference. It brings these steps into one codebase, with
CLI tools for running experiments and Python components for custom workflows.

Use it to train on your own data, compare training stages, run streaming generation,
or develop training objectives and execution backends. The
[Quick Start](https://github.com/ViperEkura/AstrAI/blob/HEAD/docs/quick-start.md) walks through the full workflow.

## Features

| Area | What you can do |
| --- | --- |
| **Data preparation** | Tokenize JSON/JSONL data, configure role-based loss masks, pack sequences and write binary datasets with explicit record boundaries. |
| **Training** | Run pretraining, SFT, DPO and online GRPO/PPO; accumulate gradients, validate during training and resume from committed checkpoints. |
| **Optimization and parallelism** | Configure compute, gradient and optimizer-state precision; use CPU optimizer-state offload, DDP/FSDP and supported CP/TP layouts. |
| **Inference** | Generate synchronously or asynchronously, stream text, batch requests continuously and optionally use paged KV allocation with prefix…
