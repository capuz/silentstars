---
repo: "samzong/gmc"
name: "gmc"
description: "Parallel git worktrees for parallel AI agents — plus AI-generated commits."
readmeQualityOk: true
url: "https://github.com/samzong/gmc"
homepage: "https://gmc.samzong.me"
language: "Go"
languages: ["Go"]
languagePcts: [88]
topics: ["commit-message", "developer-tools", "git", "llm", "ai-agents", "claude-code", "parallel-development", "worktree"]
stars: 18
forks: 1
openIssues: 0
closedIssues: 16
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-05-13T05:19:04Z"
lastCommitAt: "2026-09-07T08:35:37Z"
lastReleaseAt: "2025-09-17T04:24:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 49
maintainers: ["samzong", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ca3c1856f58ff743ba976709a675fbc7bbe0611d2a7d8278c8ef95490c98ca2/samzong/gmc"
---

# gmc

  <br />
  <p>Parallel worktrees for parallel AI agents — plus AI-generated commits.<br />A Git workflow CLI built for the AI coding era: spin up a worktree per agent, share <code>.env</code> and <code>node_modules</code> across them, and let an LLM write the commit when you're done.</p>
  <p>
  </p>
</div>

## Installation

### Homebrew (macOS/Linux)

```bash
brew install samzong/tap/gmc
# or
go install github.com/samzong/gmc@latest
```

## Features

| Command | What it does |
| --- | --- |
| **Worktree — parallel AI development** | |
| `gmc wt clone <url> [--upstream <url>]` | Clone as `.bare/` + worktree layout, optionally register upstream |
| `gmc wt add <name> [-b <base>] [--sync]` | New worktree on a new branch |
| `gmc wt dup [N] [-b <base>]` | Fan out N sibling worktrees for parallel agents |
| `gmc wt promote <temp> <name>` | Rename a `.dup-N` branch to a permanent name |
| `gmc wt list` | List all worktrees in the family |
| `gmc wt switch` | Interactive switch between worktrees |
| `gmc wt remove <name> [-D]` | Delete worktree (and optionally its branch) |
| `gmc wt sync` | Pull the base branch up to date |
| `gmc wt share add <path>` | Share `.env` /…
