---
repo: "Lbunc/dsh-local-llm-controller"
name: "dsh-local-llm-controller"
description: "Enable local large model capabilities for DSH: one-click start/stop of local llama.cpp models (dual slot × dual modality × dual preset) in Settings → Plugins. Configure within the card, install with a single command, register automatically, and it's ready to use once installed."
originalDescription: "为DSH接入本地大模型能力：在「设置→插件」页一键启停本地 llama.cpp 大模型（双槽x双模态x双预设），卡片内配置、一条命令安装、自动注册，装完即用| Enable local large model capabilities for DSH: One-click start/stop for local llama.cpp models (dual‑slot × dual‑modal × dual‑preset) right in Settings → Plugins; configure within the card, install with a single command, automatically register, and ready to use "
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Lbunc/dsh-local-llm-controller"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["cordis", "dsh-plugin", "llama-cpp", "llama-server", "local-llm", "qwen"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-08-21T05:27:13Z"
lastCommitAt: "2026-11-07T10:36:23Z"
lastReleaseAt: "2026-10-23T09:47:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 52
maintainers: ["Lbunc"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1341433393/2869f6bb-b6b3-44da-8d26-5acf2c7ecf58"
discussionCount: 0
---

# dsh-local-llm-controller

**DSH plugin: one-click start/stop of a local llama.cpp server on the Settings page, making local large models usable as DSH session models**

Configuration card location: Settings → Plugins → Local LLM Controller

[English](https://github.com/Lbunc/dsh-local-llm-controller/blob/HEAD/README.en.md) | **Simplified Chinese**

***

> **Compatibility note**: DSH 0.1.7-rc.1 underwent a major low-level refactor. Since v2.1.0, this plugin has been adapted to that architecture (adapted for the RC branch only; other branches are not guaranteed).

## Features

- **One-click start/stop of the local service**: Start or stop llama-server from the Settings → Plugins card. Status, error reasons, and recent logs are shown on the same card. When DSH restarts, the plugin automatically cleans up child processes.
- **Dual-slot model management**: Slots A and B each bind to a model folder and automatically scan all GGUF files in it to generate a candidate list. Vision projectors (mmproj) are detected automatically, and vision mode mounts automatically.
- **Eight sets of startup parameters**: Divided by slot × text/vision × fast/long-context. Parameter rows can be freely…
