---
repo: "Crvesoft/CookLLM"
name: "CookLLM"
description: "A lightweight launcher for llama.cpp / Ninfer / KVMem: model hub, multi-engine management, parameter presets, one-click start/stop, performance monitoring, community model exploration and downloads, and a built-in chat. A modern GUI launcher for llama.cpp / Ninfer / KVMem to manage models—multi-engine hub, presets, one-click server, live metrics, downloader & chat UI."
originalDescription: "一款llama.cpp / Ninfer / KVMem轻量启动器：模型仓库、多引擎管理、参数预设、一键启停、性能监控、社区探索下载及内置会话。A modern GUI launcher for llama.cpp / Ninfer / KVMem to manage models—multi-engine hub, presets, one-click server, live metrics, downloader & chat UI."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Crvesoft/CookLLM"
language: "TypeScript"
languages: ["TypeScript", "CSS", "Rust"]
languagePcts: [53, 24, 21]
stars: 23
forks: 2
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-25T16:02:08Z"
lastCommitAt: "2026-10-26T09:18:02Z"
lastReleaseAt: "2026-09-09T10:18:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 51
maintainers: ["Crvesoft"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1311e2f5d99b132c880493fa99cd7b28fcb4b43a6b5a29bcf8d06cdd091456f/Crvesoft/CookLLM"
---

# 🦙 CookLLM

> **Lightweight manager for llama.cpp / Ninfer / KVMem**: a Windows desktop manager for GGUF / Ninfer models.
> It includes a built-in model library, runtime parameter templates, one-click start/stop, GPU status monitoring, live run logs, and a built-in chat web page, so you can manage local models in one place.

---

## ✅ Changelog

### v0.4.2

#### 🚀 New charts and card improvements

- **New charts on the analysis page**: added live Decode / Prefill charts, plus TTFT (time to first token) and MTP acceptance rate cards (automatically hidden when MTP is not enabled).
- **Card animation improvements**: model cards use a unified amber breathing state while starting; fixed the start button not responding promptly, and readiness is now determined by an HTTP probe.

#### 🛠️ Analysis sampling fixes and tuning

- **Sampling fix**: captures tail bursts that end within the sampling interval; the Prefill readout is limited to a 60-second window.
- **Prefill counting**: the llama.cpp Prefill count now uses `n_prompt_tokens_processed`.

### v0.4.1

#### ✨ Polishing UI details

- **Dropdown lists**: optimized the top-bar dropdowns, aligned to equal-width pills with single-line…
