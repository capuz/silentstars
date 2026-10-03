---
repo: "bitdynamics-ab/canton-devkit"
name: "canton-devkit"
description: "A toolkit for managing lifecycle and working with Canton LocalNet."
readmeQualityOk: true
url: "https://github.com/bitdynamics-ab/canton-devkit"
homepage: "https://bitdynamics-ab.github.io/canton-devkit/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [75, 22]
topics: ["blockchain", "canton", "cli", "daml", "developer-tools", "docker", "localnet"]
stars: 8
forks: 1
openIssues: 10
closedIssues: 11
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-27T16:32:22Z"
lastCommitAt: "2026-10-03T09:23:29Z"
lastReleaseAt: "2026-06-10T20:13:35Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 50
maintainers: ["zheli", "srikanth-bitdynamics", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5743b9137e0d80a63ce356ee727f18fe62d97ab553daa3d20db26db3351a35fe/bitdynamics-ab/canton-devkit"
---

# canton-devkit

canton-devkit runs a complete local [Canton](https://canton.network/)
network on your machine. You get two participant/validator nodes and a
super-validator node, each with its own party (app-user, app-provider,
super-validator) and JWT. Manage the stack from a single CLI or a local
Web UI.

**Website:** [https://bitdynamics-ab.github.io/canton-devkit/](https://bitdynamics-ab.github.io/canton-devkit/)

**HackCanton Season 3 starter:**
[install → one working example → common breaks](https://bitdynamics-ab.github.io/canton-devkit/hackcanton-s3/).

Requires Docker and Compose v2, about 8 GB of free RAM for Docker, and
about 20 GB of free disk. See the
[installation guide](https://bitdynamics-ab.github.io/canton-devkit/getting-started/)
for details.

## Quick start

```bash
canton-devkit localnet doctor
canton-devkit localnet up demo
canton-devkit localnet status demo
eval "$(canton-devkit localnet env demo)"
canton-devkit localnet down demo
```

`dpm localnet <cmd>` and `canton-devkit localnet <cmd>` are
interchangeable.

## Commands

The command surface covers the full development loop:

| Area              | Commands…
