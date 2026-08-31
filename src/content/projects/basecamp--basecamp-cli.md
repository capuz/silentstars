---
repo: "basecamp/basecamp-cli"
name: "basecamp-cli"
description: "Basecamp CLI and Agent Skills"
readmeQualityOk: true
url: "https://github.com/basecamp/basecamp-cli"
homepage: "https://basecamp.com/cli"
language: "Go"
languages: ["Go"]
languagePcts: [91]
topics: ["basecamp", "agent-skills"]
stars: 260
forks: 21
openIssues: 5
closedIssues: 100
watchers: 5
contributors: 36
recentReleases: 0
createdAt: "2026-01-09T23:02:20Z"
lastCommitAt: "2026-08-31T09:58:20Z"
lastReleaseAt: "2026-03-25T09:39:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 32
maintainers: ["jeremy", "dependabot[bot]", "pradhankukiran"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d24e5bfb5ac0e64546aed070883a36fd0ccb65b1e6b08b7dcf32dd72b451a4d/basecamp/basecamp-cli"
discussionCount: 7
---

# <img src="assets/bc5-snowglobe.png" height="28" alt="Basecamp"> Basecamp CLI

`basecamp` is the official command-line interface for Basecamp. Manage projects, todos, messages, and more from your terminal or through AI agents.

- Works standalone or with any AI agent (Claude, Codex, Copilot, Gemini)
- JSON output with breadcrumbs for easy navigation
- OAuth authentication with automatic token refresh
- Includes agent skills plus native Claude Code and Codex plugins

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

That's it. You now have full access to Basecamp from your terminal.

<details>
<summary>Other installation methods</summary>

**Brew / macOS**

```
brew install --cask basecamp/tap/basecamp-cli
```

**Arch Linux / Omarchy (AUR):**
```bash
yay -S basecamp-cli
```

**Linux (deb/rpm/apk):**
```bash
# Download from…
