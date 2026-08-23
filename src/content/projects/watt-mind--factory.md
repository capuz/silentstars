---
repo: "watt-mind/factory"
name: "factory"
description: "The factory that builds software — and itself. A runtime for self-improving agentic loops: the tracker is the control plane, git is the truth, CI is the gate."
readmeQualityOk: true
url: "https://github.com/watt-mind/factory"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [59, 37]
topics: ["agent-orchestration", "agentic-workflows", "ai-agents", "automation", "autonomous-agents", "bun", "ci-cd", "claude-code", "codex", "coding-agents"]
stars: 9
forks: 0
openIssues: 76
closedIssues: 41
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-03T19:47:32Z"
lastCommitAt: "2026-08-23T04:08:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 41
maintainers: ["hdkiller"]
openGraphImageUrl: "https://opengraph.githubassets.com/049b8e6fbf7b28aec873b2a4043ca84c3a2c89e05b84a122c9e14ae660c0ff90/watt-mind/factory"
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
