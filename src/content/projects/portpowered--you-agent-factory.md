---
repo: "portpowered/you-agent-factory"
name: "you-agent-factory"
description: "Agent factory workflow engine for agents"
readmeQualityOk: true
url: "https://github.com/portpowered/you-agent-factory"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [70, 26]
topics: ["agent", "agent-factory", "harness-engineering", "vibecoding", "codex", "skills", "ai-agents", "claude-code", "cursor", "productivity"]
stars: 13
forks: 1
openIssues: 61
closedIssues: 18
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-04-29T08:45:00Z"
lastCommitAt: "2026-07-28T14:56:07Z"
lastReleaseAt: "2026-06-02T17:18:33Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 84
undervaluedScore: 45
maintainers: ["AndreasAbdi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1224402483/15353e88-dee9-4219-8f64-e4307534d35c"
---

# you-agent-factory

**you-agent-factory** is an AI agent factory for scheduling and orchestrating concurrent AI work—the `you` CLI and dashboard let you run many agents at once instead of babysitting each task manually.

## Why?

Leverage.

With **you-agent-factory**, you codify your process into a workflow with different `AGENTS.md` files and run them as wrappers around OpenAI Codex or other agent backends.

For example:

- dispatch many agents to run independently in separate worktrees
- have one agent loop through a series of tasks, then route output to a reviewer that re-queues failed work
- submit plans in dependency order
- use cron triggers to autonomously inspect git tasks and drive write/review cycles

## Installation

### Prerequisites

- **[Codex CLI](https://developers.openai.com/codex/cli)** (default agent backend for the packaged Factories): `npm i -g @openai/codex`
- Credentials for the model provider you plan to use

### Install the `you` CLI

**macOS / Linux:**

```sh
curl -fsSL https://github.com/portpowered/you-agent-factory/releases/latest/download/install.sh | sh
```

**Windows (PowerShell):**

```powershell
irm…
