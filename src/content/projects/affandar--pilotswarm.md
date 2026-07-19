---
repo: "affandar/PilotSwarm"
name: "PilotSwarm"
description: "Durable execution runtime for GitHub Copilot SDK agents"
readmeQualityOk: true
url: "https://github.com/affandar/PilotSwarm"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [60, 35]
stars: 8
forks: 5
openIssues: 8
closedIssues: 5
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-03-06T00:39:44Z"
lastCommitAt: "2026-07-19T06:11:43Z"
lastReleaseAt: "2026-03-24T06:26:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 52
maintainers: ["affandar"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce2351f641c3ab242f7a2b0dbd5149af91904b8d00fd3b12eb06fce262bd5689/affandar/PilotSwarm"
---

# PilotSwarm

> **Experimental** — This project is under active development and not yet ready for production use. APIs may change without notice.

> **Latest release: v0.5.16** — Durable client-message deduplication and retry isolation: a bounded 20-id LRU prevents duplicate turns across replay, attempted outbox envelopes remain immutable when retries overlap fresh sends, model reasoning/context metadata flows through session and child surfaces, and parent/child prompt coordination is hardened. New sessions use orchestration `1.0.63`, with `1.0.61` and `1.0.62` frozen for replay compatibility.

A durable execution runtime for [GitHub Copilot SDK](https://github.com/github/copilot-sdk) agents. Crash recovery, durable timers, session dehydration, and multi-node scaling — powered by [duroxide](https://github.com/microsoft/duroxide). Just add a connection string.

For the fastest first run, start with the [Docker Quickstart Guide](https://github.com/affandar/PilotSwarm/blob/HEAD/docs/quickstart/docker.md).

See [CHANGELOG.md](https://github.com/affandar/PilotSwarm/blob/HEAD/CHANGELOG.md) for release notes.

## Builder Agents

If you are building layered apps on top of PilotSwarm, this…
