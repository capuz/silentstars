---
repo: "kart-io/goagent"
name: "goagent"
description: "GoAgent is a production-ready AI agent framework for Go that enables building autonomous agents capable of reasoning, using tools, and making decisions. It's inspired by LangChain's architecture but built from scratch for Go with a strict layered architecture and enterprise-grade features."
readmeQualityOk: true
url: "https://github.com/kart-io/goagent"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 7
forks: 4
openIssues: 0
closedIssues: 11
watchers: 0
contributors: 4
recentReleases: 9
createdAt: "2025-11-16T02:01:15Z"
lastCommitAt: "2026-10-31T02:00:34Z"
lastReleaseAt: "2026-10-30T15:20:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 89
maintainers: ["costa92"]
openGraphImageUrl: "https://opengraph.githubassets.com/e484775acd785a5952e07ae9db8b2f35c56a9420ade70412b75f6aa2e00247da/kart-io/goagent"
---

# GoAgent - AI Agent Framework for Go

[English](https://github.com/kart-io/goagent/blob/HEAD/README.md) | [中文](https://github.com/kart-io/goagent/blob/HEAD/README_CN.md)

GoAgent is a recoverable, budgeted and observable agent orchestration kernel for Go services: native tool loops, typed workflow graphs with durable checkpoints and approvals, request budgets, OpenTelemetry events and MCP. Retrieval, document loaders, practical tools and multi-instance durable storage live in [goagent-contrib](https://github.com/kart-io/goagent-contrib).

新编排入口：`agent.AsRunnable()`。参见[执行契约与能力状态](https://github.com/kart-io/goagent/blob/HEAD/docs/guides/EXECUTION_CONTRACT.md)和[GoAgent 评测](https://github.com/kart-io/goagent/blob/HEAD/evaluation/agentbench/README.md)。

原生编排与工具：`workflow.Graph`、持久图 `AsRunnable`、分支级恢复及 `tools.Dispatcher`，参见[接入与退款案例](https://github.com/kart-io/goagent/blob/HEAD/docs/guides/NATIVE_ORCHESTRATION.md)。

业务验证案例：[DevOps、文章审核、自动回复](https://github.com/kart-io/goagent-examples/blob/main/workflow/business-cases/README.md)，支持 Gemini / DeepSeek / MiniMax 真实模型调用，包含离线输入、审批恢复和跨进程崩溃测试。

Workflow orchestration: [typed graphs, branches, parallel joins and bounded…
