---
repo: "tt-a1i/matt-skills-with-to-goal"
name: "matt-skills-with-to-goal"
description: "Planning → verifiable goals → fresh-session implementation for AI coding agents. Based on mattpocock/skills v1.1."
readmeQualityOk: true
url: "https://github.com/tt-a1i/matt-skills-with-to-goal"
language: "Shell"
languages: ["Shell", "JavaScript"]
languagePcts: [75, 25]
topics: ["agent-skills", "ai-agents", "claude-code", "codex", "coding-agents", "developer-tools", "workflow"]
stars: 82
forks: 10
openIssues: 8
closedIssues: 3
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2026-07-11T03:45:37Z"
lastCommitAt: "2026-08-21T04:12:07Z"
lastReleaseAt: "2026-08-10T15:05:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 29
maintainers: ["mattpocock", "tt-a1i", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5aae337c4c8cf9eea36232818764879e7fd5dae6fcfb581bda1e0b7b8eb49526/tt-a1i/matt-skills-with-to-goal"
---

</p>

# Matt Skills with To-Goal

**把需求留在规划线程，把实现放进执行线程：能继承就 Fork，要搬运就 Goal**

让规划线程专注于把事情想清楚，让执行线程专注于把事情做完。

`grill → spec ready → execute in fork → receipt returns`

[**▶ 在线故事版：别让一个线程从需求聊到代码写完**](https://verifiable-goal-weekly-share-public.pages.dev)

</div>

## 它解决什么问题

AI coding 任务常常从需求讨论一路聊到代码实现。线程越长，上下文越容易膨胀、压缩和变慢；但直接开新线程，又担心缺少需求背景和已经确认的决策。

这套技能把工作拆成两类线程，并用仓库里的持久化证据连接它们：

| 常见困境 | 这套流程的处理方式 |
|---|---|
| 方案讨论和代码实现挤在一个长线程里 | 规划线程停在 `SPEC READY`，fork 线程承担代码和测试日志 |
| Fork 后又重新分析和改写一遍 Goal | `spec-executor` 直接执行继承的最终 Spec，并回传结构化 receipt |
| Fork、启动和回传仍要手工串起来 | `execute-spec-in-fork` 自动创建执行任务、发送 Ask、接回结果并条件归档 |
| 当前上下文太脏、无法可靠继承 | `to-goal` 把 ticket 和仓库证据压成干净的执行契约 |
| 不同任务都使用同一档模型和推理强度 | goal 按风险推荐 Lightweight / Standard / Advanced 与推理强度 |
| “做完了”依赖人的主观判断 | Goal 带完成标准，executor 回传逐项证据和外部操作状态 |

> **Fork 负责隔离后续上下文，Goal 负责压缩已有上下文。** 连续开发优先 fork；跨人、跨天、跨引擎、并行或上下文混乱时使用 `to-goal`。

## 30 秒看懂主流程

```mermaid
flowchart LR
    idea["模糊想法"] --> grill["聊清楚<br/>/grill-me"]
    grill --> spec["封版共识<br/>/to-spec"]
    spec --> orchestrate["一键编排<br/>/execute-spec-in-fork"]
    orchestrate --> fork["Fork<br/>继承 SPEC READY"]
    fork --> execute["实施<br/>/spec-executor"]
    execute -->…
