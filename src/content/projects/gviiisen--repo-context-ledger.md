---
repo: "gviiisen/repo-context-ledger"
name: "repo-context-ledger"
description: "面向 AI 上下文管理的 Agent Skill：为 Codex 上下文管理、Cursor 上下文切换和 Claude 上下文管理提供跨窗口续接，用 Git 保存可验证的功能说明与变更记录。AI coding context management and agent handoffs."
readmeQualityOk: true
url: "https://github.com/gviiisen/repo-context-ledger"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-skills", "ai-coding", "claude-code", "codex", "cursor", "developer-tools", "documentation", "agent-handoff", "ai-agents", "coding-agents"]
stars: 104
forks: 0
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-11T10:14:00Z"
lastCommitAt: "2026-08-27T14:27:00Z"
lastReleaseAt: "2026-08-21T11:03:35Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 34
maintainers: ["gviiisen"]
openGraphImageUrl: "https://opengraph.githubassets.com/7510f83591756680cc64af37680c85dc947ff4c073294d0c7847442fcd5b96cd/gviiisen/repo-context-ledger"
---

# Repo Context Ledger — Cross-Agent Context Relay

[English](https://github.com/gviiisen/repo-context-ledger/blob/HEAD/README.md) | [简体中文](https://github.com/gviiisen/repo-context-ledger/blob/HEAD/README.zh-CN.md)

> Switch from Codex to Cursor or Claude, mention the feature, and continue from the right code and boundaries.

Repo Context Ledger is an open repository context management and context switching Agent Skill for AI coding. It bridges verified context across Codex, Claude, Cursor, GitHub Copilot, Grok, and other coding agents while keeping feature documentation, change handoffs, and README summaries synchronized.

Use it for AI coding context management, cross-session continuation, cross-tool context switching, and durable agent handoffs without replaying a long chat.

If you are looking for AI context management, Codex context management, Cursor context switching, Claude context management, or a way to continue work across AI coding sessions, this Skill gives the next agent a focused route to the relevant code, boundaries, and verified change history.

Install it with the standard Agent Skills CLI:

```bash
npx skills@latest add gviiisen/repo-context-ledger --skill…
