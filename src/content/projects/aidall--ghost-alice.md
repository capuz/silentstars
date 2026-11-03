---
repo: "AidALL/ghost-alice"
name: "ghost-alice"
description: "Ghost-ALICE OS: agent governance for intent, scope, evidence, and runtime state"
readmeQualityOk: true
url: "https://github.com/AidALL/ghost-alice"
homepage: "https://aidall.github.io/ghost-alice/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["agent-governance", "agent-runtime", "claude", "claude-code", "codex"]
stars: 16
forks: 3
openIssues: 2
closedIssues: 11
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-06-06T11:45:58Z"
lastCommitAt: "2026-11-03T11:14:54Z"
lastReleaseAt: "2026-10-01T19:28:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 55
maintainers: ["garlicvread"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2e3f6d5a285f22657012316d1d9da603949f634b81737d9927f8a915d70688d/AidALL/ghost-alice"
---

# Ghost-ALICE OS

[🇺🇸 English](https://github.com/AidALL/ghost-alice/blob/HEAD/README.md) | [🇰🇷 한국어](https://github.com/AidALL/ghost-alice/blob/HEAD/README_ko.md)

Ghost-ALICE OS is an agent governance layer for AI work. It keeps intent, boundaries, evidence, and runtime state inspectable across supported agent runtimes.

It is not a prompt library, a chatbot wrapper, or a standalone agent runtime. It runs on top of existing agent runtimes as the operating layer that makes agent work auditable before the agent claims completion.

## Version 0.5.1

[Website](https://aidall.github.io/ghost-alice/) · [Architecture](https://github.com/AidALL/ghost-alice/blob/HEAD/architecture.md)

Core 0.5.1 uses the current response-route and completion contract. Apache-2.0.

## How governed work proceeds

The response model keeps the user's objective and constraints, performs authorized work, and judges whether contrary evidence affects a required result or dependency. It corrects affected work when needed and preserves supported results and unresolved requirements.

See the [Core architecture](https://github.com/AidALL/ghost-alice/blob/HEAD/architecture.md) for the standalone flow and [session…
