---
repo: "CAKCode/connect2cli-bridge"
name: "connect2cli-bridge"
description: "wecom-codex-bridge"
readmeQualityOk: true
url: "https://github.com/CAKCode/connect2cli-bridge"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 72
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-08T03:42:27Z"
lastCommitAt: "2026-08-04T06:10:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 23
maintainers: ["CAKCode"]
openGraphImageUrl: "https://opengraph.githubassets.com/11ed6be9f273da321c298efa14b3c366774c6babdcf40c8ede5bbdb105216b9a/CAKCode/connect2cli-bridge"
---

# WeCom Workspace Bridge（codex & claude code）

企业微信智能机器人与 `codex` CLI 之间的纯 Python 会话桥接服务，默认对接 `codex`，也支持兼容 `claude` backend。

English overview: [README.en.md](https://github.com/CAKCode/connect2cli-bridge/blob/HEAD/README.en.md)

如果你要给其他人一个“只提供 `botId`、`secret`、GitHub 地址，Codex 就能帮部署”的最简流程，直接看：[README.codex-deploy.md](https://github.com/CAKCode/connect2cli-bridge/blob/HEAD/README.codex-deploy.md)

这个项目的主要定位不是面向公网的通用聊天机器人，而是面向组内协作的多人工作空间桥接层：

- 每个成员有各自独立的会话工作区和文件目录
- 同一个 Bot 下多人同时拉代码、改文件、跑命令时互不影响
- 通过企业微信作为入口，把 `codex` 变成组内可复用的协作开发工具

这是一个无前端的 headless 服务，负责：

- 维护企业微信 WebSocket 长连
- 管理多 Bot 配置与持久化
- 为会话启动可选 agent backend（`codex` / `claude`），并在当前运行态可恢复时尝试原生 resume
- 为组内多人协作提供隔离 workspace，保证每人文件和代码操作互不影响
- 提供全局共享 skill 与个人私有 skill 的分层注入和隔离
- 提供会话控制命令 `/bridge-status`、`/bridge-interrupt`、`/bridge-reset`、`/bridge-resume`、`/local-resume`、`/local-detach`、`/cwd`
- 下载企微图片/文件到本地 workspace
- 对外暴露运行状态和最新摘要，便于前端轮询刷新
- 对超长运行会话支持企微 10 分钟后的分段回复与后续续传
- 通过本地命令或 API 回传文件到企微
- 支持一次性定时消息和 cron 周期调度
- 暴露 Bot / Session / Schedule JSON API

默认监听地址是 `http://127.0.0.1:9299`。根路径 `/` 只返回 JSON 状态，不提供网页 UI。

## 快速开始

### 1. 前置条件

- 已安装 `python3`
- 已安装并可直接执行 `codex`
- bridge 运行用户已经执行过 `codex login`
-…
