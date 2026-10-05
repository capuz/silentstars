---
repo: "cuihairu/croupier"
name: "croupier"
description: "Croupier is a universal GM (Game Master) backend system designed for game operations. It supports integration with multi-language game servers and provides a unified management interface along with powerful extensibility."
readmeQualityOk: true
url: "https://github.com/cuihairu/croupier"
homepage: "https://cuihairu.github.io/croupier/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [54, 29]
topics: ["clickhouse", "game", "game-analytics", "game-backend", "game-telemetry", "golang", "jaeger", "liveops", "logging", "metrics"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 6
createdAt: "2024-07-31T10:19:15Z"
lastCommitAt: "2026-10-05T05:14:40Z"
lastReleaseAt: "2026-06-02T03:06:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 86
maintainers: ["cuihairu"]
openGraphImageUrl: "https://opengraph.githubassets.com/19ee74f7b012027fc90f128a0216ad78d5229f0d2f72d570184eeb95fc9d9a1c/cuihairu/croupier"
discussionCount: 1
postedAt: "2026-10-04T10:09:15.128Z"
---

Croupier 是面向游戏运营与控制场景的 Server / Agent / SDK 平台，默认服务于单一游戏公司内部的多个游戏与多个环境。当前架构已经收敛到“统一 session 传输”方向：

- `Agent <-> Server`：默认采用 `TCP session`，默认启用 `TLS`
- `SDK <-> Agent`：默认采用 `TCP session`，默认不启用 `TLS`，按需开启
- 两条链路共享同一套 session 传输基座，只在首条握手消息和业务语义上区分子协议

## 在线演示

地址：https://croupier.cuihairu.site/

| 账号    | 密码       |
| ------- | ---------- |
| `admin` | `admin123` |

> [演示环境，全部为假数据，会不定期重置。请勿填写任何真实信息。]

## Highlights

- 单公司、多游戏、多环境作用域模型：标准业务边界是 `gameId + env`
- 业务作用域与运行目标分离：`scope` 表达归属，`target` 表达部署与执行位置
- 统一的函数注册、调度、调用与作业模型
- 轻量 session 传输：单连接、双向请求、可重连、可背压、可摘流
- JSON payload + protobuf 信封，兼顾跨语言一致性与接入成本
- JSON Schema 能力契约 + Ant Design Pro/ProComponents 驱动的生成式控制台 UI

## 支持的数据库

| 数据库     | 驱动                       | 适用场景             |
| ---------- | -------------------------- | -------------------- |
| SQLite     | `glebarez/sqlite`          | 开发、测试、小型部署 |
| MySQL      | `gorm.io/driver/mysql`     | 生产环境（推荐）     |
| PostgreSQL | `gorm.io/driver/postgres`  | 生产环境             |
| SQL Server | `gorm.io/driver/sqlserver` | 企业环境             |

各库 DSN 配置示例见[服务端配置说明](https://github.com/cuihairu/croupier/blob/HEAD/docs/operations/config-server.md)。

## SDK 生态

所有官方 SDK 已整合到 monorepo 的…
