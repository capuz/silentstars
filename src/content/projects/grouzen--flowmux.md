---
repo: "grouzen/flowmux"
name: "flowmux"
description: "Run multiple AI coding agents from one terminal dashboard."
readmeQualityOk: true
url: "https://github.com/grouzen/flowmux"
homepage: "https://flowmux.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["ai-agent-tools", "ai-dashboard", "ai-tools", "productivity", "rust", "tmux", "libghostty", "multiplexer", "terminal", "git-worktree"]
stars: 20
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-04-24T21:56:06Z"
lastCommitAt: "2026-07-04T22:19:00Z"
lastReleaseAt: "2026-07-04T22:20:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 47
maintainers: ["grouzen"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1220414137/149f7d46-61a0-4347-a9e4-8e9d41453271"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/brand/flowmux-logo-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="docs/brand/flowmux-logo.png">
  </picture>
</p>

</p>

  Where agent chaos becomes flow.
</p>

# Flowmux

Flowmux is a terminal-native AI agent multiplexer for running, tracking, and switching between multiple CLI agents from one keyboard-first dashboard.

It is built for people who want fast hotkeys, a clean grid view of active work, tmux-backed persistence, and real terminal sessions instead of wrapped agent UIs.

Flowmux follows a simple Unix-style approach: it coordinates agent sessions, panes, projects, and worktrees while leaving your editor, git tools, shell, and terminal habits intact.

## Table of Contents

- [Quick Start](#quick-start)
- [Core Concepts](#core-concepts)
- [Typical Workflow](#typical-workflow)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Supported Agents](#supported-agents)
- [Architecture](#architecture)
- [Contributing](#contributing)

## Quick Start

### Prerequisites

- `tmux`
- At least one supported agent CLI: `opencode`,…
