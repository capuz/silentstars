---
repo: "green-ecolution/green-ecolution"
name: "green-ecolution"
description: "Smart irrigation for urban trees: LoRaWAN soil sensors reveal which trees actually need water, then the planner turns that into optimized watering routes and fleet schedules for municipal green-space teams."
readmeQualityOk: true
url: "https://github.com/green-ecolution/green-ecolution"
homepage: "https://green-ecolution.de"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [58, 39]
topics: ["axum", "domain-driven-design", "fleet-management", "iot", "irrigation", "mqtt", "postgis", "pwa", "react", "route-optimization"]
stars: 12
forks: 0
openIssues: 36
closedIssues: 435
watchers: 0
contributors: 11
recentReleases: 5
createdAt: "2024-04-02T20:40:47Z"
lastCommitAt: "2026-09-01T08:47:50Z"
lastReleaseAt: "2026-08-24T15:09:22Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 81
maintainers: ["choffmann", "dependabot[bot]", "green-ecolution[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/781144659/2b3524f2-e22e-482f-8dc4-39f2312144fb"
discussionCount: 0
---

<p>
  </a>
</p>

# :seedling: Green Ecolution

Urban green spaces need water - but how much, and when? City maintenance teams often drive fixed routes, watering trees on schedule rather than based on actual need. This wastes water, fuel, and staff time.

**Green Ecolution** changes that. Soil moisture sensors (LoRaWAN) report real-time data to our platform, which calculates optimized watering routes. Teams see exactly which trees need attention, plan efficient routes, and manage their fleet - all in one place.

> [!NOTE]
> **Green Ecolution is up for the community vote of the [Open Source Wettbewerb](https://open-source-wettbewerb.de/) 2026**, run by the Open Source Business Alliance. If this project is useful to you, we would appreciate your support:
> **[Vote for Green Ecolution](https://open-source-wettbewerb.de/voting/green-ecolution/)** — voting is open until 30 September 2026.

## What it does

- 🌳 **Tree management** - Track trees and tree clusters, monitor their watering status
- 📡 **Sensor integration** - Receive soil moisture data via LoRaWAN/MQTT in real-time
- 🗺️ **Route optimization** - Generate efficient watering routes using Valhalla + Streamlet
- 🚛 **Fleet…
