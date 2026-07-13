---
repo: "andyrewlee/amux"
name: "amux"
description: "TUI for easily running parallel coding agents"
readmeQualityOk: true
url: "https://github.com/andyrewlee/amux"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["parallel-agents", "ai-orchestration", "worktree", "parallelexecution", "agent-coordination", "agent-orchestration", "agent-swarm", "git-worktree", "worktrees", "conductor"]
stars: 136
forks: 2
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-31T01:57:28Z"
lastCommitAt: "2026-07-13T06:40:13Z"
lastReleaseAt: "2026-02-03T01:21:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 26
maintainers: ["andyrewlee"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab5ef24ea322d890dd6e3d2297fdf5bd24fa5c8de5087a00f83c26ec6c625ac7/andyrewlee/amux"
---

</p>

  </a>
  </a>
  </a>
</p>

</p>

## What is amux?

amux is a terminal UI for running multiple coding agents in parallel with a workspace-first model that can import git worktrees.

## Prerequisites

amux requires [tmux](https://github.com/tmux/tmux) (minimum 3.2). Each agent runs in its own tmux session for terminal isolation and persistence.

## Quick start

```bash
brew tap andyrewlee/amux
brew install amux
```

Or via the install script:

```bash
curl -fsSL https://raw.githubusercontent.com/andyrewlee/amux/main/install.sh | sh
```

Or with Go (requires Go 1.26 or newer; contributors should use the patched
toolchain pinned in `go.mod`):

```bash
go install github.com/andyrewlee/amux/cmd/amux@latest
```

Then run `amux` to open the dashboard.

## How it works

Each workspace tracks a repo checkout and its metadata. For local workflows, workspaces are typically backed by git worktrees on their own branches so agents work in isolation and you can merge changes back when done.

## Architecture quick tour

Start with [`ARCHITECTURE.md`](https://github.com/andyrewlee/amux/blob/HEAD/ARCHITECTURE.md) for the repo-level package map and dependency direction. Then…
