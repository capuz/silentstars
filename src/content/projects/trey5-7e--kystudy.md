---
repo: "Trey5-7e/KyStudy"
name: "KyStudy"
description: "考研学习工具，KyStudy其目标不是记录更多数据，而是减少备考中重复、麻烦、容易拖延的准备工作：  把长期目标和节奏整理成可确认的学习计划； 从多本习题册和指定范围中挑出今天该复习的题； 保存题目区域、作答记录和错题反馈，避免反复翻找 PDF； 在需要时使用本地 OCR 或用户主动触发的 AI 辅助整理资料。"
readmeQualityOk: true
url: "https://github.com/Trey5-7e/KyStudy"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [47, 43]
topics: ["tools", "study-tools"]
stars: 16
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-07-18T13:09:02Z"
lastCommitAt: "2026-09-17T08:49:57Z"
lastReleaseAt: "2026-09-16T11:27:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 77
undervaluedScore: 47
maintainers: ["Trey5-7e"]
openGraphImageUrl: "https://opengraph.githubassets.com/8732355523cb131e8c7d6d167ca8a3a37fdd675da205bb01a2d2a241d22e7eb4/Trey5-7e/KyStudy"
---

<h1>KyStudy</h1>
  <p>面向中国考研学生的本地优先学习规划、习题管理与错题复习桌面应用。</p>
  <p>
    ·
    ·
  </p>
</div>

  </a>
  </a>
</p>

> 当前版本支持 Windows 10/11 x64。v0.1.5 聚焦界面体验、错题本、连续复习、做题与题目历史；通用 Agent Harness 不在本次发布范围。OCR 组件继续复用独立的 `ocr-v0.1.4` Release。

## 目录

- [项目简介](#项目简介)
- [核心能力](#核心能力)
- [界面概览](#界面概览)
- [技术栈](#技术栈)
- [获取与安装](#获取与安装)
- [从源码运行](#从源码运行)
- [使用流程](#使用流程)
- [数据、隐私与版权](#数据隐私与版权)
- [开发文档](#开发文档)
- [后续开发方向](#后续开发方向)
- [贡献指南](#贡献指南)
- [许可证](#许可证)

## 项目简介

KyStudy 的目标不是记录更多数据，而是减少备考中重复、麻烦、容易拖延的准备工作：

- 把长期目标和节奏整理成可确认的学习计划；
- 从多本习题册和指定范围中挑出今天该复习的题；
- 保存题目区域、作答记录和错题反馈，避免反复翻找 PDF；
- 在需要时使用本地 OCR 或用户主动触发的 AI 辅助整理资料。

产品原则是：**输入目标和节奏，系统自动安排；打开软件，只处理今天。**

### 适合哪些人

- 同时使用多本习题册、讲义和 PDF 资料，需要统一管理题目范围；
- 想把长期目标拆成今天能执行的学习任务，而不是只记录待办事项；
- 需要持续复习错题，并希望知道每道题为什么再次出现；
- 重视本地存储和数据控制，不希望学习资料默认上传到云端。

### 你可以用 KyStudy 做什么

从资料导入开始，KyStudy 将“资料 → 题库 → 组卷 → 今日任务 → 复习反馈”串成一条本地学习闭环。你可以先只使用 PDF 阅读和题目管理，也可以逐步启用计划、OCR、思维导图和 AI 辅助，不需要一次配置完所有功能。

## 核心能力

| 模块         | 能力                                                 |
| ------------ | ---------------------------------------------------- |
| 今日与计划   | 今日任务、周期计划、阶段展开、进度与逾期处理         |
| 习题册与组卷 | 导入 PDF、题目区域、题型/章节/习题册范围、拼卷与恢复 |
| 错题复习     |…
