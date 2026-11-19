---
repo: "dainsiahtill-dev/Polaris"
name: "Polaris"
description: "Polaris is a transaction-driven AI software factory kernel. It is not a chat-style programming assistant. Instead, it demotes the LLM to a constrained decision component, with the system kernel taking over execution, auditing, budgeting, and rollback. This enables enterprise-grade unattended, accountable, and rollback-capable software delivery pipelines. It includes a built-in separation-of-powers architecture modeled on the \"Three Departments and Six Ministries\" with PM / Architect / Director / QA roles, along with core capabilities such as the KernelOne foundation, ContextOS three-layer memory, and the EDA task marketplace."
originalDescription: "Polaris 是一个事务驱动的 AI 软件工厂内核。它不是聊天式编程助手——而是将 LLM 降级为受限决策组件，由系统内核统一接管执行、审计、预算与回滚，实现企业级的无人值守、可追责、可回滚软件交付流水线。内置 PM / Architect / Director / QA 角色的三省六部权力分离架构，以及 KernelOne 底座、ContextOS 三层记忆、EDA 任务集市等核心能力。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/dainsiahtill-dev/Polaris"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 102
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-20T23:47:43Z"
lastCommitAt: "2026-11-19T05:02:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 29
maintainers: ["openhands-agent"]
openGraphImageUrl: "https://opengraph.githubassets.com/45391915a09fee42204ee59a48b0fbed7310f73eb5166bffac7f593c2945417c/dainsiahtill-dev/Polaris"
---

# Polaris

Polaris is an AI Agent governance and runtime platform for complex software delivery scenarios.  
Its goal is not to build yet another Agent shell that "chats and calls tools," but to turn Agent execution into an engineering system that is **transactional, auditable, rollback-capable, and verifiable**.

The English version of this README is at [README.en.md](https://github.com/dainsiahtill-dev/Polaris/blob/HEAD/README.en.md).

Architecturally:

- `KernelOne` is the underlying runtime foundation, responsible for general capabilities such as context, execution, side effects, storage layout, and events
- `Cells` are business capability boundaries, breaking complex systems into governable capability units
- New engineering runs are handled by `EngineeringRunService` and a single per-project SQLite record; ContextOS provides final request observation. `TransactionKernel` belongs to the historical execution chain.

## Project Overview

Polaris is an AI Agent governance and runtime platform for complex software delivery scenarios.  
It is not trying to solve "can the model call a few more tools." It addresses more fundamental questions:
