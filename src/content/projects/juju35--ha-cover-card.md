---
repo: "juju35/ha-cover-card"
name: "ha-cover-card"
description: "Lovelace cards for covers: shutters, blinds, gates and garage doors"
readmeQualityOk: true
url: "https://github.com/juju35/ha-cover-card"
homepage: "https://juju35.github.io/homeassistant-projects/projects/ha-cover-card/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["blinds", "cover", "home-assistant", "lovelace-card", "lovelace-custom-card", "shutters", "custom-card", "hacs", "homeassistant", "lovelace"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-11-13T02:07:53Z"
lastCommitAt: "2026-11-18T12:08:03Z"
lastReleaseAt: "2026-11-17T22:08:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 54
maintainers: ["juju35", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2c65501161d8ffcba74d3cf08773bbbe0558cbb3fcf6b28e9b44d64e800f535/juju35/ha-cover-card"
---

# ha-cover-card

Lovelace cards for Home Assistant to control **covers of any integration**: roller shutters, venetian blinds, roller shades, curtains, awnings, garage doors, sliding and swing gates, doors, roof windows and dampers. Each cover is drawn as a little animated scene that follows its device class and position, and the picture itself is the position slider: drag it the way the cover opens (up for a shutter, down for an awning, sideways for curtains and a sliding gate).

The cards read the `cover` domain only, so they work with every integration that provides covers (Somfy, Shelly, Z-Wave, Zigbee, KNX, template covers…). What they show follows the features each cover reports: no position slider for a cover that cannot be set to a position, a tilt slider only for slats that tilt, no Stop button for a cover that cannot stop.
