---
repo: "auerbachb/claude-code-config"
name: "claude-code-config"
description: "CLAUDE.md config that teaches Claude Code to collaborate with CodeRabbit for automated PR planning, code review loops, and merge workflows"
readmeQualityOk: true
url: "https://github.com/auerbachb/claude-code-config"
language: "Shell"
languages: ["Shell"]
languagePcts: [93]
topics: ["ai-code-review", "automation", "claude", "claude-code", "code-review", "coderabbit", "developer-tools", "github-workflow"]
stars: 5
forks: 1
openIssues: 104
closedIssues: 1011
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-02-28T17:58:38Z"
lastCommitAt: "2026-11-08T10:42:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 66
maintainers: ["auerbachb"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe39172c7d7cd31fa54c6a6b3de2c392e795c544d704072eb16a525ca64483f3/auerbachb/claude-code-config"
---

# Claude Code Configuration

A reusable `CLAUDE.md` configuration that teaches [Claude Code](https://docs.anthropic.com/en/docs/claude-code) to collaborate with [CodeRabbit](https://coderabbit.ai), Cursor BugBot, [Greptile](https://greptile.com), and CodeAnt for automated PR planning, code review, and merge workflows — all driven from your terminal. Includes a full PM skill family for project orchestration across threads.

## Table of Contents

- [What You Get](#what-you-get)
- [Getting Started](#getting-started)
- [Slash Commands](#slash-commands)
- [Rule Files](#rule-files)
- [Hook Scripts](#hook-scripts)
- [Scripts Library](#scripts-library)
- [Config Files](#config-files)
- [GitHub Actions](#github-actions)
- [Architecture](#architecture)
- [Documentation map](#documentation-map)
- [Per-Project Override](#per-project-override)
- [FAQ](#faq)
- [Troubleshooting](#troubleshooting)
- [Customizing](#customizing)
- [Contributing](#contributing)
- [License](#license)

---

## What You Get

After setup, Claude Code will automatically:

- **Plan before coding** — Triggers `@coderabbitai plan` on new issues, builds its own plan in parallel, then merges both into one implementation spec…
