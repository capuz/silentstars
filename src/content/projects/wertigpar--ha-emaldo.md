---
repo: "wertigpar/ha-emaldo"
name: "ha-emaldo"
description: "Home Assistant integration for Emaldo home batteries"
readmeQualityOk: true
url: "https://github.com/wertigpar/ha-emaldo"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["emaldo", "home-assistant"]
stars: 14
forks: 6
openIssues: 0
closedIssues: 51
watchers: 1
contributors: 4
recentReleases: 9
createdAt: "2026-04-10T15:36:10Z"
lastCommitAt: "2026-09-19T08:14:25Z"
lastReleaseAt: "2026-09-01T14:34:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 60
maintainers: ["wertigpar"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8fa2a7e8e6d5f08d6cf0bc1e125719a0fb2ac18171bd6e469f7f0b1ebdf87c4/wertigpar/ha-emaldo"
discussionCount: 8
---

# Emaldo Battery — Home Assistant Custom Integration



> **Companion integration:** [Battery Optimizer](https://github.com/wertigpar/ha-battery-optimizer) — an optimizer/control layer that builds better schedules than the internal AI and pushes them to Emaldo via this component (manual-sell arbitrage, PV sell strategy, forced-sell control). Install both for enhanced battery control.

A Home Assistant custom integration for [Emaldo](https://emaldo.com/) battery systems. Provides real-time power monitoring, battery state tracking, schedule visualization, and full override control via services.

## Features

- **Real-time + daily energy sensors** — Battery SoC/capacity/power, grid power/import/export, load power/energy, solar power/energy, EV charge power
- **Schedule visualization** — Exposes the Emaldo AI schedule and override data as chart-ready attributes
- **Override services** — Set time-range overrides, push full 96-slot schedules, or reset to the internal AI plan
- **Advanced services** — EV smart schedule writes, historical solar backfill for Energy Dashboard, and AI Battery Range write
- **Scheduled mode** — Drive the battery's own hourly plan (the one set in…
