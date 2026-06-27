---
repo: "jerryfane/gitmoot"
name: "gitmoot"
description: "A local-first control layer for AI agents"
url: "https://github.com/jerryfane/gitmoot"
homepage: "https://gitmoot.io/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["agentic-skill", "agentic-workflows", "agents", "agentskills", "ai", "ai-agents", "ai-tools"]
stars: 51
forks: 42
openIssues: 19
closedIssues: 111
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-05-20T12:12:25Z"
lastCommitAt: "2026-06-27T00:37:10Z"
lastReleaseAt: "2026-06-18T21:06:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 97
undervaluedScore: 52
maintainers: ["jerryfane", "gaijinjoe"]
openGraphImageUrl: "https://opengraph.githubassets.com/863507d5446b33d40d544ad0b2d2fef93e462d5075a80a5ea20483249475a71c/jerryfane/gitmoot"
---

</p>

# Gitmoot

Local-first multi-agent coordination for GitHub pull request workflows.

Gitmoot lets humans and AI agents collaborate through the place software teams
already audit work: GitHub pull requests. It runs on the user's machine, keeps
workflow state in local SQLite, routes PR comments to registered agent
runtimes, and writes the agent's work back into the repo and PR discussion.

V1 is intentionally local-only. There is no hosted dashboard, webhook receiver,
cloud runner, or remote control plane.

## Why Gitmoot

AI agents can already edit code, review diffs, and run local tools. The hard
part is coordinating that work across sessions without losing the human audit
trail. Gitmoot makes the repository and its pull requests the shared surface:

- PR comments become agent tasks, review requests, retries, and merge signals.
- Local SQLite records agents, repos, jobs, goals, tasks, PRs, and branch locks.
- Runtime adapters keep Codex, Claude Code, Kimi Code, and future runtimes
  behind the same Gitmoot agent model.
- **Orchestra** is Gitmoot's name for structured multi-agent delegation: a
  conductor (coordinator) returns a validated `delegations[]` DAG that Gitmoot…
