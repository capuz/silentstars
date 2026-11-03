---
repo: "lezli01/vincent"
name: "vincent"
description: "Local-first orchestrator for AI coding-agent workloads"
readmeQualityOk: true
url: "https://github.com/lezli01/vincent"
homepage: "https://lezli01.is-a.dev/vincent"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["ai-agents", "claude-code", "codex", "developer-tools", "go", "orchestration", "tui"]
stars: 28
forks: 2
openIssues: 0
closedIssues: 395
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-07-09T12:16:14Z"
lastCommitAt: "2026-11-03T11:15:46Z"
lastReleaseAt: "2026-08-21T09:02:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 52
maintainers: ["lezli01"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2d682482d56597e8cb2aa7b90fb04a816fe3d4e23d2260f18e9871be19e6069/lezli01/vincent"
---

A local-first orchestrator for AI coding-agent workloads — monitor and manage<br>
  many agent tasks on your machine from one central place.

---

  agent's output streaming live. All of it read from the daemon over its localhost API.</em>

## Why vincent?

Coding agents are easy to start and hard to supervise: kick off a handful of
CLI runs across a few repositories and you are soon juggling terminals, losing
transcripts, and hand-managing branches. Vincent turns that into a managed
workload — one place to register repositories, author workflows, launch tasks,
and see what every agent is doing, with work continuing when no client is
attached.

The name is an acronym, and every part of it maps to the system:

- **Vendor-independent** — supports multiple agent providers and CLIs.
- **Control plane** — the daemon owns state, workflows, scheduling, and
  execution.
- **Executing** — vincent runs workloads rather than merely observing them.
- **Native agent tooling** — it invokes locally installed tools such as
  Claude Code, Codex, Cursor, and GitHub Copilot.

Vincent is an operating layer for day-to-day agent work, not a terminal
multiplexer. It combines reusable workflows, durable…
