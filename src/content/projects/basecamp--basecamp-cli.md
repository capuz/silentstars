---
repo: "basecamp/basecamp-cli"
name: "basecamp-cli"
description: "Basecamp CLI and Agent Skills"
readmeQualityOk: true
url: "https://github.com/basecamp/basecamp-cli"
homepage: "https://basecamp.com/cli"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["basecamp", "agent-skills"]
stars: 298
forks: 22
openIssues: 36
closedIssues: 113
watchers: 2
contributors: 41
recentReleases: 0
createdAt: "2026-01-09T23:02:20Z"
lastCommitAt: "2026-11-08T10:42:03Z"
lastReleaseAt: "2026-03-25T09:39:02Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 34
maintainers: ["robzolkos", "jeremy", "jorgemanrubia"]
openGraphImageUrl: "https://opengraph.githubassets.com/5118ac77e27f8dd09fea86a70144a6526288a9c4453c99e4b09cce4b1ad20194/basecamp/basecamp-cli"
discussionCount: 8
---

# <img src="assets/bc5-snowglobe.png" height="28" alt="Basecamp"> Basecamp CLI

`basecamp` is the official command-line interface for Basecamp. Manage projects, todos, messages, and more from your terminal or through AI agents.

- Works standalone or with any AI agent (Claude, Codex, Grok, Copilot, Gemini)
- JSON output with breadcrumbs for easy navigation
- OAuth authentication with automatic token refresh
- Includes agent skills plus native Claude Code and Codex plugins; Grok Build reads the shared skill directly

## Quick Start

**macOS / Linux / WSL2**

```bash
curl -fsSL https://basecamp.com/install-cli | bash
```

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/basecamp/basecamp-cli/main/scripts/install.ps1 | iex
```

On Windows 11 with Smart App Control, see [Troubleshooting](#windows-smart-app-control-and-smartscreen) if the install is blocked.

On an interactive terminal, the installer opens Basecamp setup: approve OAuth in your browser and the CLI uses the account granted by OAuth, otherwise preserves an existing account or selects the first available. It saves that account globally, clears the global project default, and connects every…
