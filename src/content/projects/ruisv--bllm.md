---
repo: "ruisv/bllm"
name: "bllm"
description: "On-board LLM/VLM runtime for D-Robotics RDK S100/S100P/S600 (BPU). A C++17 wrapper over the OE-LLM runtime with a clean task-style API."
originalDescription: "On-board LLM/VLM runtime for D-Robotics RDK S100/S100P/S600 (BPU). A C++17 wrapper over the OE-LLM runtime with a clean task-style API."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ruisv/bllm"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [52, 41]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-07-06T09:24:24Z"
lastCommitAt: "2026-07-22T06:13:24Z"
lastReleaseAt: "2026-07-20T15:02:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 55
maintainers: ["ruisv"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9f656b10a63260fe3f00f7aa28604ae51b3025431a2be7639b971c87c37b473/ruisv/bllm"
---

# BLLM — RDK BPU On-Device LLM / VLM Runtime

**Simplified Chinese** | [English](https://github.com/ruisv/bllm/blob/HEAD/README.en.md)

**BLLM** (BPU LLM) is a C++17 on-device runtime library for D-Robotics **RDK S100 / S100P / S600**. It runs compiled `.hbm` model graphs directly on the onboard BPU (hbDNN / hbUCP) — a self-built native inference engine with KV / SSM caching, samplers, and decoding loops — and provides a clean C++ / Python task-style API. **No additional large model SDK is required**.

It is a sister library of the visual library [bcdl](https://github.com/ruisv/bcdl) (RDK BPU visual inference).

  <em>Qwen3.5-0.8B (mixed SSM) natively streams dialogue on RDK S100P BPU · ~14 tok/s</em>
</p>

> 📖 API Documentation: [Chinese](https://github.com/ruisv/bllm/blob/HEAD/docs/API.zh.md) · [English](https://github.com/ruisv/bllm/blob/HEAD/docs/API.en.md)

## Table of Contents

- [Features](#特性) · [Installation](#安装) · [Quick Start](#快速上手) · [Create Model Directory](#制作模型目录)
- [Service Deployment](#服务化部署openai-兼容-http) · [Multimodal](#多模态qwen25-omni) · [Share BPU with Visual Pipeline](#与视觉流水线共享-bpu)
- [Supported Models](#支持的模型) · [Build from Source](#从源码构建)
- [Community…
