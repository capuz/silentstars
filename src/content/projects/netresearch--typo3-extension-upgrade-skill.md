---
repo: "netresearch/typo3-extension-upgrade-skill"
name: "typo3-extension-upgrade-skill"
description: "Agent Skill for systematically upgrading TYPO3 extensions to newer LTS versions | Claude Code compatible"
readmeQualityOk: true
url: "https://github.com/netresearch/typo3-extension-upgrade-skill"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [54, 31]
topics: ["agent-skills", "ai-agent", "open-standard"]
stars: 12
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-12-06T00:27:24Z"
lastCommitAt: "2026-11-08T13:59:45Z"
lastReleaseAt: "2026-01-11T22:30:02Z"
status: "thriving"
tags: []
healthScore: 79
undervaluedScore: 50
maintainers: ["CybotTM", "renovate[bot]", "netresearch-project-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f7a3acf8c76fa837d6ea5e15abca7fb58b20de8096ec6c5e01c4fae3468bc4a/netresearch/typo3-extension-upgrade-skill"
discussionCount: 0
---

# TYPO3 Extension Upgrade Skill

A Claude Code skill for systematically upgrading TYPO3 extensions to newer LTS versions.

**Developed by [Netresearch DTT GmbH](https://www.netresearch.de/)**

## 🔌 Compatibility

This is an **Agent Skill** following the [open standard](https://agentskills.io) originally developed by Anthropic and released for cross-platform use.

**Supported Platforms:**
- ✅ Claude Code (Anthropic)
- ✅ Cursor
- ✅ GitHub Copilot
- ✅ Other skills-compatible AI agents

> Skills are portable packages of procedural knowledge that work across any AI agent supporting the Agent Skills specification.

## Overview

This skill guides extension developers through upgrading TYPO3 extensions (third-party or custom) to newer TYPO3 LTS versions with modern PHP compatibility. It covers:

- **Extension Scanner** - Backend module for diagnosing deprecated/removed APIs
- **Rector** - Automated PHP code migrations
- **Fractor** - Automated non-PHP file migrations (FlexForms, TypoScript, YAML, Fluid)
- **PHPStan** - Static analysis
- **PHPUnit** - Testing framework setup

## Scope

This skill is for **extension developers** upgrading extension code. It does NOT cover:
- Upgrading…
