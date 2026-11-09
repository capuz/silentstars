---
repo: "tempppw01/ledgerflow"
name: "ledgerflow"
description: "AI 原生个人财务工作台：SQL 账号与多设备数据、记账预算、负债还款、基金行情分析，以及 JSON/WebDAV/OSS/S3 备份。"
readmeQualityOk: true
url: "https://github.com/tempppw01/ledgerflow"
homepage: "https://ledgerflow.shuaihong.fun"
language: "TypeScript"
languages: ["TypeScript", "CSS"]
languagePcts: [68, 25]
topics: ["ai-assistant", "bookkeeping", "budgeting", "debt-tracking", "finance", "react", "typescript", "vite"]
stars: 18
forks: 7
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-06T10:36:22Z"
lastCommitAt: "2026-11-09T04:33:57Z"
lastReleaseAt: "2026-03-16T04:07:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 63
maintainers: ["tempppw01"]
openGraphImageUrl: "https://opengraph.githubassets.com/baa565bfe7a3ab17f251a188d9f47e68a5fe5e89d4f66fc2a16aa77853db924e/tempppw01/ledgerflow"
---

# LedgerFlow

  面向个人长期财务管理的 AI-native 工作台：记账、预算、还款、投资与复盘，在同一处完成。

> [!NOTE]
> 当前版本：`0.6.6`。项目仍在快速迭代，重要数据请保留本地 JSON / WebDAV / OSS / MySQL 快照等备份。

> 说明：项目仍处于快速迭代阶段，功能、界面和数据结构会持续调整。重要数据请务必保留本地 JSON / WebDAV / OSS / MySQL 快照等备份。

> [!TIP]
> **模型 API 推荐**：[ai.shuaihong.fun/v1](https://ai.shuaihong.fun/v1)  
> 多种模型可用，兼容 OpenAI 接口，每月最低 20 元月费。可在「设置 → OpenAI」中把接口地址换成该服务，为 AI 助手接入更多模型。

### 0.6.6 功能亮点

- 智能预算看板重构为 16 类预算体系，按身份权重生成分配；零预算旧方案会自动重新分配一次，并保留手工调整。
- 助手与投资对话工具栏统一为细线 SVG 图标，重新绘制清空上下文、发送、停止、联网和模型入口。
- 投资工作台合并“今日总览”和“大盘行情”，总览、行情、板块、自选与快讯在同一导航中连续切换。
- 数据同步初始化失败不再阻断应用，Vite 预览模式同步支持 `/api` 代理，SQL 导入与导出接口保留会话隔离。

### 0.6.5 功能亮点

- 还款走势改为紧凑可读图表：可在“每期还款”和“还款后本金”间切换，并支持悬停或点按查看每一期的日期与金额。
- 新增负债的日期选择器会始终显示在弹窗上方，并依据可用空间自动调整位置，避免日期被遮挡。
- 移动端功能抽屉改为连续导航布局，减少层叠卡片和重边框，让常用入口与完整菜单更易浏览。
- 帮助页重构为任务导向的使用指南，补充记账、账户、预算还款、备份恢复和常见问题说明。

### 0.6.4 功能亮点

- 大盘全球市场时间轴增加随当前时间每秒移动的红色竖线，周末休市时自动隐藏。

### 0.6.3 功能亮点

- 首次初始化可选择 SQLite 或 MySQL；初始化后 SQL 是业务数据源，本地缓存用于快速启动和离线恢复。
- 账号、密码和登录会话由服务端管理，账号设置可查看当前设备并退出其他会话。
- 投资理财页整合持仓收益、大白话行情、规则建议、多指数分时走势、基金自选和持仓资料。
- 投资 AI 可通过 Tavily 同时核验同花顺与雪球，单一来源失败时自动使用另一来源，并展示引用与过程状态。
- JSON、WebDAV、阿里云 OSS、S3 兼容存储和数据库快照均支持按范围备份；恢复内容会写回当前 SQL 数据库。

## 产品定位

LedgerFlow…
