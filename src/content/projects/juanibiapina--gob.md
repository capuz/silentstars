---
repo: "juanibiapina/gob"
name: "gob"
description: "Process manager for AI agents (and humans)"
readmeQualityOk: true
url: "https://github.com/juanibiapina/gob"
language: "Go"
languages: ["Go"]
languagePcts: [81]
topics: ["cli", "go", "golang", "ai-tools", "background-jobs", "claude-code", "cli-app", "developer-experience", "developer-tools", "process-manager"]
stars: 69
forks: 6
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-11-17T19:34:32Z"
lastCommitAt: "2026-07-10T07:00:42Z"
lastReleaseAt: "2025-11-30T09:32:48Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 28
maintainers: ["juanibiapina", "dependabot[bot]", "JuanAgentBot"]
openGraphImageUrl: "https://opengraph.githubassets.com/63ce73a376a34b653234e9a06d5f65b503cf50307916f301beee01d1874e3ab3/juanibiapina/gob"
discussionCount: 9
---

# gob

> Process manager for AI agents (and humans).

`gob` (pronounced job, of course) is a CLI for managing background processes with a shared interface for you and your AI coding agent.

Start a dev server with Claude Code, check its logs yourself. Or vice-versa. The agent can monitor what you started. Everyone has the same view.

No more "can you check if that's still running?" No more copy-pasting logs through chat. Just direct access to your processes, for everyone.

## Features

- **Interactive TUI** - Full-screen terminal interface with real-time job status
- **Real-time log streaming** - Follow stdout/stderr from CLI, TUI, or AI agents without copying output
- **AI agent friendly** - Shared view of all processes for you and your coding agent
- **Real-time sync** - Changes from CLI instantly appear in TUI, and vice-versa
- **Per-directory jobs** - Jobs are scoped to directories, keeping projects organized
- **Process lifecycle control** - Start, stop, restart, send signals to any job
- **Port monitoring** - Inspect listening ports across a job's entire process tree
- **Reliable shutdowns** - Stop, restart, and shutdown verify every child process in the tree is gone
- **Job…
