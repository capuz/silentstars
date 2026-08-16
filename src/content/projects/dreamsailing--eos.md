---
repo: "dreamSailing/eos"
name: "eos"
description: "Go 语言实现的终端 AI 编码助手，基于 CloudWeGo Eino 做多代理编排，提供可交互 TUI、工具调用、安全门禁与工作区上下文能力"
readmeQualityOk: true
url: "https://github.com/dreamSailing/eos"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 11
forks: 2
openIssues: 11
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-03-05T11:34:19Z"
lastCommitAt: "2026-08-07T18:57:02Z"
lastReleaseAt: "2026-06-27T09:38:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 42
maintainers: ["dreamSailing"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ac9b4d31a941ea68f655c18f2d2cea354cb9467734a2ce06e7e96a286f122ff/dreamSailing/eos"
---

# EOS

[中文](https://github.com/dreamSailing/eos/blob/HEAD/README.md) | [English](https://github.com/dreamSailing/eos/blob/HEAD/README.en.md)

EOS 是一个开源的终端 AI 编码助手，当前以 Rust Core 作为核心运行时，Go 侧负责 CLI 入口、TUI、桥接与分发集成。它面向日常编码、代码审查、文档处理、本地自动化，以及 IDE / 平台集成场景，提供交互式 TUI、工具调用、安全门禁、工作区上下文和可扩展的 MCP 能力。

当前 `v1.0.0-beta.1` 是切换到 Rust Core 默认生产路径后的首个统一 beta 版本，发布资产以 Windows 安装包为主，并与 EOS App 的桌面分发版本保持同版号。

- 项目仓库：https://github.com/dreamSailing/eos
- 问题反馈：https://github.com/dreamSailing/eos/issues
- 版本发布：https://github.com/dreamSailing/eos/releases

## 项目定位

EOS 不是单一的“问答 CLI”，而是一个完整的本地 AI 工作台：

- 对普通用户：提供开箱即用的终端交互体验，适合编码、排障、审查、检索和文档处理
- 对高级用户：支持 `--print` 无头调用、文档子命令、工作区管理、权限控制和上下文压缩
- 对平台 / IDE / Agent 宿主：提供本地 `serve` JSON-RPC、`bridge manifest` 桥接清单，以及标准 MCP Server

## 为什么选择 EOS

相对于依赖更重、接入范围更窄的同类终端助手，EOS 当前更强调以下几点：

- Rust Core 承接会话、运行时、工具调度、审批与沙箱等核心能力，Go CLI 负责轻量入口、TUI、桥接与跨平台分发，不依赖 Node.js 运行时
- 核心运行时与 CLI 入口分层后，EOS 的协议边界更清晰，也便于桌面端、IDE 插件、MCP Host 和外部平台复用同一套核心能力
- 工具执行、安全审批和沙箱策略集中在 Rust Core 中，减少多入口重复实现带来的行为不一致和安全风险
- 模型接入更开放，支持 OpenAI 兼容接口，不限制单一模型提供商
- 不只做代码补全，还覆盖文档读写转换、MCP、搜索、Git、远程仓库、子代理等完整工作流
- 对平台集成更友好，既能作为本地工具服务，也能直接暴露为标准 MCP Server
- 支持网页只读抓取和外接浏览器自动化，适合真实任务链路

## 核心能力

### 1) 终端交互体验

-…
