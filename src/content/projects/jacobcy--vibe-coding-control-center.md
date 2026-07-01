---
repo: "jacobcy/vibe-coding-control-center"
name: "vibe-coding-control-center"
description: "一个专注于开发者生产力的 AI 开发工具管理套件。提供统一的界面来初始化项目、管理 AI 工具(Claude Code、OpenCode 等)以及配置开发环境。"
url: "https://github.com/jacobcy/vibe-coding-control-center"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 6
forks: 0
openIssues: 35
closedIssues: 1627
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-02-05T13:40:24Z"
lastCommitAt: "2026-07-01T07:06:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 54
maintainers: ["jacobcy"]
openGraphImageUrl: "https://opengraph.githubassets.com/42a0f363412e2695cef167283aa14ae19a7e96925f794b3bd61edd73bf369577/jacobcy/vibe-coding-control-center"
---

# Vibe Center 3.0

Vibe Center 3.0 的主系统是 V3 Python 运行时。V2 Shell 仍保留环境工具和兼容能力，但不再是默认的语义中心。项目目标不是替代 `git` 和 `gh`，而是把本地 execution scene、agent handoff、runtime observation 和 skill governance 收敛到一套清晰边界里。

## 当前语义

- `git` 负责 branch 生命周期
- `gh` 负责 issue / PR 的常规远端操作
- `vibe3` 负责本地 flow scene、issue 绑定、handoff、runtime observation
- `skills/` 与 workflows 负责编排，不负责重新发明共享状态模型
- Python 模块只提供现场创建、清理、复用、观察与必需能力，不默认推进业务 workflow

一句话：模块给能力，agent / skill 做判断。

## 双栈结构

### V2 Shell

V2 保留环境工具和基础 shell 能力：

- `vibe tool`
- `vibe check`
- `vibe keys`
- `wtnew` 等 worktree / alias 辅助能力

### V3 Python

V3 是当前的本地运行时与协作主系统，核心能力包括：

- `vibe3 task status` — 全局任务面板与 Flow 状态总览 (推荐，包含 assignee issue 总览)
- `vibe3 status` — [Compatibility] 全局状态兼容入口
- `vibe3 flow show` / `rebuild` / `bind` — Flow 现场管理
- `vibe3 task show` / `intake` / `resume` — 任务生命周期管理
- `vibe3 handoff show` / `status` / `append` — Agent 协作上下文
- `vibe3 plan` / `run` / `review` — Agent 执行入口
- `vibe3 serve` / `scan` / `check` — 基础设施与治理服务
- `vibe3 inspect` / `ask` — 项目分析与知识检索

## 快速开始

```bash
# 1. 查看 V3 运行时与任务状态 (这是 Agent 的首选入口)
vibe3 task status      # 全局任务面板（推荐，覆盖 Tier 3/2 概览）
vibe3 inspect base      # 查看分支改动与 Kernel review 等级 (Tier 1)
vibe3…
