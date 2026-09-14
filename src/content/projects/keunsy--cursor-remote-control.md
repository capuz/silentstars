---
repo: "keunsy/cursor-remote-control"
name: "cursor-remote-control"
description: "通过 IM（飞书、微信等）远程控制 Cursor AI Agent —— 支持 Agent CLI 独立会话与 IDE 入队双向交互两种模式"
readmeQualityOk: true
url: "https://github.com/keunsy/cursor-remote-control"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 16
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-12T06:20:11Z"
lastCommitAt: "2026-09-14T09:11:49Z"
lastReleaseAt: "2026-04-08T08:19:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 16
maintainers: ["keunsy"]
openGraphImageUrl: "https://opengraph.githubassets.com/3856e2b8ecdfd2b210e8bb8d9722a14b0af5dcdafa6f07814ebb08c602b03768/keunsy/cursor-remote-control"
---

# Cursor Remote Control

通过 IM 平台远程控制 Cursor AI Agent 的中继服务。已支持飞书、钉钉、企业微信、微信个人号、Telegram，架构可扩展至更多渠道。

在手机上发消息，你的 Mac 就自动写代码、审文档、执行任务。将 Cursor 变成你的**私人 AI 战略合伙人**，随时随地通过 IM 调用。

**两种远程模式**：
- **Agent CLI 模式**：通过 IM 启动独立的 Cursor Agent 会话，适合新任务

---

## 架构设计

### 整体架构

```
飞书 ────── WebSocket ─────┐
                           │
钉钉 ────── Stream ────────┤
                           │
企业微信 ── WebSocket ─────┤
                           ├──→ Cursor CLI
微信 ────── HTTP Poll ─────┤          │
                           │          │
Telegram ── Bot API ───────┤          │
                           │          │
更多渠道... ────────────────┘          │
                                      │
        ┌─────────────────────────────┘
        │
        ├─→ 项目路由
        ├─→ 会话管理（自动恢复上下文）
        ├─→ 记忆系统（混合搜索 + 向量数据库）
        ├─→ 定时任务（AI 创建，自动执行）
        └─→ 心跳系统（定期维护）
```

### 工作原理

**1. 消息接收**
- 各平台通过长连接/长轮询主动接收消息（具体连接方式见[技术栈](#技术栈)）
- 无需公网 IP，无需端口映射

**2. 消息处理**
```
用户消息 → 解析项目路由 → 多模态处理（文本/图片/语音/文件）
         ↓
    传递给 Cursor CLI
         ↓
    AI 处理（思考、工具调用、回复）
         ↓
    实时流式推送进度卡片
         ↓
    最终结果 + 耗时统计
```

**3. 会话管理**
- 每个项目工作区独立会话
- 自动 `--resume` 恢复上下文
- 同一会话串行，不同会话并发
- Cursor CLI…
