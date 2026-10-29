---
repo: "vfarcic/dot-agent-deck"
name: "dot-agent-deck"
description: "A rich terminal dashboard for monitoring and controlling multiple AI coding agent sessions"
readmeQualityOk: true
url: "https://github.com/vfarcic/dot-agent-deck"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
stars: 122
forks: 21
openIssues: 119
closedIssues: 828
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2026-03-22T01:22:07Z"
lastCommitAt: "2026-10-29T12:24:51Z"
lastReleaseAt: "2026-04-01T10:42:41Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 34
maintainers: ["vfarcic", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c8cc66d09f84264b97ca9ef1b013c0ab613d00e1b30d388ffedd25680449fda/vfarcic/dot-agent-deck"
discussionCount: 1
---

# dot-agent-deck

**Stop watching one agent. Run the whole team.**

Agent Deck runs your AI coding agents under one background daemon, shows what each of them is doing in real time — in a terminal UI or in a desktop app, both watching the same agents — and starts new work for you: a team under one orchestrator, an isolated unit in its own copy of the repo, or a task that fires on a schedule.

## What it does

- **Two clients, one daemon.** The agents run under a background daemon, not inside a window. An agent you start in the terminal UI shows up in the desktop app and the other way round, and detaching the terminal UI or quitting the desktop app leaves the agents running. The desktop app (alpha, macOS on Apple Silicon and Linux amd64) also puts several daemons on one dashboard and takes voice commands. [Getting started](https://github.com/vfarcic/dot-agent-deck/blob/HEAD/docs/getting-started.md), [Desktop app](https://github.com/vfarcic/dot-agent-deck/blob/HEAD/docs/desktop/index.md)
- **The agent client you already use.** Claude Code, Codex, OpenCode, Pi and Devin run as they are, with your own configs and skills, and both clients show whether each agent is thinking, working,…
