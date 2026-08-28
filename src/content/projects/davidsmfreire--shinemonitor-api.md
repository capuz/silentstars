---
repo: "davidsmfreire/shinemonitor-api"
name: "shinemonitor-api"
description: "Shinemonitor rest-API client for multiple languages + HACS Home Assistant integration, to fetch inverter data such as for Growatt, SRNE, Voltronic Axpert, Synapse Max, Hopewind inverters"
readmeQualityOk: true
url: "https://github.com/davidsmfreire/shinemonitor-api"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [68, 24]
topics: ["api", "api-client", "api-gateway", "axpert", "rest-api", "voltronic", "voltronic-axpert-inverters", "growatt", "hacs", "home-assistant"]
stars: 16
forks: 5
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 4
recentReleases: 2
createdAt: "2024-06-01T13:05:57Z"
lastCommitAt: "2026-08-28T12:23:53Z"
lastReleaseAt: "2026-08-28T12:22:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 53
maintainers: ["davidsmfreire", "JawadYzbk"]
openGraphImageUrl: "https://opengraph.githubassets.com/81e31fd9f0589116aae44b4d6461ceb53b1081c2879530a1403e124b4bcd7377/davidsmfreire/shinemonitor-api"
---

# shinemonitor-api

Multi-language clients for the ShineMonitor inverter cloud API
(`api.shinemonitor.com`) — used by WatchPower, SolarPower, and other
vendor apps for Voltronic-derived inverters.

## Layout

| Path                 | What                                                                |
| -------------------- | ------------------------------------------------------------------- |
| `spec/`              | Endpoint catalog + schemas — source of truth for every client       |
| `python/`            | Python client (`shinemonitor-api` on PyPI)                          |
| `rust/`              | Rust client (`shinemonitor-api` on crates.io)                       |
| `go/`                | Go client (`github.com/davidsmfreire/shinemonitor-api/go`, via tag) |
| `mock-server/`       | Cross-language mock used by every client test suite                 |
| `scripts/codegen.py` | Reads `spec/endpoints.yaml`, emits client + mock action files       |
| `custom_components/` | Home Assistant integration (HACS-installable)                       |

Python and Rust release in lockstep from a single `vX.Y.Z` git tag. Go
uses a separate `go/vX.Y.Z` tag (Go module proxy requires the…
