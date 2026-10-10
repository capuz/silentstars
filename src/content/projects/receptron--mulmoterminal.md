---
repo: "receptron/mulmoterminal"
name: "mulmoterminal"
description: "Run multiple Claude Code and Codex sessions in parallel — a browser terminal grid that shows which agent needs you. Local, tmux-backed, MIT."
readmeQualityOk: true
url: "https://github.com/receptron/mulmoterminal"
homepage: "https://www.mulmoterminal.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["agentic-coding", "ai-agents", "claude-code", "codex", "developer-tools", "git-worktree", "parallel-agents", "terminal", "tmux", "typescript"]
stars: 237
forks: 31
openIssues: 7
closedIssues: 1006
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-06-14T12:39:37Z"
lastCommitAt: "2026-10-10T10:04:25Z"
lastReleaseAt: "2026-07-02T06:10:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 30
maintainers: ["isamu", "snakajima"]
openGraphImageUrl: "https://opengraph.githubassets.com/204516b8a695469899cf6b2d3481501f41e74c71e9ee2506fe48a6495f932ce9/receptron/mulmoterminal"
discussionCount: 0
---

# MulmoTerminal

**English** · [日本語](https://github.com/receptron/mulmoterminal/blob/HEAD/README.ja.md) · [简体中文](https://github.com/receptron/mulmoterminal/blob/HEAD/README.zh.md) · [繁體中文](https://github.com/receptron/mulmoterminal/blob/HEAD/README.zh-TW.md) · [한국어](https://github.com/receptron/mulmoterminal/blob/HEAD/README.ko.md)

**Run multiple coding-agent sessions in parallel — and see which one needs you.**

A **browser terminal** for **parallel AI coding agents**: several sessions side by side, each in
its own cell, with the one that needs you marked in colour. **Claude Code** is the default and six
more CLIs are first-class — Codex, Antigravity, Grok, Muse, GitHub Copilot CLI and Cursor CLI. Vibe
coding with a single agent needs nothing but a shell — this is for when you run several and lose
track of which is waiting. Sessions survive a reload (tmux), work isolates in **git worktrees**,
and a **phone push** reaches you when a turn finishes.

**Every cell is a real pty.** `htop`, `lazygit`, a dev server and Claude Code are the same kind
of object here — which is why the one-session-per-worktree limit applies to **agents only**, and
a shell or a `yarn dev` launcher can sit…
