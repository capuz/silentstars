---
repo: "scgopi/GraphCode"
name: "GraphCode"
description: "Graph Engineering, simplified — with GraphCode. #graphcode"
readmeQualityOk: true
url: "https://github.com/scgopi/GraphCode"
homepage: "https://graphcode.app"
language: "Swift"
languages: ["Swift"]
languagePcts: [98]
topics: ["agent-orchestration", "ai-agents", "claude-code", "macos", "swift", "ai-coding-agent", "ai-orchestration", "coding-agent", "multi-agent", "parallel-agents"]
stars: 74
forks: 5
openIssues: 19
closedIssues: 85
watchers: 3
contributors: 8
recentReleases: 10
createdAt: "2026-07-26T03:30:32Z"
lastCommitAt: "2026-09-08T08:16:23Z"
lastReleaseAt: "2026-07-29T21:24:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 40
maintainers: ["scgopi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1312466494/91e38e69-a2fb-4d60-bf6e-b400d876a5fd"
discussionCount: 2
---

</p>

</p>

You can run one Claude Code session in a terminal. GraphCode lets you run ten — connected, unattended, and
still yours to attach to and correct mid-run. Each node is a unit of work inside a real CLI coding-agent
session; each edge is a hand-off, message, or spawn between them. They are live terminals, not headless jobs.

**[Graph Engineering, simplified →](https://graphcode.app/)** — the mental model, then the machinery.

## How it works

Every loop type is "an agent runs repeatedly" — they differ in what *you* stop doing:

| Loop type | You hand off | Runs until | For example |
|---|---|---|---|
| **Turn-based** | the check | you end it — each turn pauses for your review inside the session | a refactor you want to eyeball step by step |
| **Goal-based** | the stop condition | a goal is met (optionally a shell predicate exits 0) | "fix the build" — done when `make test` passes |
| **Time-based** | the trigger | you stop it — cadence lives in the prompt (`/loop 1h …`) | hourly issue triage |
| **Composite** | the prompt | a sub-graph of loops runs it end to end | a pipeline that plans its own steps |

Two design choices explain most of the rest:

- **GraphCode schedules…
