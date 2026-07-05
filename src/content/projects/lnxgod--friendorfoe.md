---
repo: "lnxgod/friendorfoe"
name: "friendorfoe"
description: "Real-time aircraft & drone identification using AR, ADS-B, Remote ID, and WiFi detection. Vibe coded with Claude. By GAMECHANGERSai."
readmeQualityOk: true
url: "https://github.com/lnxgod/friendorfoe"
language: "Kotlin"
languages: ["Kotlin", "C", "Python"]
languagePcts: [35, 35, 24]
stars: 10
forks: 4
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-03-15T02:35:54Z"
lastCommitAt: "2026-07-05T20:16:52Z"
lastReleaseAt: "2026-04-11T18:59:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 48
maintainers: ["lnxgod", "OhYou-0"]
openGraphImageUrl: "https://opengraph.githubassets.com/c40d5ecc0b6b8b2ecb6a9993b209357acd1c2cc84d05068f4c9a04865ae9afd5/lnxgod/friendorfoe"
---

# Friend or Foe Badge

Pocket RF awareness for Packet Village, and a path from a handheld badge to a
deployable sensor platform.

Friend or Foe started as an Android aircraft and drone identification app. The
current center of gravity is the FoF Badge: a three-board ESP32-S3 handheld
that listens passively for nearby RF evidence, shows the most useful signals on
a small display, and can hand a live feed to Android over USB-C, BLE, local AP,
or a debug bridge.

For the Packet Village talk, the badge is the story: a conference-wearable
privacy and drone awareness device that can also be converted into a fixed
sensor node. Same radios, same policy engine, same Android control surface,
same backend ingest path. Walk around with it during the day; mount it later as
part of a multi-node sensor platform.

> Current tracks: Android/backend/production S3 firmware are on
> `0.64.47-rssi-drone-range`; badge firmware is on
> `0.64.42-badge-listening`. The badge and production sensor fleet intentionally
> move on separate firmware tracks.

## What The Badge Does

- Shows walk-up awareness for privacy and drone signals without needing a cloud
  account, SIM card, or paid API.
- Separates…
