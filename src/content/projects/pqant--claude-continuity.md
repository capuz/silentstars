---
repo: "pqant/claude-continuity"
name: "claude-continuity"
description: "Zero-touch session rotation and supervision for Claude Code"
readmeQualityOk: true
url: "https://github.com/pqant/claude-continuity"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["ai", "ai-agents", "ai-coding", "anthropic", "automation", "claude", "claude-code", "cli", "context-rotation", "developer-tools"]
stars: 27
forks: 0
openIssues: 13
closedIssues: 48
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-16T20:00:16Z"
lastCommitAt: "2026-11-12T11:43:56Z"
lastReleaseAt: "2026-11-10T09:12:52Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 86
undervaluedScore: 45
maintainers: ["pqant"]
openGraphImageUrl: "https://opengraph.githubassets.com/395d207168ee6deeef5d0d5a08036425727156c9f815e460874b536c07c32884/pqant/claude-continuity"
---

# cc-continuity

Zero-touch session rotation and supervision for Claude Code.

**Why it exists.** Long sessions die when the context window fills up, and local LLMs make it worse: their window is fixed and small, and the built-in compaction (`/compact`, auto-compact) is a lossy one-shot summary. With a small model it silently drops decisions, rejected approaches and the exact stopping point, and every compaction then summarizes a summary, so the drift compounds. cc-continuity exists to give long work room to breathe inside the window: at a safe threshold it rotates the session with a structured, validated handoff instead of a lossy summary.

The goal is to let an agent drive a planned project end-to-end, from 0 to done, with a human involved only when the agent is truly blocked. This repository is the proof of concept: it was developed with cc-continuity itself, and the full development history is in this git log.

cc-continuity watches the context ratio and, when it crosses a threshold, rotates the session with no user action:

1. the agent finishes the current step,
2. cc-continuity makes it write a validated handoff,
3. the git tree is snapshotted non-invasively…
