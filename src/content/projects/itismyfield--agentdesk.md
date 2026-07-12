---
repo: "itismyfield/AgentDesk"
name: "AgentDesk"
description: "AI agent orchestration platform — single binary, hot-reloadable policies"
readmeQualityOk: true
url: "https://github.com/itismyfield/AgentDesk"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
stars: 8
forks: 4
openIssues: 63
closedIssues: 2362
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-19T00:28:30Z"
lastCommitAt: "2026-07-12T06:17:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 59
maintainers: ["itismyfield"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b31f654e5c0e6ac097891de9e07de97d5213f43a5d21c0583239578061aaa72/itismyfield/AgentDesk"
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
