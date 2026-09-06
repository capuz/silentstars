---
repo: "sorry510/go_binance_futures"
name: "go_binance_futures"
description: "AI 加密货币分析咨询 + 币安合约自动化交易"
readmeQualityOk: true
url: "https://github.com/sorry510/go_binance_futures"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["binance-futures", "binance-trader", "bitcoin", "bot", "crpyto", "crypto-trade-bot", "futures", "ai-trade", "ai-agent"]
stars: 228
forks: 48
openIssues: 0
closedIssues: 21
watchers: 5
contributors: 3
recentReleases: 0
createdAt: "2024-03-24T11:04:51Z"
lastCommitAt: "2026-09-06T08:02:37Z"
lastReleaseAt: "2024-11-01T14:43:39Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 42
maintainers: ["HaoZhengZhao", "sorry510", "yxd117"]
openGraphImageUrl: "https://opengraph.githubassets.com/282009e344752d183e8c9ee1bfe88c055b55f000dcb0857c02a3e5261d4c5045/sorry510/go_binance_futures"
---

·
</p>

# 币安交易机器人

## 数据库更新（强烈建议使用 MySQL，本项目数据查询较频繁，SQLite 在数据量较大时会有明显延迟）

数据库结构更新已经从正常启动流程中拆分为独立命令。配置好 `conf/app.conf` 的数据库连接后，执行：

```bash
./go_binance_futures sync db
```

该命令会按当前程序版本完成以下操作：

1. 根据已注册的 Model 同步数据库 Schema，创建缺失的表和字段。
2. 全新数据库会初始化 `config`、默认策略模板等基础数据。
3. 根据数据库中的版本号执行 `command/sql/version/*.sql` 版本迁移。
4. 更新数据库版本号并输出同步过程日志。
5. 同步完成后立即退出，不会启动 Web、WebSocket、Scheduler、交易或 Agent 服务。

建议在以下场景执行 `sync db`：

- **首次部署**：配置数据库后，先执行 `./go_binance_futures sync db`，成功后再正常启动程序。
- **升级程序版本**：替换为新版本二进制后，在启动新版本前执行一次 `./go_binance_futures sync db`。
- **恢复或迁移数据库**：复制旧 SQLite 数据库、恢复 MySQL/PostgreSQL 备份或切换数据库后，先执行该命令确认 Schema 和版本迁移完成。
- **日志提示数据库版本过旧或未初始化**：停止服务并执行该命令，成功后再重新启动。

正常运行：

```bash
./go_binance_futures
```

正常启动**不会再自动执行数据库 Schema 或版本迁移**。如果数据库尚未初始化，或数据库版本低于当前二进制要求，程序会提示先运行 `go_binance_futures sync db`。生产环境升级时建议先备份数据库，并在服务停止状态下执行同步命令。

## 功能

## 实时推送
> dingding, slack, 网页 websocket 通知

- 钉钉

- slack

- 网页 websocket 通知

## 自定义交易策略

### ai 生成策略

### 说明
UI 可在 `合约交易 → 策略模板` 中维护技术指标和策略方法，再到 `合约交易 → 合约交易` 为单个币种选择全局策略或自定义策略。

# 免责申明
>！！！本项目不构成任何投资建议，投资者应独立决策并自行承担风险！！！

# 功能

## Web UI

访问 `http://<服务器 IP>:<web.port>/zmkm/index.html`，登录后通过左侧菜单进入各功能页。登录账号和密码来自 `conf/app.conf` 的…
