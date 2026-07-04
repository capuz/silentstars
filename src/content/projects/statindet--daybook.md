---
repo: "StatIndet/daybook"
name: "daybook"
description: "A minimalist, zero-framework static blog generator written in pure Go. No Hugo, no Astro, no Hexo—just raw Go and native Obsidian compatibility. (一个使用纯 Go 编写的极简、零框架静态博客生成器。没有 Hugo，没有 Astro，没有 Hexo——只有原生 Go 和完美的 Obsidian 兼容性。)"
url: "https://github.com/StatIndet/daybook"
homepage: "https://daybook.page/"
language: "TypeScript"
languages: ["TypeScript", "Go", "CSS"]
languagePcts: [35, 33, 23]
topics: ["blog", "go", "static-site", "typescript", "serveless", "zero-framework"]
stars: 5
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-14T12:21:39Z"
lastCommitAt: "2026-07-04T06:12:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 53
maintainers: ["StatIndet"]
openGraphImageUrl: "https://opengraph.githubassets.com/02480b9f474bb29e44bc946d1a1b08cb203418a4622dec507ff8f446da5f4761/StatIndet/daybook"
---

# Daybook

Daybook 是一个由 Go 和 TypeScript 编写的静态博客生成器。它的目标是将本地的 Markdown 笔记转化为静态网站，无需部署后端数据库或动态应用服务器。

在服务端，Go 负责页面渲染和图谱关系计算；在前端，TypeScript 提供原生的页面交互。适用于搭建个人博客或基于 Obsidian 写作流的知识库。

---

## 核心架构与设计特点

* **零前端框架依赖**：前端代码基于原生 TypeScript 编写，未引入 React 或 Vue 等大型框架。
* **全局无刷新路由**：实现类似单页应用（SPA）的路由接管，页面跳转全程无刷新，结合 View Transitions 提供平滑的视觉过渡。
* **原生双语支持**：内置完善的 i18n 多语言机制，支持中英文平滑切换，并包含完备的翻译回退与列表过滤策略。
* **兼容 Obsidian**：1:1 实现了 Obsidian 的 Markdown 扩展特性（包括双向链接、嵌入引用、Callout 提示块），并原样还原了底层关系图谱（Graph View）。
* **移动端适配**：针对手机设备进行专门的 UI 布局与动画交互适配。

---

## 截图预览

### 桌面端界面

| 首页 (Home) | 笔记列表 (Notes) |
| :---: | :---: |
|  |  |
| **归档视图 (Archive)** | **关系图谱 (Graph)** |
|  |  |
| **KaTeX 公式渲染** | **第三方媒体嵌入** |
|  |  |
| **偏好设置 (Settings)** | **关于页与设置面板 (About & Settings)** |
|  |  |

### 移动端响应式布局

| 顶部进度条 | 文章阅读 | 侧边栏抽屉 |
| :---: | :---: | :---: |
|  |  |  |

---

## 功能特性

* **基础页面**:
  * **首页 Hero**：首屏展示。
  * **文章列表 (`/notes/`)**：按时间倒序排列。
  * **文章详情页**：支持自动生成的侧边大纲目录 (TOC)。
  * **归档 (`/archive/`)**：按年份整理的笔记存档。
  * **关于 (`/about/`)**：包含黄金分割螺旋 (Golden Ratio Spiral) 背景。
* **交互与视觉**:
  * **页面过渡动画 (View Transitions)**：支持页面跳转时的共享元素动画。
  * **明暗主题 (Dark Mode)**：支持操作系统自适应和手动切换暗黑模式。
  * **关系图谱…
