---
repo: "hombach/ioBroker.go-e-charger"
name: "ioBroker.go-e-charger"
description: "Adapter for reading go-eCharger data. Adapter creates some states and updates sequentially."
readmeQualityOk: true
url: "https://github.com/hombach/ioBroker.go-e-charger"
homepage: "https://github.com/ioBroker/AdapterRequests/issues/330"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["go-echarger", "wallbox"]
stars: 9
forks: 2
openIssues: 3
closedIssues: 32
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-06-27T21:10:01Z"
lastCommitAt: "2026-07-05T06:32:47Z"
lastReleaseAt: "2021-03-06T12:47:21Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 79
maintainers: ["hombach", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d9bc858f1491e5236e5d64d6d583869bd464c36d2d6e06296f2f62be77aa38f/hombach/ioBroker.go-e-charger"
---

# ioBroker.go-eCharger

## Versions

## ioBroker adapter for go-e Charger EV wallboxes

This adapter integrates one or more go-e Charger wallboxes into your ioBroker home automation. It cyclically polls each wallbox via its local HTTP API, provides all relevant data as ioBroker states, and lets you control charging directly from your smart home.

For more information about the go-e Charger hardware, visit the manufacturer's website: [go-e GmbH](https://go-e.com).

### Features

- supports multiple go-e Chargers within a single adapter instance
- monitoring of car state, charging power, charging current, grid phases, and energy statistics
- **ChargeNOW** – start charging immediately at a configurable current
- **ChargeManager** – automatic PV surplus charging: the charging current is continuously adjusted to the available solar power, taking house consumption and the state of charge of your home battery into account. Charging of your EV can be delayed until the home battery has reached a configurable minimum state of charge.

    > **Note:** PV surplus charging is currently designed for controlling a **single** charger. When ChargeManager is enabled on multiple chargers at the same…
