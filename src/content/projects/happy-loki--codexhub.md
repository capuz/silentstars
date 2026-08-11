---
repo: "happy-loki/codexhub"
name: "codexhub"
description: "Use Feishu, WeChat, and Telegram as a remote control for Codex App, VS Code, and CLI"
readmeQualityOk: true
url: "https://github.com/happy-loki/codexhub"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 149
forks: 13
openIssues: 4
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-05-24T11:20:59Z"
lastCommitAt: "2026-08-11T04:47:00Z"
lastReleaseAt: "2026-06-29T08:50:14Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 75
undervaluedScore: 26
maintainers: ["happy-loki", "JingLongWang"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f05ca9004f24ff988a1c13f5e67df6eb80ede0ee0d949fdbfa3e78c15aff627/happy-loki/codexhub"
---

# codexhub

[English](https://github.com/happy-loki/codexhub/blob/HEAD/README.en.md)

## 产品预览

| 功能 | 说明 |
| --- | --- |
| 远程和本地同屏操作 | 支持飞书、微信、Telegram 远程连接本地 Codex App、Codex VS Code 插件和 Codex CLI，同一个 Codex 会话可以在 IM 和本地客户端之间同步操作。 |
| 本地 Codex 接入 | 不修改任何 Codex 前端代码，通过本地 backend 连接 Codex App、VS Code 插件和 Codex CLI。 |
| Codex 会话管理 | 在 GUI 中管理 Codex 历史会话；切换 provider 或接入 AI Gateway 后，可以把旧会话移动到当前入口，让 Codex App 左侧继续看到。 |
| 支持 IM 端管理 Codex 会话 | 利用 Codex 原生 remote-control 协议，在 IM 里创建会话、恢复会话、处理审批。 |
| 内置 AI Gateway | 让 Codex App 继续使用原生 Responses 入口，同时可以在本地 GUI 中接入 OpenAI、DeepSeek、Anthropic/Claude、智谱 GLM 等模型渠道。 |

</p>
</p>
</p>

AI Gateway 是 `codexhub` 内置的本地模型入口。Codex App 仍然按它熟悉的方式发送请求，`codexhub` 在本地把请求转到你配置的模型渠道，并把返回结果整理回 Codex 能消费的格式。渠道、模型列表、模型映射、请求日志和生图工具过滤都可以在 GUI 里完成。

</p>
</p>

## 快速使用

Codex App 和 VS Code 插件通常只需要：下载程序 -> 配置 AI Gateway -> 写入 Codex 配置 -> 重启 Codex。只有需要飞书、微信、Telegram 远程控制时，才需要接入 IM。Codex CLI 需要按第 7 步单独启动 app-server。

### 0. 前置条件

- macOS、Windows 或 Linux 设备
- Codex App、Codex VS Code 插件或 Codex CLI
- 不需要 ChatGPT 账号，也不需要“加速网络”
- 至少一个模型服务 API Key：OpenAI Responses、DeepSeek、Anthropic/Claude、智谱 GLM 或其它兼容渠道
- 可选 IM 通道：只有需要飞书、微信、Telegram 远程控制时才需要

### 1. 安装

从 GitHub Releases 下载…
