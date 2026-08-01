---
repo: "TokenDanceLab/AgentHub"
name: "AgentHub"
description: "IM-native multi-agent collaboration platform — @mention Claude Code, Codex, OpenCode like teammates"
readmeQualityOk: true
url: "https://github.com/TokenDanceLab/AgentHub"
homepage: "https://hub.vectorcontrol.tech"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [42, 41]
topics: ["agent", "ai", "claude-code", "codex", "developer-tools", "go", "im", "multi-agent", "react", "tauri"]
stars: 5
forks: 2
openIssues: 12
closedIssues: 735
watchers: 0
contributors: 4
recentReleases: 5
createdAt: "2026-05-20T16:29:47Z"
lastCommitAt: "2026-08-01T06:13:17Z"
lastReleaseAt: "2026-06-17T11:47:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 75
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/7d9d61bbb9916cf90875fa77b26d763834cb47c8b6f9589791a101847b9e72e0/TokenDanceLab/AgentHub"
---

# AgentHub

  把 AI Agent 当队友一样拉进群聊。和真人好友、AI Builder、AI Reviewer 在同一个 IM 里聊天协作——消息就是任务流，聊天就是工作台。

  [English](https://github.com/TokenDanceLab/AgentHub/blob/HEAD/README_EN.md) · [官网](https://hub.vectorcontrol.tech) · [文档](https://hub.vectorcontrol.tech/docs) · [API](https://github.com/TokenDanceLab/AgentHub/blob/HEAD/api/)

  
  
  
  
  
  
  
</div>

</div>

## 产品定位

AgentHub 让你像在 IM 群聊里协作一样，把真人好友、Builder、Reviewer、Researcher、Deployer 等 AI Agent 放进同一个项目会话，围绕代码、文档、Diff、Preview、Approval 和产物协同工作。

## 核心特性

- **IM 形态协作** — 单聊、群聊、@Agent，在同一条任务流里完成
- **多 Runtime 调度** — Claude Code、Codex、OpenCode 通过统一 Adapter 接入
- **Diff / Preview / Approval** — 代码变更内联展示，审批流可控
- **三端原生** — Tauri Desktop + Web + Expo React Native Mobile
- **Hub-Edge 分布式** — 本地执行不依赖 Hub；Hub 提供多端同步、远程查看和审计

## 技术栈

| 层 | 技术 |
|---|---|
| Desktop | Tauri 2 · React 19 · TypeScript · Vite |
| Web | React 19 · TypeScript · Vite |
| Mobile | React Native · Expo |
| 后端 | Go · PostgreSQL · Redis · SQLite |

## 仓库结构

| 目录 | 说明 |
|---|---|
| `app/web` | 浏览器工作台 |
| `app/desktop` | Tauri Desktop 工作台 |
| `app/mobile-rn` | Expo / React Native Mobile |
| `app/shared` | 共享 UI 组件、类型、transcript 逻辑 |
| `hub-server` | Hub…
