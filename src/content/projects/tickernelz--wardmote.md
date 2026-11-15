---
repo: "tickernelz/wardmote"
name: "wardmote"
description: "Self-hosted control plane for a team of AI coding agents: org chart, tasks, decisions, approvals, budgets and an audit trail. One Node.js install with embedded PostgreSQL, built around the OMP agent runtime."
readmeQualityOk: true
url: "https://github.com/tickernelz/wardmote"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 227
recentReleases: 10
createdAt: "2026-09-24T13:05:46Z"
lastCommitAt: "2026-11-15T10:24:06Z"
lastReleaseAt: "2026-09-27T06:55:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 59
maintainers: ["tickernelz", "ArkhiMuttaqina"]
openGraphImageUrl: "https://opengraph.githubassets.com/4fb727073e6f5286388df50c45f4176f1e1a5d7d18e79c6b244bada8308fed03/tickernelz/wardmote"
---

Wardmote is a self-hosted control plane that runs a team of AI coding agents as a company: an org chart, tasks and decisions, approvals, scheduled heartbeats, budgets and an audit trail. One Node.js server holds an embedded PostgreSQL and serves a React board, and every agent is a local [Oh My Pi (OMP)](https://github.com/can1357/oh-my-pi) process that reports back through Wardmote's own MCP endpoint.

## Why Wardmote

- **One install, nothing else to run.** `npx @tickernelz/wardmote@latest install --yes` puts a verified, versioned payload in your home directory. PostgreSQL is embedded; there is no Docker, no external database and no cloud account.
- **Agents that work like staff.** Each agent has a role, a manager, a task queue and a budget. Work moves through tasks, decisions and approvals that you see in one inbox, on a phone or a desktop.
- **OMP-first.** The `omp_local` adapter is built in. Onboarding finds OMP on the machine, lists the models it reports and creates the first agent; Agent defaults sets OMP behaviour for every agent at once.
- **Safe to operate.** Updates back up the database first and roll back on a failed health check. Service restarts drain or adopt live…
