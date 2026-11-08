---
repo: "learningdog1/CommandCodeGo-manager"
name: "CommandCodeGo-manager"
description: "Command Code subscription reverse proxy: OpenAI/Anthropic-compatible endpoints + Web management UI + macOS/Windows desktop app"
originalDescription: "Command Code 订阅反向代理:OpenAI/Anthropic 兼容端点 + Web 管理界面 + macOS/Windows 桌面版"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/learningdog1/CommandCodeGo-manager"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [68, 31]
stars: 100
forks: 13
openIssues: 1
closedIssues: 9
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-17T12:03:47Z"
lastCommitAt: "2026-11-08T10:41:49Z"
lastReleaseAt: "2026-09-18T13:52:16Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 85
undervaluedScore: 34
maintainers: ["learningdog1"]
openGraphImageUrl: "https://opengraph.githubassets.com/83c53eaf05f349a1122dc0ee35b8b8076b4afc389fd7b3df3920335d353f1287/learningdog1/CommandCodeGo-manager"
---

# CommandCodeGo-manager

A subscription reverse proxy for Command Code: it proxies the subscription quota of [Command Code](https://commandcode.ai) (including the $1/month Go plan) as **OpenAI-compatible** (`/v1/chat/completions`, `/v1/responses`) and **Anthropic-compatible** (`/v1/messages`) endpoints, for use by any harness (Claude Code / OpenCode / ZCode / cURL / any OpenAI or Anthropic SDK). It includes an attractive Chinese Web management UI (dashboard, live logs, usage statistics, account usage, model pricing, key management, device fingerprint, settings). **Provides macOS / Windows desktop apps** (double-click native apps, with the background service resident and a tray icon).

The protocol layer is derived from [MAXeaglet/commandcode-proxy](https://github.com/MAXeaglet/commandcode-proxy) (MIT, baseline `9bdfafc`), with wire behavior aligned item by item and its test suite kept fully green. See [NOTICE](https://github.com/learningdog1/CommandCodeGo-manager/blob/HEAD/NOTICE) for details.

> ⚠️ **Disclaimer**: This project is an unofficial reverse-engineering artifact and is not affiliated with Command Code / Langbase. Using a reverse-engineered protocol may violate the…
