---
repo: "vaayne/mori"
name: "mori"
description: "A native macOS workspace terminal organized around Projects and Worktrees, powered by tmux and libghostty"
readmeQualityOk: true
url: "https://github.com/vaayne/mori"
language: "Swift"
languages: ["Swift"]
languagePcts: [95]
topics: ["ghostty", "git", "macos", "swift", "terminal", "tmux", "workspace", "worktree"]
stars: 292
forks: 19
openIssues: 8
closedIssues: 22
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-03-19T09:57:15Z"
lastCommitAt: "2026-07-24T06:08:00Z"
lastReleaseAt: "2026-04-03T14:54:18Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 91
undervaluedScore: 22
maintainers: ["vaayne", "Morris-Lau", "0xbentang"]
openGraphImageUrl: "https://opengraph.githubassets.com/7eaa70e7193316ef8974ba07628ae306ee34e6a02da133048f99dd95433d5f42/vaayne/mori"
---

</p>

  <b>English</b> | <a href="README.zh-Hans.md">中文</a>
</p>

Mori is a macOS terminal built for developers who work across multiple git branches at the same time. Instead of juggling anonymous tabs or losing tmux state between context switches, Mori gives each branch its own persistent environment — and keeps them all one click away in a sidebar.

## Screenshots

| Light | Dark | Lazygit | Yazi | Settings |
|---|---|---|---|---|
|  |  |  |  |  |

## Features

- **One sidebar, every branch** — your projects and worktrees are always one click away; no anonymous tabs to lose track of
- **Sessions that outlive the app** — close Mori, reopen it tomorrow; tmux keeps every process running exactly where you left it
- **True branch isolation** — each worktree gets its own directory and tmux session; run `main` and `feat/auth` side-by-side without interference
- **Local + SSH** — connect local repos or remote servers; the native Mac UI works either way
- **GPU-rendered terminal** — Ghostty's libghostty engine with Metal acceleration
- **CLI + agent-ready** — `mori` CLI exposes everything over a Unix socket; built for scripting and AI agent workflows
- **MoriRemote** — iPhone/iPad…
