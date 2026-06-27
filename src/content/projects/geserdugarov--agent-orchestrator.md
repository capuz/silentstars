---
repo: "geserdugarov/agent-orchestrator"
name: "agent-orchestrator"
description: "Orchestrator for automatic monitoring and agentic development in a bunch of GitHub projects"
url: "https://github.com/geserdugarov/agent-orchestrator"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agents", "claude", "claude-code", "codex", "codex-cli", "github", "openai", "python"]
stars: 5
forks: 1
openIssues: 4
closedIssues: 264
watchers: 0
contributors: 4
recentReleases: 5
createdAt: "2026-04-25T08:01:15Z"
lastCommitAt: "2026-06-27T06:23:41Z"
lastReleaseAt: "2026-06-23T03:51:05Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 67
maintainers: ["pichaautobot", "geserdugarov", "imhy"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9fcf4ca98bdacbaabfae1c43af8d3a2b56da507961a8f24b92bce28ebe7c12e/geserdugarov/agent-orchestrator"
---

# GitHub issue-driven workflow runner

This agent orchestrator turns local coding-agent CLIs (`codex`, `claude`) into a hands-off implementer + reviewer loop. File an issue, and the orchestrator decomposes it if needed, spawns the dev agent in an isolated git worktree, opens a PR, runs a fresh reviewer pass, and pings the HITL handles when the PR is ready for a human to merge.

State lives entirely in the issue itself — one workflow label plus one pinned JSON comment — so progress is visible on GitHub and the orchestrator can be restarted without losing context. It is meant for solo or small-team setups that already have a `codex` or `claude` login and want autonomy without standing up a separate planner, queue, or database.

The analytics dashboard shows every tick, agent run, verification, and PR outcome, so you can see what the orchestrator is doing and why. Built-in usage and cost reporting show which repos, issues, models, and workflow stages drive spend.

For deeper implementation details, use the references below.

| Topic | Link | Covers |
|---|---|---|
| Architecture | [`docs/architecture.md`](docs/architecture.md) | Process model, agent model, push model, module map |
|…
