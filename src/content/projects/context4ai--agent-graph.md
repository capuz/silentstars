---
repo: "context4ai/agent-graph"
name: "agent-graph"
description: "Graph Engineering for Agent Skills: a specification and toolchain for dynamically discovering context and building observable, testable, and recoverable agent workflows."
readmeQualityOk: true
url: "https://github.com/context4ai/agent-graph"
homepage: "https://www.npmjs.com/package/@c4a/agent-graph"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [71, 23]
topics: ["agent-graph", "agent-skills", "graph-engineering", "ai-agents", "typescript", "workflow-engine"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-07-22T10:36:45Z"
lastCommitAt: "2026-08-17T04:18:45Z"
lastReleaseAt: "2026-08-17T04:21:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 67
undervaluedScore: 38
maintainers: ["qiansc"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1308693057/5d5ce2b1-28b0-4224-83e7-00f7d38c0d60"
discussionCount: 1
---

# Agent Graph

Agent Graph is a work-contract layer for Agent Skills. You describe a workflow as a small graph of steps; at runtime it reads the current facts and tells an Agent what to do next, which files to read for that step, and what proves the step is done. It never calls a model itself.

Agent Graph coordinates the work, not the Agents. It does not invoke models, assign Agent identities, transport shared mutable state, or schedule parallel workers. Existing Agents and hosts consume its fact-grounded Routes and hold the execution boundary.

Agents usually have enough knowledge. The harder problem is knowing which part applies now, which action is legal next, what proves that action is complete, and where to resume after an interruption. Making the prompt longer does not solve this reliably.

> Context should be discovered, not accumulated. The plan is explicit; the path is selected from current reality.

> **When to use it:** Not every Skill needs a Graph; keep a short, single-session task in `SKILL.md`. Adopt Agent Graph when a host can supply trustworthy external facts and the work truly needs verifiable completion, cross-session recovery, or testable routing and human…
