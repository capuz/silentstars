---
repo: "TorMap/tormap"
name: "tormap"
description: "World map of Tor relays. Travel in time, filter and search."
readmeQualityOk: true
url: "https://github.com/TorMap/tormap"
homepage: "https://tormap.org"
language: "TypeScript"
languages: ["TypeScript", "Kotlin"]
languagePcts: [49, 47]
topics: ["tor", "map", "worldmap", "torproject", "geolocation", "kotlin", "onion", "hidden", "service", "leaflet"]
stars: 29
forks: 3
openIssues: 2
closedIssues: 51
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2021-09-11T17:49:04Z"
lastCommitAt: "2026-11-22T11:52:09Z"
lastReleaseAt: "2024-05-05T23:35:32Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 63
maintainers: ["claude", "renovate[bot]", "JuliusHenke"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/405445739/eeafcce8-cd98-4739-85b7-fc00bec72bd9"
fundingLinks: ["GITHUB:https://github.com/JuliusHenke"]
---

TorMap shows where the thousands of public Tor relays are hosted. The backend processes the descriptors from the
[Tor Project archive](https://metrics.torproject.org/collector/archive/), looks up each relay's location and autonomous
system, and serves the result to a web map.

## Features

- **The whole history:** pick any day since October 2007, or follow the number of relays over time on the timeline.
- **Grouping:** group relays by family, autonomous system (AS), country or coordinates, or show a density heatmap.
- **Filters:** show exit, guard or other relays, require relay flags, or only show the relays with the highest consensus weight.
- **Tor users per country:** color countries by the estimated number of Tor users on that day.
- **Relay details:** search any relay and see its descriptor data, AS and confirmed family members.
