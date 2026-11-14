---
repo: "ma-schmitz/eq3_max"
name: "eq3_max"
description: "eQ-3 MAX! (radiator and wall thermostats, window contacts, eco buttons) directly in Home Assistant via a CUL stick or a flashed MAX! Cube – no Homegear."
readmeQualityOk: true
url: "https://github.com/ma-schmitz/eq3_max"
homepage: "https://ma-schmitz.github.io/eq3_max/"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["868mhz", "cul", "culfw", "eq3", "hacs", "home-assistant", "home-automation", "homeassistant-integration", "max", "thermostat"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-19T09:59:11Z"
lastCommitAt: "2026-11-14T22:01:34Z"
lastReleaseAt: "2026-11-14T14:03:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 54
maintainers: ["ma-schmitz", "BSass"]
openGraphImageUrl: "https://opengraph.githubassets.com/0958474f4596eee3f49997b3a2f1f6d342882037d2370f6182aa99809e581566/ma-schmitz/eq3_max"
discussionCount: 3
---

**English** · [Deutsch](https://github.com/ma-schmitz/eq3_max/blob/HEAD/README.de.md)

# eq3_max

Home Assistant integration for eQ-3 MAX! via a CUL with culfw: USB stick (e.g. nanoCUL868)
or on the network (a-culfw on a CUN or a flashed MAX! Cube).
Replaces Homegear and the legacy `homematic` integration.

**New in 0.8.0:** a [thermostat card](https://github.com/ma-schmitz/eq3-max-thermostat-card) of its
own, presets Comfort/Eco, group ids for whole rooms, display set/current on the wall thermostat,
polling the current temperature, permissions for users without admin rights –
[what's new](https://ma-schmitz.github.io/eq3_max/neu/).

**Documentation:** https://ma-schmitz.github.io/eq3_max/ – installation, migration from Homegear,
manual and FAQ. Source in the folder `website/` (Material for MkDocs, locally:
`uv venv .venv-docs && uv pip install -p .venv-docs -r requirements_docs.txt &&
.venv-docs/bin/mkdocs serve`).

## Features

- Radiator and wall thermostats as `climate`, valve position as a separate sensor
- Window contacts, eco buttons (as event entities), battery, RSSI, radio errors
- State survives restarts, lost commands are detected and repeated
- Takes over existing…
