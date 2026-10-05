---
repo: "rabee-elkholy/android-agent-harness"
name: "android-agent-harness"
description: "Stricter proof, not heavier workflow — an Antigravity-first Android AI harness for approval-bound changes, adaptive verification, and evidence-backed delivery."
readmeQualityOk: true
url: "https://github.com/rabee-elkholy/android-agent-harness"
homepage: "https://github.com/rabee-elkholy/android-agent-harness"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "android", "antigravity", "claude-code", "code-review", "copilot", "cursor", "jetpack-compose", "kotlin", "kotlin-multiplatform"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 10
createdAt: "2026-08-23T12:46:15Z"
lastCommitAt: "2026-10-05T10:46:22Z"
lastReleaseAt: "2026-09-01T09:40:17Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 60
maintainers: ["claude", "rabee-elkholy"]
openGraphImageUrl: "https://opengraph.githubassets.com/375a6fe37e96e2cfc50da4c72cea74bf5e2e56a391771a5207d471e971a7c5fd/rabee-elkholy/android-agent-harness"
discussionCount: 2
---

# Android Agent Harness

> **Stricter proof, not heavier daily workflow.**

Android Agent Harness is an approval-first engineering layer for AI coding tools working on real Android codebases.

It gives agents bounded project context, preserves local architecture, verifies what actually changed, runs proportional Android checks, and binds delivery claims to real test/build/device evidence.

The model focuses on engineering. The harness handles workflow state, proof, and safety boundaries.

---

## Why it exists

AI coding agents are good at writing code, but production Android work has a second problem: keeping the agent aligned over time.

As context grows, an agent can infer the wrong local architecture, touch more files than intended, modernize legacy code accidentally, report stale tests/builds as current, miss Room/device/platform risks, or lose track of the approved scope.

Prompt rules help guide behavior. Android Agent Harness moves selected guarantees outside model memory and into deterministic tooling.

---

## What it actually stops

Every row below is a failure mode we have watched AI agents hit on a real Android codebase, and the concrete mechanism that now stops it.…
