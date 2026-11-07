---
repo: "estcarisimo/smoking-pi"
name: "smoking-pi"
description: "Latency monitoring on Raspberry Pi using SmokePing, Grafana, InfluxDB"
readmeQualityOk: true
url: "https://github.com/estcarisimo/smoking-pi"
homepage: "https://estcarisimo.github.io/smoking-pi/"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 6
forks: 0
openIssues: 0
closedIssues: 14
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-07-08T19:57:08Z"
lastCommitAt: "2026-11-07T22:51:46Z"
lastReleaseAt: "2026-08-09T17:43:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 83
maintainers: ["estcarisimo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/596c9d3712c0b6c5d6c7c6f5d52718d1452d41f5955254e4c887f0c6c53f7a91/estcarisimo/smoking-pi"
---

# 🥧 Smoking Pi

Continuous network monitoring for your home or lab, in a box. Smoking Pi wraps [SmokePing](https://oss.oetiker.ch/smokeping/) in Docker Compose and grows with you: from a single container reading a YAML file, to a full stack with a web admin, Grafana dashboards, a time-series database, alerting that leads with a verdict, and an MCP server so an AI assistant can answer *"how's my internet?"* from months of recorded history instead of a live `ping`. Built for a Raspberry Pi (ARM64) and runs anywhere Docker does.

## ✨ Features

- 📡 **Continuous measurement**: ICMP latency and loss to every target on a 300 s cycle, plus DNS resolution timing and IPv6 — recorded for months, not sampled once
- 🌐 **HTTP/1.1 vs 2 vs 3**: a HEAD request over each version by separate probes, version enforced, with the bare TCP handshake underneath as the floor — see [docs/http-probes.md](https://github.com/estcarisimo/smoking-pi/blob/HEAD/docs/http-probes.md)
- 🎚️ **Three editions, one setup script**: Basic (YAML), Standard (web admin + PostgreSQL + REST API), Pro (everything + Grafana + InfluxDB/ClickHouse)
- 📊 **Grafana dashboards**: per-target detail with every individual ping,…
