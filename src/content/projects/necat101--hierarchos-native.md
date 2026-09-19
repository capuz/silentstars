---
repo: "necat101/Hierarchos-Native"
name: "Hierarchos-Native"
description: "A native rust-vulkan backend for training hierarchos and modern transformer model architectures, supporting PEFT finetuning, full training, and inference"
readmeQualityOk: true
url: "https://github.com/necat101/Hierarchos-Native"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 14
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-16T23:10:25Z"
lastCommitAt: "2026-09-19T01:34:22Z"
status: "thriving"
tags: []
healthScore: 79
undervaluedScore: 12
maintainers: ["necat101"]
openGraphImageUrl: "https://opengraph.githubassets.com/64161f0dad62dbde7f34a1d002e3dbc01ea11b279826d737a8b75978f4f436f1/necat101/Hierarchos-Native"
---

# Hierarchos Native

Native Rust + Vulkan training and inference tooling for **Hierarchos coherent-v9** and a broad set of modern Hugging Face Transformer text architectures.

Hierarchos Native is built around a framework-free execution path: Rust handles model/package I/O, Hugging Face downloads, tokenization, datasets, checkpointing, and orchestration, while supported Transformer and Hierarchos training math runs through Vulkan compute shaders. Hierarchos inference has a separate pure-Rust runtime.

## Nine architectures verified below `2e-7` training divergence

The headline compatibility target is strict numerical parity, not just architecture-name recognition. The current Vulkan backend has **nine modern Transformer text graphs** that each pass **two full AdamW steps** against the reference implementation with **less than `2e-7` maximum absolute parameter divergence** after export:

| Architecture | Verified native scope | Max abs parameter error after 2 AdamW steps |
| --- | --- | ---: |
| **DeepSeek V4** | causal LM | `1.192092896e-7` |
| **Phi-4 Multimodal** | text backbone / causal LM | `1.192092896e-7` |
| **Phi-3** | causal LM | `1.192092896e-7` |
| **Kimi K2.5** | text…
