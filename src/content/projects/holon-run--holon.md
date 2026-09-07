---
repo: "holon-run/holon"
name: "holon"
description: "A local workbench for agents doing continuous work across sessions, commands, human input, and external events."
readmeQualityOk: true
url: "https://github.com/holon-run/holon"
homepage: "https://holon.run"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
topics: ["ai-agents", "agent-runtime", "local-first", "ai-infrastructure", "developer-tools"]
stars: 135
forks: 13
openIssues: 29
closedIssues: 1084
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-12-18T11:46:49Z"
lastCommitAt: "2026-09-07T08:35:19Z"
lastReleaseAt: "2025-12-29T06:37:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 38
maintainers: ["jolestar", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d160875592b2b360af9a05b0df9c804cdf3e0f79af27098df3eeb9bd5a1a89d/holon-run/holon"
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
