---
repo: "adidshaft/atria"
name: "atria"
description: "Free local WHOOP strap companion: iOS app and BLE toolkit for local-only strap usage."
url: "https://github.com/adidshaft/atria"
language: "Swift"
languages: ["Swift", "Python"]
languagePcts: [64, 27]
stars: 6
forks: 2
openIssues: 8
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-15T19:15:30Z"
lastCommitAt: "2026-06-28T02:03:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 43
maintainers: ["adidshaft"]
openGraphImageUrl: "https://opengraph.githubassets.com/a442296fdec4eb19299f53f6ca99972c40cf658ba9448203f8e74194ed30bd60/adidshaft/atria"
---

</p>

<h1 align="center">Atria</h1>

  Free local strap data, for life.
</p>

</p>

  ·
  ·
  ·
</p>

  For queries reach out to <a href="https://x.com/adidshaft">adidshaft</a>.
</p>

Atria is an open-source iOS app and BLE research toolkit for using a compatible WHOOP strap locally, without the official WHOOP cloud, account, subscription, or app. It is designed for people who own unused straps and want honest local metrics: live heart rate, saved RR windows, strain, sleep/workout evidence, HealthKit export, and protocol research.

This project is independent and unaffiliated with WHOOP. It does not bypass paid cloud features. It talks to your own hardware over Bluetooth LE and keeps data on device.

</p>

## Current Status

Atria is usable for local backup and honest diagnostics on a physical iPhone. For the current single-strap build, personal baseline is the end-user ready HRV/recovery state; external-reference validation remains an optional/internal gate for HealthKit HRV and research claims, not a required user task.

| Gate | Area | Status | What works | What remains |
|---|---|---:|---|---|
| A | BLE connection and live collection | Partial | Fresh scan/connect, standard…
