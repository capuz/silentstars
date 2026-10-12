---
repo: "oneofthemany/ZigBee-Matter-Manager"
name: "ZigBee-Matter-Manager"
description: "A high-performance Python based ZigBee Matter Manager with Home Assistant support. Features a feature rich front end, MQTT, advanced packet analysis, debugging and mesh visualisation."
readmeQualityOk: true
url: "https://github.com/oneofthemany/ZigBee-Matter-Manager"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [62, 30]
topics: ["home-assistant", "iot-application", "mqtt", "python3", "smart-home", "zha", "zigbee", "zigbee-sniffer", "zigbee2mqtt"]
stars: 20
forks: 2
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2025-12-14T11:56:21Z"
lastCommitAt: "2026-10-12T11:14:45Z"
lastReleaseAt: "2026-08-02T11:25:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 64
maintainers: ["inalambrica"]
openGraphImageUrl: "https://opengraph.githubassets.com/8928479ee959ea87541e3d37eba39af75c4230e476801e5cdb0ec627c0663f74/oneofthemany/ZigBee-Matter-Manager"
discussionCount: 1
---

---

## 📖 Overview

**ZigBee Matter Manager** (ZMM) began as a Zigbee gateway. It still is one — [zigpy](https://github.com/zigpy/zigpy)/[bellows](https://github.com/zigpy/bellows) drives the radio, [python-matter-server](https://github.com/home-assistant-libs/python-matter-server) drives Matter over WiFi and Thread, and everything is published to **Home Assistant** over MQTT Discovery. But the gateway is now the *floor* of the project rather than the whole of it.

Around that core the app has grown into the hub for the house:

- it **runs the heating** — thermal modelling, per-room control, solar gain, radiator sizing;
- it **watches the energy** — Octopus smart-meter consumption, tariffs and live demand;
- it **plays the music** — multi-room Cast/AirPlay/Sonos sync with its own clock discipline, server-side EQ and neural TTS;
- it **blocks the ads** — a network-wide DNS sinkhole running as an always-on sidecar;
- it **tracks the driving** — trips, driving style, driver attribution and cheapest-fuel lookups, with an Android companion app and an Android Auto screen;
- it **knows who's home** — per-user presence from phones, shared geofenced places, and RSSI-based room occupancy…
