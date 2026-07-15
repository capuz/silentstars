---
repo: "penberg/swarm"
name: "swarm"
description: "Manage a swarm of coding agents."
readmeQualityOk: true
url: "https://github.com/penberg/swarm"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["agent", "rust", "agent-orchestration", "claude-code", "codex", "gui", "opencode"]
stars: 100
forks: 7
openIssues: 4
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-04-02T06:39:07Z"
lastCommitAt: "2026-07-15T05:53:05Z"
lastReleaseAt: "2026-04-22T05:55:11Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 83
undervaluedScore: 12
maintainers: ["penberg"]
openGraphImageUrl: "https://opengraph.githubassets.com/91a3e14f8de47825fd5a47986a8de25e5401633f68a340ffacbbe16bdc935e17/penberg/swarm"
---

</p>

<h1 align="center">Swarm</h1>

Swarm is a workspace manager for parallel coding agent development, similar to [cmux](https://github.com/manaflow-ai/cmux), [Superset](https://github.com/superset-sh/superset), and [Conductor](https://www.conductor.build/). Register git repositories, spin up isolated worktrees, and run persistent terminal sessions inside them from a native GTK desktop app or the CLI.

Read the [announcement blog post](https://penberg.org/blog/swarm.html) for more background.

## Features

- **Works with any coding agent** — run Claude Code, Codex, OpenCode, or any other CLI tool inside a session. Sessions are just terminals,
so anything that runs in a shell runs under Swarm.
- **Workspace per feature using git worktrees** — every workspace is an isolated git worktree, so parallel agents never share a checkout or step on each other's branches.
- **Fast workspace cloning** — branch off an existing workspace into a new worktree and branch in one command.
- **Multi-repository management** — register any number of GitHub repositories and manage their workspaces and sessions from one place.
- **Ghostty-backed persistent terminals** — sessions are backed by…
