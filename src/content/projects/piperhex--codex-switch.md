---
repo: "piperhex/codex-switch"
name: "codex-switch"
description: "codex-switch & codex theme & codex mobile & chatgpt codex & codex relay & cc switch & cockpit-tools & codex skin"
readmeQualityOk: true
url: "https://github.com/piperhex/codex-switch"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [58, 25]
topics: ["codex", "codex-switch", "codex-switcher", "codex-account-manager", "codex-switch-dashbord"]
stars: 99
forks: 5
openIssues: 0
closedIssues: 6
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-07-01T15:46:22Z"
lastCommitAt: "2026-08-05T06:06:26Z"
lastReleaseAt: "2026-07-03T03:30:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 37
maintainers: ["piperhex", "yangpeng082416"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6c980070a9a4946e2189f7058ca1c7dee27ec17e95ee5e2b27a204525534cbf/piperhex/codex-switch"
---

# Codex Switch

> For English documentation, please see [README_EN.md](https://github.com/piperhex/codex-switch/blob/HEAD/README_EN.md).

Codex Switch 是一款面向 Codex / ChatGPT 用户的多账号管理工作台，以 Tauri 2 桌面应用为完整管理入口，并支持在本机启动网页版。它集账号登录、用量查看、快捷切换、第三方 Provider、本地热切换代理、Token 分析、Skills 市场和一键换肤于一体，同时支持连接自建后端与移动端，实现跨设备协同管理。

QQ 技术交流群：`1051213898`。

## 产品截图

### 账号管理与本地代理

### 第三方模型服务商

### Token 消耗分析

### 一键换肤

内置 300+ 套主题预设，并兼容 [Fei-Away/Codex-Dream-Skin](https://github.com/Fei-Away/Codex-Dream-Skin)。

### Skills 市场

### 悬浮用量球

  &nbsp;&nbsp;&nbsp;
</p>

## 功能

- 复用 Codex CLI 的 OAuth 2.0 + PKCE 登录流程。
- 支持应用内登录窗口和系统浏览器登录。
- 支持导入和管理多个 `auth.json`，包括常见第三方 JSON 导出及多账号 JSON 文件。
- 原子化切换 `$CODEX_HOME/auth.json`（默认是 `~/.codex/auth.json`）。
- 通过 `.cs` 备份包导出和恢复本地账号与服务商配置。
- 展示账号邮箱、套餐与到期时间、主/次用量窗口、重置卡和当日 Token，并支持自定义账号表格列。
- 支持手动或定时刷新单个账号及全部账号。
- 可从控制台和托盘执行尽力而为的“重启 ChatGPT”操作。
- 提供顶部功能菜单、入口搜索和系统托盘快捷操作。
- 支持可选的置顶悬浮用量球，可切换紧凑圆形或玻璃信息面板样式，并显示用量、重置倒计时和额度状态。
- 支持 OpenAI Responses、兼容 Chat Completions 的第三方 Provider、多模型、模型控制策略和常见中转站余额查询。
- 可直接写入配置切换 Provider，也可通过监听 `127.0.0.1:15722` 的本地代理在官方账号与 Provider 间热切换。
- 记录经本地代理转发请求的 Token 用量；支持查看代理会话、消息与上下文占用、响应延迟，并可导出结构化诊断信息。
- 提供按周热力图和趋势图，以及 Token 类型、Provider、模型和账号消耗排行。
-…
