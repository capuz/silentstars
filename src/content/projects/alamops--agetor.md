---
repo: "alamops/agetor"
name: "agetor"
description: "The harness orchestrator — a local-first kanban for running Claude Code, Codex, and other CLI coding agents in parallel, each in its own git worktree."
readmeQualityOk: true
url: "https://github.com/alamops/agetor"
homepage: "https://agetor.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["agent-orchestration", "ai-agent", "ai-coding", "ai-engineering", "ai-tools", "claude-code", "cli", "codex", "coding-agent", "cursor"]
stars: 92
forks: 19
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-05-16T06:16:02Z"
lastCommitAt: "2026-10-21T23:36:20Z"
lastReleaseAt: "2026-05-29T23:54:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 37
maintainers: ["alamops", "miltoncyrus-playground", "interdesigncorp-lab"]
openGraphImageUrl: "https://opengraph.githubassets.com/169fa216180084f84fbb95375f7a6f39a1a6ddca7f42415e54915344fa3be143/alamops/agetor"
fundingLinks: ["GITHUB:https://github.com/alamops"]
discussionCount: 0
---

# Agetor

**The harness orchestrator.**<br />
A local-first kanban for running Claude Code, Codex, Cursor, Gemini CLI, fx and Antigravity in parallel, with each task in its own git worktree.

[Website](https://agetor.dev) · [Download](https://github.com/alamops/agetor/releases/latest) · [Quick start](#quick-start) · [Pipelines](#pipelines) · [CLI](#command-line-interface) · [Contributing](#contributing)

---

## Why Agetor

Coding agents are good enough now that the limiting factor is you: one terminal, one conversation, one branch at a time. Agetor turns a kanban board into a control plane for the agents you **already** use. Each card is a prompt, a repository and a harness. When you press **Run**, Agetor creates an isolated git worktree, launches the agent's own CLI inside it and streams the conversation to the board. The card moves by itself when the agent finishes or needs you.

**Agetor doesn't replace your agents, and it doesn't replace your harness.** Claude Code is still Claude Code, with the same login, skills, MCP servers, slash commands and settings. Agetor adds what one terminal can't give you: many agents working in parallel, isolation between them, and one place to…
