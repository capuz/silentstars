---
repo: "Zhengyuuuui/qoder2api"
name: "qoder2api"
description: "Converts Qoder's AI service into an API compatible with OpenAI/Claude/Codex formats, with daily check-in to claim Credits, multi-account management, and model context display."
originalDescription: "将 Qoder 的 AI 服务转化为兼容 OpenAI/Claude/Codex 格式的 API，支持每日签到领 Credits、多账号管理、模型上下文展示"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Zhengyuuuui/qoder2api"
language: "Go"
languages: ["Go"]
languagePcts: [84]
topics: ["api-gateway", "claude", "golang", "llm", "openai", "proxy", "qoder"]
stars: 125
forks: 26
openIssues: 2
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-30T00:19:36Z"
lastCommitAt: "2026-11-24T01:56:11Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 29
maintainers: ["Zhengyuuuui", "LeonardW-sl", "SDCOM-0415"]
openGraphImageUrl: "https://opengraph.githubassets.com/447fccf8c5258bbc75a78fc8957382b5e8654e3133f5920f51cdccd6aada9598/Zhengyuuuui/qoder2api"
---

# qoder2api

A lightweight [Qoder](https://qoder.ai) → OpenAI / Claude / Codex compatible API gateway.

It contains only the **Web console + Bridge**, with no macOS desktop GUI, no Wails, and no system tray. It suits lightweight deployment on Linux servers and locally.

This project is a **secondary development** based on [wangtufly/QCCG](https://github.com/wangtufly/QCCG). It extracts the core Bridge / account / signing logic and rebuilds it as a streamlined version for server deployment.
