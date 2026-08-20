---
repo: "receptron/mulmoterminal"
name: "mulmoterminal"
description: "Run multiple Claude Code and Codex sessions in parallel — a browser terminal grid that shows which agent needs you. Local, tmux-backed, MIT."
readmeQualityOk: true
url: "https://github.com/receptron/mulmoterminal"
homepage: "https://receptron.github.io/mulmoterminal/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["agentic-coding", "ai-agents", "claude-code", "codex", "developer-tools", "git-worktree", "parallel-agents", "terminal", "tmux", "typescript"]
stars: 162
forks: 26
openIssues: 42
closedIssues: 507
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-06-14T12:39:37Z"
lastCommitAt: "2026-08-20T04:08:17Z"
lastReleaseAt: "2026-07-02T06:10:42Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 98
undervaluedScore: 36
maintainers: ["isamu", "snakajima"]
openGraphImageUrl: "https://opengraph.githubassets.com/87f79fb895a289473457565337a8c42d5942eb0d476741666fda77b44b0773b4/receptron/mulmoterminal"
discussionCount: 0
---

# MulmoTerminal

**Run multiple Claude Code and Codex sessions in parallel — and see which one needs you.**

A **browser terminal** for **parallel AI coding agents**: several **Claude Code** and **Codex**
sessions side by side, each in its own cell, with the one that needs you marked in colour. Vibe
coding with a single agent needs nothing but a shell — this is for when you run several and lose
track of which is waiting. Sessions survive a reload (tmux), work isolates in **git worktrees**,
and a **phone push** reaches you when a turn finishes.

**Every cell is a real pty.** `htop`, `lazygit`, a dev server and Claude Code are the same kind
of object here — which is why the one-session-per-worktree limit applies to **agents only**, and
a shell or a `yarn dev` launcher can sit in the same worktree an agent is working in.

### 📖 Documentation — **[receptron.github.io/mulmoterminal](https://receptron.github.io/mulmoterminal/)**

- **User guide:** [English](https://receptron.github.io/mulmoterminal/guide/en/) — the grid
  view, everyday workflows, the full feature list, configuration, and mobile push notifications.
- **ユーザーガイド:**…
