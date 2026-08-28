---
repo: "oyasmi/pipiclaw"
name: "pipiclaw"
description: "An AI assistant runtime for coding and team workflows, with DingTalk AI Cards, sub-agents, memory, and scheduled events."
readmeQualityOk: true
url: "https://github.com/oyasmi/pipiclaw"
homepage: "https://www.npmjs.com/package/@oyasmi/pipiclaw"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["ai-agents", "asistant", "dingtalk", "harness-engineering", "llm"]
stars: 16
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-03-31T15:19:39Z"
lastCommitAt: "2026-08-28T15:33:12Z"
lastReleaseAt: "2026-04-06T01:39:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 37
maintainers: ["oyasmi"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c7329e73287050d6cfd30ee1ef65ce7400ff3f37f59d45f065a8bb4a6731a4b/oyasmi/pipiclaw"
---

# Pipiclaw

**把钉钉变成一个能持续工作的 AI 工程入口。**

Pipiclaw 是一个面向个人和团队的 AI coding assistant runtime。它让 AI 助手不只回答一轮问题，而是能留在你的钉钉里理解上下文、操作工作区、记住长期约定、按计划继续任务，还能把重活委派给 Claude Code、Codex CLI 或你自己的执行器。

你看到的是一个助手，背后可以是一支分工明确的 AI 工程团队：主智能体负责理解目标和交付结果，轻量子智能体负责检索与整理，外部智能体负责跨文件实现、独立评审和运行验收。所有工作都有状态、有产物、有控制入口，而不是散落在几个终端窗口里的临时对话。

- npm：[`@oyasmi/pipiclaw`](https://www.npmjs.com/package/@oyasmi/pipiclaw)
- 运行环境：Node.js `>= 22.19.0`，Linux / macOS；Windows 请使用 WSL2
- 许可证：[GNU AGPL v3](https://github.com/oyasmi/pipiclaw/blob/HEAD/LICENSE)

## 为什么用 Pipiclaw

### 一个入口，协调多个智能体

Pipiclaw 同时支持两类委派：内置子智能体在进程内完成检索、日志筛查等轻量工作；外部智能体则启动真实的 Claude Code、Codex CLI 或任意脚本，处理需要长时间运行、跨多个文件和反复自测的重型任务。

在钉钉常驻模式中，外部任务派发后在后台继续执行，完成时自动唤醒原频道。你可以随时用 `/subagents` 查看运行状态、实际命令和产出，用 `/subagents cancel` 直接终止，也可以让主智能体在已结束的 Claude Code / Codex 会话上继续追问。仓库附带 planner、builder、reviewer、verifier、documenter 等可直接改造的角色模板。

### 工作不会随着一次对话结束

每个会话都有独立的当前状态、长期记忆和历史摘要。任务台账把目标、完成标准、进度、下一步和验收记录持久化到 Markdown 文件；内建 task driver 会在合适的时间恢复工作，有进展就继续，停滞则退避，超过边界就停止并告诉你。

### 原生工作在钉钉里

Pipiclaw 使用钉钉 Stream Mode，不需要自建消息中转服务或公网 IP。AI Card 可以持续显示思考、工具执行和状态更新；任务进行中仍可用 `/steer` 调整方向、`/followup` 排队下一件事、`/stop` 中止当前回合。生成的报表、截图和导出文件可以作为钉钉原生附件直接交付。…
