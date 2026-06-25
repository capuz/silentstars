---
repo: "stormzhang/token-tracker"
name: "token-tracker"
description: "Track token usage across local AI agents (Claude Code, Codex) — Custom StatusLine, CLI Dashboard with cost analysis, rate limit monitoring, and session tracking"
url: "https://github.com/stormzhang/token-tracker"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai-agent", "claude-code", "cli", "codex", "python", "rich", "token-tracker"]
stars: 315
forks: 25
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2026-05-08T10:03:52Z"
lastCommitAt: "2026-06-25T01:29:40Z"
lastReleaseAt: "2026-06-11T17:30:53Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 28
maintainers: ["stormzhang"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe30c443f24fe1bd5102ccabcc3569ee6530265940d1e3f0f1cac300deaafd77/stormzhang/token-tracker"
---

# Token Tracker (tt)

本地 AI Agent Token 消耗追踪/分析工具，支持 **Claude Code** 和 **Codex** 。

自定义 StatusLine 状态栏 + CLI Dashboard，实时查看 token 用量、等效成本、限额状态。

![Python](https://img.shields.io/badge/python-3.11+-blue) ![CI](https://github.com/stormzhang/token-tracker/actions/workflows/ci.yml/badge.svg) ![License](https://img.shields.io/badge/license-MIT-green)

[English](README_EN.md)

## 功能亮点

- **多 Agent 统一追踪** — Claude Code + Codex 统一读取，多 Agent 按来源分组
- **状态栏集成** — Claude Code 用官方 StatusLine 接口；**Codex 业界首创伪 statusline 方案**（hook 注入两行真彩色状态栏，把官方未开放的能力在 Codex 里做了出来）
- **限额监控** — 实时 5h / 7d 配额百分比 + 重置倒计时
- **多维成本分析** — 会话 / 日 / 周 / 月多维报表，等效成本统计
- **定价识别** — litellm 在线定价 + 内置官方价双层兜底，覆盖 Claude / OpenAI / Gemini / Grok 及国产主流（Kimi / GLM / Qwen / 豆包 / DeepSeek / MiniMax / MiMo）；新模型自动套用同系列定价、不静默归零
- **会话洞察** — 项目、模型、时长、消息数一览
- **多主题统一配色** — 6 套主题（Catppuccin 全家 + Nord + Dracula），CLI 报表 / CC 状态栏 / Codex 伪 statusline **三者同源**，`tt theme` 一键切换
- **零配置** — 自动检测已安装的 Agent，直接读取本地数据
- **隐私安全** — 数据纯本地存储，不采集、不上传

## StatusLine 状态栏

`tt setup` 自动为 Claude Code 和 Codex 配置状态栏，脚本更新时自动升级。

### Claude Code（官方接口）

基于 Claude Code 官方自定义 StatusLine 接口，**数据完全来自本地 Claude，无任何推测**。

<details>
<summary>四行布局字段详解</summary>

| 行 |…
