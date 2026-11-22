---
repo: "cordova-strategy/workflow-gates"
name: "workflow-gates"
description: "Deterministic workflow gates for AI coding agents: hooks that block commits, pushes, and PR comments until the review steps actually ran. Works with Linux, macOS, WSL."
readmeQualityOk: true
url: "https://github.com/cordova-strategy/workflow-gates"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 5
forks: 3
openIssues: 180
closedIssues: 232
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-11T20:45:32Z"
lastCommitAt: "2026-11-22T11:04:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 67
maintainers: ["jcdendrite"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee0e24d6121c78cb263aa0310b3f51587f213d68ee5f4e3a02b2cc775d61c941/cordova-strategy/workflow-gates"
---

# claude-config

**Status:** stable — actively maintained.

Portable [Claude Code](https://claude.ai/claude-code) global configuration: custom skills, PreToolUse hooks that gate `git commit` and PR-comment flows, and a custom statusline. Runs on any Unix-like system (Linux, macOS, WSL). Managed with [GNU Stow](https://www.gnu.org/software/stow/).

Install it to wire in a set of pre-built hooks that gate commits, pushes, and PR comments until explicit review steps are satisfied; a full contribution pipeline from `/plan-it` through `/respond-pr`; a roster of specialist reviewer agents auto-triggered from code review; and a three-tier private-project redaction system that blocks sensitive identifiers before they land in public commits. See [Philosophy](#philosophy) for the design rationale.

Maintained by [Cordova Strategy](https://cordovastrategy.com).
