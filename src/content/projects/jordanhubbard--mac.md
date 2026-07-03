---
repo: "jordanhubbard/mac"
name: "mac"
description: "Multi-agent coordinator"
url: "https://github.com/jordanhubbard/mac"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 5
forks: 3
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-18T02:54:02Z"
lastCommitAt: "2026-07-03T12:42:03Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 48
maintainers: ["jordanhubbard"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a52d6ad98ff32f0cf3d441c753198c23f8cddb9b261a50b27cad135a72b1aff/jordanhubbard/mac"
---

# mac

Multi-agent coordinator control plane.

`mac` is a clean-room control plane for fleets of AI agents. It is designed to
sit underneath a human-facing agent runtime such as
`NousResearch/hermes-agent`, OpenClaw, or a compatible system.

Hermes owns conversation, personality, adaptive memory, skills, and messaging
gateways. `mac` owns durable operational truth: tasks, leases, routing,
reviews, evidence, secrets, runtime manifests, rollout state, and audit trails.

The goal is to let a user talk to a persistent Hermes agent with a real
personality and memory, then let that agent create durable work that a broader
fleet can execute, review, publish, and recover.

If you are new to the project, start with the
[MAC Quickstart](docs/getting-started.md). It explains the idea, vocabulary, and
first local commands before fleet deployment.

## Core Contracts

This project provides durable contracts for coordinating a fleet:

- SQLite-backed task ledger with state transitions, leases, history, evidence, dependencies, and recovery.
- Machine and agent registry with capabilities, resources, health, and availability.
- Dispatcher that matches open work to healthy capable agents and…
