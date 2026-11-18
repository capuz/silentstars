---
repo: "Kannix2005/ha_siedle_python"
name: "ha_siedle_python"
description: "Home Assistant integration for Siedle IQ door stations (SUS2) with SIP doorbell detection and call forwarding"
readmeQualityOk: true
url: "https://github.com/Kannix2005/ha_siedle_python"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["doorbell", "hacs", "home-assistant", "integration", "siedle", "sip"]
stars: 17
forks: 4
openIssues: 6
closedIssues: 21
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2023-01-19T19:31:50Z"
lastCommitAt: "2026-11-18T11:27:36Z"
lastReleaseAt: "2026-05-11T16:20:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 43
maintainers: ["Kannix2005", "arnoudkooi"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed8a5f7e7fd9649780cd5c509a5cbf148b3ad77447fd8d8471331c1198193097/Kannix2005/ha_siedle_python"
---

# Siedle Home Assistant Integration

**[🇩🇪 Deutsche Version](https://github.com/Kannix2005/ha_siedle_python/blob/HEAD/README_DE.md)** | 🇬🇧 English Version

A complete Home Assistant integration for **Siedle IQ door stations (SUS2)** — fully reverse-engineered from the official Siedle app.

## Features

- 🚪 **Door Opener** — Open the door directly from Home Assistant
- 💡 **Door Light** — Control the light at the door station
- 🔔 **Doorbell Detection** — Instant detection via FCM push notifications and SIP INVITE
- 🎙️ **Audio Recording** — Automatic recording of door conversations as WAV file (SRTP → PCM)
- 📱 **SIP Forwarding** — Forward doorbell to external SIP phone (e.g., FritzBox, Asterisk, MicroSIP)
- 🔊 **Bidirectional Audio Bridge** — Two-way communication with the door via external SIP phone (SRTP ↔ RTP)
- ⏱️ **Call Timeout & Fallback** — Automatic timeout per forwarding target, then next target (F1)
- 📞 **Multiple Forwarding Targets** — Comma-separated numbers, tried sequentially (F2)
- 📊 **Call History** — Sensor with last X calls including timestamp, caller, duration (F4)
- 🕐 **Time-based Forwarding** — Forwarding only during specific hours/weekdays (F6)
- 🔈…
