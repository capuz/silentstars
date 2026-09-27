---
repo: "ElectricJack/agent-queue"
name: "agent-queue"
description: "Task queue and orchestrator for AI coding agents. Manage Claude Code agents from Discord — auto-recovers from rate limits, runs overnight, queues work across projects."
readmeQualityOk: true
url: "https://github.com/ElectricJack/agent-queue"
homepage: "https://electricjack.github.io/agent-queue/"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["ai-agents", "asyncio", "claude-code", "developer-tools", "discord-bot", "python", "task-queue"]
stars: 8
forks: 2
openIssues: 2
closedIssues: 4
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-02-18T07:29:46Z"
lastCommitAt: "2026-09-27T09:19:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 58
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/b5406cc9191bca57e61c2819e9685ee71272dc9b750473eb53920e493105c6f4/ElectricJack/agent-queue"
---

# Agent Queue

**Agent Queue (AQ) is a background service that runs AI coding agents against your
Git repositories.**

You describe work as *tasks*. AQ decides which task is ready, gives it an isolated Git
worktree, starts a coding-agent CLI inside a terminal session, records what came back,
and carries the finished branch toward your default branch under a policy you choose.
Tasks, dependencies, gates, sessions and outcomes live in PostgreSQL rather than in one
model's context, so a crashed or exhausted agent is a retry rather than the end of the
job.

It is for people who already run coding-agent CLIs by hand and want a queue, isolation
and an audit trail around them — not a hosted product. The interesting unit here is not a
chat with one agent but a local software factory: an operational system that expresses
work, assigns it to a fleet, observes it and keeps it moving. AQ is under active
development; expect to read logs and use `aq doctor`.

## Start here

**→ [Install and start Agent Queue](https://github.com/ElectricJack/agent-queue/blob/HEAD/docs/tutorials/install.md)**, then
[run your first isolated…
