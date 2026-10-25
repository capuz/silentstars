---
repo: "ImperialAutomation/claude-code-toolkit"
name: "claude-code-toolkit"
description: "Claude Code skills for GitHub issue management, PR workflows, and development utilities"
readmeQualityOk: true
url: "https://github.com/ImperialAutomation/claude-code-toolkit"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [70, 30]
stars: 10
forks: 3
openIssues: 45
closedIssues: 52
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-29T18:23:49Z"
lastCommitAt: "2026-10-25T08:39:44Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 90
undervaluedScore: 57
maintainers: ["JanKeijzer"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2162098990c3410276dd94067bc949e1ea2a4806d5e9eb8eeb2ae15b11172aa/ImperialAutomation/claude-code-toolkit"
---

# Claude Code Toolkit

A collection of [Claude Code](https://docs.anthropic.com/en/docs/claude-code) skills, a global CLAUDE.md, and a project template for GitHub issue management, PR workflows, and development utilities.

## Philosophy

This toolkit separates concerns into four layers:

- **Skills** define **procedures** — the steps to follow when performing a task (e.g., how to implement an issue, how to decompose work)
- **Agents** define **constrained roles** — specialized sub-agents with restricted tool access for specific domains (e.g., read-only infrastructure analysis, deployment-scoped automation)
- **Rules** define **contextual policies** — standards that load only when relevant files are being edited (e.g., test quality rules load only for test files, documentation standards only for .md files)
- **CLAUDE.md** defines **global policies** — the standards and conventions that apply to every conversation (e.g., permission workarounds, code quality, communication preferences)

Rules keep the global CLAUDE.md lean by moving context-specific instructions out of the always-loaded file. Skills and agents reference policies from CLAUDE.md and rules rather than duplicating them.…
