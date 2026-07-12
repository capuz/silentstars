---
repo: "opspresso/vibemon-app"
name: "vibemon-app"
description: "AI Agent Monitoring Dashboard"
readmeQualityOk: true
url: "https://github.com/opspresso/vibemon-app"
homepage: "https://vibemon.io/"
language: "C"
languages: ["C", "JavaScript"]
languagePcts: [59, 30]
stars: 20
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-23T15:15:00Z"
lastCommitAt: "2026-07-12T06:17:04Z"
lastReleaseAt: "2026-01-26T13:23:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 41
maintainers: ["nalbam", "mergify[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/467fd30955c18a58a8cd732488f0324249a1fb3965e45b88b8e0cfe6270b999c/opspresso/vibemon-app"
---

# VibeMon

**Real-time status monitor for AI assistants with pixel art character display.**

See at a glance what your AI assistant is doing — thinking, working, or waiting for input. A cute pixel art character visually represents the current state.

## Supported Tools

| Tool | Description |
|------|-------------|
| **[Claude Code](https://claude.ai/code)** | Anthropic's official AI coding assistant |
| **[Codex](https://openai.com/codex)** | OpenAI's AI coding agent |
| **[Kiro](https://kiro.dev/)** | AWS's AI coding assistant |
| **[OpenClaw](https://openclaw.ai/)** | Open-source computer use agent |

## Agent Integration Model

VibeMon does not talk to agent runtimes directly. Each supported agent is bridged into the same status payload and then rendered by the Desktop App or ESP32 display.

| Agent | Bridge type | Tool visibility | Notes |
|------|-------------|-----------------|-------|
| Claude Code | Native hooks | Broad | Best documented lifecycle and tool coverage |
| Codex | Native hooks + `codex exec --json` | Partial in interactive mode, broad in automation | Interactive hooks are experimental and currently Bash-focused |
| Kiro | Native hooks | Broad | Good…
