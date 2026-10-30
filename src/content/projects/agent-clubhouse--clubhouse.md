---
repo: "Agent-Clubhouse/Clubhouse"
name: "Clubhouse"
description: "A place to hang out with all your BFFs"
readmeQualityOk: true
url: "https://github.com/Agent-Clubhouse/Clubhouse"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 7
forks: 4
openIssues: 157
closedIssues: 693
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2026-02-14T17:20:28Z"
lastCommitAt: "2026-10-30T10:22:51Z"
lastReleaseAt: "2026-03-01T05:41:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 67
maintainers: ["masra91", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/47a3d9d815d507d303f4bf56621135f8a700f67e15f8b86c831196d8b608e797/Agent-Clubhouse/Clubhouse"
discussionCount: 1
---

# Clubhouse

A desktop app for managing AI coding agents across your projects. Clubhouse wraps CLI-based coding agents — Claude Code, GitHub Copilot CLI, OpenCode — in a native Electron shell with a unified interface to spawn, monitor, and orchestrate them across all your projects simultaneously.

## Philosophy

Three ideas shape how Clubhouse is built and how contributions are evaluated:

**Agent-first development.** Agents are first-class contributors. Each durable agent gets its own git worktree, standby branch, and isolated configuration. Agents branch, implement, validate, and open PRs — the same workflow a human follows. The codebase, tooling, and documentation should be equally useful to both human and agent contributors. See the [full principles](https://github.com/Agent-Clubhouse/Clubhouse/blob/HEAD/PRINCIPLES.md) for details.

**Extreme bias for test coverage.** Every PR must include tests. Unit and component tests run on all three platforms (macOS, Windows, Linux) in CI. End-to-end tests run Playwright against the built app bundles in development Electron on every platform. Packaged executable validation is a separate check. The Annex dual-instance E2E suite launches…
