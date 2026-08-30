---
repo: "srcfl/ftw"
name: "ftw"
description: "FTW — local-first home energy coordination for solar, batteries, grid, and EV charging."
readmeQualityOk: true
url: "https://github.com/srcfl/ftw"
homepage: "https://ftw.sourceful.energy"
language: "Go"
languages: ["Go"]
languagePcts: [75]
topics: ["battery-storage", "energy-management", "ev-charging", "golang", "home-assistant", "home-energy-management", "lua", "raspberry-pi", "self-hosted", "solar-energy"]
stars: 16
forks: 10
openIssues: 24
closedIssues: 71
watchers: 2
contributors: 15
recentReleases: 0
createdAt: "2026-04-12T15:47:50Z"
lastCommitAt: "2026-08-30T09:26:19Z"
lastReleaseAt: "2026-04-16T17:15:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 54
maintainers: ["frahlg", "dependabot[bot]", "HuggeK"]
openGraphImageUrl: "https://opengraph.githubassets.com/c04ac1dad39d01539b15d85be911799b4aa1112e73ca6b07b68a22e30c174ea2/srcfl/ftw"
discussionCount: 4
---

# FTW

> Local-first home energy coordination.

FTW coordinates solar, batteries, grid power, EV charging and thermal assets
on a Raspberry Pi or Linux host. The safety-critical runtime is one Go binary,
hardware integrations are sandboxed Lua drivers, and an optional Python/CVXPY
optimizer handles long-horizon planning.

The control path stays on the local network. Cloud price, weather and device
integrations degrade independently; they are not required for safe local
operation.

FTW Community is Apache-2.0 software maintained by Sourceful Energy and project
contributors. Community help is best effort. See [SUPPORT.md](https://github.com/srcfl/ftw/blob/HEAD/SUPPORT.md) for
the boundary between community use and separate commercial services.

## Architecture

FTW has three explicit modules:

- **Core** owns configuration, telemetry, state, safety, dispatch, API and UI.
- **Drivers** translate vendor protocols and power signs in isolated Lua VMs.
- **Optimizer** proposes plans over a versioned contract; core validates every
  result and keeps a Go fallback.

This separation lets drivers and the optimizer evolve independently without
moving safety authority out of core. New module…
