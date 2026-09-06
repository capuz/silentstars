---
repo: "lza6/Aggregate-to-2api"
name: "Aggregate-to-2api"
description: "完美各种AI平台的2API，支持服务器部署，支持高并发打死上游，交流更新频道：https://t.me/Aggregate2api"
readmeQualityOk: true
url: "https://github.com/lza6/Aggregate-to-2api"
homepage: "https://t.me/Aggregate2api"
language: "Python"
languages: ["Python"]
languagePcts: [78]
stars: 37
forks: 16
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-18T19:05:59Z"
lastCommitAt: "2026-09-06T08:01:15Z"
lastReleaseAt: "2026-08-25T01:22:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 47
maintainers: ["lza6", "wdawdwa"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ede92c6a49278fcb515a8fc0e45e07d620284ad0981da99b57af47bbf3b338f/lza6/Aggregate-to-2api"
---

# 听风AI · 多提供商 AI 图像生成网关

> **逆向号池 + 自动注册 + 免费代理池 + 高并发异步队列** — 聚合多家 AI 图像生成站，统一 OpenAI 风格 API。

</p>

---

## 📋 概述

听风AI 是一个**生产级 AI 图像生成 API 网关**，将多家上游 AI 图像服务（imagefree.net、aifreeforever.com、nanobanana-pro.com 等）聚合为统一的 OpenAI 风格 `/v1/*` 接口。核心能力包括：

- **🔄 多提供商自适应路由** — MAB-EWMA 引擎结合成功率/时延/负载实时打分，自动降级/熔断
- **👥 号池自动化** — 自动注册 + 每日签到，管理 1000+ 账号无需人工干预
- **🌐 代理池轮换** — 住宅代理 + 免费代理双源，每 IP 递增冷却 + 24h 每日限额重置
- **⚡ 高并发架构** — 有界优先级队列 + Worker 池（4-16 自适应）+ Turnstile token 预取，扛 270+ RPS
- **🖥️ React 管理面板** — 独立 React 前端（/admin），图表化监控任务、提供商、号池、死信队列与实时日志
- **🔍 深度可观测性** — Prometheus 指标 + 审计日志 + 内置告警引擎 + WebSocket 实时日志 + OTel 分布式追踪
- **📡 SSE 每任务事件流** — `/v1/tasks/{id}/events` 实时推送 status/progress/result + Last-Event-ID 断线补偿
- **💬 文本对话与智能体网关 (v4.4)** — 整合 TryingOpen 匿名多模型，提供标准 OpenAI `/v1/chat/completions` 与 Anthropic `/v1/messages` 兼容端点，支持思考链、工具调用（Function Calling）与多模态 Vision，自动代理轮换突破单 IP 频控。

> 📌 **线上演示**：https://imagefree.tingfengai.art（腾讯云东京，公益开放）

---

## 🚀 快速启动

### 前置依赖

- Python 3.11+ 或 Docker
- Node.js 18+（仅构建 React 管理面板时需要）
- 网络代理（访问 imagefree.net 等上游需能直连或通过代理）
- **cf_solver（Turnstile 求解器，端口 8001）** — 见下方「外部前置依赖说明」

### 方式一：Docker Compose（推荐）

```bash
git clone…
