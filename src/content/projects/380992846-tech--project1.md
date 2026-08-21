---
repo: "380992846-tech/Project1"
name: "Project1"
description: "CODE"
readmeQualityOk: true
url: "https://github.com/380992846-tech/Project1"
language: "HTML"
languages: ["HTML"]
languagePcts: [95]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-15T02:30:13Z"
lastCommitAt: "2026-08-21T03:51:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 42
maintainers: ["380992846-tech"]
openGraphImageUrl: "https://opengraph.githubassets.com/18bc53bafa7126b6ba1d9c5d0511d6d348f42417c148f9f17f0c8974d99d85e4/380992846-tech/Project1"
---

# Project1 · 个人 AI × 量化 × 创意工坊

> 一个集大模型实现、量化交易策略、物理模拟与网页应用于一体的个人学习与实验仓库。
> 作者：清华计算机系（贵系）学生 · 全国中学生物理竞赛省一

---

> **English overview** · A personal research sandbox spanning **LLM implementation**, **quantitative trading**, **interactive web games** and **knowledge notes**. The sections below are in Chinese; see the directory tree and quick-start for a fast overview.

---

##  项目简介

本仓库是作者在 **大模型（LLM）**、**量化交易（Quant）**、**Web 创意游戏** 与 **知识整理** 四个方向上的学习与实践合集：

-  **《陈深的世界》**：亲手搭建的互动游戏——36 个房间、50 部电影、塔罗占卜、彩蛋结局墙，还有 16 章剧情《陈深的故事》（V5）；

-  **大模型从零实现**：不依赖现成框架地搭建 Transformer，理解注意力机制、生成策略、RAG 与量化；
-  **量化交易策略家族**：基于聚宽（JoinQuant）平台的多版本策略迭代（V14 → V18 → V21），融合机器学习与情绪因子；
-  **创意 Web 应用**：30+ 个清华风格（黑紫玻璃）HTML 页面，覆盖课表、选课、笔记、面试题库与日常工具；
-  **系统性知识库**：大模型、计算机科学与 LLM 技术栈的深度整理文档。

---

##  目录结构

```
Project1/
├──  小世界/（4 个）★ 最推荐
│   ├── 我们在一起V6-房间清单.html   # 《陈深的世界》互动游戏（36房间/50电影/塔罗/结局墙）
│   ├── 陈深的故事V5.html           # 互动剧情：大模型变成人的16章故事（V5）
│   ├── 陈深的故事V2.html           # 剧情游戏早期版本
│   └── 我们在一起V4.html           # 初代卡片版小世界
├──  大模型/（13 个）
│   ├── complete_ai_toolkit.py           # 全功能 AI 工具包（见下方详解）
│   ├── mini_transformer.py              # 从零实现 MiniTransformer
│   ├── voice_assistant.py…
