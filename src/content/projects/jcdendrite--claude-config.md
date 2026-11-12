---
repo: "jcdendrite/claude-config"
name: "claude-config"
description: "Portable Claude Code global configuration: custom skills, PreToolUse hooks, and a custom statusline. Runs on Linux, macOS, WSL."
readmeQualityOk: true
url: "https://github.com/jcdendrite/claude-config"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 5
forks: 3
openIssues: 161
closedIssues: 224
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-11T20:45:32Z"
lastCommitAt: "2026-11-12T05:39:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 66
maintainers: ["jcdendrite", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/21b9c8c0d313b3cf06f91382d1ea63d6bd3f1b09595b44b3b3f4e3fe17e53e61/jcdendrite/claude-config"
---

# claude-config

**Status:** stable — actively maintained.

Portable [Claude Code](https://claude.ai/claude-code) global configuration: custom skills, PreToolUse hooks that gate `git commit` and PR-comment flows, and a custom statusline. Runs on any Unix-like system (Linux, macOS, WSL). Managed with [GNU Stow](https://www.gnu.org/software/stow/).

Install it to wire in a set of pre-built hooks that gate commits, pushes, and PR comments until explicit review steps are satisfied; a full contribution pipeline from `/plan-it` through `/respond-pr`; a roster of specialist reviewer agents auto-triggered from code review; and a three-tier private-project redaction system that blocks sensitive identifiers before they land in public commits. See [Philosophy](#philosophy) for the design rationale.

Maintained by [Cordova Strategy](https://cordovastrategy.com).

## Table of Contents

- [Philosophy](#philosophy)
- [Docs](#docs)
- [Quickstart](#quickstart)
  - [Updating after git pull](#updating-after-git-pull)
- [Requirements](#requirements)
- [What this installs](#what-this-installs)
- [Configuration](#configuration)
  - [Worktree enforcement](#worktree-enforcement)
  - [Autonomous…
