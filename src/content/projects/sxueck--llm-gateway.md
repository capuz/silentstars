---
repo: "sxueck/llm-gateway"
name: "llm-gateway"
description: "Lightweight distributed LLM gateway w/ web UI for model mgmt & routing. Supports vibe programming, prompt opt., & optimized OpenAI API/Anthropic calls"
originalDescription: "Lightweight distributed LLM gateway w/ web UI for model mgmt & routing. Supports vibe programming, prompt opt., & optimized OpenAI API/Anthropic calls"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/sxueck/llm-gateway"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [79, 20]
topics: ["llm-gateway", "llmops", "openai", "vibe-coding", "anthropic-claude"]
stars: 54
forks: 11
openIssues: 2
closedIssues: 13
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-10-05T10:16:04Z"
lastCommitAt: "2026-10-31T15:57:58Z"
lastReleaseAt: "2025-11-02T14:38:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 53
maintainers: ["sxueck"]
openGraphImageUrl: "https://opengraph.githubassets.com/03c9a4b4bf0d0de53785c19e43da369647ceb50c4c3e6a20321c41b5f1feceb2/sxueck/llm-gateway"
---

# LLM Gateway

[English](https://github.com/sxueck/llm-gateway/blob/HEAD/README_EN.md) | **中文**

> A production-grade LLM gateway management system. Deployed for six months, it has stably handled tasks totaling over **500 billion tokens** (and the count keeps growing)
>
> Provides an intuitive Web UI for managing multiple LLM providers, virtual keys, routing configuration, and models

## Table of Contents

- [Features](#特性)
- [Quick Start](#快速开始)
- [Intent Routing Classifier](#意图路由分类器)
- [Contributing](#贡献)
- [License](#许可证)
- [Acknowledgements](#致谢)

## Features

| Feature | Description |
| ------ | ------ |
| **Provider Management** | Supports 20+ mainstream LLM providers: OpenAI, Anthropic, Google, DeepSeek, etc. |
| **Virtual Keys** | Create and manage virtual API keys, with rate limiting and access control |
| **Routing Configuration** | Load balancing and failover strategies to improve service availability |
| **Model Management** | Centrally manage models from all providers, with bulk import and custom configuration |
| **Daily Model Quota** | Set a daily token cap per model on the Settings page, counted by calendar day (Asia/Shanghai), in units of M; virtual models are…
