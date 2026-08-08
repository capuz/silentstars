---
repo: "nullpointexception-i/agent-sphere"
name: "agent-sphere"
description: "This project is an AI Agent orchestration platform. It uses an LLM-driven decision engine, combined with capabilities (built-in tools, MCP protocol, CLI execution, browser operations, etc.), to achieve a basic closed loop from perception → planning → execution → feedback.本项目是一个面向 AI Agent 编排平台。它通过 LLM 驱动的决策引擎，结合能力（内置工具、MCP 协议、CLI 执行、浏览器操作等）"
readmeQualityOk: true
url: "https://github.com/nullpointexception-i/agent-sphere"
homepage: "http://as.buukle.top"
language: "Java"
languages: ["Java", "TypeScript"]
languagePcts: [54, 39]
topics: ["agent", "agentic-ai", "java", "llm", "reactjs"]
stars: 119
forks: 8
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 10
createdAt: "2026-06-19T11:53:36Z"
lastCommitAt: "2026-08-08T04:35:35Z"
lastReleaseAt: "2026-08-05T15:31:16Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 78
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/b18df840992a6063b5fc01cc5e679323151d98e1d99ff9db42fe8a5f7034f965/nullpointexception-i/agent-sphere"
---

</p>

This project is an AI Agent orchestration platform. Driven by an LLM-based decision engine and combined with capabilities (built-in tools, MCP protocol, CLI execution, browser automation, etc.), it implements a primary closed loop of **Perception → Planning → Execution → Feedback**.

It supports configuring different model providers: OpenAI, DeepSeek, QuickRouter (relay station), BigModel (Zhipu AI), LiteLLM.
---

Screenshots

Embeddable chat widget (shadow DOM, OIDC SSO, AG-UI streaming):

▶ [Click to watch the video demo](https://www.bilibili.com/video/BV1WqTT62Efq/)

## Features

- **LLM ReAct orchestration** — `SessionRunner` runs a `Plan → Act → Observe → Learn` loop with per-turn timeout, cancellation, and automatic context compaction.
- **Multi-provider model routing** — OpenAI / DeepSeek / BigModel (Zhipu) / relay stations, with primary + fallback route chains and graceful degradation.
- **Unified capability layer** — MCP servers, built-in SPI tools, CLI execution, browser automation, and composite skills, dispatched through a single `ToolExecutor`.
- **Real browser automation** — a Manifest V3 Chrome Extension bridge performs DOM operations (navigate / click / type…
