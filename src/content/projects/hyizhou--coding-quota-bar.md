---
repo: "hyizhou/coding-quota-bar"
name: "coding-quota-bar"
description: "任务栏常驻的 Coding Plan 订阅用量监控工具"
readmeQualityOk: true
url: "https://github.com/hyizhou/coding-quota-bar"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [52, 47]
stars: 37
forks: 9
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-12T15:20:37Z"
lastCommitAt: "2026-09-01T08:44:49Z"
lastReleaseAt: "2026-04-24T06:34:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 39
maintainers: ["hyizhou", "Timeink88"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5b0f5b3c14216823d3f4ba2a5df4c620a2c3956a060839e2b774de80230a015/hyizhou/coding-quota-bar"
discussionCount: 0
---

# Coding Quota Bar

Windows 托盘工具，实时监控各 AI 平台 Coding Plan 用量。

图标直接显示剩余百分比，颜色预警，一眼掌握额度，无需打开网页后台，不打断编码流程。

## 预览

## 功能

### 托盘图标实时显示

托盘图标直接展示所有账户中最低的剩余百分比，颜色随阈值变化：

- **绿色** — 剩余 > 50%，放心用
- **黄色** — 剩余 20%-50%，注意控制
- **红色** — 剩余 < 20%，省着点

鼠标悬浮或点击图标即可弹出详情面板，查看各平台的详细用量。

### 多平台支持

| 平台 | 认证方式 | 监控内容 |
|------|----------|----------|
| **智谱 AI** | API Key | Token 额度、MCP 用量、模型性能、用量趋势图表、订阅信息、预估费用 |
| **DeepSeek** | API Key / 网页登录 | 账户余额（总余额/赠送/充值）、自定义预算进度条、API 与网页服务 90 天运行状态 |
| **MiniMax** | API Key | 日额度、周额度 |
| **MiMo** | 网页登录 | 套餐总用量、月度用量、Token 用量、账户余额 |
| **OpenCode Go** | API Key | 5 小时滚动窗口、周额度、月额度 |
| **Codex** | 读取本机 Codex CLI 登录 | 主窗口/次窗口限流、代码审查额度、Credits 余额、订阅到期 |

### 多账户管理

支持同一平台配置多个 API Key，例如同时监控工作号和测试号。多账户时自动显示切换标签页，托盘图标默认显示额度最低的账户。

### 用量趋势图表

- **Token 用量柱状图** — 7 天每小时粒度
- **MCP 工具调用统计** — 搜索、网页阅读、ZRead 等使用频次
- **模型性能折线图** — 解码速度和成功率趋势
- **预估费用** — 按 Token 用量估算 API 等价金额

### 服务状态监控

DeepSeek 用户可实时查看 API 服务和网页对话服务的运行状态，包括当前状态、90 天运行历史和 uptime 百分比。

### 其他特性

- **自动定时刷新** — 可配置 1-30 分钟刷新间隔
- **API Key 加密** — 使用 Windows safeStorage 系统级加密
- **开机自启动**
- **深色/浅色主题** — 跟随系统或手动切换
- **国际化** — 中文 / 英文
- **自动更新** — 检测新版本后提示下载

## 技术栈

Electron 34 + Vue 3 + TypeScript + Vite 7…
