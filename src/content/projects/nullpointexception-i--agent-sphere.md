---
repo: "nullpointexception-i/agent-sphere"
name: "agent-sphere"
description: "This project is an AI Agent orchestration platform. It uses an LLM-driven decision engine, combined with capabilities (built-in tools, MCP protocol, CLI execution, browser operations, etc.), to achieve a basic closed loop from perception → planning → execution → feedback.本项目是一个面向 AI Agent 编排平台。它通过 LLM 驱动的决策引擎，结合能力（内置工具、MCP 协议、CLI 执行、浏览器操作等）"
readmeQualityOk: true
url: "https://github.com/nullpointexception-i/agent-sphere"
homepage: "http://as.buukle.top"
language: "Java"
languages: ["Java", "TypeScript"]
languagePcts: [61, 28]
topics: ["agent", "agentic-ai", "java", "llm", "ai-agents"]
stars: 76
forks: 11
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 6
createdAt: "2026-06-19T11:53:36Z"
lastCommitAt: "2026-10-29T12:25:21Z"
lastReleaseAt: "2026-08-05T15:31:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 38
maintainers: ["georgeatparallel", "nullpointexception-i"]
openGraphImageUrl: "https://opengraph.githubassets.com/818a99595cf1d781bec557aa2f1800cefb27636a7a5d55590cd75bf916d6955d/nullpointexception-i/agent-sphere"
---

This project is an AI  Agent orchestration platform. Driven by an LLM-based decision engine and combined with capabilities (built-in tools, MCP protocol, CLI execution, browser automation, etc.), it implements a primary closed loop of **Perception → Planning → Execution → Feedback**.

It supports configuring different model providers: OpenAI, DeepSeek, QuickRouter (relay station), BigModel (Zhipu AI), LiteLLM, OrcaRouter.
---

Screenshots

Multi-agent orchestration — the main chat renders sub-agent cards inline (live per-sub-agent steps, auto-scroll):

Embeddable chat widget (shadow DOM, OIDC SSO, REST + SSE timeline chat):

▶ [Click to watch the video demo](https://www.bilibili.com/video/BV1WqTT62Efq/)

## Features

- **LLM ReAct orchestration** — `SessionRunner` runs a `Plan → Act → Observe → Learn` loop with per-turn timeout, cancellation, and automatic context compaction.
- **Multi-agent sub-runs** — a parent run can delegate sub-tasks to **sub-agents** via the unified **`delegate` tool** (`SessionSubRunner`); it also drives **DAG orchestration** (`tasks[]`): Kahn-layered parallel lanes, per-task `args`/`dependsOn` data injection through `ContactEnvelope`, a `delegate-lane/v1`…
