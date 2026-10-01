---
repo: "snewhouse/aa-ma-forge"
name: "aa-ma-forge"
description: "AA-MA: Advanced Agentic Memory Architecture"
readmeQualityOk: true
url: "https://github.com/snewhouse/aa-ma-forge"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-04-05T13:04:07Z"
lastCommitAt: "2026-10-01T10:23:57Z"
lastReleaseAt: "2026-09-27T06:09:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 57
maintainers: ["snewhouse"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddb8abd0f382270ced0cb962f197356d096250451bdac6aa6ab1160f00045acc/snewhouse/aa-ma-forge"
---

</p>

  Structured external memory for Claude Code, so your AI agent stops forgetting what it's done.
</p>

**Current version:** v0.16.0 — Diagrams from the code: living architecture doc, sigil-checked §13, explorer, MCP diagram tool

## The problem

LLM agents lose context across sessions. They drift from plans, forget decisions, repeat work you've already covered. Every new conversation starts from scratch, and you're back to re-explaining the same architecture, the same constraints, the same goals. It's maddening.

</p>

## What AA-MA is

AA-MA (Advanced Agentic Memory Architecture) gives Claude Code a structured external memory built from five specialised files. Each file segments a different kind of knowledge: strategy, facts, decisions, execution state, and audit history. Built for long-horizon, multi-session tasks where context loss kills productivity.

## What's in this repo

```
docs/spec/          The specification (v2.1), quick reference, team guide,
                    and Claude Code foundations reference
docs/narrative/     The origin story (how and why AA-MA exists)
docs/templates/     Ready-to-use templates for all 9 AA-MA file types (5 standard + 4 optional)…
