---
repo: "vilmire/adhdev"
name: "adhdev"
description: "🦦 ADHDev — Agent Dashboard Hub. Monitor & control AI coding agents from a single dashboard. Self-hosted, open-source."
url: "https://github.com/vilmire/adhdev"
homepage: "https://adhf.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["agent", "dashboard", "development", "hub", "ide", "open-source", "remote-control", "adhdev", "acp", "cli"]
stars: 48
forks: 11
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-17T16:55:03Z"
lastCommitAt: "2026-06-28T06:55:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 42
maintainers: ["vilmire"]
openGraphImageUrl: "https://opengraph.githubassets.com/d216a4da4a9158b5451c4b0702047e7b3884221b903525039fa1e5a598975ae6/vilmire/adhdev"
discussionCount: 0
---

# ADHDev Self-Hosted

ADHDev Self-Hosted is a self-hosted control plane for AI coding agent sessions. As agents become long-running background workers, ADHDev gives you one local dashboard to see which session is still running, waiting for approval, finished, stuck, or ready for the next instruction.

It is not trying to replace the underlying IDEs or agents. The goal is to give them a dedicated control surface: inspect active sessions, review chat and terminal state, approve or interrupt work, reopen the right history, and send the next instruction from one place.

For the standalone path, everything runs on your machine as a local daemon with an embedded web dashboard. No cloud account or hosted control plane is required.

Website: https://adhf.dev
Docs: https://docs.adhf.dev

This repo contains the open-source, self-hosted edition:

- the standalone local server and dashboard
- the shared daemon/runtime packages used by both standalone and cloud
- the session-host and terminal-mux stack for hosted CLI runtimes

Hosted cloud operations are not part of this repository.

## Currently Working / Tested

These are the integrations currently working or explicitly tested enough to call…
