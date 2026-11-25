---
repo: "Timdebruijn/heliograph"
name: "heliograph"
description: "ESP32 firmware that autodiscovers solar inverters over their native RS485 protocols and republishes them as MQTT/Home Assistant, Modbus TCP, REST and Prometheus"
readmeQualityOk: true
url: "https://github.com/Timdebruijn/heliograph"
homepage: "https://timdebruijn.nl/en/projects/heliograph/"
language: "C++"
languages: ["C++"]
languagePcts: [89]
topics: ["esp32", "growatt", "home-assistant", "homeassistant", "modbus", "mqtt", "rs485", "solar", "growatt-inverter", "inverter"]
stars: 12
forks: 1
openIssues: 5
closedIssues: 16
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-22T15:08:17Z"
lastCommitAt: "2026-11-25T13:24:01Z"
lastReleaseAt: "2026-07-24T08:35:13Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 94
undervaluedScore: 49
maintainers: ["Timdebruijn"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e778316b30a4759dc52b8f57266a427d5c6384c1bedb045c89f5a021544e01f/Timdebruijn/heliograph"
discussionCount: 0
---

# Heliograph

### Your solar inverter on your own network. Over RS485: no cloud, no stick, no account.

Open-source firmware for a ~€25 ESP32-S3 board. It serves your inverter's data on your own
network as MQTT with Home Assistant discovery, Modbus TCP, REST and Prometheus.

**[Flash it from your browser →](https://timdebruijn.github.io/heliograph/)** · [Will it work with my inverter?](#will-it-work-with-my-inverter) · [Releases](https://github.com/Timdebruijn/heliograph/releases) · [Docs](https://github.com/Timdebruijn/heliograph/blob/HEAD/docs/README.md)

> **Status:** pre-1.0, one maintainer. One inverter family is Stable today; the rest have a map and
> need a tester. Check [your inverter](#will-it-work-with-my-inverter) before you order a board.

**Built for** owners of an RS485 inverter whose portal died, whose Wi-Fi stick keeps dropping out,
or who simply want their data in Home Assistant, evcc or Grafana without a vendor in between.
**Not for** Hoymiles microinverters (use [OpenDTU](https://github.com/tbnobody/OpenDTU)),
Wi-Fi-only inverters, or anyone who needs plug-and-play support for their model today.
