---
repo: "timzaak/web-dev-skills"
name: "web-dev-skills"
description: "A Claude Code plugin for Rust + React projects. It turns PRD -> Design -> Task -> Development -> Acceptance -> Demo into a reusable workflow"
readmeQualityOk: true
url: "https://github.com/timzaak/web-dev-skills"
language: "Python"
languages: ["Python"]
languagePcts: [76]
topics: ["ai-coding", "skills"]
stars: 61
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-17T07:12:19Z"
lastCommitAt: "2026-08-01T06:05:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 31
maintainers: ["timzaak"]
openGraphImageUrl: "https://opengraph.githubassets.com/4eb6e5cc4bb79b0ecda418ff644a2f8604bb06e7a04fe79a615e6d9e4e267f57/timzaak/web-dev-skills"
---

# T-Tools

[English](https://github.com/timzaak/web-dev-skills/blob/HEAD/README.en.md)

面向 Rust、React、小程序与 Flutter 项目的 Claude Code plugin。它把 AI 编程拆成一套可执行、可恢复、可验收的工程工作流：

```text
Decision -> PRD / 技术预研（按主要未知项选择，可回环）-> 设计 -> 任务 -> 开发 -> 验收 -> Demo -> 发布
```

T-Tools 适合已经有产品文档、设计、任务拆解、开发、测试和 Demo 交付链路的项目。它的重点不是让模型自由发挥，而是用 skill 编排阶段、用 subagent 分工执行、用 protocol 固化共享契约，并在需要时用 check / accept 阶段收口质量。

推荐先读 [human/structure.md](https://github.com/timzaak/web-dev-skills/blob/HEAD/human/structure.md)，理解 skill、subagent、protocol 如何协同；做需求前可用 [human/speech-template.md](https://github.com/timzaak/web-dev-skills/blob/HEAD/human/speech-template.md) 先口述一遍真实意图。

## 快速上手

前置条件：

- 已按 [安装](#安装) 加载插件
- 目标项目具备 `docs/` 和 `.ai/` 运行时目录
- 已配置 [`context7`](https://github.com/upstash/context7)

最短闭环：

```bash
# 产品立项判断
/t-tools:t-decision user-management

# 技术可行性、依赖或成本会影响产品范围时，先做技术预研
/t-tools:t-tech-research user-management

# 产品边界已足以成稿时生成 .ai/prd 与 .ai/user-stories 草稿；
# 也可先生成草稿，再做技术预研，最后重跑本命令收敛草稿
/t-tools:t-prd user-management

# PRD 质量检查（可选，推荐高风险需求运行）
/t-tools:t-prd-check user-management

# 生成技术设计
/t-tools:t-design user-management

# 设计质量检查（可选，推荐复杂设计运行）
/t-tools:t-design-check user-management

# 生成 backend…
