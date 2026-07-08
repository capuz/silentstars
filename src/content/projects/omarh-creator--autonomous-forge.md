---
repo: "OmarH-creator/Autonomous-Forge"
name: "Autonomous-Forge"
description: "This repo is automated and is fully AI-built and AI-maintained project that continuously plans, codes, tests, and improves itself."
readmeQualityOk: true
url: "https://github.com/OmarH-creator/Autonomous-Forge"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 140
forks: 4
openIssues: 2
closedIssues: 0
watchers: 19
contributors: 1
recentReleases: 0
createdAt: "2026-07-06T21:12:03Z"
lastCommitAt: "2026-07-08T05:45:07Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 67
undervaluedScore: 20
maintainers: ["OmarH-creator"]
openGraphImageUrl: "https://opengraph.githubassets.com/d336b558eba6e3be8e37e3cf374233cce0f8cc0943f98a91818943acdd739579/OmarH-creator/Autonomous-Forge"
---

# Autonomous Forge

Autonomous Forge is an open-source, AI-built and AI-maintained developer tool for safely running repository-native autonomous software-improvement loops.

The project starts as a local-first Python CLI. Its first goal is deliberately small: provide a `forge` command that can grow into dry-run planning, task selection, validation reporting, and durable repository memory without requiring uncontrolled autonomous behavior.

For a visual orientation to the current read-only workflow and its safety boundary, see [the project overview](https://github.com/OmarH-creator/Autonomous-Forge/blob/HEAD/docs/OVERVIEW.md).

## Current Autonomous Status

Autonomous Forge is pre-alpha. Latest autonomous run: AUTO-043 shipped `forge executor-gate --format text|json`, a read-only precondition gate that consumes the command-execution handoff and saved-history readiness before any validation executor exists. The gate reports `future_dry_run_eligible`, explicit allow reasons, block reasons, gated command candidates, required future confirmations, and the result-record target while keeping `command_execution_allowed=false`. Product behavior remains local-first: the CLI still does not…
