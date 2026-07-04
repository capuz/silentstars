---
repo: "andyrewlee/amux"
name: "amux"
description: "TUI for easily running parallel coding agents"
url: "https://github.com/andyrewlee/amux"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["parallel-agents", "ai-orchestration", "worktree", "parallelexecution", "agent-coordination", "agent-orchestration", "agent-swarm", "git-worktree", "worktrees", "conductor"]
stars: 133
forks: 2
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-31T01:57:28Z"
lastCommitAt: "2026-07-04T06:10:30Z"
lastReleaseAt: "2026-02-03T01:21:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 26
maintainers: ["andyrewlee", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6b53b4f5e78aac3de371bd6f689fbdb426181c2c3ec2b18c10f4c38ece92fb6/andyrewlee/amux"
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

Or with Go (requires Go 1.26 or newer):

```bash
go install github.com/andyrewlee/amux/cmd/amux@latest
```

Then run `amux` to open the dashboard.

## How it works

Each workspace tracks a repo checkout and its metadata. For local workflows, workspaces are typically backed by git worktrees on their own branches so agents work in isolation and you can merge changes back when done.

## Architecture quick tour

Start with [`ARCHITECTURE.md`](ARCHITECTURE.md) for the repo-level package map and dependency direction. Then `internal/app/ARCHITECTURE.md` covers lifecycle, PTY flow, tmux tagging, and persistence invariants, and…
