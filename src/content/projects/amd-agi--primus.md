---
repo: "AMD-AGI/Primus"
name: "Primus"
description: "A flexible and high-performance training framework designed for large-scale foundation model training on AMD GPUs"
readmeQualityOk: true
url: "https://github.com/AMD-AGI/Primus"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["training", "distributed-training", "training-at-scale", "amd-gpu"]
stars: 107
forks: 44
openIssues: 6
closedIssues: 8
watchers: 3
contributors: 205
recentReleases: 3
createdAt: "2025-02-24T12:02:54Z"
lastCommitAt: "2026-07-15T05:53:58Z"
lastReleaseAt: "2026-06-09T01:48:58Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 90
undervaluedScore: 50
maintainers: ["WangLingxun", "RuibinCheung", "jasainio"]
openGraphImageUrl: "https://opengraph.githubassets.com/861b9d99ac5ca7c5edc36be0cb19b609b28a9bd0b01cc7b59acccf998db7d7b6/AMD-AGI/Primus"
---

# Primus

**Primus/Primus-LM** is a flexible and high-performance training framework designed for large-scale foundation model training and inference on AMD GPUs. It supports **pretraining**, **posttraining**, and **reinforcement learning** workflows with multiple backends including [Megatron-LM](https://github.com/NVIDIA/Megatron-LM), [TorchTitan](https://github.com/pytorch/torchtitan), and [JAX MaxText](https://github.com/google/maxtext), alongside ROCm-optimized components.

> **Part of the Primus Ecosystem**: Primus-LM is the training framework layer of the [Primus ecosystem](#-primus-ecosystem), working together with [Primus-Turbo](https://github.com/AMD-AGI/Primus-Turbo) (high-performance operators) and [Primus-SaFE](https://github.com/AMD-AGI/Primus-SaFE) (stability & platform).

---

## ✨ Key Features

- **🔄 Multi-Backend Support**: Seamlessly switch between Megatron-LM, TorchTitan, and other training frameworks
- **🚀 Unified CLI**: One command interface for local development, containers, and Slurm clusters ([Docs](https://github.com/AMD-AGI/Primus/blob/HEAD/docs/02-user-guide/cli-reference.md))
- **⚡ ROCm Optimized**: Deep integration with AMD ROCm stack and optimized…
