---
repo: "Wibias/github-delivery"
name: "github-delivery"
description: "Agent Skill: GitHub ship loop for issues/PRs (fix reviews, watch CI, security, merge thanks)"
readmeQualityOk: true
url: "https://github.com/Wibias/github-delivery"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [91]
stars: 5
forks: 0
openIssues: 0
closedIssues: 12
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-30T18:24:46Z"
lastCommitAt: "2026-08-19T04:06:49Z"
lastReleaseAt: "2026-08-14T08:13:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 64
maintainers: ["Wibias"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c517c249c4dcb0c6b4cccb708b90a391dca4f9967e69faabc8a0f0d677d09f1/Wibias/github-delivery"
---

# github-delivery

### GitHub delivery for agents, from intent to verified merge.

**Say the outcome, not the orchestration.**

`github-delivery` turns natural-language requests into evidence-backed GitHub workflows for planning, issue work, implementation, PR publication, review, CI, stacks, backports, verified merges, and release maintenance.

[Start here](#start-here) · [Capabilities](#what-you-can-ask-it-to-own) · [How it works](#how-it-works) · [Safety](#safety-model) · [Install & update](#installation-and-maintenance) · [Watchdog](#agent-progress-watchdog) · [Workflow map](#workflow-reference) · [Development](#development-and-verification)

</div>

> [!WARNING]
> **Active development.** The complete issue/PR lifecycle and core safety architecture are implemented, but the project is not yet 100% production-ready. I currently consider it roughly **80% of the way there**. See [Current state](#current-state).

> [!IMPORTANT]
> **Natural language is the public API.** The Node scripts, policy modules, evaluators, mutation broker, and optional Authority host are internal safety/evidence machinery. You normally do not invoke them yourself.

</p>

## Start here

### Install…
