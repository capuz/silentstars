---
repo: "mitre/aloha-water-treatment"
name: "aloha-water-treatment"
description: "Aloha Water Treatment: a simulated water treatment plant with Modbus and BACnet, built as a target for MITRE Caldera for OT"
readmeQualityOk: true
url: "https://github.com/mitre/aloha-water-treatment"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [65, 26]
topics: ["bacnet", "ics", "modbus", "ot", "scada", "caldera", "caldera-for-ot", "operational-technology", "simulator", "water-treatment"]
stars: 18
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 16
recentReleases: 7
createdAt: "2026-01-07T23:04:13Z"
lastCommitAt: "2026-11-13T18:31:39Z"
lastReleaseAt: "2026-11-13T18:31:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 74
undervaluedScore: 41
maintainers: ["SamirBou", "FelixHertweck", "wal-ky"]
openGraphImageUrl: "https://opengraph.githubassets.com/6654c8507bdf38ba30aee8e1844016210fbe17cbad0ddb9028d99677574c9454/mitre/aloha-water-treatment"
---

# Aloha Water Treatment

A simulated water treatment plant with Modbus and BACnet process control, built as a target for [MITRE Caldera™ for OT](https://github.com/mitre/caldera-ot). For a walkthrough, read [Caldera for OT Aloha Water Treatment: More Virtual OT Sandboxes!](https://medium.com/@mitrecaldera/caldera-for-ot-aloha-water-treatment-more-virtual-ot-sandboxes-080dc437da89).

## Authors

Originally developed by Samir Boussarhane for a UH Manoa workshop.

In collaboration with MITRE Caldera™ for OT ([ot@mitre.org](mailto:ot@mitre.org)).

Aloha Water Treatment is intended to grow open source collaboration in OT. We encourage forks and pull requests with improvements, new features, deployment notes, documentation, and tests.

## Description

The plant pumps water into a 10,000 liter treatment tank and out to clean water output. A PLC runs the process and exposes it over Modbus TCP or BACnet/IP, and a web HMI shows the tank, the flows, the pump and valves, and the alarms, and lets an operator control them.

* In automatic mode the PLC keeps the tank near two thirds full, raising the inflow the further the level is below that target, and stops draining when the level falls to…
