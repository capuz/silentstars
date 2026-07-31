---
repo: "wise-claw/wise-tui"
name: "wise-tui"
description: "AI cockpit, developing a new paradigm"
readmeQualityOk: true
url: "https://github.com/wise-claw/wise-tui"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [73]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 6
createdAt: "2026-05-11T05:56:12Z"
lastCommitAt: "2026-07-31T06:30:30Z"
lastReleaseAt: "2026-07-10T13:23:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 50
maintainers: ["jiaolong1021"]
openGraphImageUrl: "https://opengraph.githubassets.com/8811575c2a399c838284c234a1cc92d8ec825138f0e5a96c51ebec96c2a52f5c/wise-claw/wise-tui"
---

</p>

<h1 align="center">Wise-Tui</h1>

  <strong>以 Claude Code 为底座的 AI 研发新范式</strong>
</p>

</p>

---

Wise 是一款基于 **Tauri 2** 的桌面 AI 研发工作台。它将 **Claude Code** 会话、本地 Git 仓库、可视化工作流、PRD 需求拆分、多 Agent 并发与 Mission 任务编排整合在同一窗口中，让需求、任务与代码实现全程可溯源、可编排、可自动驾驶。

</p>

## 项目特色

| 特色 | 说明 |
|------|------|
| **AI 可视化窗口** | 桌面端 Claude Code 会话、Composer、终端与 Git 面板同屏协作 |
| **Wise Workflow 研发流** | 内置 Trellis 规范与 Mission 任务链，覆盖需求 → 拆分 → 实现 → 验收 |
| **多 Agent 并发** | 团队 Agent、子代理与 PRD 拆分 fan-out 并行派发 |
| **工作流编排** | CC Workflow Studio 可视化流程图，支持模板与阶段验收 |
| **全流程溯源** | SQLite 持久化会话、任务快照、运行记录与通知收件箱 |
| **自动驾驶** | 工作区级编排 + 执行环境配置，接近全自动的研发闭环 |

## 核心功能

- **仓库与工作区** — 支持单仓快速开工，或多仓工作区 + Wise 规范统筹研发
- **Claude Code 会话** — 创建、恢复、运行、取消会话；MCP、Hooks、Skills、Subagents 一览
- **PRD 需求拆分** — 解析 PRD/源材料，生成可执行任务树并落盘到 `.trellis/tasks/`
- **终端与 Git** — 仓库内终端、Diff、历史、分支、Worktree
- **执行环境与模型** — 配置 Claude 模型、API 与本地/远程执行环境
- **通知与监控** — 后台调用详情、团队进度与消息收件箱
- **多窗口桌面** — 主窗口 + Mascot 浮窗，共享 `~/.wise` 应用数据

## 快速开始

### 环境要求

- [Bun](https://bun.sh)（与 `package.json` 中 `packageManager` 一致，当前为 `bun@1.3.5`）
- Rust stable（Tauri 2 构建与打包）
- 各平台 Tauri 2 前置依赖（见 [Tauri 文档](https://v2.tauri.app/start/prerequisites/)）

### 安装与运行

```bash
#…
