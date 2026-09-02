---
repo: "eowl/copilot-adapter"
name: "copilot-adapter"
description: "AI Models Adapter for Copilot Chat"
readmeQualityOk: true
url: "https://github.com/eowl/copilot-adapter"
homepage: "https://marketplace.visualstudio.com/items?itemName=Eowl.copilot-adapter"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["byok", "copilot-chat", "deepseek", "github-copilot", "llm", "minimax", "vscode-extension", "copilot-adapter", "glm", "kimi"]
stars: 35
forks: 4
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-05-31T03:29:22Z"
lastCommitAt: "2026-09-02T08:02:27Z"
lastReleaseAt: "2026-07-11T07:17:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 50
maintainers: ["eowl"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1882b652307bbf78c2954597cd50d8750c628740b5f962e679144baf6c7e00a/eowl/copilot-adapter"
---

<h1 align="center">Copilot Adapter</h1>

</p>

Extend VS Code's native Copilot Chat with third-party AI models. Switch between [supported models](#models) directly from the Copilot model selector — the same experience as built-in Copilot models, with your own API keys, no Copilot subscription, and no local proxy needed.

[简体中文](https://github.com/eowl/copilot-adapter/blob/HEAD/README.zh-cn.md)

- [Models](#models)
- [Quick Start](#quick-start)
- [Security](#security)
- [Features](#features)
  - [Thinking Modes](#thinking-modes)
  - [Vision Proxy](#vision-proxy)
  - [Prefix Cache Hit Rate](#prefix-cache-hit-rate)
  - [Context Window](#context-window)
  - [Custom Models](#custom-models)
  - [Balance & usage display](#balance--usage-display)
  - [Price display](#price-display)
- [Configuration Reference](#configuration-reference)
- [Commands](#commands)
- [Notes](#notes)

---

## Models

| Provider | Endpoints | Models | Remarks |
|---|---|---|---|
| **DeepSeek** | [`Deepseek Platform`](https://platform.deepseek.com) | `V4 Pro` `V4 Flash` `V4 Flash Vision Exp` | |
| **MiniMax** | [`minimaxi.com`](https://www.minimaxi.com/) [`minimax.io`](https://www.minimax.io/) | `M3` `M2.7` `M2.7…
