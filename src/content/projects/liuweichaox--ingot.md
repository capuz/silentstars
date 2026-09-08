---
repo: "liuweichaox/Ingot"
name: "Ingot"
description: "开源工艺追因与优化系统：把真实运行变成可追溯证据，帮助工程师找差异、验原因、定下一份配方。"
readmeQualityOk: true
url: "https://github.com/liuweichaox/Ingot"
homepage: "https://ingotstack.com"
language: "C#"
languages: ["C#"]
languagePcts: [77]
topics: ["bayesian-optimization", "botorch", "design-of-experiments", "dotnet", "experiment-tracking", "industrial-ai", "industrial-iot", "manufacturing", "process-engineering", "process-optimization"]
stars: 51
forks: 27
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-09-25T03:29:17Z"
lastCommitAt: "2026-09-08T08:17:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 61
maintainers: ["liuweichaox"]
openGraphImageUrl: "https://opengraph.githubassets.com/d316c4170c88d1f0b9570f91e2d74969d560f8340c658e10cc34f3d8c0d2b5a5/liuweichaox/Ingot"
discussionCount: 0
---

</a>

  <p><strong>开源工艺追因与优化系统</strong></p>
  <p>从运行证据，到下一份配方。</p>

  [官网](https://ingotstack.com) · [在线文档](https://docs.ingotstack.com/zh) · [报告问题](https://github.com/liuweichaox/Ingot/issues) · [参与讨论](https://github.com/liuweichaox/Ingot/discussions)

  简体中文 · [English](https://github.com/liuweichaox/Ingot/blob/HEAD/README.en.md)
</div>

</a>

<details>
  <summary>目录</summary>

- [项目概览](#项目概览)
- [能力范围](#能力范围)
- [领域流程](#领域流程)
- [当前状态](#当前状态)
- [系统边界](#系统边界)
- [运行时架构](#运行时架构)
- [仓库结构](#仓库结构)
- [完整部署](#完整部署)
- [开发验证](#开发验证)
- [文档](#文档)
- [路线图](#路线图)
- [参与贡献](#参与贡献)
- [许可证](#许可证)

</details>

## 项目概览

Ingot 是开源工艺追因与优化系统。系统统一关联设备记录、生产运行、过程轨迹、检验结果和研发上下文，形成可比较、可追溯的运行证据。

围绕真实配方运行，Ingot 提供三类工程能力：

- **运行还原**：确认实际条件、过程变化、材料、工装和质量结果；
- **优化观察**：自动关联实际配方、过程上下文和质量结果，排除不可信运行；
- **下一份配方**：在目标、安全边界和历史覆盖范围内提出候选工艺设置及不确定性。

项目的固定设计目标是：

> **把每次真实配方运行变成优化证据，在安全边界和历史覆盖范围内持续推荐下一份配方。**

Ingot 适用于配方成本较高、样本有限、质量目标和安全边界明确的工艺优化。标准工作流程是“真实配方运行 → 自动形成优化观察 → 推荐下一份配方 → 工程师在正常生产流程中确认 → 新运行继续回流”。系统只保留这一条真实运行闭环，不另建计划、审批或结果状态机。工程师负责确定目标和边界、审核建议，并判断配方能否用于生产。

分析方法根据问题类型、数据覆盖和约束条件选择，可采用 DOE、响应面或受约束贝叶斯优化。每项建议均保留输入数据、适用条件、计算理由、不确定性和审核状态。

## 能力范围

Ingot 不替换现有生产执行、实时控制、质量合规或检测数据管理系统。当前领域模型覆盖以下工程任务：

| 典型任务 | 系统输出 |…
