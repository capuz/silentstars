---
repo: "yukiykchen/deepseek-harness-mobile"
name: "deepseek-harness-mobile"
description: "deepseek harness 移动端app，可以远程连接电脑端的 dsh web，也可以在手机本地启动 dsh agent，随时随地使用你的 DSH agent"
readmeQualityOk: true
url: "https://github.com/yukiykchen/deepseek-harness-mobile"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [84]
stars: 10
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2026-08-20T07:27:29Z"
lastCommitAt: "2026-09-04T08:10:01Z"
lastReleaseAt: "2026-08-28T02:59:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 54
maintainers: ["yukiykchen"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b992ce3211b22c2ddd8f8d59f4f2ee443b95cf7529e5602b11bab033b42f087/yukiykchen/deepseek-harness-mobile"
---

# DeepSeek Harness Mobile

将 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 接到 Android / iOS 手机的实验性移动端宿主项目。

**本仓库只连接电脑上的 DSH**，不再内嵌 Node.js / Harness，APK 不再携带约 115 MB 的 `payload.zip`。

App 启动后先选连接方式，再进入聊天。**扫码连电脑的完整启动命令见 [怎么启动（扫码连电脑）](#怎么启动扫码连电脑)。**

- **扫码连接**：扫描电脑 DSH Settings 里的二维码，经 Relay 访问电脑上的 Harness。
- **SSH**：用本机端口转发连到电脑上的 DSH。

若要在手机上跑内嵌 Agent，请使用独立仓库 **[DSH Local](https://github.com/yukiykchen/deepseek-harness-local)**（`com.example.dsh.local`，需 Shizuku 与 `payload.zip`）。两个 App 可以同时安装。

本项目的目标不是把 DeepSeek Harness 翻译成 Kotlin，而是用 Kotlin/Kuikly 做宿主界面，连到电脑上的 Host。

> 当前项目处于开发和验证阶段。请不要把它当作生产版本使用。

## 项目定位

DeepSeek Harness 本身是一个插件化 Agent 运行时。本仓库提供 Android / iOS 宿主：

- 使用 Kuikly/Kotlin Multiplatform 实现主要 UI 和跨平台协议层；
- 扫码 / SSH 远程模式用 HTTP RPC + WebSocket（`events.mux`）；
- 按连接模式隔离会话列表和消息缓存；
- 通过扫码 Relay 或 SSH 隧道连接电脑上的 DSH Host。

## 连接模式

启动后首页是「连接 DSH」。

| 模式 | App 文案 | Agent 跑在哪 | 传输 | API Key 配在哪 | 会话缓存 |
| --- | --- | --- | --- | --- | --- |
| 远程 Relay | 扫码连接 | 电脑 DSH | Relay sealed tunnel + 本机 loopback WebSocket | 电脑 | `relay:<hostId>` |
| 远程 SSH | SSH | 电脑 DSH | SSH 本地转发 + WebSocket | 电脑 | `ssh:default` |
| 手机本地 | （独立 App） | 见 DSH Local | 本机 HTTP + SSE |…
