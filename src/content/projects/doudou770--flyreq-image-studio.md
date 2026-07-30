---
repo: "doudou770/flyreq-image-studio"
name: "flyreq-image-studio"
description: "AI Image Generator, video workstation. Supports Agent and workstation modes, infinite canvas, material management, prompt reverse inference/square and PWA; can integrate custom models like Grok, GPT Image 2 for image generation. Adaptive for mobile devices."
originalDescription: "AI生图工作台 (AI Image Generator)、视频工作台。支持 Agent 与工作台模式、无限画布、素材管理、提示词反推/广场及 PWA；可接入 Grok、GPT Image 2 等自定义模型生图。自适应手机端。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/doudou770/flyreq-image-studio"
homepage: "https://image.flyreq.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["ai", "gpt-image-2", "grok", "grok-imagine", "image-generation", "pwa", "self-hosted", "flyreq", "agent", "ai-agents"]
stars: 45
forks: 8
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 10
createdAt: "2026-06-30T02:21:29Z"
lastCommitAt: "2026-07-30T06:06:10Z"
lastReleaseAt: "2026-07-12T18:23:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 42
maintainers: ["doudou770", "tianjiangqiji"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9ab1f5a5abc759aa7f5a175bcae5cb995d78b5f981ab5235e7652dd4a069ffe/doudou770/flyreq-image-studio"
discussionCount: 0
---

# FlyReq Image Studio

**Self-hosted AI image generation workstation · Multi-model protocol · Intelligent workflow · Real-time tasks · PWA**

</div>

---

## 📖 Introduction

FlyReq Image Studio (abbreviated as FlyReq Image) is an AI image generation workstation aimed at individuals/teams. The front end uses Next.js 16 + React 19 static export (PWA), while the back end is a lightweight Node.js service (`server.js` + SQLite + WebSocket), which uniformly schedules tasks and proxies image generation APIs.

## 🧩 Supported Image Models

| Vendor/Series | Model ID |
| :--- | :--- |
| **Banana Series** | `gemini-3-pro-image` |
| | `gemini-3.1-flash-image` |
| | `gemini-3.1-flash-lite-image` |
| **GPT Full Series** | `gpt-image-2` |
| | `gpt-image-1.5` |
| | `gpt-image-1` |
| **Grok Series** | `grok-imagine-image` |
| | `grok-imagine-image-quality` |
| **Custom** | Supports custom model IDs |

**Core Highlights:**
- **Models not bound to platform**: Image models and text models are configured separately, with each model independently saving API Key, Base URL, protocol, and capability boundaries.
- **Model capabilities presented on demand**: Automatically displays the number of reference…
