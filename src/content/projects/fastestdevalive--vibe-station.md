---
repo: "fastestdevalive/vibe-station"
name: "vibe-station"
description: "A hub for vibe-coding with all Agent CLIs in one place talking to each other and working towards same or different Goals"
readmeQualityOk: true
url: "https://github.com/fastestdevalive/vibe-station"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [51, 41]
stars: 42
forks: 8
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-05-03T07:19:10Z"
lastCommitAt: "2026-11-10T14:38:44Z"
lastReleaseAt: "2026-11-06T10:26:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 35
maintainers: ["fastestdevalive"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5a6d42e24c8f4c6a44ceeaf4b8997f45423444d24417f6f1b426fdddafb9f7b/fastestdevalive/vibe-station"
---

# vibe-station

**Vibe code in parallel. Ship at scale.**

A local-first orchestrator for parallel AI coding agents — Claude Code, Cursor, OpenCode and agy, each on its own git worktree, driven from a desktop app, your browser, your phone, or the `vst` CLI.

[Install](#install) · [Quick start](#quick-start) · [Features](#features) · [Docs](https://github.com/fastestdevalive/vibe-station/blob/HEAD/docs/) · [Architecture](#architecture)

Everything runs on your machine. No accounts, no cloud service, no telemetry.

---

## Features

### One board for every agent

Every agent across every project lands on a single dashboard — **working**, **needs you**, **idle**, **PR created** — so you always know which one is waiting on you. Status is two independent axes (agent lifecycle and PR state); see [`docs/STATUS-INDICATORS.md`](https://github.com/fastestdevalive/vibe-station/blob/HEAD/docs/STATUS-INDICATORS.md).

### Every major harness, one app

Claude Code, Cursor, OpenCode and agy plug in through the same plugin interface. Define **modes** (a CLI + a system context) and mix them per worktree, per session, even per subagent.

### Isolated worktrees

Each task gets its own `git worktree`…
