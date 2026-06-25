---
repo: "vlwkaos/wsx"
name: "wsx"
description: "project + worktree + session management made easy"
url: "https://github.com/vlwkaos/wsx"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-26T03:43:21Z"
lastCommitAt: "2026-06-25T01:39:05Z"
lastReleaseAt: "2026-02-26T14:39:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 39
maintainers: ["vlwkaos"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d65bb863f0e2b27e195d32a657c9a74ffe66368441a263c63839d974a7d0a42/vlwkaos/wsx"
discussionCount: 1
---

# wsx

**ENG** | [한국어](README.ko.md)

TUI workspace manager for git worktrees and tmux sessions.

![Screen Recording 2026-03-06 at 12 02 09 AM_1](https://github.com/user-attachments/assets/8427aa7d-bfa2-4349-847e-9f374c44e7f0)

## The core idea

Keep a live view of every project → worktree → tmux session in a sidebar.
Each session shows real-time state so you can see what needs attention without entering it.
Simply pressing `n` to iterate sessions where attention is required.

```
▼ project
  ▾ main * ↑2
      ◉ wsx_cc_main
  ▸ feature-auth ↓1
      ○ wsx_cc_auth
```

```mermaid
flowchart LR
  P[Project] --> W1[Worktree main]
  P --> W2[Worktree feature-auth]
  W1 --> S1[Session: nvim]
  W1 --> S2[Session: dev]
  W2 --> S3[Session: dev]
```

## Install

**macOS (Homebrew)**
```sh
brew tap vlwkaos/tap
brew install wsx
```

**macOS / Linux (cargo)**
```sh
cargo install wsx
```

**Build from source**
```sh
cargo install --path .
```

> Must be run inside a tmux session.

## Guide

| Feature | Screenshot |
|---|---|
| **Project config** `.gtrconfig` at repo root — post-create hook, auto-copy env files into new worktrees. Press `e` to view. | <img width="473" height="245" alt="image"…
