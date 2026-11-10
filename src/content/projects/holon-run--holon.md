---
repo: "holon-run/holon"
name: "holon"
description: "Open-source AI assistants on your own computer or server. Assign tasks, track progress, and let them follow up on ongoing work."
readmeQualityOk: true
url: "https://github.com/holon-run/holon"
homepage: "https://holon.run"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
topics: ["ai-agents", "agent-runtime", "local-first", "ai-infrastructure", "developer-tools"]
stars: 196
forks: 19
openIssues: 98
closedIssues: 1406
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2025-12-18T11:46:49Z"
lastCommitAt: "2026-11-10T11:38:49Z"
lastReleaseAt: "2025-12-29T06:37:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 39
maintainers: ["jolestar", "KGKallasmaa"]
openGraphImageUrl: "https://opengraph.githubassets.com/636b5ac1b5f06441a747690f0ed3e5835f5c6a8fdc9a12c9d63beca0aa520776/holon-run/holon"
---

# Holon

English | [中文](https://github.com/holon-run/holon/blob/HEAD/README.zh-CN.md)

**Create and run AI assistants on your own computer or server.**

Holon is open-source software for individuals and teams to create and run AI assistants on their own computers or servers. Assign tasks to your assistants, track their progress, and let them follow up on ongoing work.

## What does Holon provide?

| Capability | What it means |
|---|---|
| **Continuous agent workspace** | Each agent has its own continuous working context in Holon, instead of restarting with every terminal, request, or client connection. |
| **Work-first task model** | Holon organizes tasks, waits, execution progress, and final delivery as explicit Work, instead of leaving them scattered across conversations. |
| **Event-driven wait and wake** | Agents can wait for task results, external events, or operator input, then return to the corresponding work when the condition is satisfied. |
| **Explicit context and trust boundaries** | Holon distinguishes operator input, external events, tool results, and internal execution traces so information from different origins is not mixed together. |
| **Local-first execution…
