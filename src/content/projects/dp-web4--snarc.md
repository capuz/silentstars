---
repo: "dp-web4/snarc"
name: "snarc"
description: "Salience-gated memory for Claude Code — captures what matters, forgets what doesn't, consolidates patterns while sleeping"
readmeQualityOk: true
url: "https://github.com/dp-web4/snarc"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [53, 27]
topics: ["agentic", "agents", "ai", "claude", "claude-code", "developer-tools", "llm", "memory", "plugin"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-15T04:06:38Z"
lastCommitAt: "2026-07-31T06:29:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 51
maintainers: ["dp-web4", "eantones"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad10d939a51ca7bcac76cb5ed98c12f713a6d7fd54d6377c7dc70ea53563cf7c/dp-web4/snarc"
---

# SNARC

Salience-gated memory for Claude Code.

Captures what matters, forgets what doesn't, consolidates patterns while sleeping.

> Formerly "snarc" — renamed to SNARC to avoid collision with an existing project. SNARC is the mechanism itself: **S**urprise, **N**ovelty, **A**rousal, **R**eward, **C**onflict.

## What's new (v0.3.x)

**Conversation capture** — the biggest change. Previous versions only observed tool calls: edits, commands, searches. We discovered that after hundreds of sessions, SNARC's memory was "Bash → Bash → Bash (51×)" and "focused work on file.py" — mechanics without meaning. The actual value of a session — the insights, the reframes, the decisions, the "wait, damping should not be a thing" moments — lived in the conversation and vanished at compaction. The new `PreCompact` hook reads the full conversation transcript before it's compressed and stores semantically salient turns. The mind, not just the hands.

**Deep dream and auto-promote on by default.** Both were opt-in, both are now on. We're in R&D — the goal is observing what SNARC learns, not gatekeeping it. Deep dream runs at every session end. Identity facts auto-promote to Tier 3 so they influence…
