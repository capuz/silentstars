---
repo: "Edward-lyz/codex-mixin"
name: "codex-mixin"
description: "Codex menu bar app and local gateway for mixing custom model providers with the official Codex account path"
readmeQualityOk: true
url: "https://github.com/Edward-lyz/codex-mixin"
language: "Rust"
languages: ["Rust", "Swift"]
languagePcts: [75, 22]
stars: 14
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-09T11:00:00Z"
lastCommitAt: "2026-08-01T06:15:40Z"
lastReleaseAt: "2026-07-10T12:50:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 56
maintainers: ["Edward-lyz"]
openGraphImageUrl: "https://opengraph.githubassets.com/c97aa5a89f96145ced390200e6d689cc5def30275c608eb310244db8cb5c647d/Edward-lyz/codex-mixin"
---

# Codex Mixin

</p>

</p>

  <b>Bring custom model providers into official Codex without giving up ChatGPT account features.</b>
</p>

</p>

## 中文

Codex Mixin 是一个 Rust 本地网关、CLI 和 macOS 菜单栏 App。它把 OpenRouter、DeepSeek、Baidu OneAPI 或其他 OpenAI Chat Completions / Anthropic Messages 兼容模型接入官方 Codex，同时保留官方 ChatGPT/OpenAI 账号路径、官方 GPT 模型、远程控制和 Codex 原生体验。

它不是 Codex 的二次发行版，也不重新打包官方 Codex App。Codex 仍然是主入口，Codex Mixin 只负责模型接入、协议转换、模型目录生成、配置托管、服务常驻和额度展示。

### 目录

- [为什么需要它](#为什么需要它)
- [功能特性](#功能特性)
- [快速安装](#快速安装)
- [快速使用](#快速使用)
- [供应商预设](#供应商预设)
- [安装到 Codex 的行为](#安装到-codex-的行为)
- [菜单栏 App](#菜单栏-app)
- [Fusion 多模型编排](#fusion-多模型编排)
- [CLI](#cli)
- [模型目录和 metadata](#模型目录和-metadata)
- [图片生成](#图片生成)
- [Thinking 与 Web Search](#thinking-与-web-search)
- [数据位置](#数据位置)
- [开发与发布](#开发与发布)
- [许可证](#许可证)
- [常见问题](#常见问题)

### 为什么需要它

很多团队和个人已经有自己的模型入口，例如内部 OneAPI、OpenRouter、DeepSeek 或自建兼容网关。但 Codex 的真实使用场景不只是发一次 API 请求，用户还希望保留这些能力：

- 继续使用 ChatGPT 账号登录后的官方 Codex 能力。
- 官方 GPT 模型和自定义模型能在同一个模型选择器里出现。
- 新会话可以用自定义模型，旧会话不会因为 provider 被改掉而看起来消失。
- Codex model catalog 字段完整，不缺 context window、instructions template 等必需字段。
- 本地网关能长期运行，不依赖一个不能关闭的终端窗口。
- 普通用户不需要理解 `/v1/messages`、`/v1/chat/completions`、`/anthropic`…
