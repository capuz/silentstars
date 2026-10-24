---
repo: "jcdendrite/claude-config"
name: "claude-config"
description: "Portable Claude Code global configuration: custom skills, PreToolUse hooks, and a custom statusline. Runs on Linux, macOS, WSL."
readmeQualityOk: true
url: "https://github.com/jcdendrite/claude-config"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 5
forks: 3
openIssues: 132
closedIssues: 213
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-11T20:45:32Z"
lastCommitAt: "2026-10-24T08:21:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 64
maintainers: ["jcdendrite"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d7ba779da5f3532eed7a88b752d2ebab3dd9413aec4300b9d3e870f1007000d/jcdendrite/claude-config"
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
- [Requirements](#requirements)
- [What this installs](#what-this-installs)
- [Configuration](#configuration)
  - [Worktree enforcement](#worktree-enforcement)
  - [Autonomous shipping](#autonomous-shipping)
  - [PR cost…
