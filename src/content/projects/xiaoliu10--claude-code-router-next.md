---
repo: "xiaoliu10/claude-code-router-next"
name: "claude-code-router-next"
description: "Use Claude Code and Codex as the foundation for coding infrastructure, allowing you to decide how to interact with the model with flexible routing and configuration."
originalDescription: "Use Claude Code and Codex as the foundation for coding infrastructure, allowing you to decide how to interact with the model with flexible routing and configuration. 中文版： 以 Claude Code 和 Codex 作为编程基础设施的基石，自主选择交互的模型与提供商，并享有灵活的路由与配置。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/xiaoliu10/claude-code-router-next"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["claude-code", "claude-code-router", "codex", "deepseek", "gemini", "llm-router", "openai-responses-api"]
stars: 10
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 28
recentReleases: 2
createdAt: "2026-05-12T16:03:00Z"
lastCommitAt: "2026-07-22T06:09:57Z"
lastReleaseAt: "2026-07-16T12:36:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 51
maintainers: ["xiaoliu10", "Burlesque1"]
openGraphImageUrl: "https://opengraph.githubassets.com/07054ed8089438da309f45d59bc891d58c3b05b2f5be9c3a08a23942ac56dcfb/xiaoliu10/claude-code-router-next"
---

**[🇨🇳 中文文档](https://github.com/xiaoliu10/claude-code-router-next/blob/HEAD/README.md)**  |  **[🇬🇧 English](https://github.com/xiaoliu10/claude-code-router-next/blob/HEAD/README_en.md)**  |  [](https://www.npmjs.com/package/@wengine-ai/claude-code-router-next)

> **说明**：原版 [claude-code-router](https://github.com/musistudio/claude-code-router) 仓库已不再活跃维护。本项目是基于原仓库 fork 的社区活跃版本，持续进行 Bug 修复、功能开发和长期维护。

<hr>

> [从CLI工具风格看工具渐进式披露](https://github.com/xiaoliu10/claude-code-router-next/blob/HEAD/blog/zh/从CLI工具风格看工具渐进式披露.md)

> 一款强大的工具，可将 Claude Code 和 Codex 请求路由到不同的模型，并自定义任何请求。 

## ✨ 功能

-   **模型路由**: 根据您的需求将请求路由到不同的模型（例如，后台任务、思考、长上下文）。
-   **多提供商支持**: 支持 OpenRouter、DeepSeek、Ollama、Gemini、Volcengine 和 SiliconFlow 等各种模型提供商。
-   **Codex CLI 支持**: 通过 Responses API 协议转换，支持 Codex CLI 接入任意 LLM 提供商（Anthropic、DeepSeek、GLM 等），实现工具调用、文件修改等完整功能。
-   **请求/响应转换**: 使用转换器为不同的提供商自定义请求和响应。
-   **动态模型切换**: 在 Claude Code 中使用 `/model` 命令动态切换模型。
-   **GitHub Actions 集成**: 在您的 GitHub 工作流程中触发 Claude Code 任务。
-   **用量统计与限额监控**: 追踪请求的 Token 数、缓存命中率、首 Token 延迟 (TTFT) 和生成速度，并实时展示主流服务商（如智谱、Qwen 等）的限额使用情况。
-   **插件系统**: 使用自定义转换器扩展功能。

## 🚀 快速入门

### 1. 安装

您可以从 npm 官方仓库安装 Claude Code Router，或者直接从本 GitHub…
