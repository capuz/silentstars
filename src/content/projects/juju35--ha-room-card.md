---
repo: "juju35/ha-room-card"
name: "ha-room-card"
description: "Compact Lovelace cards for Home Assistant, room by room: sensors, lights, plugs, environment readings and an overview of every room"
readmeQualityOk: true
url: "https://github.com/juju35/ha-room-card"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["custom-card", "dashboard", "door-sensor", "hacs", "home-assistant", "homeassistant-frontend", "lights", "lovelace", "lovelace-card", "presence-detection"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-24T00:35:46Z"
lastCommitAt: "2026-10-26T02:58:48Z"
lastReleaseAt: "2026-10-24T14:17:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 49
maintainers: ["juju35", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b8c394255e25fdf5ac23b0b68556cff4ee0e80d0d45da3e4aba5a2fc73db8ea/juju35/ha-room-card"
---

# ha-room-card

Compact Lovelace cards for Home Assistant, **room by room**: sensors, lights, plugs, environment readings, and an overview of every room. Add a card, pick a room, it finds the entities by itself.

| Card | Type | What it shows |
|---|---|---|
| [Overview](#overview) | `custom:room-overview-card` | Every room at a glance: one tile per room, tap a room to unfold its sensors, lights and plugs. |
| [Sensors](#sensors) | `custom:room-sensors-card` | Leak, door, window, opening and presence sensors of a room: what is open comes first, with how long it has been open. |
| [Sensors mini](#sensors-mini) | `custom:room-sensors-mini-card` | The same sensors on two lines, with a zoom to the full card. |
| [Lights](#lights) | `custom:room-lights-card` | Lights of a room: tap to toggle, drag to dim, turn everything off from the header. |
| [Plugs](#plugs) | `custom:room-switch-card` | Smart plugs of a room with their power draw: what is on comes first, the most power-hungry first. |
| [Environment](#environment) | `custom:room-environment-card` | Temperature, humidity, air quality, noise and light level of a room, coloured by comfort. |
| [Environment mini](#environment-mini) |…
