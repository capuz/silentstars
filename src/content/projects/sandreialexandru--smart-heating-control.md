---
repo: "sandreialexandru/Smart-Heating-Control"
name: "Smart-Heating-Control"
description: "Smart Heating Control for Home Assistant"
readmeQualityOk: true
url: "https://github.com/sandreialexandru/Smart-Heating-Control"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [76, 24]
topics: ["home-assistant", "home-assistant-integration", "home-automation", "homeassistant"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-10-13T06:34:30Z"
lastCommitAt: "2026-10-29T10:21:00Z"
lastReleaseAt: "2026-10-14T07:19:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 62
maintainers: ["sandreialexandru"]
openGraphImageUrl: "https://opengraph.githubassets.com/12d7d2e3442c02bc4e7d9f901b45893937d9a207cb4d766cddd09543960ada06/sandreialexandru/Smart-Heating-Control"
---

# Smart Heating Control

**English** | [Română](https://github.com/sandreialexandru/Smart-Heating-Control/blob/HEAD/README.ro.md)

Heating schedules for Home Assistant that follow **presence, zones, windows,
weather and manual changes** – with one clear decision per room and the reason
for it.

Smart Heating Control is built around **Generic Thermostat**: it uses the same preset
names (`home`, `sleep`, `eco`, `away`, `comfort`, `activity`) and only selects
the right one; your thermostat keeps working exactly as before. Rooms with TRVs,
other thermostats or plain relays are supported as well.

> **Beta.** The integration runs every day in one home: a whole-house zone with
> Generic Thermostat and a relay, presence, the outdoor temperature with the
> warm-weather cutoff and the forecast, the internal schedule and the learning. TRVs, several rooms, other thermostats, relay rooms,
> a heat source started by the integration, tariff / PV and °F are covered by
> the automated tests, but not yet by real homes. If you try them, please
> [report what you see](https://github.com/sandreialexandru/Smart-Heating-Control/issues/new/choose),
> good or bad.

## Features

- **Presence in three…
