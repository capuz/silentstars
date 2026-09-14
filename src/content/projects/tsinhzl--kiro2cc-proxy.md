---
repo: "TsinHzl/kiro2cc-proxy"
name: "kiro2cc-proxy"
description: "Kiro 反代到 Claude Code 与 Codex，支持 Claude Opus 5/4.8/4.7/4.6、Sonnet 5、GPT-5.6，兼容 Kiro Cache，并支持 SSE 流式输出。Kiro proxy for Claude Code and Codex. Supports Claude Opus 5/4.8/4.7/4.6, Sonnet 5, GPT-5.6, Kiro Cache, and SSE streaming."
readmeQualityOk: true
url: "https://github.com/TsinHzl/kiro2cc-proxy"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [67, 27]
stars: 130
forks: 34
openIssues: 1
closedIssues: 33
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-15T20:45:36Z"
lastCommitAt: "2026-09-14T09:12:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 32
maintainers: ["TsinHzl", "lqzhgood"]
openGraphImageUrl: "https://opengraph.githubassets.com/b225226abdbbae1972794203a51fa238a5cb568badcafadc05e7c410d7b297fd/TsinHzl/kiro2cc-proxy"
---

# 🌉 kiro2cc-proxy

**将 Anthropic Claude API 请求转换为 Kiro API 请求的 Rust 代理服务**

**[🇺🇸 English](https://github.com/TsinHzl/kiro2cc-proxy/blob/HEAD/README.en.md)** | **🇨🇳 中文**

> **✅ 支持模型**：Claude Sonnet 5 · Claude Sonnet 4.5 · Claude Sonnet 4.6 · Claude Opus 4.5 · Claude Opus 4.6 · Claude Opus 4.7 · Claude Opus 4.8 · Claude Opus 5 · Claude Haiku 4.5 · DeepSeek 3.2 · GLM-5 · MiniMax M2.1 · MiniMax M2.5 · Qwen3-Coder · GPT-5.6 Sol · GPT-5.6 Terra · GPT-5.6 Luna

### 📖 快速导航

[🚀 快速开始](#-快速开始新手必读) ・ [🍎 macOS 部署](#-本地部署macos) ・ [🪟 Windows 部署](#-本地部署windows) ・ [🐧 Linux 部署](#-服务器部署linux) ・ [🔑 获取账号](#-获取-kiro-账号) ・ [⚙️ 配置详解](#-配置详解) ・ [🤖 接入 Claude Code](#-接入-claude-code) ・ [🧬 接入 Codex CLI](#-接入-codex-cli--openai-sdk) ・ [🔌 API 端点](#-api-端点) ・ [🗺️ 模型映射](#-模型映射) ・ [🛡️ Admin 面板](#-admin-管理面板) ・ [❓ 常见问题](#-常见问题) ・ [⚠️ 注意事项](#-注意事项)

---

## ⚠️ 免责声明

本项目仅供研究使用，Use at your own risk，使用本项目所导致的任何后果由使用人承担，与本项目无关。本项目与 AWS/KIRO/Anthropic/Claude 等官方无关，不代表官方立场。

---

## ✨ 功能特性

| 特性 | 说明 |
|---|---|
| **🔌 Anthropic API 兼容** | 完整支持 Anthropic Claude API 格式 |
| **🧬 OpenAI 兼容 / Codex CLI** | 提供 `/v1/chat/completions` 与 `/v1/responses` 端点，可直接接入 Codex CLI 及任意 OpenAI SDK 客户端 |
| **📡 流式响应** | 支持…
