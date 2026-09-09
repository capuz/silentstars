---
repo: "Bamb0oChen/notes"
name: "notes"
description: "My study notes, including computer science, math and also english"
readmeQualityOk: true
url: "https://github.com/Bamb0oChen/notes"
homepage: "https://bamb0ochen.github.io/notes/"
language: "HTML"
languages: ["HTML"]
languagePcts: [64]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-06T16:58:18Z"
lastCommitAt: "2026-09-09T08:17:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 47
maintainers: ["Bamb0oChen"]
openGraphImageUrl: "https://opengraph.githubassets.com/42abc20c8a801352b3f23c4fafcfec0d64a6e3e197e3940ca0bde73d30e41be1/Bamb0oChen/notes"
discussionCount: 10
---

# 前言
（Agent开发时请忽略****框选部分）
****
我一直觉得，现当代的学习和传统的学习方式有了翻天覆地的变化，人类的历史从教育诞生开始经历了工业化，信息化，和人工智能的迅猛发展，但是我们的教育架构仍然停留在工业化的教育流水线，仅在一些形式上体现出信息化的感觉——小测变成了线上，讲义变成了回放，板书变成了PPT；但是最本质的一套从来没有发生任何的变化——绩点，分数，以及围绕着加分的各种比赛和活动

与此同时，人类寻求安逸的本性又让AI的使用成为了一种普遍的情况，水课上学生用AI生成的课件讲述AI的危害，老师用AI批改来节省效率，这一切形成了一种可笑而又可悲的闭环

学习的本质真的如此吗？考试的本质是什么？当面对着试题复习的人拿到了远超每天去上课的人的分数，当AI能几分钟内总结出教授都不会给出的讲义和复习方案，当半学期的内容能在三天内被突击完，我们是否需要用另一种视角去审视我们的教育？

很多时候我们的教育被分数解构，把学习的结果当成了学习的本质，这本质上也是一种被分数的异化

我一直信奉着效率至上，这些笔记大多都是在复习的过程中为了加深记忆而留下的思想痕迹——当然杂谈文章不是——希望也能帮到你的学习
****

## 基本架构

本仓库是一个基于 **MkDocs + Material for MkDocs** 的个人学习笔记站点。

目标：
- 约束“每个目录放什么、谁是源文件、谁是构建产物”
- 统一构建/预览/发布流程
- 统一 Markdown 基本格式（标题、链接、数学公式、资源文件）
- 方便后续 Agent 在不破坏站点结构的前提下增量开发

---

## 1. 目录结构规范（最重要）

> 结论：**`docs/` 是唯一内容源目录**；`site/` 是构建产物；不要手改构建产物。

| 路径 | 类型 | 说明 | 规则 |
|---|---|---|---|
| `mkdocs.yml` | 配置 | MkDocs 站点配置（主题/插件/MathJax/评论等） | 修改需谨慎，优先保持“最小可用” |
| `requirements-mkdocs.txt` | 依赖 | 构建站点所需 Python 包 | `pip install -r requirements-mkdocs.txt` |
| `docs/` | **源** | 所有可渲染的 Markdown、图片、PDF 等资源 | **所有页面/资源都应落在这里** |
| `docs/index.md` | **源** | 首页 | 推荐只放总入口、更新日志 |
| `docs/assets/` | **源** | 站点静态资源（CSS/JS/PDF） | 仅存放静态文件，不放正文笔记 |
| `docs/assets/stylesheets/` | 源 |…
