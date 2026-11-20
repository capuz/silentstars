---
repo: "itismyfield/AgentDesk"
name: "AgentDesk"
description: "AI agent orchestration platform — single binary, hot-reloadable policies"
readmeQualityOk: true
url: "https://github.com/itismyfield/AgentDesk"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
stars: 11
forks: 6
openIssues: 44
closedIssues: 3596
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-03-19T00:28:30Z"
lastCommitAt: "2026-11-20T11:34:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 100
undervaluedScore: 64
maintainers: ["itismyfield"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e0d2cb0c90dacaa813305708e431f0a335e617f2d7fbfdb544a5e895422161c/itismyfield/AgentDesk"
---

# AgentDesk

> AI agent orchestration platform — a single Rust binary that manages teams of AI agents through Discord, with a web dashboard, kanban pipeline, and hot-reloadable policy engine.

AgentDesk lets you run multiple AI agents (Claude Code, Codex, or any CLI-based provider) as a coordinated team. Agents communicate through Discord, execute tasks via tmux sessions, and follow configurable workflows defined in JavaScript policy files.

## Quick Start

### One-Click Install (macOS)

```bash
curl -fsSL https://raw.githubusercontent.com/itismyfield/AgentDesk/main/scripts/install.sh | bash
```

This will:
1. Download the latest release (or build from source if no release is available)
2. Install to `~/.adk/release/`
3. Create `~/.adk/release/config/agentdesk.yaml`
4. Register a launchd service (auto-starts on boot)
5. Open the web dashboard for guided onboarding
