---
repo: "CSUNX233/Sparkle-Qwen27b-Kvmem-ninfer"
name: "Sparkle-Qwen27b-Kvmem-ninfer"
description: "Running Qwen3.8-27B on an RTX 5070 Ti Laptop 12GB: NInfer + KVMem, 256K logical context, RAM KV, MTP, fast cache resume, and dsh local Agent / search / browser. Includes source code, Windows deployment, and measured results."
originalDescription: "RTX 5070 Ti Laptop 12GB 跑 Qwen3.8-27B：NInfer + KVMem、256K 逻辑上下文、RAM KV、MTP、快速缓存续接与 dsh 本地 Agent / 搜索 / 浏览器。含源码、Windows 部署及实测。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/CSUNX233/Sparkle-Qwen27b-Kvmem-ninfer"
language: "C++"
languages: ["C++", "Cuda"]
languagePcts: [56, 29]
topics: ["12gb-vram", "ai-agent", "cuda", "deepseek-harness", "kvmem", "laptop-gpu", "local-ai", "local-llm", "long-context", "ninfer"]
stars: 99
forks: 5
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-10-15T07:46:20Z"
lastCommitAt: "2026-11-15T08:27:03Z"
lastReleaseAt: "2026-11-14T00:50:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 21
maintainers: ["CSUNX233"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc44098a37b01e3f5304e613aafd835a67c66252f44d64a0b52b336cae739d85/CSUNX233/Sparkle-Qwen27b-Kvmem-ninfer"
---

# Sparkle-Qwen27b-Kvmem-ninfer

**Running a 27B local Agent on a 12GB laptop GPU**

NInfer inference · KVMem tiered KV · MTP3 speculative decoding · dsh Agent workbench

[Quick Start](#快速开始) · [v1.2.0 Updates](#v120-更新) · [Benchmarks](#实测数据) · [Documentation Map](#文档地图) · [Download](https://github.com/CSUNX233/Sparkle-Qwen27b-Kvmem-ninfer/releases/tag/v1.2.0)

> **A 256K logical context does not mean every step reads the full history.** Long history is stored in Host RAM by KVMem and loaded into the GPU based on retrieval results. This reduces repeated prefill, but it does not mean a full 256K acceptance test has been completed, nor does it guarantee that every task will be faster.

## Overview in 30 Seconds

| Question | Answer |
|---|---|
| **What is this?** | A 27B Agent runtime stack for local code, file, and web tasks: NInfer engine + KVMem long history + MTP3 + dsh web / Pmod desktop interface. |
| **Where does it run?** | The maintainer directly verified it on **RTX 5070 Ti Laptop 12GB / i7-14650HX / 32GB RAM / Windows**. Other 12GB+ GPUs require a build matching their architecture. |
| **Default configuration?** | Qwen3.8-27B GSQ-RCO IQ3_XXS + MTP3, **RK4V4 + GDN FP32**,…
