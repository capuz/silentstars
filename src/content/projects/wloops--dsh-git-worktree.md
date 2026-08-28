---
repo: "wloops/dsh-git-worktree"
name: "dsh-git-worktree"
description: "Git worktree Session Targets for DeepSeek Harness with isolated task sessions, reversible Local Preview, human-confirmed delivery, recovery, and same-session iteration."
readmeQualityOk: true
url: "https://github.com/wloops/dsh-git-worktree"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["deepseek-harness", "dsh-plugin", "git-worktree"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-15T07:14:05Z"
lastCommitAt: "2026-08-28T14:03:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 39
maintainers: ["wloops"]
openGraphImageUrl: "https://opengraph.githubassets.com/6894567a2501fa660684d90358bab7a6c93da655fbe90871166417d5eeb628f9/wloops/dsh-git-worktree"
---

# dsh-git-worktree

**让 Agent 在真实 Git Worktree 中执行任务，先预览修改，再由用户明确确认是否保存。**

`dsh-git-worktree` 是 [DeepSeek Harness](https://github.com/deepseek-ai/DeepSeek-Harness) 的实验性 Session Target 插件。每个编码任务使用独立 checkout、Workspace 和 Session，避免 Agent 施工状态直接混入用户控制的 Local checkout。

这是独立维护的社区插件，不是 DeepSeek 官方项目，也不代表官方背书、合作或授权。

[English](https://github.com/wloops/dsh-git-worktree/blob/HEAD/README.en.md) · [完整使用指南](https://github.com/wloops/dsh-git-worktree/blob/HEAD/docs/USAGE.md) · [架构说明](https://github.com/wloops/dsh-git-worktree/blob/HEAD/docs/WORKTREE-CONSOLE-ARCHITECTURE.md)

## 为什么使用它？

普通 Agent Session 直接修改 Local 时，任务增量容易与已有 staged、unstaged、untracked 内容混在一起；多个任务也可能争用同一个 checkout。该插件把“施工”和“交付”拆开：

- Agent 只在隔离 Worktree 中修改和测试；
- 用户先查看可撤回的 Local Preview；
- Host 只保存本轮任务增量，不吞入无关 Local 修改；
- 无法证明安全时停止写入并保留恢复证据。

## 核心能力

- **真实隔离**：每个任务拥有独立 Git Worktree、Workspace 和唯一 owner Session。
- **项目聚合侧边栏**：Managed owner 以 Branch Icon 和状态 Badge 直接归入原 Local 项目；普通 Local Session 保持官方行为。
- **人工验收**：Ready 后由用户选择“预览修改”“确认并保存”或其他操作。
- **可撤回 Preview**：预览写入 Local 但不立即创建 Commit，可安全撤回。
- **单任务保存**：最终只为本轮累计增量创建一个 Commit。
- **保存阶段并继续**：Checkpoint 只存在于 managed Worktree，最终仍合并为一次交付。
- **安全恢复**：处理 Local…
