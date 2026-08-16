---
repo: "shuaimu/apas"
name: "apas"
description: "APAS: Autonomous Programming Agent System"
readmeQualityOk: true
url: "https://github.com/shuaimu/apas"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [62, 37]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-01-16T04:13:19Z"
lastCommitAt: "2026-08-16T04:07:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 48
maintainers: ["shuaimu"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a82d517bd42882f051a8ba4ca72672f2321398ea181ccc23537854fdcd306e5/shuaimu/apas"
---

# APAS - Autonomous Programming Agent System

APAS runs an autonomous programming team around your project. A Manager pane talks with the human and keeps `project_goal.md` current, a Tech Lead turns that goal into structured work in `team-todo.md`, and worker/reviewer panes implement changes in branches and open PRs for human review.

## Features

- **Team Mode**: Coordinate Manager, Tech Lead, Reviewer, and worker panes from one project
- **Shared Project State**: Keep goals in `project_goal.md` and work queues in `team-todo.md`
- **PR-Based Review**: Workers publish diffs, wait for Reviewer approval, then open pull requests while the Tech Lead tracks PR state and routes comments
- **Web Dashboard**: Use the Overview to inspect panes, manage TODOs, and observe work in real time
- **Customizable Prompts**: Define role prompts and workflow behavior in the `.apas` config file
- **Auto-Updates**: CLI automatically checks for updates on startup

## Installation

### Quick Install

```bash
curl -sSL https://raw.githubusercontent.com/shuaimu/apas/master/install.sh | bash
```

This will clone and build from source, installing to `~/.local/bin/`. Requires Rust (will install via rustup if…
