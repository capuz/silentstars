---
repo: "watt-mind/factory"
name: "factory"
description: "The factory that builds software — and itself. A runtime for self-improving agentic loops: the tracker is the control plane, git is the truth, CI is the gate."
readmeQualityOk: true
url: "https://github.com/watt-mind/factory"
homepage: "https://watt-mind.github.io/factory/"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [62, 34]
topics: ["agent-orchestration", "agentic-workflows", "ai-agents", "automation", "autonomous-agents", "bun", "ci-cd", "claude-code", "codex", "coding-agents"]
stars: 10
forks: 1
openIssues: 95
closedIssues: 235
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-08-03T19:47:32Z"
lastCommitAt: "2026-08-30T00:45:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 50
maintainers: ["hdkiller", "watt-mind-factory[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe20f574f3927069d7f649f77f727ac7edb812245c123729384c7599eba656ad/watt-mind/factory"
discussionCount: 0
---

# factory

**The factory that builds software — and itself.**

A runtime for self-improving agentic loops. Code is the first product line.

You already have a coding agent that can write a patch. What you probably do
not have is the process around it: something that decides which work is ready,
hands one agent one ticket in one worktree, re-runs the verification command
itself, and holds the merge until CI and a reviewer agree. That is this.

factory drives the coding agents you already use — Claude Code, Codex, Gemini
/ Antigravity, Cursor, Pi. The tracker is the control plane, GitHub is the
source of truth, and CI is the reward signal. Nothing merges because an agent
said it was done; it merges because the tests passed and a reviewer (agent or
human) approved.

<sub>The Graph view of a live instance — every event type, every agent it
routes to, and the recommendation edges between them. This is the whole
control loop as the runtime actually has it registered, not a diagram someone
drew. <a href="docs/screenshots/">More screenshots</a>.</sub>

**Status:** the first commit landed on 2026-08-03. The badge above counts the
pull requests the factory has since merged through its own…
