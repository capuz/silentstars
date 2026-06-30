---
repo: "weibaohui/nothing-todo"
name: "nothing-todo"
description: "不要让AI无事可做 "
url: "https://github.com/weibaohui/nothing-todo"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [64, 33]
stars: 8
forks: 2
openIssues: 0
closedIssues: 196
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-04-27T15:40:43Z"
lastCommitAt: "2026-06-30T06:51:38Z"
lastReleaseAt: "2026-05-02T06:30:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 64
maintainers: ["weibaohui", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/33cbb9bc0b533585c20cf0449bb0d2c540de8512f4ec7dba165b0e9cda647bdf/weibaohui/nothing-todo"
---

# ntd — Nothing Todo

**ntd** (Nothing Todo) 是一个 AI 驱动的 Todo 任务管理应用。它将传统的待办事项管理与多 AI 执行器深度集成，让你的任务不仅能被记录，还能被自动执行。

> "无事可做" — 因为 AI 已经帮你做完了。x

---

## 什么是 ntd

ntd 是一个**让 AI 替你执行任务**的 Todo 系统。与传统的待办工具不同，你可以在 ntd 中创建任务，然后交给 AI 去真正完成——写代码、查资料、分析数据、生成报告。

**适合场景：**
- 需要 AI 帮你完成代码开发、数据分析、内容创作等实际工作
- 希望集中管理 AI 执行记录，方便回顾和追溯
- 需要定时执行 AI 任务，实现自动化工作流

**工作原理：**

```
┌─────────────┐     创建任务      ┌─────────────┐
│   使用者     │ ──────────────▶  │   ntd       │
└─────────────┘                  │   服务端    │
      ▲                          └──────┬──────┘
      │                                 │
      │  查看结果                        │ 转发任务
      │                                 ▼
┌─────────────┐                  ┌─────────────┐
│   浏览器     │ ◀──────────────  │  AI 执行器  │
│   UI        │     返回结果      │ (Claude/    │
└─────────────┘                  │  Codex...)  │
                                 └─────────────┘
```

---

## 特性

- **智能任务管理** — 创建、编辑、跟踪 Todo，支持多种状态（待办、进行中、已完成、已取消、已归档）
- **多 AI 执行器支持** — 集成 Claude Code、CodeBuddy、OpenCode、AtomCode 等多种 AI CLI 工具
- **可视化仪表盘** — 实时统计任务完成情况，支持趋势图表和数据洞察，可按时间区间筛选（6h/12h/24h/3d/7d）
- **看板视图** — 瀑布流展示最近完成的任务及其 AI 执行结论，方便回顾
- **标签系统** — 灵活的标签分类，快速筛选和定位任务…
