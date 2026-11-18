---
repo: "meller/laneconductor"
name: "laneconductor"
description: "Local-first control plane for multi-agent AI development — Claude + Gemini with a live Kanban dashboard"
readmeQualityOk: true
url: "https://github.com/meller/laneconductor"
homepage: "https://laneconductor.com"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [68, 32]
topics: ["ai-agents", "claude", "cli", "developer-tools", "gemini", "kanban", "llm", "local-first"]
stars: 14
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-24T01:56:56Z"
lastCommitAt: "2026-11-18T12:07:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 55
maintainers: ["meller"]
openGraphImageUrl: "https://opengraph.githubassets.com/b778764214bf82f799e11ed8ae62d906a673e376fae63b595740e2af82c7a2b3/meller/laneconductor"
---

# LaneConductor

**The conventions of Conductor, the discipline of Superpowers, and a Kanban board: plan, build and review with Claude, with the plans kept as plain files in your git repository.**

LaneConductor is Claude plus git plus a small connector. Each piece of work is a **track**: a folder under
`conductor/tracks/` with `index.md` (state), `spec.md`, `plan.md`, `test.md` and `conversation.md`. Claude manages the
tracks for you (it plans them, works them in lanes, reviews them and merges them), and git keeps the history. There
is no database to run and no background process to keep alive.
