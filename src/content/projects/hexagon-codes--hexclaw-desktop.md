---
repo: "hexagon-codes/hexclaw-desktop"
name: "hexclaw-desktop"
description: "An AI Agent desktop workspace built on Tauri 2 and Vue 3. It supports local or cloud HexClaw services and integrates multi-model chat, knowledge bases, tools, task automation, and homework tutoring."
originalDescription: "基于 Tauri 2 与 Vue 3 的 AI Agent 桌面工作台，支持本机或云端 HexClaw 服务，集成多模型对话、知识库、工具、任务自动化与作业辅导。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/hexagon-codes/hexclaw-desktop"
homepage: "https://hexclaw.net"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [56, 24]
topics: ["ai-agent", "chatbot", "desktop-app", "image-generation", "llm", "mcp", "ollama", "private-ai", "rag", "tauri"]
stars: 31
forks: 10
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-12T04:13:31Z"
lastCommitAt: "2026-11-02T13:16:21Z"
lastReleaseAt: "2026-04-30T23:43:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 52
maintainers: ["hexagon-codes"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0bd2b7cfbc3e5cd46df9cde93aa50dfbf95e19dc6dd110117e7d4828c0b6a47/hexagon-codes/hexclaw-desktop"
---

# HexClaw Desktop

**The native desktop workspace for 河蟹 AI: chat, agents, knowledge, tools, and automation.**

[Install](#安装) · [First Use](#首次使用) · [Website](https://hexclaw.net) · [User Guide](https://github.com/hexagon-codes/hexclaw-desktop/blob/HEAD/docs/guide.md) · [Download](https://github.com/hexagon-codes/hexclaw-desktop/releases) · [English](https://github.com/hexagon-codes/hexclaw-desktop/blob/HEAD/README.en.md)

HexClaw Desktop connects to the [HexClaw](https://github.com/hexagon-codes/hexclaw) Agent service through a single desktop app. You can use the local service that the app manages, or connect to a cloud service you deploy yourself. You can start work from desktop chat, a bound IM channel, or an automation task. The agent calls models, knowledge, and tools, then returns results you can view, save, and deliver.

The app is built with **Tauri 2 + Vue 3 + TypeScript**, and the local Agent service runs through a Go Sidecar. To use a local model, you can use Ollama. To use an online model, you need a network connection and credentials for the corresponding Provider.

> This README describes the source capabilities of `v0.5.2`. The current `HEXCLAW_REF` is still pinned…
