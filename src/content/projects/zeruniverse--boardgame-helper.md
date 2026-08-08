---
repo: "zeruniverse/boardgame_helper"
name: "boardgame_helper"
description: "Forked from https://github.com/zeruniverse/texas_game"
readmeQualityOk: true
url: "https://github.com/zeruniverse/boardgame_helper"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [72, 27]
stars: 7
forks: 0
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-06-10T15:27:46Z"
lastCommitAt: "2026-08-08T04:35:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 77
maintainers: ["zeruniverse"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb3a7b8b76b77d4d6184ade7c3478a2abf8648d6dc0e511f7eef060304898ad1/zeruniverse/boardgame_helper"
---

# 桌游助手

--------------

该项目所有代码/文档均由AI生成，给AI的要求如下：

这是一个多游戏的桌游助手，前后端均分为两部分：通用逻辑（房间/心跳/T人/房主等）与游戏逻辑。具体游戏逻辑不要与通用逻辑或框架代码耦合，后端具体游戏的逻辑都应实现在具体游戏的线程中

桌游助手支持以下游戏：
- 德州扑克（支持系统发牌与非系统发牌两种模式）
- 狼人杀 （系统分发角色并控制游戏进程与夜间行动，狼人玩家有私有聊天频道）
- 阿瓦隆（系统分发角色并控制游戏进程与夜间行动，邪恶玩家有私有聊天频道）
- 一夜终极狼人（系统分发角色并控制游戏进程与夜间行动）
- 血染钟楼 （支持官方三个剧本以及一对一私聊。支持有说书人模式与系统自动当说书人模式，系统说书人有三种偏好可以设置：维持平衡，偏向好人，偏向坏人。维持平衡时，涉及到说书人可以选择的随机事件，系统说书人会尽量有利于当前游戏弱势方。
- 杀人游戏 （支持杀人游戏及其扩展）

目前该代码前后端都能成功`npm run dev`, 但是几乎每个游戏（以及框架）都有问题。 如果想参与项目可以在对应的issue中回复。

--------------

**支持多种桌游的在线助手平台**

## 📋 产品文档

- **[产品需求文档 (PRD)](https://github.com/zeruniverse/boardgame_helper/blob/HEAD/PRD.md)** - 完整的产品需求规格说明，包含功能详情和开发计划

本项目是一个多桌游虚拟房间助手，支持以下桌游：
- **德州扑克**（分为助手发牌/非助手发牌两种模式）
- **狼人杀**
- **杀人游戏**
- **一夜终极狼人**
- **阿瓦隆**
- **血染钟楼**

## 项目架构

本项目包含前端和后端两部分：

- `frontend`：Vue3 + TypeScript 前端，使用 Vite、Pinia、Element Plus。
- `backend`：Node.js + Express + socket.io 后端，采用多线程架构，数据保存在内存。

### 架构设计

系统分为两个核心部分：
- **A部分（通用）**：房间/线程控制，所有桌游共享的逻辑
- **B部分（游戏特异）**：每个桌游独有的游戏逻辑

## 功能特性

### 房间系统
- 动态创建房间，无预设房间
- 房间名为随机6位字符（数字+大写字母）
- 支持房间上锁/解锁
- 在线/离线状态检测
- 自动房间清理机制

### 游戏支持
- 每种游戏可配置最大人数
- 游戏特异性配置支持
- 统一的前端大厅界面
- 独立的游戏房间页面

## 运行

### 前端

```bash
cd frontend
npm install
npm…
