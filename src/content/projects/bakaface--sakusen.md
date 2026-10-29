---
repo: "Bakaface/sakusen"
name: "sakusen"
description: "Your command center for CLI coding agents"
readmeQualityOk: true
url: "https://github.com/Bakaface/sakusen"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["ai-agents", "claude-code", "cli", "git-worktree", "golang", "tmux"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-04T11:51:22Z"
lastCommitAt: "2026-10-29T09:49:36Z"
lastReleaseAt: "2026-05-23T12:30:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 46
maintainers: ["Bakaface"]
openGraphImageUrl: "https://opengraph.githubassets.com/e030df04bbff6868ac6a8c810e0e53d6f0d3dea877b5f570b04a981ee9312f95/Bakaface/sakusen"
---

# 作戦

Sakusen is a daemon that orchestrates coding agents through long-lived, multi-step workflows. An agent is just a shell command you declare in config — [Claude Code](https://docs.anthropic.com/en/docs/claude-code), opencode, aider, a raw model CLI, anything — and Sakusen talks to it through a small environment-variable contract. Each task runs in its own git worktree on its own branch, advances through whatever steps you define in config — anything from a single "implement" step to a full plan/implement/review/approve/merge chain with loops and human gates — and reports back to a terminal UI where you stay in the driver's seat.

You decide what runs, how many run at once, where the human gates go, and how finished work lands on your base branch. Sakusen just keeps the agents on the rails.

> ⚠️ **Early days — breaking changes expected.** Sakusen is under active development. Config formats, CLI flags, and the database schema may change without notice between releases. Pin to a tagged version if you need stability.

```mermaid
%%{init: {"theme": "base", "themeVariables": {"primaryColor": "#ffffff", "primaryTextColor": "#000000", "primaryBorderColor": "#000000", "lineColor":…
