---
repo: "bbrowning/paude"
name: "paude"
description: "Run AI coding agents in Podman or Docker"
readmeQualityOk: true
url: "https://github.com/bbrowning/paude"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 73
forks: 29
openIssues: 11
closedIssues: 9
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2026-01-19T21:08:07Z"
lastCommitAt: "2026-10-21T17:31:40Z"
lastReleaseAt: "2026-03-08T02:48:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 39
maintainers: ["bbrowning"]
openGraphImageUrl: "https://opengraph.githubassets.com/dfc9bf41cf62415d835aac3fba49d44838e39122f707d733dff2f9dbb8de54e6/bbrowning/paude"
---

# Paude

Run AI coding agents in secure containers. They make commits, you pull them back.

## Supported Agents

| Agent | Flag | Status |
|-------|------|--------|
| [Claude Code](https://docs.anthropic.com/en/docs/claude-code) | `--agent claude` (default) | Supported |
| [Codex CLI](https://github.com/openai/codex) | `--agent codex` | Supported |
| [Cursor CLI](https://docs.cursor.com/cli) | `--agent cursor` | Supported |
| [Gas City](https://github.com/gastownhall/gascity) | `--agent gascity` | Supported |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | `--agent gemini` | Supported |
| [OpenClaw](https://github.com/openclaw/openclaw) | `--agent openclaw` | Supported |
| [OpenCode](https://opencode.ai) | `--agent opencode` | Supported |

> Agents are installed automatically inside the container — no local agent installation needed. You just need authentication credentials for your chosen provider.

Paude-managed agent containers include common development utilities, including
`rg` (ripgrep) for fast code search.
The Codex CLI image also includes Node.js for documentation tooling, using the
custom base image's package manager or an existing Node.js installation.…
