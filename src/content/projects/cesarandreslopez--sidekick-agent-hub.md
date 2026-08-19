---
repo: "cesarandreslopez/sidekick-agent-hub"
name: "sidekick-agent-hub"
description: "See what your AI coding agent is doing. Multi-provider assistant & session monitor for VS Code and the terminal — inline completions, code transforms, and a full TUI dashboard tracking tokens, cost, and context across Claude Code, OpenCode, and Codex. Switch between multiple Claude Code and Codex accounts."
readmeQualityOk: true
url: "https://github.com/cesarandreslopez/sidekick-agent-hub"
homepage: "https://cesarandreslopez.github.io/sidekick-agent-hub/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["copilot-alternative", "inline-completion", "claude-code-cli", "code-reviews", "codex-cli", "opencode", "claude-code", "codex", "agent-hub", "ai-coding-assistants"]
stars: 77
forks: 11
openIssues: 0
closedIssues: 14
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2026-01-10T08:48:58Z"
lastCommitAt: "2026-08-19T04:09:14Z"
lastReleaseAt: "2026-01-30T10:39:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 40
maintainers: ["cesarandreslopez"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1131558141/567fbe4d-d640-48b6-89c2-535a2814e1a5"
---

</p>

<h1 align="center">Sidekick Agent Hub</h1>

</p>

  AI coding assistant with real-time agent monitoring — VS Code extension and terminal dashboard.
</p>

AI coding agents are powerful but opaque — tokens burn silently, context fills up without warning, and everything is lost when a session ends. Sidekick gives you visibility into what your agent is doing, AI features that eliminate mechanical coding work, and session intelligence that preserves context across sessions. Works with **Claude Max**, **Claude API**, **OpenCode**, or **Codex CLI**.

## What's New

- **Host-safe shared APIs** — `sidekick-shared` 0.25.0 adds async session previews, push-based collector/monitor/account subscriptions, an I/O-free provider factory with structured diagnostics (missing `sqlite3` is now a diagnostic, not an empty result), `findSessionById()`, and cross-realm model-catalog transfer with registerable aliases — built for long-lived embedders like desktop apps and extension hosts.
- **Prompt history** — `sidekick history` lists your most recent Codex prompts across every workspace, and `--path` jumps straight to a session's transcript file. `sidekick dump --list` and the session picker now…
