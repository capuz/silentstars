---
repo: "srcfl/ftw"
name: "ftw"
description: "FTW — a local-first home energy management system (EMS) for solar, batteries, grid, and EV charging."
readmeQualityOk: true
url: "https://github.com/srcfl/ftw"
homepage: "https://ftw.sourceful.energy"
language: "Go"
languages: ["Go"]
languagePcts: [83]
topics: ["battery-storage", "energy-management", "ev-charging", "golang", "home-assistant", "home-energy-management", "lua", "raspberry-pi", "self-hosted", "solar-energy"]
stars: 23
forks: 12
openIssues: 72
closedIssues: 214
watchers: 1
contributors: 15
recentReleases: 7
createdAt: "2026-04-12T15:47:50Z"
lastCommitAt: "2026-11-10T14:49:38Z"
lastReleaseAt: "2026-09-24T08:12:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 94
undervaluedScore: 59
maintainers: ["frahlg", "segran2", "davmoz"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3b20b940012e7c8152dfeedb366932bc88f6986f9efed946f805e1233361d2f/srcfl/ftw"
discussionCount: 5
---

# FTW

> Local-first home energy coordination.

FTW is a local-first home energy management system (EMS). It coordinates
solar, batteries, grid power, EV charging and thermal assets on a Raspberry Pi
or Linux host. The safety-critical runtime is one Go binary,
hardware integrations are sandboxed Lua drivers, and a compiled Energyplan
worker handles long-horizon planning.

The control path stays on the local network. Cloud price, weather and device
integrations degrade independently; they are not required for safe local
operation.

## Product direction

FTW should make mixed equipment simple to live with: useful first-day
planning, reliable daily charging, fast and honest live feedback, and
structured access for agents. The default experience should need few choices
while keeping expert controls and Lua drivers available.

[VISION.md](https://github.com/srcfl/ftw/blob/HEAD/VISION.md) is the product direction set by Fredrik.
[docs/roadmap.md](https://github.com/srcfl/ftw/blob/HEAD/docs/roadmap.md) lists the outcomes and proof needed. These
include goals that have not shipped; the capability list below is separate.

Sourceful Energy maintains FTW Community under AGPL-3.0-only with…
