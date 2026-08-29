---
repo: "114514ggb/ATRI-bot"
name: "ATRI-bot"
description: "ATRI-bot was originally created by a novice developer as a private-use QQ robot focused on group chat functionality.ATRI-bot 最初是一个萌新写出来私用的专注群聊的 QQ 机器人"
readmeQualityOk: true
url: "https://github.com/114514ggb/ATRI-bot"
homepage: "https://xn--jlq249bliy.top/"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["ai", "llama", "llm", "python", "qq", "qqbot"]
stars: 62
forks: 7
openIssues: 2
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-01-10T18:01:01Z"
lastCommitAt: "2026-08-29T10:20:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 50
maintainers: ["114514ggb", "shuixuanle"]
openGraphImageUrl: "https://opengraph.githubassets.com/d718c2da9d46406ce05ca58b597d86b01d3983e9a69826ff930fa80c9b718984/114514ggb/ATRI-bot"
discussionCount: 1
---

</a>
  </a>
</p>

# ATRI-bot

>_時よ止まれ、おまえは美しい_
>
> — *𝓐𝓣𝓡𝓘 -𝓜𝔂 𝓓𝓮𝓪𝓻 𝓜𝓸𝓶𝓮𝓷𝓽𝓼-*
>
项目Logo由[吖密](https://space.bilibili.com/1196260828)绘制  

</div>

---

<details>
<summary>📑 目录（点击展开）</summary>

- [📖 前言](#-前言)
- [✨ 项目核心功能](#-项目核心功能)
  - [🧠 深度 LLM 聊天集成](#-深度-llm-聊天集成)
  - [💻 类 Unix 命令系统](#-类-unix-命令系统)
  - [🛠️ 其他实用功能](#-其他实用功能)
- [🚀 快速开始 (How to Run)](#-快速开始-how-to-run)
  - [1. 前端连接 (NapCat)](#1-前端连接-napcat)
  - [2. 数据库配置 (PostgreSQL)](#2-数据库配置-postgresql)
  - [3. 模型与环境配置](#3-模型与环境配置)
  - [4. 启动项目](#4-启动项目)
  - [5. 使用 Docker 启动](#5-使用-docker-启动)
- [📂 项目结构](#-项目结构)
- [🏗️ 架构设计](#-架构设计)
  - [整体消息流](#整体消息流)
  - [🧠 LLM 聊天流程设计](#-llm-聊天流程设计)
  - [💾 记忆系统设计](#-记忆系统设计)
- [🤝 参与贡献](#-参与贡献)
- [📄 开源协议](#-开源协议)

</details>

---

## 📖 前言

来自萌新到处学习(抄袭，不对是集百家之长✨)做出来私用的神秘项目
主要是**按照自己的需求**编写一个专到狭窄的学习性质的项目(专注于提供一个深度定制化的群聊机器人体验),发出来是用来交流学习的
你可以在里面了解到以下这些技术实践：

- **完整的 LLM 聊天全链路**：从提示词构建、Function Calling、MCP 工具调用，到结构化 JSON 决策解析
- **两级记忆系统**：短期滑动上下文 + LLM 压缩摘要，以及基于 pgvector 的长期向量记忆
- **混合检索（Hybrid RAG）**：向量检索 + 全文检索（pgroonga）双路召回，RRF 融合 + 时间衰减评分
- **依赖注入架构**：基于单例 `DIContainer` 的服务解耦与管理，全异步设计

项目结构清晰，核心链路注释详细，适合想了解「如何从零搭建一个 LLM Bot」的同学参考

- [ATRI-bot官网:亚托莉.top](https://亚托莉.top/)…
