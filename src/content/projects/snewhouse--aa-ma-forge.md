---
repo: "snewhouse/aa-ma-forge"
name: "aa-ma-forge"
description: "AA-MA: Advanced Agentic Memory Architecture"
readmeQualityOk: true
url: "https://github.com/snewhouse/aa-ma-forge"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [72, 27]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-04-05T13:04:07Z"
lastCommitAt: "2026-10-31T09:46:27Z"
lastReleaseAt: "2026-10-29T09:09:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 60
maintainers: ["snewhouse"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3b4e091ac523f30bbbe3a3d9be44054df9657a31ce8182b7a223acaddd5741d/snewhouse/aa-ma-forge"
---

Structured external memory for Claude Code, so your AI agent stops forgetting what it's done.

**Current version:** v0.18.0 — Code conventions: coding-standards rule, SecOps CI, tests and impact gates

## The problem

LLM agents lose context across sessions. They drift from plans, forget decisions, repeat work you've already covered. Every new conversation starts from scratch, and you're back to re-explaining the same architecture, the same constraints, the same goals. It's maddening.

## What AA-MA is

AA-MA (Advanced Agentic Memory Architecture) gives Claude Code a structured external memory built from five specialised files. Each file segments a different kind of knowledge: strategy, facts, decisions, execution state, and audit history. Built for long-horizon, multi-session tasks where context loss kills productivity.

## What's in this repo

```
docs/spec/          The specification (v2.1), quick reference, team guide,
                    and Claude Code foundations reference
docs/narrative/     The origin story (how and why AA-MA exists)
docs/templates/     Ready-to-use templates for all 9 AA-MA file types (5 standard + 4 optional)
claude-code/        Skills (incl. the slash…
