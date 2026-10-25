---
repo: "thebtf/engram"
name: "engram"
description: "Persistent shared memory infrastructure for AI coding agents"
readmeQualityOk: true
url: "https://github.com/thebtf/engram"
language: "Go"
languages: ["Go"]
languagePcts: [76]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-25T22:04:24Z"
lastCommitAt: "2026-10-25T22:11:53Z"
lastReleaseAt: "2026-03-20T14:06:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 54
maintainers: ["thebtf"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2c6a12e4b7f93c5c21364b2e4c547d924c0f1e4265f61ca1e9d38f5d6919397/thebtf/engram"
---

# Engram

Engram is persistent shared memory infrastructure for coding-agent workstations.
It keeps memories, behavioral rules, issues, documents, and encrypted credentials
in PostgreSQL while an agent host talks to a local MCP process over stdio.

> **Canonical documentation:** this English README describes the current source and the chosen no-auth HTTP LAN setup. [Русский README](https://github.com/thebtf/engram/blob/HEAD/README.ru.md) covers the same Workspace path; [中文 README](https://github.com/thebtf/engram/blob/HEAD/README.zh.md) remains stale and is not equivalent setup guidance.

Engram fixes this by keeping only the memory primitives that proved reliable in production: explicit issues, documents, memories, behavioral rules, credentials, and API tokens. One server, multiple workstations, zero context loss.

In v5.0.0, session-start inject was simplified to a static composite payload: open issues, always-inject behavioral rules, and recent memories. The old dynamic relevance, graph, reranking, and extraction stack left the main product path.

Since then, the v6 line rebuilt governance on top of that stable core: per-workstation keycards, proposal-only rule arbitration,…
