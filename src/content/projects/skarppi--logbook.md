---
repo: "skarppi/logbook"
name: "logbook"
description: "Flight logbook from OpenTX logs"
readmeQualityOk: true
url: "https://github.com/skarppi/logbook"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2019-01-06T01:12:19Z"
lastCommitAt: "2026-10-03T22:04:48Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 51
maintainers: ["skarppi"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e885553931847a987708532b6fa15cbcf1a1545d78504b01008fb256f831dfd/skarppi/logbook"
---

# OpenTX Logbook

Logbook for radio controlled (RC) flights from OpenTX logs.

---

Web application to keep track of your RC flights flown with transmitter running [OpenTX](https://www.open-tx.org) or [EdgeTX firmware](https://edgetx.org) such as Radiomaster TX16S. Logbook entries are generated automatically from log files uploaded to the service and can be enriched with additional details manually such as batteries used or journal.

Current functionalities include

- Graphs presenting flights and flight times
- Watch DVR or other related videos for flights
- Visualize full telemetry similar to OpenTX Companion Log Viewer
- Battery cycles, state and graphs
- Manage planes
- Manage locations
- iOS app for easy syncing of new flights

### OpenTX Log Files

In your transmitter setup "SD Logs" Special Function to enable logging of telemetry values to SD card while flying.

I use two-stage arming. Switch SA is a safety switch and also turns on the logging, then switch SB arms the quadcopter. Flight timer starts when the quad is armed and throttle is increased. A new flight is created when logging is turned off for more than 30 seconds and restarted again.

After flying is done, sync…
