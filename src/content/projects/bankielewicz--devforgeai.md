---
repo: "bankielewicz/DevForgeAI"
name: "DevForgeAI"
description: "AI-powered spec-driven development framework with 26+ specialized subagents, mandatory TDD, immutable architectural constraints, and automated quality gates — enforcing zero technical debt from ideation to release."
url: "https://github.com/bankielewicz/DevForgeAI"
homepage: "https://devforgeai.com/"
language: "Python"
languages: ["Python"]
languagePcts: [76]
topics: ["ai-agents", "ai-development-framework", "ai-orchestration", "claude-code", "cli-tool", "code-quality", "developer-tools", "devops-automation", "quality-gates", "software-architecture"]
stars: 5
forks: 0
openIssues: 20
closedIssues: 392
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2025-10-31T20:44:48Z"
lastCommitAt: "2026-06-28T01:47:25Z"
lastReleaseAt: "2026-06-21T23:14:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 99
undervaluedScore: 69
maintainers: ["bankielewicz"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb06f8b41135851119b22ffbb7b3e6537c6c8c4d7d5530db319fe3b06ce76e36/bankielewicz/DevForgeAI"
discussionCount: 1
---

# DevForgeAI

> **Spec-driven development for Claude Code.**

DevForgeAI is a framework for [Claude Code](https://docs.anthropic.com/en/docs/claude-code) that adds the structure a senior engineer would: tests first, your tech stack, your rules — enforced by hooks at every step. It is language-agnostic, MIT-licensed, and free. There is no telemetry.

**Install** — pick a channel, then run the installer:

```bash
npx devforgeai install        # v2.x stable           (@latest)
npx devforgeai@beta install   # v3.0.0-beta.10 (beta)   (@beta — declarative install engine, dual-mode CLI, update channels, /spec-sprint)
```

> `npm install devforgeai` (or `npm install devforgeai@beta`) only **downloads** the package into `node_modules/` — nothing is set up in your project yet. You must then run the install step: `npx devforgeai install` from your project root, which writes `.claude/`, imports `CLAUDE.md`, and records an install manifest. More: [Installation Options](#installation-options).

---

## What it is, in one paragraph

DevForgeAI is an open-source workflow framework that runs on top of Anthropic's Claude Code. It defines a spec-driven pipeline — **brainstorm → ideate → context →…
