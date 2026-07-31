---
repo: "cuihairu/croupier"
name: "croupier"
description: "Croupier is a universal GM (Game Master) backend system designed for game operations. It supports integration with multi-language game servers and provides a unified management interface along with powerful extensibility."
readmeQualityOk: true
url: "https://github.com/cuihairu/croupier"
homepage: "https://cuihairu.github.io/croupier/"
language: "Go"
languages: ["Go"]
languagePcts: [61]
topics: ["clickhouse", "game", "game-analytics", "game-backend", "game-telemetry", "golang", "jaeger", "liveops", "logging", "metrics"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2024-07-31T10:19:15Z"
lastCommitAt: "2026-07-31T06:29:21Z"
lastReleaseAt: "2026-06-02T03:06:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 72
maintainers: ["cuihairu", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/54c70c9d5000f750a3015db603465e1e9a097898bb50f69342e451a9bb2cda8c/cuihairu/croupier"
discussionCount: 1
---

</p>

# Croupier Platform

Croupier 是面向游戏运营与控制场景的 Server / Agent / SDK 平台，默认服务于单一游戏公司内部的多个游戏与多个环境。当前架构已经收敛到“统一 session 传输”方向：

- `Agent <-> Server`：默认采用 `TCP session`，默认启用 `TLS`
- `SDK <-> Agent`：默认采用 `TCP session`，默认不启用 `TLS`，按需开启
- 两条链路共享同一套 session 传输基座，只在首条握手消息和业务语义上区分子协议

## 在线演示

地址：https://croupier.cuihairu.site/

| 账号 | 密码 |
|------|------|
| `admin` | `admin123` |

> 📌 演示环境，全部为假数据，会不定期重置。请勿填写任何真实信息。

## Highlights

- 单公司、多游戏、多环境作用域模型：标准业务边界是 `game_id + env`
- 业务作用域与运行目标分离：`scope` 表达归属，`target` 表达部署与执行位置
- 统一的函数注册、调度、调用与作业模型
- 轻量 session 传输：单连接、双向请求、可重连、可背压、可摘流
- JSON payload + protobuf 信封，兼顾跨语言一致性与接入成本
- JSON Schema 能力契约 + Ant Design Pro/ProComponents 驱动的生成式控制台 UI

## SDK 生态

所有官方 SDK 已整合到 monorepo 的 `sdks/` 目录下统一维护。

### 官方 SDK

| 语言   | 目录           | Build                                                                                                                                                                    | Coverage                                                                                                                                    | Docs                            |
| ------ | -------------- |…
