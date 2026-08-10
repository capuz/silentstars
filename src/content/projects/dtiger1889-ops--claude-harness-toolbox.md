---
repo: "dtiger1889-ops/claude-harness-toolbox"
name: "claude-harness-toolbox"
description: "A durable-memory harness for Claude Code: CLAUDE.md + CHECKPOINT.md files, hooks, and skills that survive context resets between sessions."
readmeQualityOk: true
url: "https://github.com/dtiger1889-ops/claude-harness-toolbox"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [94]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-09T21:13:10Z"
lastCommitAt: "2026-08-10T05:05:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 22
maintainers: ["dtiger1889-ops"]
openGraphImageUrl: "https://opengraph.githubassets.com/32fa50037b04b292d82e45e924ee07e8e9a1e95e0e3352d9b552457ec57529de/dtiger1889-ops/claude-harness-toolbox"
---

# Claude Code Harness Toolbox

A tested, empirically-grounded "harness" for [Claude Code](https://claude.com/claude-code):
a small set of files, hooks, and custom skills that give Claude durable memory across
sessions, structural orientation discipline, and on-demand self-correction tools.

**The core problem:** Claude's context window is finite and resets between sessions.
Without a harness, every session starts from scratch — re-reading the same files, with no
reliable way to know what was done, what's open, or where to pick up. This toolbox is the
storage layer: `CLAUDE.md` for stable facts, `CHECKPOINT.md` for compressed mutable state,
hooks that surface and enforce them, and a suite of skills that encode the conventions so
you never re-explain them.

## Quick start

Flip over to the "</> Code" tab in Claude Desktop (or open a fresh Claude Code session),
set the permission mode to Manual or Accept edits for your security, set the model to
Sonnet or Opus, and paste:

> Read this repository and tell me if it will help improve my Claude workspace:
> https://github.com/dtiger1889-ops/claude-harness-toolbox

Claude will ask for your permission to fetch and read this page before it…
