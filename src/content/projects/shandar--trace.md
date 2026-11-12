---
repo: "shandar/trace"
name: "trace"
description: "Every decision traced from intent to ship. A Claude Code plugin that keeps your PRD in sync with what you're actually building."
readmeQualityOk: true
url: "https://github.com/shandar/trace"
homepage: "https://affordance.design"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [66, 34]
topics: ["claude-code", "developer-tools", "hackathon", "opus-4-7", "prd"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-21T17:04:45Z"
lastCommitAt: "2026-11-12T11:36:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 23
maintainers: ["shandar"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1217221376/9b33cfc8-ab0d-4d18-b82b-ab4d9693138b"
---

# TRACE

**Every decision traced from intent to ship.**

TRACE is a Claude Code plugin that turns your PRD into a living document. You write the intent at the start of a project. Claude Code builds against it, and TRACE writes back: logging decisions, surfacing contradicted assumptions, and flagging new open questions as the build moves. At the end of the session, the document matches what shipped, not what you hoped.

---

## Two editions

| | [`trace-prd`](https://github.com/shandar/trace/blob/HEAD/plugins/trace-prd) | [`trace-prd-auto`](https://github.com/shandar/trace/blob/HEAD/plugins/trace-prd-auto) |
|---|---|---|
| How entries are captured | Claude offers entries at natural breaks; `/trace-prd:review` catches up from the conversation and git history | Hooks record every tool event; `/trace-prd-auto:review` turns them into proposals |
| Background proposals after each turn | No | Optional, with your own API key |
| What it ships | Markdown only: one skill, two commands | Hooks and dependency-free Node scripts |
| Requirements | Claude Code | Claude Code and Node.js 18+ |
| Where to get it | Plugin directory, or this repo's marketplace | This repo's marketplace |

Most…
