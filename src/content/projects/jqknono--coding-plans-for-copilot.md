---
repo: "jqknono/coding-plans-for-copilot"
name: "coding-plans-for-copilot"
description: "在Copilot Chat中自由接入OpenAI Chat/Response, Anthropic API兼容供应商"
url: "https://github.com/jqknono/coding-plans-for-copilot"
homepage: "https://jqknono.github.io/coding-plans-for-copilot/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [60, 38]
topics: ["anthropic-api", "copilot-chat", "openai-compatible", "vscode-extension"]
stars: 127
forks: 7
openIssues: 3
closedIssues: 25
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-02-14T10:40:02Z"
lastCommitAt: "2026-06-28T03:11:49Z"
lastReleaseAt: "2026-05-19T09:12:20Z"
status: "thriving"
tags: ["release_machine", "community_hub"]
healthScore: 98
undervaluedScore: 37
maintainers: ["github-actions[bot]", "jqknono"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec8ecbd6422a605a8d83fe7fc92ae41aff105f8bc5c450733052b66fb33ecc00/jqknono/coding-plans-for-copilot"
discussionCount: 139
---

# 编码套餐 for Copilot

**一键切换多厂商 AI 模型，打破 Copilot 套餐限制。**

支持智谱、Kimi、讯飞、火山引擎、MiniMax、百度千帆、腾讯云、京东云、快手 KAT、X-AIO、Compshare、阿里云、小米 MiMo、DeepSeek 等国产大厂，以及**任何**遵循 OpenAI Chat、OpenAI Responses 或 Anthropic 协议风格的供应商。无需改变使用习惯，直接在 VS Code Copilot Chat 中调用。

本插件定位是通用协议适配器，而不是 Copilot 私有 endpoint 的复刻。它只发送 OpenAI/Anthropic 兼容 API 能理解的公开字段，避免依赖 Copilot 私有请求字段；因此可以兼容 Codex、Claude Code 等反代出的 API，而原生 VS Code/Copilot Chat 内置请求通常不能直接兼容这类反代入口。

---

## 核心特性

- **多协议统一接入**：支持 OpenAI Chat（`/chat/completions`）、OpenAI Responses（`/responses`）、Anthropic（`/messages`）三种协议风格，适配任意兼容供应商。
- **通用请求格式**：不使用 Copilot 私有请求字段，优先发送公开兼容字段，适配 Codex、Claude Code 等反代出的 OpenAI/Anthropic 风格 API。
- **Anthropic 协议优先**：内置供应商默认使用 Anthropic 风格端点（`/messages`）。
- **零学习成本**：完全集成到 VS Code Copilot Chat，不改变任何操作习惯。
- **灵活模型管理**：支持动态拉取 `/models` 端点，也可自定义模型列表。
- **智能 Commit 生成**：基于 Git 变更自动生成符合 Conventional Commits 规范的提交消息。
- **编码套餐看板**：访问 [GitHub Pages 看板](https://jqknono.github.io/coding-plans-for-copilot/) 查看多家编码套餐月费与权益，以及 OpenRouter 供应商性能指标。看板每日自动更新，支持多维度筛选与 URL 状态同步。
- **密钥安全**：API Key 使用 VS Code Secret Storage 本地保存，不上云不共享。

---

## 快速开始

### 安装

**推荐方式**：在 VS Code 扩展市场搜索「编码套餐」或 `Coding Plans for Copilot` 直接安装。

#### 方式一：VS Code 内安装（推荐）…
