---
repo: "cellcortex/homebridge-yeelighter"
name: "homebridge-yeelighter"
description: "Homebridge plugin for Yeelights - special focus on supporting features of ceiling lights"
readmeQualityOk: true
url: "https://github.com/cellcortex/homebridge-yeelighter"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 106
forks: 23
openIssues: 7
closedIssues: 115
watchers: 6
contributors: 15
recentReleases: 0
createdAt: "2019-11-10T20:37:47Z"
lastCommitAt: "2026-10-09T18:55:42Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 27
maintainers: ["ageorgios", "lastowl"]
openGraphImageUrl: "https://opengraph.githubassets.com/7488f9003c80a589870aceb3b718a23e09b8ad06cc27936beadb858ea021bee4/cellcortex/homebridge-yeelighter"
---

Yeelight support for Homebridge: https://github.com/nfarina/homebridge with particular focus on supporting the special features of ceiling lights.

There are many plugins for Yeelight already. This one is unique (so far) in supporting the
background light that some yeelights have and also has a diffent approach to the moonlight mode (exposed as just another range for brightness).

If a light supports a background light, it will show up as a secondary service in the light accessory. If a light supports moonlight mode, the brightness will be adjusted so that the lower 50% are reserved for moonlight brightness and the upper 50% are using the "normal" mode. While this makes it simple to control the moonlight mode, it has the small drawback that setting the color-temperature will only work when in the normal light mode. I could not find an API to set the color temperature of the moonlight.

### 🏠 [Homepage](https://github.com/cellcortex/homebridge-yeelighter)

## Prerequisites

- node ^16.14.2
- homebridge ^1.4.0

## Installation

You might want to update npm through: `$ sudo npm -g i npm@latest`

Install homebridge through: `$ sudo npm -g i homebridge`

Follow the instructions on…
