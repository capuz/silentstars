---
repo: "juju35/ha-cover-card"
name: "ha-cover-card"
description: "Lovelace cards for covers: shutters, blinds, gates and garage doors"
readmeQualityOk: true
url: "https://github.com/juju35/ha-cover-card"
homepage: "https://juju35.github.io/homeassistant-projects/projects/ha-cover-card/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["blinds", "cover", "home-assistant", "lovelace-card", "lovelace-custom-card", "shutters", "custom-card", "hacs", "homeassistant", "lovelace"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-11-13T02:07:53Z"
lastCommitAt: "2026-11-27T16:27:49Z"
lastReleaseAt: "2026-11-17T22:08:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 61
maintainers: ["juju35", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d6f0cc72321323b3bf962f708c8e905b75dabb7cb3fde57a3e74a7f405bdd83/juju35/ha-cover-card"
---

# ha-cover-card

Lovelace cards for Home Assistant to control **covers of any integration**: roller shutters, hinged shutters, venetian blinds, roller shades, curtains, awnings, pergolas, garage doors, sliding and swing gates, barriers, doors, roof windows and dampers. Each cover is drawn as a little animated scene that follows its device class and position, and the picture itself is the position slider: drag it the way the cover opens (up for a shutter, down for an awning, sideways for curtains and a sliding gate).

The cards read the `cover` domain only, so they work with every integration that provides covers (Somfy, Shelly, Z-Wave, Zigbee, KNX, template covers…). What they show follows the features each cover reports: no position slider for a cover that cannot be set to a position, a tilt slider only for slats that tilt, no Stop button for a cover that cannot stop.
