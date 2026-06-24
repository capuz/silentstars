---
repo: "NapGram/NapGram"
name: "NapGram"
description: "Bridging QQ and Telegram with NapCat & mtcute. 基于 NapCat 和 mtcute 的 QQ-Telegram 消息桥"
url: "https://github.com/NapGram/NapGram"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["bridge", "mtcute", "napcat", "node", "qq", "telegram", "q2tg"]
stars: 43
forks: 2
openIssues: 1
closedIssues: 11
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-02T05:53:29Z"
lastCommitAt: "2026-06-24T06:39:11Z"
lastReleaseAt: "2025-12-15T06:53:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 39
maintainers: ["magisk317", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/913750e7100f2ac82433c193b4d11f4436adef19c1d3844d542829f3720766ff/NapGram/NapGram"
discussionCount: 1
---

<h1 align="center">NapGram</h1>

</p>

## ✨ 核心特性

### 🚀 现代化架构
- **统一抽象层**：基于 `IQQClient` 接口的标准化实现，解耦底层协议
- **模块化设计**：Feature 驱动的架构（Forward, Recall, Media, Commands）
- **高性能核心**：
  - ⚡ 消息处理速度提升 50%
  - 📉 内存占用降低 15%
  - 🔄 LRU 多级缓存系统

### 💬 消息能力
- **全类型支持**：
  - ✅ 文本、图片（含闪照）、视频、音频
  - ✅ 文件、贴纸、@提及、表情
  - ✅ 合并转发消息、引用回复
  - ✅ 商城表情 (mface)、掷骰子/猜拳
  - ✅ Markdown/JSON 卡片消息
- **媒体增强**：
  - 🖼️ 智能图片分片发送（解决合并转发显示问题）
  - 🎥 GIF 自动优化播放
  - 🎵 语音自动转码 (Silk/Ogg)
  - 📂 跨容器大文件流式传输

### 🛡️ 稳定性与监控
- **双向撤回同步**：QQ 与 Telegram 消息撤回互通
- **智能重连**：WebSocket 断线自动重连机制
- **健康监控**：
  - 实时延迟统计 (p50/p95/p99)
  - 错误率追踪与自动恢复
  - 消息队列优先级管理
- **Web 控制台**：
  - ✅ Docker 镜像内置前端（默认端口 `8080`，访问 `http://<host>:8080/`）
  - 📊 系统状态与性能指标（统计概览、趋势、延迟）
  - ⚙️ 可视化管理（实例/绑定/配置、日志与消息查询）
  - ⚠️ UI 源码维护在 `napgram-ui-dist` 仓库，当前仓库只保留打包后的 `web/dist`

## 🏗️ 技术栈列表

| 组件 | 技术方案 | 说明 |
|-----------|-----------|-----------|
| **QQ 适配** | [NapCat](https://github.com/NapNeko/NapCatQQ) | 基于 WebSocket 的现代化协议实现 |
| **TG 适配** | [mtcute](https://github.com/mtcute/mtcute) | 原生 MTProto 实现，无需 Bot API 中转 |
| **核心语言** | TypeScript 5.0+ | 严格模式，全链路类型安全 |
| **前端框架** | React 19 + Vite | Tailwind CSS 4, Shadcn UI, Recharts |
| **运行时** | Node.js 25…
