---
repo: "affandar/PilotSwarm"
name: "PilotSwarm"
description: "Durable execution runtime for GitHub Copilot SDK agents"
readmeQualityOk: true
url: "https://github.com/affandar/PilotSwarm"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [58, 38]
stars: 8
forks: 6
openIssues: 10
closedIssues: 5
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2026-03-06T00:39:44Z"
lastCommitAt: "2026-08-13T05:16:02Z"
lastReleaseAt: "2026-03-24T06:26:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 84
undervaluedScore: 53
maintainers: ["affandar"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa6e3e2a0b9d3d49a81279b6cf8aa6c665d8a93c98c070188037f32cdcc3b685/affandar/PilotSwarm"
---

# PilotSwarm

> **Experimental** — This project is under active development and not yet ready for production use. APIs may change without notice.

> **Latest release: v0.5.38** — Sessions now carry up to five named canvases, agents can present an existing canvas without redrawing it, the portal gains proxy authentication and a more capable canvas/diagnostics workspace, and OpenAI-compatible BYOK models preserve their declared capabilities.

A durable execution runtime for [GitHub Copilot SDK](https://github.com/github/copilot-sdk) agents. Crash recovery, durable timers, session dehydration, and multi-node scaling — powered by [duroxide](https://github.com/microsoft/duroxide). Just add a connection string.

For the fastest first run, start with the [Docker Quickstart Guide](https://github.com/affandar/PilotSwarm/blob/HEAD/docs/quickstart/docker.md).

See [CHANGELOG.md](https://github.com/affandar/PilotSwarm/blob/HEAD/CHANGELOG.md) for release notes.

## Builder Agents

If you are building layered apps on top of PilotSwarm, this repo now ships distributable builder-agent templates you can copy into your own repository:

- [Builder Agent…
