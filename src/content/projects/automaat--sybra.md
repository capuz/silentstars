---
repo: "Automaat/sybra"
name: "sybra"
description: "Local agent orchestrator for Claude Code swarms — Wails v2 + Go + Svelte"
url: "https://github.com/Automaat/sybra"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [63, 23]
stars: 6
forks: 1
openIssues: 41
closedIssues: 257
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-04-02T16:07:00Z"
lastCommitAt: "2026-06-24T00:23:22Z"
lastReleaseAt: "2026-04-15T16:57:39Z"
status: "thriving"
tags: ["needs_contributors", "release_machine", "under_pressure"]
healthScore: 96
undervaluedScore: 63
maintainers: ["Automaat", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/28152ecd96ef621ee8a2da59af6471b830bc487102bf4c75157a5395465933f1/Automaat/sybra"
---

# Sybra

Autonomous Claude Code orchestrator. Local desktop app that manages a swarm of AI agents: triage incoming work, spawn agents, monitor progress, handle failures — all through a markdown-based task board.

## What it does

You create tasks. Sybra triages them, spawns Claude Code agents to implement them, monitors progress, reviews results, and keeps the board healthy. Each agent gets an isolated git worktree so parallel work never steps on itself.

```
new → todo → in-progress → in-review → done
              ↑
         planning → plan-review → [human approves] → todo
```

Complex tasks go through a planning phase. Simple tasks go straight to execution.

## Features

- **Task board** — drag-and-drop Kanban with status swimlanes, priority, tags, agent mode
- **Dual execution modes** — headless (`claude -p` with NDJSON streaming) or interactive (tmux sessions)
- **Worktree isolation** — each agent gets a per-task git worktree from a bare clone; no conflicts between concurrent agents
- **GitHub integration** — link tasks to repos; agents clone, commit, and open PRs automatically
- **Eval agents** — post-implementation verification: confirm commits exist, PRs are open, quality…
