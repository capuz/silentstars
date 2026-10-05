---
repo: "integry/propr"
name: "propr"
description: "Manage AI coding agents like human engineers. The open-source, self-hosted PR layer for AI software development."
readmeQualityOk: true
url: "https://github.com/integry/propr"
homepage: "https://propr.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["ai", "ai-agents", "antigravity", "automation", "claude", "code-review", "codex", "coding-agent", "devtools", "docker"]
stars: 14
forks: 6
openIssues: 8
closedIssues: 1107
watchers: 1
contributors: 4
recentReleases: 5
createdAt: "2025-05-23T13:09:47Z"
lastCommitAt: "2026-10-04T22:14:25Z"
lastReleaseAt: "2026-08-13T00:09:34Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 85
maintainers: ["integry", "proprdev", "propr-dev[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff2b0218244f58d40f620c11ec817d6bd0f5101542ea6f031eb67e5cfc471649/integry/propr"
discussionCount: 0
postedAt: "2026-09-23T08:56:00.034Z"
---

---

ProPR is a **self-hosted platform** that runs AI coding agents like Claude Code and Codex through the GitHub pull-request workflow. It monitors issues and PRs, runs your choice of agents in isolated Docker containers and Git worktrees on your own server, and drives the complete path from an issue to a reviewed pull request — with a Web UI available for configuration and monitoring and a CLI that doubles as the local control plane. You bring your existing AI subscriptions or API keys; ProPR never marks up tokens.

ProPR builds itself: since May 2025, [2,100+ merged pull requests](https://propr.dev/proof/) across its author's products have shipped through it — including [690+ merged pull requests in this repository](https://github.com/integry/propr/pulls?q=is%3Apr+is%3Amerged).

## Adopt one stage or all of them

ProPR is a set of stages you can adopt independently — use one or all:

- **Plan** — turn an issue or idea into a reviewable implementation plan (Planner Studio)
- **Implement** — add label to an issue and let an agent open a PR for it
- **Review & fix** — drive existing PRs with slash commands (`/review`, `/fix`, `/ultrafix`, model routing)
- **Operate** — monitor…
