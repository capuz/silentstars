---
repo: "receptron/mulmoterminal"
name: "mulmoterminal"
description: "Run multiple Claude Code and Codex sessions in parallel — a browser terminal grid that shows which agent needs you. Local, tmux-backed, MIT."
readmeQualityOk: true
url: "https://github.com/receptron/mulmoterminal"
homepage: "https://www.mulmoterminal.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["agentic-coding", "ai-agents", "claude-code", "codex", "developer-tools", "git-worktree", "parallel-agents", "terminal", "tmux", "typescript"]
stars: 216
forks: 30
openIssues: 45
closedIssues: 600
watchers: 1
contributors: 5
recentReleases: 9
createdAt: "2026-06-14T12:39:37Z"
lastCommitAt: "2026-09-15T08:54:35Z"
lastReleaseAt: "2026-07-02T06:10:42Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 35
maintainers: ["isamu", "snakajima"]
openGraphImageUrl: "https://opengraph.githubassets.com/352195389e79923d001a5d45c9dc1f92bbed93ecd662a71fd917950160c8a7f3/receptron/mulmoterminal"
discussionCount: 0
---

# MulmoTerminal

**Run multiple coding-agent sessions in parallel — and see which one needs you.**

A **browser terminal** for **parallel AI coding agents**: several sessions side by side, each in
its own cell, with the one that needs you marked in colour. **Claude Code** is the default and six
more CLIs are first-class — Codex, Antigravity, Grok, Muse, GitHub Copilot CLI and Cursor CLI. Vibe
coding with a single agent needs nothing but a shell — this is for when you run several and lose
track of which is waiting. Sessions survive a reload (tmux), work isolates in **git worktrees**,
and a **phone push** reaches you when a turn finishes.

**Every cell is a real pty.** `htop`, `lazygit`, a dev server and Claude Code are the same kind
of object here — which is why the one-session-per-worktree limit applies to **agents only**, and
a shell or a `yarn dev` launcher can sit in the same worktree an agent is working in.

## Demo

*The grid, live — each cell coloured **working**, **done** or **needs you**.*

https://github.com/user-attachments/assets/0b8dd582-6c0d-4be3-b0b4-3740ad0bdba6

*90 seconds, with sound: one agent, then a grid of them. Zoom into one and the roster still holds what…
