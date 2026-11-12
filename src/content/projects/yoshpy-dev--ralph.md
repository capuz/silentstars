---
repo: "yoshpy-dev/ralph"
name: "ralph"
description: "Claude Code + Codex harness engineering — scaffold, upgrade, and run opinionated agent harnesses with deterministic hooks, evidence-backed review pipelines, and an autonomous multi-seat org runtime."
readmeQualityOk: true
url: "https://github.com/yoshpy-dev/ralph"
language: "Go"
languages: ["Go"]
languagePcts: [87]
topics: ["agent-harness", "claude-code", "cli", "go", "harness-engineering", "codex", "multi-agent", "openai-codex"]
stars: 8
forks: 0
openIssues: 7
closedIssues: 68
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-24T03:56:01Z"
lastCommitAt: "2026-11-12T04:42:58Z"
lastReleaseAt: "2026-04-13T02:00:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 56
maintainers: ["yoshpy-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/28628099e1bddb2a3b856bccc1e5f5bd814e827932dcb52219a51614c4827b31/yoshpy-dev/ralph"
discussionCount: 0
---

# ralph

**Claude Code + Codex harness engineering.**

Scaffold, upgrade, and run opinionated agent harnesses that work with both Claude Code and OpenAI Codex from the same project — small always-on maps, on-demand skills, deterministic hooks, evidence-backed reviews, and an optional autonomous multi-seat execution surface (org runtime).

[Why ralph?](#why-ralph) &middot; [Install](#install) &middot; [Quick start](#quick-start) &middot; [Features](#features) &middot; [Commands](#commands) &middot; [Operating loop](#operating-loop) &middot; [Org runtime](#org-runtime-autonomous-multi-seat-execution) &middot; [Language packs](#language-packs) &middot; [Portability](#portability)

## Why ralph?

Claude Code gives you a powerful agent, but the default setup is a blank slate. Repo-level harness conventions — rules, skills, hooks, subagents, verification scripts — have to be invented, maintained, and upgraded by hand, and they drift fast across projects.

`ralph` ships those conventions as a distributable, upgradable scaffold.

| | Bare Claude Code | `ralph init` |
|---|:---:|:---:|
| Always-on map (`AGENTS.md` / `CLAUDE.md`) | — | ✓ |
| On-demand skills (spec, plan, implement, verify,…
