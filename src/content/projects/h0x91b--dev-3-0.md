---
repo: "h0x91b/dev-3.0"
name: "dev-3.0"
description: "Mission control for the One Person Studio — run a fleet of AI coding agents in parallel without losing your mind. Kanban + git worktrees + tmux for Claude Code, Codex, Gemini CLI, OpenCode and any shell agent. Not an IDE."
readmeQualityOk: true
url: "https://github.com/h0x91b/dev-3.0"
homepage: "https://dev3.h0x91b.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["agent-orchestration", "ai-agents", "ai-coding", "bun", "claude-code", "codex", "developer-tools", "electrobun", "gemini-cli", "git-worktree"]
stars: 329
forks: 42
openIssues: 23
closedIssues: 273
watchers: 3
contributors: 27
recentReleases: 0
createdAt: "2026-02-18T12:21:07Z"
lastCommitAt: "2026-11-07T10:36:27Z"
lastReleaseAt: "2026-02-28T23:12:20Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 33
maintainers: ["h0x91b", "diverru", "fallenfuzz"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c937e7f4bfb1539e5d046fd891c69e25f76716a3381e0a79e724b35d0859906/h0x91b/dev-3.0"
---

Each task gets its own git worktree, its own terminal and its own agent — so a dozen of them
  can run at the same time without ever touching each other's files.

---

## What using it looks like

> **Write a task → get a worktree → an agent works in it → you watch → you review → it merges**

Six steps. You write the first one and approve the last; the middle four happen on the board.

### 1. Write a task, pick who does it

You describe the work and choose the agent. Claude Code, Codex, Gemini, Cursor Agent, opencode
— or several at once, each in its own pane of the same task.

### 2. dev-3.0 builds the sandbox

A fresh **git worktree** off your base branch, a **tmux session** inside it, your per-project
setup script, and — if you asked for them — free ports reserved for that task's dev server.
Heavy directories like `node_modules` or `.venv` are copy-on-write cloned, so the sandbox costs
near-zero disk and appears instantly.

Nothing the agent does can collide with another task. That is the whole reason ten of them can
run at once.

### 3. Watch without opening anything

Hover a card and the live terminal comes to you. No clicking in, no losing your place on the
board.

The card…
