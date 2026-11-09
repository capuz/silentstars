---
repo: "1chenyx/OneWMS"
name: "OneWMS"
description: "ai wms"
readmeQualityOk: true
url: "https://github.com/1chenyx/OneWMS"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-03T14:17:44Z"
lastCommitAt: "2026-11-09T04:34:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 42
maintainers: ["1chenyx"]
openGraphImageUrl: "https://opengraph.githubassets.com/d55a184aaaba4d90a64e66a093673aae731c36844a781b6de5b5f772524db1a9/1chenyx/OneWMS"
---

# OneWMS · AI 驱动的个性化仓库管理系统

下载一个应用，用自然语言告诉 AI 你的仓储需求，AI 逐步把字段、流程、功能模块组装到位——形成一个完全属于你的 WMS。

## 核心特色

### 🗣️ 自然语言管理仓库
直接对话即可完成出入库、查询库存、盘点等操作。没有 AI 也能用：完整的表单/扫码界面开箱即用。

### 🤖 AI 是配置代理，不是"改代码的"
AI 永远拿不到 SQL 权限，它的所有操作分两条通道：
- **慢通道（改配置）**：AI 生成配置补丁 → 校验管线 → **人工确认** → 热应用，全程无需重启
- **快通道（改数据）**：Tool Calling 穿过工具总线，业务规则（库存不为负、状态机合法）是绕不过的墙

### 🧩 插件化内核，个性化是数据不是代码
模块（如保质期预警、拣货、批次）通过 manifest 声明自己提供的字段、工具与流程节点。个性化配置全部存为数据，可导出为迁移包，在设备间自由迁移。

### 📴 本地优先（Local-first）
每个节点都是完整系统，离线即普通软件。多节点通过事件账本（oplog）同步，局域网/VPN 组网内自动保持一致，无中心服务器依赖。

### 🖥️ 一套前端，多种形态
Tauri 桌面应用（约 46MB，内嵌 Node.js 运行时，无需安装环境）、浏览器访问本地服务，数据落在本地 SQLite。

## 功能一览

| 模块 | 说明 |
|---|---|
| 库存 / SKU / 往来单位 | 核心仓储能力 |
| 出库单 / 拣货 | 状态机驱动的流程引擎 |
| 盘点 | 库存核对 |
| 保质期预警 | 模块化扩展示例 |
| AI 对话 / 智能体 / 记忆 | 内置可配置的 AI 工作台 |

## 技术栈

TypeScript 单语言全栈 + Tauri（Rust 壳）：

- **内核 `@one/core`**：oplog 事件账本、字段注册表、工具总线、Profile 配置管线、模块系统、同步与迁移
- **领域 `@one/wms`**：仓储业务模块（以内核插件形式存在）
- **AI `@one/ai` + `@one/memory`**：Vercel AI SDK，云 API（OpenAI 兼容）与本地 Ollama 无缝切换
- **服务 `@one/server`**：Node.js HTTP + WebSocket
- **前端 `@one/app`**：React + JSON Schema 动态表单
- **桌面 `packages/desktop`**：Tauri 打包

## 只想用，不想装开发环境？

到…
