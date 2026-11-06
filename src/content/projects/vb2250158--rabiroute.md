---
repo: "vb2250158/RabiRoute"
name: "RabiRoute"
description: "Self-hosted message gateway for AI agents: Codex, QQ, WeChat/WeCom, Feishu, smart devices and desktop automation. | AI 消息网关：连接聊天、智能设备与 Agent，支持定时任务和角色上下文。"
readmeQualityOk: true
url: "https://github.com/vb2250158/RabiRoute"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [59]
topics: ["agent-orchestration", "ai-agents", "codex", "desktop-automation", "feishu", "home-assistant", "message-routing", "napcat", "qq-bot", "self-hosted"]
stars: 492
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-01T09:40:16Z"
lastCommitAt: "2026-11-06T11:22:49Z"
lastReleaseAt: "2026-07-31T04:25:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 20
maintainers: ["vb2250158", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/217b44d59892df45a35cc86fc611a068b6b449a68497761c885ea945add89f2a/vb2250158/RabiRoute"
---

English | <a href="./README_zh.md">简体中文</a> | <a href="./README_ja.md">日本語</a>

# RabiRoute

RabiRoute is a **self-hosted message gateway and policy router for AI agents**. Connect chats, desktop events and smart devices to the Agent you already use, with role context, scheduled tasks and recorded results.

**RabiRoute connects and routes. Your Agent owns the model, tools and execution.**

[Overview](#what-it-connects) · [Get started](#get-started) · [Architecture](#architecture) · [Docs](#documentation) · [Community](#community)

## What it connects

```mermaid
flowchart LR
    C["Chat<br/>QQ · WeChat · WeCom · Feishu"] --> R["RabiRoute<br/>Routes + role context"]
    T["Schedules<br/>Webhooks"] --> R
    I["Desktop<br/>Device events"] --> R
    R --> A["Your Agent<br/>Codex · DSH · WorkBuddy"]
    A --> O["Reply or action<br/>Sending rules + receipts"]
    classDef input fill:#e8f2ff,stroke:#4777b7,color:#162b48
    classDef router fill:#dcf5ed,stroke:#218468,color:#113d31
    classDef agent fill:#f0e7fa,stroke:#8254a8,color:#372044
    classDef output fill:#fff0df,stroke:#bf7b30,color:#51351c
    class C,T,I input
    class R router
    class A agent
    class O output
```

QQ…
