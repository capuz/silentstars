---
repo: "hunterjm/ac-infinity-hacs"
name: "ac-infinity-hacs"
description: "Custom Integration for AC Infinity Controllers"
readmeQualityOk: true
url: "https://github.com/hunterjm/ac-infinity-hacs"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 53
forks: 33
openIssues: 14
closedIssues: 3
watchers: 12
contributors: 1
recentReleases: 1
createdAt: "2023-07-15T02:27:33Z"
lastCommitAt: "2026-09-19T08:14:06Z"
lastReleaseAt: "2026-09-19T08:14:09Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure", "fork_magnet"]
healthScore: 74
undervaluedScore: 28
maintainers: ["hunterjm"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd2e80d72939c2135f14687827c9d2b11d85d6f76691901e35bc40fb11cd0509/hunterjm/ac-infinity-hacs"
---

# AC Infinity Bluetooth

Custom Home Assistant integration for AC Infinity controllers and connected UIS loads.

Requires Home Assistant 2026.9+ and `ac-infinity-ble==1.0.0`. Home Assistant installs
the pinned library requirement automatically. For development, build and install
a matching library wheel before setting up the integration.

## Installation and updates

Install **AC Infinity** through HACS, then restart Home Assistant and add the
integration under Settings → Devices & services. If it is not in your HACS
catalog, add `https://github.com/hunterjm/ac-infinity-hacs` as a custom repository
with category **Integration**.

HACS discovers updates from published GitHub releases. Install the offered update
and restart Home Assistant; existing config entries migrate automatically.
Home Assistant versions older than 2026.9 must remain on integration 1.x.

## Controls

- Existing controller fan and temperature/humidity/VPD entities retain their IDs.
- Detected physical fan ports expose fan speed and power controls.
- Detected lights expose power and brightness controls.
- Outlets expose manual power controls.
- Humidifiers, dehumidifiers, heaters and air conditioners expose…
