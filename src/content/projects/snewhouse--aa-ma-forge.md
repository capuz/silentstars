---
repo: "snewhouse/aa-ma-forge"
name: "aa-ma-forge"
description: "AA-MA: Advanced Agentic Memory Architecture"
readmeQualityOk: true
url: "https://github.com/snewhouse/aa-ma-forge"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [73, 27]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2026-04-05T13:04:07Z"
lastCommitAt: "2026-10-20T08:49:14Z"
lastReleaseAt: "2026-10-01T11:08:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 59
maintainers: ["snewhouse"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b8d55e56c594fee0db879111c9b71801f9c633304ba96ee27fe2679beac2bb9/snewhouse/aa-ma-forge"
---

Structured external memory for Claude Code, so your AI agent stops forgetting what it's done.

**Current version:** v0.17.0 — Codebase analysis: assess-codebase, understand-codebase v1, aa-ma-analysis CLI

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
claude-code/        Skills (incl. the…
