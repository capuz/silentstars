---
repo: "nocoo/pew"
name: "pew"
description: "🦓 The contribution graph for AI-native developers — track and visualize your token usage across coding tools"
url: "https://github.com/nocoo/pew"
homepage: "https://pew.md"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 13
forks: 15
openIssues: 0
closedIssues: 132
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2026-03-07T06:53:11Z"
lastCommitAt: "2026-06-30T06:49:58Z"
lastReleaseAt: "2026-03-12T00:40:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 100
undervaluedScore: 66
maintainers: ["nocoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b7c877de15df091758cfe864b0acf43022b8005159854b35641cca6a46ebe20/nocoo/pew"
---

<h1 align="center">pew</h1>

---

## 这是什么

pew 自动从本地 AI 编程工具的日志文件中提取 token 用量数据，聚合后上传至 SaaS 仪表盘，帮你了解每天在 AI 辅助编程上花了多少 token。类似于 GitHub 的 contribution graph，但计数单位是 token 而非 commit。

```
┌──────────────────────────────────────────────────────────────────┐
│  Local AI Tool Logs (read-only)                                  │
│  Claude Code · Codex · Gemini CLI · GitHub Copilot CLI · Hermes  │
│  Kosmos · OpenCode · OpenClaw · Pi · PM Studio · VS Code Copilot │
└───────────────┬──────────────────────────────────────────────────┘
                │  pew sync (incremental parse)
                ▼
       ParsedDelta[] → 30-min bucket aggregation → QueueRecord[]
                │
                │  upload (idempotent upsert)
                ▼
┌──────────────────────────────────────────────────────────────────┐
│  SaaS Dashboard                                                  │
│  仪表盘 · 模型分析 · 设备追踪 · 会话统计 · 排行榜 · 赛季       │
└──────────────────────────────────────────────────────────────────┘
```

## 功能

**Token 追踪**

- **11 种 AI 工具** — Claude Code、Codex、Gemini CLI、GitHub Copilot CLI、Hermes、Kosmos、OpenCode、OpenClaw、Pi、PM Studio、VS Code Copilot
- **四维 token 计数** — 输入 token、缓存命中 token、输出…
