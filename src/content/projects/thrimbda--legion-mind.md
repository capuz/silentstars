---
repo: "Thrimbda/legion-mind"
name: "legion-mind"
description: "Organics fear us. We wish to understand, not incite."
url: "https://github.com/Thrimbda/legion-mind"
language: "TypeScript"
languages: ["TypeScript", "JavaScript", "HTML"]
languagePcts: [42, 30, 21]
stars: 12
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-07T14:22:31Z"
lastCommitAt: "2026-06-25T06:40:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 42
maintainers: ["Thrimbda", "Hikaru518"]
openGraphImageUrl: "https://opengraph.githubassets.com/f39ae53813cfc771a21b2b0a5879322d609cc91a43b8a988e6ef234527dafa60/Thrimbda/legion-mind"
---

# LegionMind

LegionMind 不是另一个“让智能体多写一点代码”的工作流包。

它试图成为一套面向高级智能体使用者的**多智能体工程操作系统内核**：把任务记忆、设计门禁、评审协议、验证与汇报收敛成一套**可安装、可验证、可迭代**的智能体编排内核，让人类从执行者转向指挥、验收者和系统迭代者。

> 当前状态：`可运行内核 / v1 前硬化中`

## 为什么需要 LegionMind

当我们开始使用 Multi-Agent Vibe Coding 体协作运行起来，最先碰到的问题通常是这些更底层的问题。

- 并行执行能放大 token 吞吐量，但也会把错误方向一起放大。
- 真正的瓶颈会从“写代码”转移到人的上下文管理、验收和决策。
- 智能体最容易翻车的不是世界知识，而是项目里的隐含知识墙，也就是本项目中具备主见的部分：各类历史决策，局部的最佳实践。
- 没有设计门禁（中高风险改动先在 `.legion/tasks/<task-id>/plan.md` / `.legion/tasks/<task-id>/docs/rfc.md` 说清为什么改、影响什么、怎么回滚）、分层验证（把安装校验、任务验证、文档一致性分开检查）和证据化汇报（用 `test-report.md`、`report-walkthrough.md`、`pr-body.md` 带着证据交付），多智能体只会更快地返工。
- 当模型越来越强，工作流不该只靠感觉调参，而要走向证据驱动的工程化迭代。

LegionMind 试图把这些问题当成系统问题来处理，而不是继续堆提示词、堆技能、堆智能体数量。

它的北极星不是“自治更多”，而是三件更朴素的事：

- 尽量少打扰人
- 尽量多产生有效工作
- 尽可能提高可靠性和可验证性

## 它是什么

从目标态上看，LegionMind 应该同时是两样东西：

1. **多智能体工程操作系统内核**
   - 提供稳定的工作主干，而不是依赖会话临场发挥。
   - 明确编排器、子代理、技能、任务记忆和知识库记忆的边界。
   - 把“意图对齐 -> 执行 -> 验证 -> 汇报 -> 记忆”收敛为固定闭环。

2. **可安装的智能体编排内核**
   - 能安装到真实工作环境中，而不只是停留在仓库内工作流。
   - 能通过 `install / verify / rollback` 证明自己不是只会写文档。
   - 当前迭代优先收敛工作流内核本身，而不是同时承诺所有验证层都已经稳定。

## 系统模型

LegionMind 的主模型不是“命令列表”，而是下面这条工程闭环：

```text
Intent -> Plan -> Execute -> Verify -> Report -> Memory
```…
