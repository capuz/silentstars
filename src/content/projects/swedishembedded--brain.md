---
repo: "swedishembedded/brain"
name: "brain"
description: "Open Source Brain Platform | AI training and inference in Rust"
readmeQualityOk: true
url: "https://github.com/swedishembedded/brain"
homepage: "https://swedishembedded.com/products/brain"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["ai", "ai-training", "edge-ai", "embeddings", "llm", "qwen"]
stars: 61
forks: 8
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-24T13:58:59Z"
lastCommitAt: "2026-11-05T08:03:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 34
maintainers: ["mkschreder"]
openGraphImageUrl: "https://opengraph.githubassets.com/c62e5b00070a899c4b37ad36d7c21689c5293fdb3261c148ea9278d9a5cb0aa8/swedishembedded/brain"
---

# brain

**brain trains and runs neural networks on the hardware you already have.**

One Rust program does the whole job: download a model, run it, fine-tune it,
quantize it so it fits, and serve it behind an OpenAI-compatible API. It needs
no Python, no PyTorch and no separate inference runtime, and the same models
run on NVIDIA cards, on other GPUs, on a plain CPU, on an Intel NPU or in a
browser.

**Built by [Swedish Embedded AB](https://swedishembedded.com)** - we put AI on
hardware that ships. [Hire us](#who-builds-brain).

## Three projects, one stack

brain is one of three open projects that work together. Each one stands on its
own:

| Project | Its role |
|---|---|
| **[brain](https://github.com/swedishembedded/brain)** (this repository) | **Runs the models.** Inference, training, fine-tuning, quantization and serving. |
| **[sven](https://github.com/swedishembedded/sven)** | **Runs the agent.** A terminal AI agent that reads code, runs tools and works through tasks, using any model provider, brain included. |
| **[Splinter](https://github.com/mkschreder/splinter)** | **Turns agent experience into better local models.** It runs sven on real tasks, checks the results,…
