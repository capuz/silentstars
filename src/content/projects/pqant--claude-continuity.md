---
repo: "pqant/claude-continuity"
name: "claude-continuity"
description: "Zero-touch session rotation and supervision for Claude Code"
readmeQualityOk: true
url: "https://github.com/pqant/claude-continuity"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 27
forks: 0
openIssues: 1
closedIssues: 8
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-10-16T20:00:16Z"
lastCommitAt: "2026-11-06T12:14:36Z"
lastReleaseAt: "2026-10-23T15:25:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 42
maintainers: ["pqant"]
openGraphImageUrl: "https://opengraph.githubassets.com/e320efc5d0b042d2a08bc2d32ce38bec3fb111d1a9241effc5db43703bf0eb1d/pqant/claude-continuity"
---

# cc-continuity

Zero-touch session rotation and supervision for Claude Code.

**Why it exists.** Long sessions die when the context window fills up, and local LLMs make it worse: their window is fixed and small, and the built-in compaction (`/compact`, auto-compact) is a lossy one-shot summary. With a small model it silently drops decisions, rejected approaches and the exact stopping point, and every compaction then summarizes a summary, so the drift compounds. cc-continuity exists to give long work room to breathe inside the window: at a safe threshold it rotates the session with a structured, validated handoff instead of a lossy summary.

The goal is to let an agent drive a planned project end-to-end, from 0 to done, with a human involved only when the agent is truly blocked. This repository is the proof of concept: it was developed with cc-continuity itself, and the full development history is in this git log.

cc-continuity watches the context ratio and, when it crosses a threshold, rotates the session with no user action:

1. the agent finishes the current step,
2. cc-continuity makes it write a validated handoff,
3. the git tree is snapshotted non-invasively…
