---
repo: "greglas75/zuvo"
name: "zuvo"
description: "Auto-activating, multi-agent skill ecosystem for Claude Code, Codex, and Cursor. 51 skills, 26 agents, quality gates, knowledge store, adversarial review, content writing & optimization."
readmeQualityOk: true
url: "https://github.com/greglas75/zuvo"
homepage: "https://zuvo.dev"
language: "Shell"
languages: ["Shell", "TypeScript"]
languagePcts: [58, 40]
topics: ["ai-coding", "claude-code", "claude-code-plugin", "code-quality", "code-review", "codex", "cursor", "developer-tools", "multi-agent", "skills"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-03-27T03:42:55Z"
lastCommitAt: "2026-07-19T06:13:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 48
maintainers: ["greglas75"]
openGraphImageUrl: "https://opengraph.githubassets.com/5072bf3ca48fbf4f73d52aff6da756f117ac1b0b3fe642d121a55b44bcc0666a/greglas75/zuvo"
---

# Zuvo

Auto-activating, multi-agent skill ecosystem for Claude Code, Codex, and Cursor.

51 skills, 26 specialized agents, quality gates, knowledge store, session recovery, and structured workflows — all in one plugin.

## Install

### Quick install (all platforms)

```bash
curl -fsSL https://raw.githubusercontent.com/greglas75/zuvo/main/scripts/quick-install.sh | bash
```

Installs to Claude Code + Codex + Cursor in one command. Restart your IDE after install.

### Claude Code (recommended)

> Requires Claude Code 1.0.33+. Check with `claude --version`, update with `claude update`.

```bash
# Add the Zuvo marketplace (one-time)
claude plugin marketplace add greglas75/zuvo-marketplace

# Install
claude plugin install zuvo
```

### Codex

```bash
git clone https://github.com/greglas75/zuvo.git
cd zuvo
./scripts/install.sh codex
```

### Cursor

```bash
git clone https://github.com/greglas75/zuvo.git
cd zuvo
./scripts/install.sh cursor
```

### All platforms (for plugin developers)

```bash
./scripts/install.sh
```

## Update

### Claude Code

```bash
claude plugin marketplace update zuvo-marketplace
claude plugin update zuvo@zuvo-marketplace
```

Or enable auto-updates:
```…
