---
repo: "CtriXin/multi-model-switch"
name: "multi-model-switch"
description: "A lightweight switch layer for routing, comparing, and managing multiple AI models through one unified interface."
readmeQualityOk: true
url: "https://github.com/CtriXin/multi-model-switch"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 10
forks: 0
openIssues: 26
closedIssues: 44
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-12T14:17:23Z"
lastCommitAt: "2026-09-11T08:15:15Z"
lastReleaseAt: "2026-04-12T06:51:54Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 92
undervaluedScore: 45
maintainers: ["CtriXin"]
openGraphImageUrl: "https://opengraph.githubassets.com/0185a9e02e15325e3f6cbf86685357581d3b0294a8aadb0a1c34fe5117cc6286/CtriXin/multi-model-switch"
---

# Multi-Model Switch（MMS）

> **MMS Pilot 是 MMS 的本地 Web 客户端，从 v4 起随安装包分发。** 安装后运行 `mms web --open` 打开。会话仍通过原有 MMS 启动链交给本机 Pi 执行，浏览器只是交互入口。[安装与使用](https://github.com/CtriXin/multi-model-switch/blob/HEAD/docs/mms-web/GETTING-STARTED.md) · [功能与边界](https://github.com/CtriXin/multi-model-switch/blob/HEAD/docs/mms-web/FEATURES.md) · [首版说明](https://github.com/CtriXin/multi-model-switch/blob/HEAD/docs/mms-web/RELEASE-v4.0.0.md) · [产品方向](https://github.com/CtriXin/multi-model-switch/blob/HEAD/docs/mms-web/NEXT-PHASE.md)。已有 CLI 启动能力全部保留。

[English README](https://github.com/CtriXin/multi-model-switch/blob/HEAD/README.en.md) · [中文镜像](https://github.com/CtriXin/multi-model-switch/blob/HEAD/README.zh-CN.md)

> MMS 是一个 launcher-first 的本地 AI Coding CLI 运行时管理器。它把 `claude`、`codex`、`opencode`、`agy` 放到同一个入口里，让你选择模型、通道、账号、session 能力包和隔离 HOME，而不是让失败路径偷偷掉回真实全局账号。

## 先说人话：它解决什么问题？

如果你同时使用 Claude Code、Codex、OpenCode、New API / OpenAI-compatible 平台、国产模型和多个 provider，MMS 负责把“启动前应该想清楚的事”集中起来：

- **一个入口启动多个 CLI**：`mms` 进入 TUI，或直接 `mms claude` / `mms codex` / `mms opencode`。
- **一个地方管理模型来源**：provider、account、route、fallback、thinking、vision、cache-sensitive transport 都在启动前可见。
- **隔离但可恢复**：Claude/Codex session 使用…
