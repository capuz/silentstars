---
repo: "mitre/wildcatdam"
name: "wildcatdam"
description: "Wildcat Dam: a simulated dam controller with Modbus, built as a target for MITRE Caldera for OT"
readmeQualityOk: true
url: "https://github.com/mitre/wildcatdam"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [74, 25]
topics: ["caldera", "caldera-for-ot", "dam", "ics", "modbus", "operational-technology", "ot", "scada", "simulator"]
stars: 14
forks: 7
openIssues: 3
closedIssues: 1
watchers: 3
contributors: 18
recentReleases: 2
createdAt: "2025-04-30T20:06:16Z"
lastCommitAt: "2026-11-13T18:31:38Z"
lastReleaseAt: "2026-11-13T18:33:21Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 39
maintainers: ["SamirBou"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0d1c2dca37ac218a034f657fb4cdebed0f6f538eea2110ce7a1b4ca34c25d5f/mitre/wildcatdam"
---

# Wildcat Dam

A simulated dam controller with Modbus process control, built as a target for [MITRE Caldera™ for OT](https://github.com/mitre/caldera-ot). For a walkthrough, read [Announcing Wildcat Dam: Your Virtual OT Protocol Sandbox!](https://medium.com/@mitrecaldera/caldera-for-ot-c4ot-announcing-wildcat-dam-your-virtual-ot-protocol-sandbox-074f68d1d0d1).

## Authors

Created by University of Arizona INSuRE students: Dalia Castro, Perla Gutierrez, Samuel Moreno, and Ben Trout.

In collaboration with MITRE Caldera™ for OT ([ot@mitre.org](mailto:ot@mitre.org)).

Wildcat Dam is intended to grow open source collaboration in OT. We encourage forks and pull requests with improvements, new features, deployment notes, documentation, and tests.

The students' original version is preserved in the [v1.0.0 release](https://github.com/mitre/wildcatdam/releases/tag/v1.0.0).

## Description

Wildcat Dam models a reservoir with three release doors. Water flows in at the surge rate, and each open door releases a share of the water every second. The PLC opens and closes the doors as the water level crosses its thresholds, and exposes the door controls, thresholds and levels over Modbus/TCP.…
