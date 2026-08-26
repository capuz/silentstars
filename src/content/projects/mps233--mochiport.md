---
repo: "mps233/MochiPort"
name: "MochiPort"
description: "使用Telegram(主要开发方向)和飞书、微信作为Codex App、VS Code和CLI的远程控制工具。"
readmeQualityOk: true
url: "https://github.com/mps233/MochiPort"
language: "Rust"
languages: ["Rust"]
languagePcts: [71]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 4
createdAt: "2026-08-07T12:39:49Z"
lastCommitAt: "2026-08-26T04:15:35Z"
lastReleaseAt: "2026-08-24T12:53:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 53
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/ebf869b4cf4f52188adc093ebb3e16e7c1483754a6053d986f2d1581fb415c6f/mps233/MochiPort"
---

# MochiPort

[English](https://github.com/mps233/MochiPort/blob/HEAD/README.en.md)

> 当前版本：`0.5.4`

MochiPort 是一个本地优先的 Codex 会话中继。它把 Codex App、Codex VS Code 插件和 Codex CLI 接到 Telegram、飞书、微信或企业微信，让你可以在消息软件里创建会话、跟进任务和处理审批。

MochiPort 还内置 AI Gateway：Codex 只连接一个本地入口，模型请求再按配置转发到 OpenAI、DeepSeek、Grok/xAI、Anthropic/Claude、智谱 GLM 或其它兼容服务。

## 能做什么

- 通过官方 remote-control 接入 Codex App、VS Code 插件和 Codex CLI，不替换 Codex 文件，也不安装包装命令。
- 在消息软件中创建、恢复和操作 Codex thread，接收进度并处理审批。
- 在 GUI 中管理模型服务、模型别名、路由、请求日志和消息渠道。
- 只读查看 Sub2API 账号池的在线状态、倍率和最近命中账号，不修改账号池。

## 界面预览

以下截图保留完整的 macOS 窗口边界和投影；示例中的账号、路径和请求内容已做模糊处理。

<table>
  <tr>
    <td align="center"><strong>概览</strong><br><img src="docs/assets/product/mochiport-overview.png" alt="MochiPort 概览" width="480"></td>
    <td align="center"><strong>Codex 接入</strong><br><img src="docs/assets/product/mochiport-codex-access.png" alt="MochiPort Codex 接入" width="480"></td>
  </tr>
  <tr>
    <td align="center"><strong>AI 网关</strong><br><img src="docs/assets/product/mochiport-ai-gateway.png" alt="MochiPort AI 网关" width="480"></td>
    <td align="center"><strong>消息渠道</strong><br><img src="docs/assets/product/mochiport-channels.png" alt="MochiPort 消息渠道"…
