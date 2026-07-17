---
repo: "wenxin0319/llm-forge"
name: "llm-forge"
description: "Open-source AI platform for training customized, lightweight LLMs with GPU acceleration and parallel training"
readmeQualityOk: true
url: "https://github.com/wenxin0319/llm-forge"
homepage: "https://llm-forge-azure.vercel.app/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
stars: 60
forks: 6
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 2
recentReleases: 0
createdAt: "2026-06-03T01:48:07Z"
lastCommitAt: "2026-07-17T05:59:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 26
maintainers: ["wenxin0319"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa58c32b8d29cc85e1af07f40e6f7bd960ae46de073ad1e169775547567c469c/wenxin0319/llm-forge"
---

# LLM Forge

> Build your own AI model — no PhD required. Upload your data, pick a model, and get a production-ready custom LLM in minutes.

**Live at:** [https://llm-forge-azure.vercel.app](https://llm-forge-azure.vercel.app/)

---

## Current implementation status

The public web training flow remains **simulated**. The repository contains
standalone Hugging Face `trl`/PEFT training scripts under `ml-tools/train/`,
but they are not yet fully connected to the NestJS job backend: browser-launched
jobs still use timer-driven progress and generated loss curves. A real CUDA
QLoRA run on rented GPU infrastructure has **not** yet been completed.

Dataset parsing is real, and the backend can collect real NVIDIA telemetry via
`nvidia-smi` when it runs on a GPU host. Neither of those milestones means the
platform currently provisions a GPU or executes training. On hosts without
NVIDIA telemetry, the cluster endpoint returns an explicitly labeled demo
fallback.

---

## What can I do with LLM Forge?

LLM Forge lets you take a powerful open-source AI model and train it on your own data — so it speaks your language, knows your domain, and works the way you need it to.

**Common use cases:**…
