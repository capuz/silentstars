---
repo: "ArcfluxResearch/dudes"
name: "dudes"
description: "Run Claude Code, Codex and Pi agents toward goals the daemon verifies itself. Give each agent a role and a goal with a completion check; Dudes keeps it working until its own run of the check passes. Rust daemon and CLI, with a 3D office view in the browser."
readmeQualityOk: true
url: "https://github.com/ArcfluxResearch/dudes"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["agent-orchestration", "ai", "ai-agents", "autonomous-agents", "claude-code", "cli", "coding-agents", "developer-tools", "llm", "mcp"]
stars: 11
forks: 1
openIssues: 3
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-10T06:37:55Z"
lastCommitAt: "2026-10-23T12:04:08Z"
lastReleaseAt: "2026-10-18T13:35:45Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 85
undervaluedScore: 47
maintainers: ["alexnthnz", "dependabot[bot]", "875612255-beep"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e51b024673c6a9820d10d4c856df2fa5434fa5012581ec472b9c390f475a3e3/ArcfluxResearch/dudes"
discussionCount: 1
---

# Dudes

Dudes keeps your coding agents working on goals you can check. Hire Claude Code, Codex, or Pi,
give them work, and review the results on the Floor, a 3D office in your browser.

## Install

On macOS or Linux, run these commands in the repository you want agents to work in.
You need at least one of the Claude Code, Codex, or Pi CLIs installed and signed in.

```sh
curl -fsSL https://raw.githubusercontent.com/ArcfluxResearch/dudes/main/install.sh | sh
~/.local/bin/dudes quickstart
```

Quickstart asks no questions. Dudes starts the daemon and opens the Floor, where you can add a
project, hire agents, give them tickets, and review their work.

Dudes is an early preview. Commands and configuration keys can change between releases.
For source builds and Windows, see [Build Dudes from source](https://github.com/ArcfluxResearch/dudes/blob/HEAD/docs/building-from-source.md).
Agents run under your account. Read [What agents can do on your machine](https://github.com/ArcfluxResearch/dudes/blob/HEAD/docs/what-agents-can-do.md)
before you hire one.

## Why Dudes

- A goal is Done only when its completion check passes in the daemon's own run.
- Dudes owns every agent process and ends…
