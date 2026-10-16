---
repo: "mrmans0n/alas"
name: "alas"
description: "Agentic Development Environment (ADE) for macOS. Build in parallel with your agents!"
readmeQualityOk: true
url: "https://github.com/mrmans0n/alas"
homepage: "https://alas.build"
language: "Swift"
languages: ["Swift"]
languagePcts: [95]
topics: ["agentic-ai", "macos-app", "swift"]
stars: 21
forks: 7
openIssues: 10
closedIssues: 243
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-29T18:50:20Z"
lastCommitAt: "2026-10-16T08:26:54Z"
lastReleaseAt: "2026-05-20T07:50:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 51
maintainers: ["mrmans0n", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e918075b4af3be0b97c03715b6a2477e06e4b0c1e1f10d4ad8d4a9bc11c8d3f/mrmans0n/alas"
---

# Alas

**The workspace for the whole agent loop.**

Run coding agents in a terminal or a native chat pane, across every worktree,
on your Mac or over SSH. Review their work with comments they can actually
answer, and merge without leaving the app. Then pick the whole thing up from
your phone. Native macOS, terminals built on
[libghostty](https://github.com/ghostty-org/ghostty).

## Install

Requires macOS 15 Sequoia or later.

```bash
brew install --cask mrmans0n/tap/alas
```

Or grab the signed DMG from [Releases](https://github.com/mrmans0n/alas/releases/latest).

## Why Alas

Keep each task in its own worktree, with its terminals, agent conversations,
files, and diffs together. Review changes and send feedback to the agent in the
same window. When you step away, the phone client lets you follow the run and
respond when it needs you.

## Features

- **Run agents two ways.** A long-lived Ghostty terminal or a native chat pane
  over [ACP](https://agentclientprotocol.com). Tool
  calls, plans, and permission prompts render inline, and past sessions can be
  browsed and resumed. Works with Claude Code, Codex, Cursor, Gemini, Antigravity,
  OpenCode, Pi, OMP, and Copilot, and…
