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
stars: 162
forks: 3
openIssues: 2
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-12-31T01:57:28Z"
lastCommitAt: "2026-10-01T10:23:27Z"
lastReleaseAt: "2026-02-03T01:21:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 29
maintainers: ["andyrewlee"]
openGraphImageUrl: "https://opengraph.githubassets.com/48397b9929303893a7e18074293333f202ff4a85c44807cf2acb67e703b480e5/andyrewlee/amux"
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

The install script verifies release signatures with [minisign](https://jedisct1.github.io/minisign/) — install it first, or set `AMUX_ALLOW_UNVERIFIED=1` to proceed with checksum-only verification. The Homebrew and `go install` paths don't need it.

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

Each workspace tracks a repo checkout and its metadata. For local workflows, workspaces are typically backed by git worktrees on their own branches so agents work in…
