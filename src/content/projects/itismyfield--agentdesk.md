---
repo: "itismyfield/AgentDesk"
name: "AgentDesk"
description: "AI agent orchestration platform — single binary, hot-reloadable policies"
url: "https://github.com/itismyfield/AgentDesk"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
stars: 8
forks: 4
openIssues: 24
closedIssues: 2189
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-19T00:28:30Z"
lastCommitAt: "2026-07-03T06:24:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 60
maintainers: ["itismyfield"]
openGraphImageUrl: "https://opengraph.githubassets.com/a22ad6e96919939e93543d85a7470c1386b83226a7f924452aae58c958e1ef63/itismyfield/AgentDesk"
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

Set `AGENTDESK_INSTALL_REPO` or `AGENTDESK_INSTALL_DIR` before running the installer when you need to test a fork or install into a sandboxed runtime root. Non-default install roots get an isolated launchd label and a derived non-8791 loopback port automatically; set `AGENTDESK_LAUNCHD_LABEL` or `AGENTDESK_INSTALL_PORT`…
