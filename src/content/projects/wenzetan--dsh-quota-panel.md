---
repo: "wenzetan/dsh-quota-panel"
name: "dsh-quota-panel"
description: "Provider quota/balance widget for the dsh web surface: capsule + card + settings panel, dual-face (loopback RPC host half + shell.overlay client half), zero npm deps"
readmeQualityOk: true
url: "https://github.com/wenzetan/dsh-quota-panel"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [69, 25]
topics: ["balance", "deepseek-harness", "dsh-plugin", "quota"]
stars: 9
forks: 4
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-08-14T16:00:48Z"
lastCommitAt: "2026-09-24T08:38:41Z"
lastReleaseAt: "2026-09-24T08:14:05Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 62
maintainers: ["wenzetan", "passingby000", "xuwenping"]
openGraphImageUrl: "https://opengraph.githubassets.com/094ad2ec1f17f239e1678a93bac131432f3e8f0ca3fe8aac0d7008e1f902db01/wenzetan/dsh-quota-panel"
---

# dsh-quota-panel

English | [中文](https://github.com/wenzetan/dsh-quota-panel/blob/HEAD/README.zh.md)

**dsh-quota-panel** is a **provider quota / balance status widget** for the
DeepSeek Harness (DSH) **web surface** (`dsh web`). It sits in the
bottom-right corner of the product UI, watches every AI provider whose API
key you have configured, and tells you at a glance how much balance /
quota is left — DeepSeek, OpenRouter, SiliconFlow, Moonshot, StepFun,
xAI, Zhipu GLM, OpenCode Go, Volcengine Ark (Agent/Coding Plan), plus one-api / new-api style aggregators,
and the **coding plans** (智谱 GLM Coding, Z.AI, Kimi Coding, MiniMax
Coding global/CN) with 5-hour / weekly usage windows and MCP monthly quota.
xAI, Zhipu GLM, OpenCode Go, **ChatGPT subscription (Plus/Pro via Codex
login)**, plus one-api / new-api style aggregators, and the **coding
plans** (智谱 GLM Coding, Z.AI, Kimi Coding, MiniMax Coding global/CN)
with 5-hour / weekly usage windows and MCP monthly quota.

Since v0.5 it is a **dual-face plugin** with a **built-in provider catalog
and auto discovery**: install it, restart `dsh web`, and every provider
whose key resolves automatically appears on the panel — zero…
