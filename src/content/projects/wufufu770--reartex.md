---
repo: "wufufu770/reArtex"
name: "reArtex"
description: "Secondary development of Artex"
originalDescription: "对Artex的二次开发"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wufufu770/reArtex"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [69, 27]
topics: ["ai-agent", "authorization", "go", "nextjs", "pentest", "security", "automation", "llm", "redteam"]
stars: 18
forks: 15
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 9
recentReleases: 10
createdAt: "2026-10-12T15:07:48Z"
lastCommitAt: "2026-11-17T12:14:37Z"
lastReleaseAt: "2026-11-12T19:48:23Z"
status: "newborn"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 80
undervaluedScore: 56
maintainers: ["wufufu770"]
openGraphImageUrl: "https://opengraph.githubassets.com/92b9d545c141891700f1ce1a0548682a72a9283f6a127346922af8c2990585a1/wufufu770/reArtex"
---

# reArtex

This project is a secondary development of artex. Within a stricter security boundary, it also incorporates some of my own understanding.

# Build in Public

If you came across this project on your timeline, feel free to stop and chat. Whether it's a debate about architecture, supplementary verification of a specific defect, or a reminder like “you could make this simpler here,” all of it is valuable input for me. PRs and issues are welcome from fellow practitioners.

## What is it

reArtex is an autonomous penetration testing system driven by LLM multi-agents: a Go monolithic backend (with an embedded Next.js frontend) + PostgreSQL, with agent capabilities provided by the norma SDK.

## What it does

- **Target decomposition**: the planner reads the exploration graph situation, judges targets, and dispatches intents; a worker claims one intent, executes it with real tools, writes new assets, facts, and vulnerabilities back, and then stops.
- **Dual graphs**: an exploration graph (the thinking and progression chain for each task) + an asset graph (a shared ground-truth store of assets across tasks), connected by anchors. You can see from the exploration direction which…
