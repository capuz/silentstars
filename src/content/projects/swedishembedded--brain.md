---
repo: "swedishembedded/brain"
name: "brain"
description: "Open Source Brain | AI training and inference in Rust"
readmeQualityOk: true
url: "https://github.com/swedishembedded/brain"
homepage: "https://swedishembedded.com/products/brain"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["ai", "ai-training", "edge-ai", "embeddings", "llm", "qwen"]
stars: 37
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-24T13:58:59Z"
lastCommitAt: "2026-09-26T08:46:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 37
maintainers: ["mkschreder"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c4a7721c70ff0f133d023e95a01144c1645952d1bf9eaf9e3b5651d4d1c57df/swedishembedded/brain"
---

# BRaiN

**Built by [Swedish Embedded AB](https://swedishembedded.com)** - we put AI on
hardware that ships. [Hire us](#who-builds-brain).

**brain trains and runs neural networks from scratch, in pure Rust, on hardware
you already own.**

One binary carries **40+ model architectures** - decoder LLMs, vision, speech,
image and video generation, OCR, forecasting, 3D reconstruction and playable
world models - on top of **489 hand-written WGSL compute kernels** and no deep
learning framework at all. There is no PyTorch, no Python, no CUDA toolkit and
no ONNX runtime in the build path or the run path. The same kernel source
executes on GPUs (Vulkan, Metal, DX12), on a CPU with no accelerator, and in a
browser tab through WebGPU.

That is the whole point: **one engine from `make build` to a served endpoint.**
Train a model from scratch, import a 27B checkpoint, quantize it to INT8, shard
it across two cards, fine-tune a LoRA on it, and serve it behind an
OpenAI-compatible API - without the model leaving this runtime or touching a
second toolchain at any step.

## Why it exists

Modern AI infrastructure is fragmented, and the fragmentation is where the cost
is. Training means Python and…
