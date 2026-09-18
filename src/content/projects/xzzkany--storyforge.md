---
repo: "XZZKANY/StoryForge"
name: "StoryForge"
description: "面向长篇小说创作的桌面 AI 写作 IDE——对话式 Agent、多视角审稿、定向修订、diff 确认写回、canon 防漂移；BookRun 生成流水线降级为后台工具。"
readmeQualityOk: true
url: "https://github.com/XZZKANY/StoryForge"
homepage: "https://github.com/XZZKANY/StoryForge#readme"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [64, 30]
topics: ["ai-writing", "fastapi", "langgraph", "novel-writing", "rag", "workflow", "storyforge", "book-generation", "llm-evaluation", "desktop-app"]
stars: 18
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-15T17:48:15Z"
lastCommitAt: "2026-09-18T08:17:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 48
maintainers: ["XZZKANY"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d0c96ea5f721c1bbf6a605c8f691c81929523206a6fbb70a9b133db6a89aefb/XZZKANY/StoryForge"
---

# StoryForge

StoryForge 是一个面向长篇小说创作的 Desktop IDE-first AI 写作工作台。它不是 Web 控制台，也不是“一键出书”的自动生成器，而是把可验证、可追溯的工程化工作流带进小说创作——打开文件、与对话式 Agent 讨论、多视角审稿、定向修订、diff 确认、作者确认写回和版本记录。

交互中枢是一个**对话式 Agent**：作者用自然语言提要求，Agent 自主调用只读工具（列目录 / 读文件 / 跨文件检索）、一致性与 canon 防漂移观察、文笔静态检查等，读到证据后再作答或生成补丁。写回红线：后端绝不直接写盘，所有修订都是 proposed patch，落盘一律经编辑器守卫（写前快照 → 原子写 → 版本记录）。要不要你逐次点「接受」，由你给**这个项目**选的权限档位决定——只读 / 询问要点，自动 / 完全放行免点击（仍逐次留快照，可一键撤销）。作者还可以在 `.storyforge/agent-instructions.md` 写自定义偏好（语气 / 审稿口径 / 风格禁忌），写盘即生效、不改代码就能调教 Agent。

StoryForge 仍保留可审计的长篇生成流水线（设定、章节目标、检索证据、生成、审稿、修复、记忆回写、制品导出），但它已降级为 Agent 可调用的 tool / 后台重型引擎，不是主产品入口；批量自动整书不再是主线。

> 当前状态（2026-07）：编辑器「安全可日更」阶段（Phase A）已封板，桌面端两轮真机验收通过、锁版 `v0.1.2`；下一步是在编辑器上接续作者创作，在真实写作里 dogfood、由摩擦日志驱动打磨。愿景是一条飞轮：写 → 发 → 收集读者信号 → 喂回 → 进化编辑器 → 写出更有风格的作品。
>
> 质量边界：真实 LLM 1/3/10 章 smoke 有脱敏证据（10 章已人工通读），一次 30 章真实长程跑通链路并导出制品、但人工通读退回重跑；因此**尚不能宣称稳定生产级长篇质量**。真实 3-5 万字长程重跑已换锚为后台轨，待作者连载稳定后重评。
>
> 产品重心：`apps/desktop` 是唯一主体验；`apps/web` 已退场；BookRun 是 Agent tool / 后台重型引擎，不是主产品控制台。最新阶段事实见 [`docs/internal/current-phase.md`](https://github.com/XZZKANY/StoryForge/blob/HEAD/docs/internal/current-phase.md)，工程约定见 [`CLAUDE.md`](https://github.com/XZZKANY/StoryForge/blob/HEAD/CLAUDE.md)。

## 目录…
