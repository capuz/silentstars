---
repo: "fvadicamo/dev-agent-skills"
name: "dev-agent-skills"
description: "Claude Code skills plugin for Git, GitHub, and skill authoring workflows"
readmeQualityOk: true
url: "https://github.com/fvadicamo/dev-agent-skills"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["ai-coding-agent", "anthropic", "claude-code", "claude-code-plugin", "claude-code-skills", "conventional-commits", "developer-tools", "git", "github", "pull-requests"]
stars: 70
forks: 6
openIssues: 4
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-12-21T18:07:43Z"
lastCommitAt: "2026-08-03T06:45:07Z"
lastReleaseAt: "2026-02-20T17:51:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 23
maintainers: ["fvadicamo"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a49a00e823c7a7eb22b3aa10a55549b3504c90a53c7c2e90a4df82e9815b7d7/fvadicamo/dev-agent-skills"
---

# dev-agent-skills

Agent skills and hooks for development workflows - Git, GitHub, skill authoring, safety guardrails, and public-repo privacy.

These skills are designed for [Claude Code](https://claude.com/claude-code), the CLI tool by Anthropic.

## Why these skills?

Claude Code already knows how to commit, create PRs, and review code. But without structured guidance it tends to:

- Use inconsistent commit formats across a session
- Skip target branch confirmation and create PRs against the wrong branch
- Not search for task documentation or validate task completion before opening a PR
- Suggest labels that don't exist in the project
- Process review comments in random order instead of by severity
- Use the wrong GitHub API syntax for replying to threads (`-f` instead of `--input -`)
- Generate verbose merge messages that clutter the git log
- Merge without verifying all review comments have been addressed

These skills add structured workflows that prevent these issues. They don't replace Claude's capabilities - they guide them through the right sequence of steps.

There are no official Anthropic skills for Git/GitHub workflows. This plugin fills that gap.

## Quick install…
