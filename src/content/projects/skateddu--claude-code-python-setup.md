---
repo: "skateddu/claude-code-python-setup"
name: "claude-code-python-setup"
description: "Ready-to-use .claude configuration for Python projects: agents, skills, commands, rules, and MCP server templates for Claude Code."
readmeQualityOk: true
url: "https://github.com/skateddu/claude-code-python-setup"
language: "Python"
languages: ["Python"]
languagePcts: [84]
topics: ["claude-code", "claude-code-hooks", "claude-code-skills", "python"]
stars: 28
forks: 4
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-03-06T14:29:59Z"
lastCommitAt: "2026-11-01T10:44:27Z"
lastReleaseAt: "2026-10-15T17:14:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 52
maintainers: ["skateddu", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/932d7365e0e7ecfa23bce0b1054183d3df640f1a2ebc0a666d0a47838b876f12/skateddu/claude-code-python-setup"
---

# Claude Code Python Setup

A ready-to-use `.claude` configuration for Python development projects with Claude Code. Includes curated agents, commands, skills, and MCP server templates.

## Prerequisites

### Claude Code

Claude Code requires a **Pro, Max, Teams, Enterprise, or Console** account (the free Claude.ai plan does not include Claude Code access).

**System requirements:**

- macOS 13.0+ / Windows 10 1809+ / Ubuntu 20.04+ / Debian 10+
- 4 GB+ RAM
- Internet connection
- On Windows: [Git for Windows](https://git-scm.com/downloads/win) is required

**Installation:**

```bash
# macOS / Linux / WSL
curl -fsSL https://claude.ai/install.sh | bash
```

```powershell
# Windows (PowerShell)
irm https://claude.ai/install.ps1 | iex
```

```powershell
# Windows (alternative: WinGet)
winget install Anthropic.ClaudeCode
```

After installation, navigate to your project directory and run `claude` to start. On first run, follow the browser prompts to authenticate.

Verify with:

```bash
claude --version
claude doctor     # detailed check
```

> Full documentation: [code.claude.com/docs/en/setup](https://code.claude.com/docs/en/setup)

### Optional Dependencies

Some components require…
