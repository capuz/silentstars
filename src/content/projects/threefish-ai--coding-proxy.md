---
repo: "ThreeFish-AI/coding-proxy"
name: "coding-proxy"
description: "A High-Availability, Transparent, and Smart Multi-Vendor Proxy for Claude Code. Support Claude Plans, GitHub Copilot, Google Antigravity, ZAI/GLM, MiniMax, Qwen, Xiaomi, Kimi, Doubao..."
readmeQualityOk: true
url: "https://github.com/ThreeFish-AI/coding-proxy"
homepage: "https://threefish.site"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["claude-code", "llm-agent", "antigravity", "copilot", "glm", "doubao", "kimi", "minimax", "qwen", "xiaomi"]
stars: 20
forks: 2
openIssues: 7
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-30T11:18:05Z"
lastCommitAt: "2026-11-24T14:09:46Z"
lastReleaseAt: "2026-05-27T03:35:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 34
maintainers: ["ThreeFish-AI"]
openGraphImageUrl: "https://opengraph.githubassets.com/262519a9c26d6cc914856966e69551d87ce1fe75465b831651ce4618592f4273/ThreeFish-AI/coding-proxy"
---

[English](https://github.com/ThreeFish-AI/coding-proxy/blob/HEAD/README.md) | [简体中文](https://github.com/ThreeFish-AI/coding-proxy/blob/HEAD/docs/zh-CN/README.md)

# <img src="https://raw.githubusercontent.com/ThreeFish-AI/coding-proxy/HEAD/assets/logo.svg" alt="coding-proxy" width="32" height="32" align="absmiddle"> coding-proxy

**A High-Availability, Transparent, and Smart Multi-Vendor Proxy for Claude Code**

---

## 💡 Why Do We Even Need coding-proxy?

When you're deeply immersed in your coding "zone" with **Claude Code** (or any AI assistant relying on Anthropic's Messages API), there's nothing quite as soul-crushing as having your flow violently interrupted by:

- 🛑 **Rate Limiting**: High-frequency pings trigger the dreaded `429 rate_limit_error`. Forced to stare at the screen and rethink your life choices.
- 💸 **Usage Cap**: Aggressive code generation drains your daily/monthly quota, slamming you with a cold, heartless `403` error.
- 🌋 **Overloaded Servers**: Anthropic's official servers melt down during peak hours, tossing back a merciless `503 overloaded_error`.
