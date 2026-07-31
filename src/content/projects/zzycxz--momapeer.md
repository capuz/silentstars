---
repo: "zzycxz/momapeer"
name: "momapeer"
description: "适配中国移动MoMA的AI coding"
readmeQualityOk: true
url: "https://github.com/zzycxz/momapeer"
language: "Python"
languages: ["Python", "Go"]
languagePcts: [46, 32]
topics: ["ai", "ai-agent", "desktop", "moma", "coding-agent"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-13T21:26:16Z"
lastCommitAt: "2026-07-31T06:28:25Z"
lastReleaseAt: "2026-07-30T15:01:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 51
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/83f1ecfd9f91f602da50af8ad7e1764d0831f7f9ea348c32c9fcc27a8df0e6d0/zzycxz/momapeer"
---

</p>

  &nbsp;·&nbsp;
  <strong>简体中文</strong>
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
</p>

</p>

<br/>

<h3 align="center">中国移动九天原生的企业级全场景 AI 编程助手。</h3>
  基于中国移动 MoMA（九天）大模型平台深度打造，提供极致的编码智能与终端体验。<br/>
  单一静态 Go 二进制，零运行时依赖，多平台无缝覆盖。
</p>

<br/>

## momapeer 是什么？

momapeer 是一款专为中国移动九天 (MoMA) 平台生态打造的 AI 智能编程助手，以高度可配置化和 MCP 插件体系为核心驱动力。
它不仅提供强大的本地代码理解能力，更能深度接入九天大模型（如 DeepSeek、Qwen、GLM 等 300+ 模型）实现自然语言驱动的自主编程。

Agent 可以在 **终端**（TUI）、**桌面客户端**（基于 Wails）、**HTTP/SSE 服务器** 或 **多通道 IM 机器人**（企业微信 / 飞书 / QQ）等全场景中运行——所有前端均由同一个高性能、传输无关的核心引擎驱动。

> **开源声明：** 本项目基于 [DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) 进行二次开发，
> 针对中国移动九天平台与企业级场景进行了深度的架构优化与扩展。

## 核心特性

### 工程化与生态

- **九天原生架构** — 深度优化对接 MoMA 平台，支持 thinking mode 协议、reasoning_content 回传、16 个预置模型 CNY 定价，通过 `momapeer.toml` 完全配置驱动。
- **MCP 插件生态** — 全面支持 Model Context Protocol (MCP)，外部工具以子进程形式通过 stdio / HTTP 运行，无限扩展 Agent 能力。
- **内置 Web Search** — 集成 Brave → Exa → Linkup 三引擎链式降级搜索，无需外部 MCP 即可联网检索。
- **极速轻量分发** — `CGO_ENABLED=0` 单二进制打包，极简部署，支持交叉编译 6 大操作系统架构。

### 内置智能工具箱

原生集成精简 IDE 级工具链：`bash` · `read_file`（兼并目录列表） · `write_file` · `edit_file` · `grep`（支持超时） ·
`web_fetch` · `web_search` · `todo_write` · `complete_step` ·…
