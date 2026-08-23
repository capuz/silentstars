---
repo: "yogasw/wick"
name: "wick"
description: "Build internal tools and AI agents in Go — or just download and run Claude / Codex / Gemini as a Slack + Telegram + web agent host. No copy-pasting. You own the code."
readmeQualityOk: true
url: "https://github.com/yogasw/wick"
homepage: "http://yogasw.github.io/wick/"
language: "Go"
languages: ["Go"]
languagePcts: [68]
topics: ["ai", "ai-agent", "ai-tools", "low-code", "n8n", "open-claw"]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-04-16T22:39:15Z"
lastCommitAt: "2026-08-23T04:09:24Z"
lastReleaseAt: "2026-04-19T23:04:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 61
maintainers: ["yogasw", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/453fe70ff4ed48aade23ec172dc4522abadf699784710692acf30290aca0772b/yogasw/wick"
---

# Wick

> **Build internal tools and AI agents in Go — or just download and run Claude / Codex / Gemini as a Slack + Telegram + web agent host. No copy-pasting. You own the code.**

Two ways to use wick:

---

## 1. Run AI Agents — no Go, no framework

Want Claude / Codex / Gemini as a Slack bot, Telegram bot, or web assistant? Just download the binary.

```bash
# Linux / macOS / Termux — auto-detects OS + arch
curl -fsSL https://yogasw.github.io/wick/install.sh | sh
wick-agent server   # web UI at http://localhost:9425 — creds auto-generated on first run
```

```powershell
# Windows
iwr -useb https://yogasw.github.io/wick/install.ps1 | iex
```

```bash
# Docker — single-container: HTTP + cron in one process
docker run -d \
  -p 9425:9425 \
  -v wick-agent-data:/root/.wick-agent \
  ghcr.io/yogasw/wick-agent:latest all
```

The binary supports two modes — pick one:

| Mode | Command | Best for |
|---|---|---|
| **System tray** | `wick-agent` (no args) | Desktop — right-click menu, icon shows state, auto-start on login |
| **Headless** | `wick-agent server` | Remote server / Docker — no GUI, logs to stdout |

Then in the web UI (`/tools/agents`):

1. **Providers** — point…
