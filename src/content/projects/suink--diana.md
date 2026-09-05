---
repo: "SuInk/Diana"
name: "Diana"
description: "住在群聊里、会主动搭话的 AI Agent —— 不用 @ 也能自然插话，还会搜索、点歌、发表情包、记住群里的约定；自托管单二进制，数据不出你的机器。OneBot v11 / Telegram / QQ 官方机器人 / 钉钉 / 飞书 / 企业微信同时在线。"
readmeQualityOk: true
url: "https://github.com/SuInk/Diana"
homepage: "https://suink.github.io/Diana/"
language: "Go"
languages: ["Go"]
languagePcts: [87]
stars: 6
forks: 0
openIssues: 0
closedIssues: 14
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-02T14:45:26Z"
lastCommitAt: "2026-09-05T07:49:30Z"
lastReleaseAt: "2026-09-03T18:25:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 66
maintainers: ["SuInk", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0a5069452e03796fbf194a307684f1dd815de8329858f9cbdf4cefc201b8069/SuInk/Diana"
---

# Diana

**住在群聊里、会主动搭话的 AI Agent —— 不用 @ 也能自然插话，还会搜索、点歌、发表情包、记住群里的约定；自托管单二进制，数据不出你的机器。**

<sub>OneBot v11 · Telegram · QQ 官方机器人 · 钉钉 · 飞书 · 企业微信 —— 一个实例，同时在线</sub>

[官网与文档](https://suink.github.io/Diana/) · [在线演示](https://suink.github.io/Diana/demo/) · [下载最新版本](https://github.com/SuInk/Diana/releases/latest) · [English](https://github.com/SuInk/Diana/blob/HEAD/README.en.md)

</div>

<br />

## Diana 是什么

你有一个想接进群聊的 AI：让它在 QQ 群里搭话、在 Telegram 里点歌、在飞书里回答同事的问题。Diana 就是中间这一层——一个 Go 写成的单二进制服务，一头对接大模型（OpenAI 兼容接口、Gemini、Anthropic 都行），另一头同时对接六种聊天平台，中间有一个网页控制台管理一切。

它为「自己养一个机器人」的人设计：

- **装完就能用** —— 一条命令安装，浏览器里点几下完成配置，不需要写代码。
- **数据在你手里** —— 配置、聊天记忆、日志全部存在本机 SQLite，没有云端依赖。
- **每一步都能解释** —— 机器人为什么回、为什么没回、调了哪个模型、花了多少 token，控制台事件中心里都查得到。
- **能力开箱即备** —— 联网搜索、链接/文件解析、点歌、表情包、OCR、长期记忆都是内置的，开关在控制台里。

## 三分钟跑起来

**① 安装。** 一条命令，脚本自动识别系统、下载最新版、校验 SHA-256 并启动服务：

```sh
# Linux / macOS
curl -fsSL https://raw.githubusercontent.com/SuInk/Diana/main/scripts/install.sh | sudo sh
```

推荐使用 sudo 固定安装到 `/opt/diana`，并创建 `/usr/local/bin/diana`。没有 sudo 权限时，去掉 sudo 运行；安装器会询问是否改为仅安装给当前用户，也可显式传入 `DIANA_INSTALL_SCOPE=user`。

```powershell
# Windows PowerShell
irm…
