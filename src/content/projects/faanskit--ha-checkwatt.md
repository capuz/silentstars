---
repo: "faanskit/ha-checkwatt"
name: "ha-checkwatt"
description: "Home Assistant CheckWatt Integration"
readmeQualityOk: true
url: "https://github.com/faanskit/ha-checkwatt"
homepage: "https://github.com/faanskit/ha-checkwatt"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["battery", "frequency", "hacs-integration", "home-assistant", "inverter", "solar", "solar-inverter", "checkwatt"]
stars: 16
forks: 9
openIssues: 3
closedIssues: 36
watchers: 5
contributors: 6
recentReleases: 0
createdAt: "2023-12-14T06:08:35Z"
lastCommitAt: "2026-11-04T11:27:19Z"
lastReleaseAt: "2024-01-23T20:05:50Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 50
maintainers: ["jenshorn"]
openGraphImageUrl: "https://opengraph.githubassets.com/641ffdec6f7fc073974da04a5c08948f30f72246745531f0a38da76cd9fe6318/faanskit/ha-checkwatt"
discussionCount: 8
---

# Home Assistant CheckWatt Custom Integration
This integration uses cloud polling from the CheckWatt EnergyInbalance portal using a reverse engineered private API.

The strategy for this integration is to reduce the amount of sensors published while at the same time maximize the information available and provide them as attributes.

The integration also aims to balance the user needs for information with loads on CheckWatts servers why some data may not always be up-to date.

Out-of-the box, this integration provides two sensors:
- CheckWatt Daily Net Income : Your estimated net income today
- CheckWatt Annual Net Income : Your estimated annual net income
- Battery State of Charge: Your batterys state of charge

The Daily Net Income sensor also have an attribute that provides information about tomorrows estimated Net Income.

# Known Issues and Limitations
1. The integration uses undocumented API's used by the EnergyInBalance portal. These can change at any time and render this integration useless without any prior notice.
2. The monetary information from EnergyInBalance is always provisional and can change before you receive your invoice from CheckWatt.
3. The annual yeild sensor…
