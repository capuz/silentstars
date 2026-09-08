---
repo: "HHU3637kr/skills"
name: "skills"
description: "自用的一些skills"
readmeQualityOk: true
url: "https://github.com/HHU3637kr/skills"
language: "HTML"
languages: ["HTML"]
languagePcts: [81]
stars: 145
forks: 20
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-08T02:16:56Z"
lastCommitAt: "2026-09-08T08:17:44Z"
lastReleaseAt: "2026-04-30T01:54:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 33
maintainers: ["HHU3637kr"]
openGraphImageUrl: "https://opengraph.githubassets.com/a49c63d2e469cf73f75a2e1afbf35cef472f44818fdf7a3330148c9d2f09f267/HHU3637kr/skills"
---

# R&K Flow - Spec 驱动式开发 Skills 体系

## 概述

**R&K Flow** 是一套完整的 Spec 驱动式开发 Skills 体系，报告统一用 **HTML** 承载（固定样式 + 可追溯修订），用 **Agent Teams 多角色协作架构** 驱动开发流程。当前版本将开发拆分为 5 个阶段，由 7 个项目级专职角色分工协作，并通过每个 Spec 的 `lead/team-context.md` 保留运行账本、Git/PR 元数据、跨角色交接和问题闭环。

如果你对该工作流感兴趣,或者有疑问,欢迎加入我们的社群讨论

## 安装

直接拉取本仓库到项目的 `.agents/skills/`，再把运行时目录软链接过去。**不走 npm 分发**，仓库即唯一分发源。

```bash
# 1. 拉取 Skills 到 .agents/skills/
git clone https://github.com/HHU3637kr/skills.git .agents/skills

# 2. 运行时目录软链接到 .agents/skills/（按需只建你在用的那一个）
ln -s ../.agents/skills .claude/skills
ln -s ../.agents/skills .codex/skills
ln -s ../.agents/skills .omp/skills
```

Windows（PowerShell，需管理员或开启开发者模式）：

```powershell
git clone https://github.com/HHU3637kr/skills.git .agents\skills
New-Item -ItemType SymbolicLink -Path .claude\skills -Target ..\.agents\skills
```

后续更新直接在 `.agents/skills/` 里 `git pull`，软链接的运行时目录自动同步，无需重装：

```bash
cd .agents/skills && git pull
```

> [!tip] 为什么用软链接
> 单一副本、单一版本源。`.claude` / `.codex` / `.omp` 三套运行时共享同一份 Skills，`git pull` 一次全部生效，不会出现多份副本版本漂移。

然后在项目的 `AGENTS.md` 中添加入口导入。`AGENTS.md` 只作为项目身份和路由清单，详细规则、项目偏好和前端风格等长期约束放在 `.agents/rules/`：

```
@import .agents/rules/
@import .agents/skills/
```

## 核心理念

>…
