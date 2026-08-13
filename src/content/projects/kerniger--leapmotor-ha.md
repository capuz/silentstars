---
repo: "kerniger/leapmotor-ha"
name: "leapmotor-ha"
description: "Unofficial Home Assistant integration for Leapmotor vehicles"
readmeQualityOk: true
url: "https://github.com/kerniger/leapmotor-ha"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 68
forks: 7
openIssues: 1
closedIssues: 38
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2026-04-27T10:02:34Z"
lastCommitAt: "2026-08-13T05:18:01Z"
lastReleaseAt: "2026-05-01T09:34:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 28
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/1d2d6bbf8ca0de7cf1162e76221c2b1b058faf625c2fac8c2a76b1da028766b0/kerniger/leapmotor-ha"
discussionCount: 9
---

# leapmotor-ha

Unofficial Home Assistant integration for Leapmotor vehicles.

This repository is the cleaned public version of the project. It does not
contain client certificates, private keys, captured tokens, account data,
research logs, or reverse-engineering workfiles.

## Features

- Vehicle state, battery, range, odometer, charging, doors, windows, lock, GPS
  tracker, tire pressure, diagnostics, and mileage/energy history.
- Vehicle READY/ON3 diagnostic based on signal `1258`.
- Native Home Assistant entities for sensors, binary sensors, lock, buttons,
  number, switch, image, and device tracker.
- Remote-control services for supported actions such as lock/unlock, charger
  unlock, climate, windows, trunk, sunshade, charge limit, and send destination
  to navigation.
- Charging schedule switch for enabling/disabling the existing schedule while
  preserving start time, end time, recurrence, and charge limit.
- One-touch vehicle preparation services for immediate and scheduled climate,
  front-seat comfort, steering-wheel heat, mirror heat, and optional navigation
  sync on supported vehicles.
- Comfort controls for supported vehicles: steering wheel heating and mirror…
