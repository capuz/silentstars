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
stars: 300
forks: 34
openIssues: 13
closedIssues: 233
watchers: 3
contributors: 24
recentReleases: 0
createdAt: "2026-02-18T12:21:07Z"
lastCommitAt: "2026-10-01T10:24:27Z"
lastReleaseAt: "2026-02-28T23:12:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 31
maintainers: ["h0x91b", "vit-pavlenko", "arditti"]
openGraphImageUrl: "https://opengraph.githubassets.com/df5e90029d833144911a813d01f3a6b85b06420e949e81aaef4f32d05b4bda60/h0x91b/dev-3.0"
---

</p>

<h1 align="center">dev-3.0</h1>

  <strong>A Kanban board where every card is a live AI coding agent.</strong><br>
  Each task gets its own git worktree, its own terminal and its own agent — so a dozen of them
  can run at the same time without ever touching each other's files.
</p>

</p>

</p>

  </a>
</p>

  <sub>the whole 90 seconds, 1080p, with sound</sub>
</p>

</p>

  <sub>Every card is a real git worktree, a real terminal and a real branch.</sub>
</p>

---

## What using it looks like

> **Write a task → get a worktree → an agent works in it → you watch → you review → it merges**

Six steps. You write the first one and approve the last; the middle four happen on the board.

### 1. Write a task, pick who does it

You describe the work and choose the agent. Claude Code, Codex, Gemini, Cursor Agent, opencode
— or several at once, each in its own pane of the same task.

</p>

### 2. dev-3.0 builds the sandbox

A fresh **git worktree** off your base branch, a **tmux session** inside it, your per-project
setup script, and — if you asked for them — free ports reserved for that task's dev server.
Heavy directories like `node_modules` or `.venv` are copy-on-write cloned, so…
