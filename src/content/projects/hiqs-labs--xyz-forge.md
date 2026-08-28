---
repo: "HiQS-Labs/XYZ-forge"
name: "XYZ-forge"
description: "XYZ (Forge) lets several AI coding agents — Claude Code, Codex, and agy (Google's Antigravity CLI) — work on the same repo at the same time without overwriting each other's work."
readmeQualityOk: true
url: "https://github.com/HiQS-Labs/XYZ-forge"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [61, 20]
stars: 5
forks: 2
openIssues: 80
closedIssues: 112
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-08-15T22:35:08Z"
lastCommitAt: "2026-08-28T15:36:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 55
maintainers: ["noelsaw1", "arnoldadero"]
openGraphImageUrl: "https://opengraph.githubassets.com/58884698344eb4fc05fb0b5532a6ef78d74face6b475ea4b5062b357d62377ce/HiQS-Labs/XYZ-forge"
---

# XYZ — Multi-Agent Coordination Beta

**XYZ lets several AI coding agents — Claude Code, Codex, and agy (Google's Antigravity CLI) — work
on the same repo concurrently, with path claims and isolated turns that reduce accidental overwrites.**

> **Safety and warranty:** XYZ Forge is provided **“AS IS,” without warranty**, under the applicable
> license. Coding-agent automation is inherently risky: models may choose commands through their own
> runtimes and safety controls, outside the intended harness workflow. XYZ Forge cannot guarantee
> model behavior or data integrity; maintain tested, independent backups and follow industry-standard
> backup and recovery practices.

## What XYZ is

It's built in two layers:

- **`tick`** — the kernel: a tiny local event-log CLI that hands out path-scoped work claims to
  serialize overlapping edits. No server, no API keys, no remote.
- **`relay-automation/`** — the product on top of `tick`: it runs agents in **turns** (one builds,
  another reviews) headlessly, so you can hand a task to Codex or agy and let them iterate toward
  done without babysitting the handoff.

It's a working beta, not a polished product — but the kernel is test-covered…
