---
repo: "prime-radiant-inc/superpowers-evals"
name: "superpowers-evals"
description: "Behavioral eval lab (Quorum) for the superpowers project that drives real coding-agent CLIs (Claude, Codex, Gemini, Kimi, and more) through a QA agent and grades them on workflow compliance against scenario criteria and deterministic post-checks."
url: "https://github.com/prime-radiant-inc/superpowers-evals"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["ai-agents", "coding-agents", "evals", "python", "superpowers"]
stars: 32
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-05-13T18:56:29Z"
lastCommitAt: "2026-06-25T01:31:50Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 34
maintainers: ["obra", "arittr"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6789e0c9da5376f4c3afb9e822cf2c8551790ede940099ada132a7f81252bcb/prime-radiant-inc/superpowers-evals"
---

# Superpowers Evals

Behavioral eval lab for [superpowers](https://github.com/obra/superpowers).
**Quorum** drives real coding-agent CLIs (Claude, Codex, Antigravity, Gemini,
Kimi, OpenCode, Pi, and Copilot) through a Gauntlet QA agent and grades them
against scenario acceptance criteria plus deterministic post-checks.

Code, CLI, paths, and inline prose all use lowercase `quorum`; the capitalized
form `Quorum` appears in headings and the actor table.

This is not a generic benchmark suite. It is an eval lab for workflow
compliance: skill triggering, worktree behavior, subagent coordination,
verification reflexes, review quality, and cost-shaping patterns.

## Safety Model

quorum has two very different execution modes:

- **Static/unit checks** are safe for public CI. They run `biome`, `tsc`, and
  `bun test`. They do not call model APIs and do not launch agent CLIs.
- **Live evals** are trusted-maintainer operations. They launch Claude Code,
  Codex CLI, Antigravity CLI, Gemini CLI, Kimi Code, OpenCode CLI, Pi CLI, or
  Copilot CLI in permissive modes and collect raw transcripts, tool calls,
  filesystem state, and session logs.

Public CI must stay on the static/unit side of…
