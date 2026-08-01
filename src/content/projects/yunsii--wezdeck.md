---
repo: "yunsii/wezdeck"
name: "wezdeck"
description: "A flight deck for your AI agents — multi-agent terminal platform built on WezTerm + tmux + git worktrees. / 为 AI agent 时代的多 agent 驾驶舱，基于 WezTerm + tmux + git worktrees。"
readmeQualityOk: true
url: "https://github.com/yunsii/wezdeck"
language: "Shell"
languages: ["Shell", "Lua"]
languagePcts: [62, 23]
topics: ["agent-orchestration", "ai-agents", "claude-code", "codex", "developer-tools", "git-worktree", "lua", "terminal", "terminal-multiplexer", "tmux"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-03-28T02:06:37Z"
lastCommitAt: "2026-08-01T06:14:36Z"
lastReleaseAt: "2026-07-16T13:05:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 59
maintainers: ["yunsii"]
openGraphImageUrl: "https://opengraph.githubassets.com/719a13ef1fea4540a00c7772ab44ff129bf92023089f124cb0c8d9d86b2ed2c3/yunsii/wezdeck"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/yuns", "CUSTOM:https://afdian.com/a/yunslove"]
---

</p>

<h1 align="center">WezDeck</h1>

  <em>A flight deck for your AI agents — built on WezTerm, tmux, and git worktrees.</em>
</p>

</p>

> One WezTerm tab per repo. One tmux window per worktree. One pane per agent. One keystroke to find what's waiting on you.

This repository is the source of truth for the WezDeck runtime. The GitHub repo is [`yunsii/wezdeck`](https://github.com/yunsii/wezdeck) (the previous `yunsii/wezterm-config` URL still works via GitHub's permanent redirect).

## ✨ Highlights

- **Tab × Worktree × Agent in one frame** — every WezTerm tab is one repo, every tmux window inside it is a linked git worktree, every pane can host an agent CLI (`claude` / `codex` / …).
- **Live attention surface** — per-tab badges plus a single right-status counter `⟳ N running ⚠ N waiting ✓ N done`, driven by a Claude hook → `attention.json` pipeline.
- **One keystroke to jump** — `Alt+/` opens a popup of every pending pane across every tab; `Alt+,` / `Alt+.` step through them.
- **One keystroke to spawn a worktree** — `Ctrl+k g d/t/h` carves out a new linked worktree (with its own agent) without leaving the keyboard.
- **Manifest-driven hotkeys** —…
