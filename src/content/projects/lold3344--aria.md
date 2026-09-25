---
repo: "lold3344/ARIA"
name: "ARIA"
description: "ARIA - Adaptive Reasoning Intelligence Agent"
readmeQualityOk: true
url: "https://github.com/lold3344/ARIA"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2026-04-21T08:30:48Z"
lastCommitAt: "2026-09-25T09:03:11Z"
lastReleaseAt: "2026-08-13T23:43:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 43
maintainers: ["lold3344"]
openGraphImageUrl: "https://opengraph.githubassets.com/8870e5ff2607ec2c732e6c18135b64478b5fba8a3194feac9596bc16619b1f10/lold3344/ARIA"
---

# **Research tool. The author is not responsible for misuse, training data, or generated content.**

> **Legal notice:** I am not responsible for anyone who uses this tool for illegal purposes. If you train this model and use it for hacking, criminal activity, or any other unlawful actions, that is entirely your own responsibility.

# ARIA Atom 3.6.0 stable

**ARIA Atom 3.6.0 stable** is a GPT-style Transformer language model built entirely in Rust with CUDA/cuBLAS acceleration and custom PTX kernels. Checkpoints use the **GGUF** format -- weights, tokenizer, Adam optimizer state, and FP32 master weights are stored in a single file.

> **Note:** ARIA requires an NVIDIA GPU. AMD, Intel, and other GPUs are not supported.

| Version | Codename | Architecture | Parameters | VRAM | Status |
|---|---|---|---|---|---|
| 3.2.0 | Wotan | LSTM (1 layer) | ~44.5M | 6GB | Legacy |
| 3.3.0 | Atom | Transformer (12 layers) | ~124M | 8GB | Legacy |
| 3.4.0 | Atom | Transformer + warmup/clip | ~40M | 4GB | Legacy |
| 3.5.0 | Efkolos (light) | Transformer + LoRA | 250M | ~4GB | Legacy |
| 3.5.1 | Efkolos (optimized) | Transformer + LoRA + INT4 | 250M | ~3GB | Legacy |
| 3.5.2 | Efkolos |…
