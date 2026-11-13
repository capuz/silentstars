---
repo: "mitre/grid-watch"
name: "grid-watch"
description: "Grid Watch: a simulated electrical grid outstation with DNP3, built as a target for MITRE Caldera for OT"
readmeQualityOk: true
url: "https://github.com/mitre/grid-watch"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["caldera", "dnp3", "ics", "operational-technology", "ot", "power", "scada", "simulator", "caldera-for-ot"]
stars: 13
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 21
recentReleases: 6
createdAt: "2026-05-01T01:49:01Z"
lastCommitAt: "2026-11-13T18:31:08Z"
lastReleaseAt: "2026-11-13T18:31:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 36
maintainers: ["SamirBou"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f6f7510a765f87eb44552202780151519aaf7d752d597511705d9c016731350/mitre/grid-watch"
---

# Grid Watch

A simulated electrical grid outstation with DNP3 process control, built as a target for [MITRE Caldera™ for OT](https://github.com/mitre/caldera-ot). For a walkthrough, read [Caldera for OT — Grid Watch: A Virtual DNP3 Electrical Grid Sandbox](https://medium.com/@mitrecaldera/caldera-for-ot-grid-watch-a-virtual-dnp3-electrical-grid-sandbox-761e8c83ab77).

## Authors

Created by University of Hawaii at Manoa students: Yueming Guo, Lewen Lin, Myra Angelica Ortigosa, and Justin Smith.

In collaboration with MITRE Caldera™ for OT ([ot@mitre.org](mailto:ot@mitre.org)).

Grid Watch is intended to grow open source collaboration in OT. We encourage forks and pull requests with improvements, new features, deployment notes, documentation, and tests.

The students' original version is preserved in the [v1.0.0 release](https://github.com/mitre/grid-watch/releases/tag/v1.0.0).

## Description

A generator feeds a load through a breaker. The PLC is a DNP3 outstation: it reports the bus voltage and power deficit as analog inputs and the breaker and generator states as binary inputs, and it accepts control commands on two binary outputs. The HMI polls the outstation over DNP3 and…
