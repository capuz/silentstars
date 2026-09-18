---
repo: "CallmeLins/qdrust"
name: "qdrust"
description: "QDRUST —— HTTP请求定时任务自动执行框架 base on HAR Editor and QD-TODAY"
readmeQualityOk: true
url: "https://github.com/CallmeLins/qdrust"
homepage: "https://blog.bayinlabs.com/pages/qdrust/"
language: "Rust"
languages: ["Rust"]
languagePcts: [65]
stars: 8
forks: 1
openIssues: 2
closedIssues: 21
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-18T14:28:52Z"
lastCommitAt: "2026-09-18T14:03:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 55
maintainers: ["CallmeLins"]
openGraphImageUrl: "https://opengraph.githubassets.com/7eca9cb8547711745b1b6efc64a9347aefbaf5e91b84e6fdde108608c1eb9ad2/CallmeLins/qdrust"
---

# qdrust

> 一个用 Rust + Vue 3 重写的 **QD 兼容 HTTP 定时任务自动执行框架**，基于 HAR 编辑器与 Axum 服务。

qdrust 是按 [QD](https://github.com/qd-today/qd)（HTTP 请求定时任务自动执行框架）路线重新设计的 Rust 实现：解析并执行旧 QD 的 HAR 模板，提供命令行工具、REST API、定时调度与 WebUI。它是一个**全新项目**，不导入旧 QD 数据库、不复用旧登录 Cookie、不承诺兼容旧 URL / 旧 API / 任意 Python 动态表达式——但对核心兼容契约（旧 QD HAR）做了完整对齐，并补齐了 Jinja2 表达式与 `api://util/*` 内置工具。

---

## 介绍

### 它解决什么问题

把浏览器里抓到的 HTTP 请求（HAR）存成模板，按 cron 或固定间隔自动执行，用于签到、监控、API 轮询等定时任务；执行结果可通过 11 种渠道推送通知。

### 核心特性

- **旧 QD HAR 兼容**：导入、校验、保留原始 HAR JSON，并重放执行。
- **可视化 HAR 编辑器**：在 WebUI 里直接编辑请求、变量与断言，无需手写 JSON。
- **双后端数据库**：SQLite（开箱即用）与 MySQL（按 `DATABASE_URL` 自动选择）。
- **完整通知体系**：Webhook + Email + 自定义 HTTP + 8 种推送渠道，共 **11 种**；支持批量绑定、失败次数阈值、仅自动执行触发，以及自定义标题 / 正文模板（见 [推送 / 通知](https://github.com/CallmeLins/qdrust/blob/HEAD/docs/notifications.md)）。
- **模板表达式**：26 个 Jinja2 过滤器 + 38 个表达式函数，以及 `api://util/*` 内置工具（时间 / 编码 / 哈希 / 正则 / JSON / RSA / OCR，见 [模板表达式与内置工具](https://github.com/CallmeLins/qdrust/blob/HEAD/docs/expressions.md)）。
- **无头浏览器插件**（可选）：`api://browser/*` 通过 CDP 驱动远程无头浏览器，补齐"生成签名 / 过验证码 / 渲染 JS / 多步表单交互"这类纯 HTTP 做不了的一步。支持跨步骤存活的会话复用与 `type`/`click` DOM 操作，结果可提取成变量回填到后续请求（见…
