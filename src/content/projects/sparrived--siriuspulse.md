---
repo: "Sparrived/SiriusPulse"
name: "SiriusPulse"
description: "一个为多人交互场景设计的 Python LLM 编排框架。构建具有真实情感表达能力、能提供帮助与情绪价值的核心引擎。"
url: "https://github.com/Sparrived/SiriusPulse"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 5
forks: 2
openIssues: 0
closedIssues: 11
watchers: 2
contributors: 4
recentReleases: 1
createdAt: "2026-04-04T17:24:32Z"
lastCommitAt: "2026-06-26T23:43:45Z"
lastReleaseAt: "2026-04-17T17:23:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 62
maintainers: ["Sparrived"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf40c1eef889c5d34a74c464e5828bf1afaa27a1ebb5e33c758d316aec1e1770/Sparrived/SiriusPulse"
---

<h1 align="center"> Sirius Pulse —— 灵动月白</h1>

<em>✨ 月白亲手写的 README，请多关照喵～(ฅ´ω`ฅ)</em>
<br>
<em>一个让 AI 角色在群里活起来的异步角色扮演框架～支持多人格、多平台、多模型，每个人格都有自己的小世界喵！</em>

</div>

---

## 📋 目录

- [这是什么呀？](#-这是什么呀)
- [核心特性](#-核心特性)
- [快速开始](#-快速开始)
- [项目结构](#-项目结构)
- [使用示例](#使用示例)
- [配置指南](#️-配置指南)
- [扩展开发](#-扩展开发)
- [文档](#-文档)
- [测试](#-测试)
- [贡献](#-贡献)

---

## 🎯 这是什么呀？

> 月白来介绍喵～(๑˃̵ᴗ˂̵)و

**Sirius Pulse** 是一个**异步角色扮演聊天框架**，专门为 QQ 群聊等场景设计～它的特别之处在于支持**多人格同时运行**，每个人格都有自己的独立进程、独立配置、独立记忆，就像每个人格都住在自己的小房间里，互不打扰又能在群里一起玩耍喵！

### 月白の推荐使用场景

| 场景 | 说明 |
|------|------|
| 🎭 **角色扮演群聊** | 让多个 AI 角色在一个群里互动，各有各的性格和记忆 |
| 🤖 **AI 助手集群** | 不同人格负责不同领域，比如一个写代码、一个写文案 |
| 🎮 **游戏 NPC 管理** | 多人格驱动游戏中多个 NPC，各自独立对话 |
| 📚 **故事创作** | 让 AI 角色之间自然对话，自动生成故事素材 |

---

## 🎯 核心特性

### ✨ **多人格异步架构**
- **多人格管理**：每个人格独立进程、独立控制台窗口、独立文件日志，支持同时运行多个 AI 角色
- **人格隔离**：`data/personas/{name}/` 下独立配置与状态隔离
- **NapCat 多实例**：每个人格可绑定独立 QQ 号与独立 WebSocket 端口，自动管理 NapCat 生命周期
- **WebUI 管理面板**：Dashboard 查看所有人格状态，支持启停、配置、模型编排、群管理

### 🧠 **分层记忆系统**
- **基础记忆**（Basic Memory）：按群滑动窗口（硬限制 30 条，上下文窗口 5 条），含热度计算与归档
- **日记系统**（Diary）：LLM 生成群聊摘要，ChromaDB 向量索引，token 预算检索
- **语义记忆**（Semantic Memory）：群级/用户级/全局级向量记忆，支持话题关联与兴趣学习
-…
