---
repo: "holon-run/holon"
name: "holon"
description: "A local workbench for agents doing continuous work across sessions, commands, human input, and external events."
readmeQualityOk: true
url: "https://github.com/holon-run/holon"
homepage: "https://holon.run"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["ai-agents", "agent-runtime", "local-first", "ai-infrastructure", "developer-tools"]
stars: 134
forks: 12
openIssues: 29
closedIssues: 953
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-12-18T11:46:49Z"
lastCommitAt: "2026-07-19T06:13:29Z"
lastReleaseAt: "2025-12-29T06:37:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 35
maintainers: ["jolestar"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4eec65efd191979e25c8f28fe09497f8fdc6e48c02192b956e2ba1d914bdc1e/holon-run/holon"
---

# Holon

English | [中文](https://github.com/holon-run/holon/blob/HEAD/README.zh-CN.md)

Holon is a **local workbench for agents doing continuous work**.

Holon itself is not an agent. It provides a local working environment for multiple agents. Agents understand goals and drive execution; Holon treats "work" as the core unit, preserving state, organizing context, recording waits and wakes, so tasks that span sessions, commands, human confirmation, or external events can resume at the right time and eventually deliver results back to the operator.

## What does Holon provide?

| Capability | What it means |
|---|---|
| **Continuous agent workspace** | Each agent has its own continuous working context in Holon, instead of restarting with every terminal, request, or client connection. |
| **Work-first task model** | Holon organizes tasks, waits, execution progress, and final delivery as explicit Work, instead of leaving them scattered across conversations. |
| **Event-driven wait and wake** | Agents can wait for task results, external events, or operator input, then return to the corresponding work when the condition is satisfied. |
| **Explicit context and trust boundaries** | Holon…
