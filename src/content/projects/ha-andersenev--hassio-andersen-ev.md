---
repo: "HA-AndersenEV/hassio-andersen-ev"
name: "hassio-andersen-ev"
description: "A Home Assistant integration for Andersen home charge points."
readmeQualityOk: true
url: "https://github.com/HA-AndersenEV/hassio-andersen-ev"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["andersen", "chargepoint", "ev", "home-assistant", "andersen-ev"]
stars: 13
forks: 8
openIssues: 3
closedIssues: 26
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2023-11-12T13:18:05Z"
lastCommitAt: "2026-11-04T11:27:36Z"
lastReleaseAt: "2026-05-20T15:19:05Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 74
maintainers: ["michaeln31", "toby200", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cdd471d7303d9acdfde1cde38b49398f84e84e1b19b9d67a212ae23d675b402/HA-AndersenEV/hassio-andersen-ev"
---

# Andersen EV Chargepoint integration for Home Assistant

## Status

See [CHANGELOG.md](https://github.com/HA-AndersenEV/hassio-andersen-ev/blob/HEAD/CHANGELOG.md) for release history.

## Features
* Switch entities for each charging schedule allows enabling/disabling charge schedules.
* Lock entity to enable or disable the charge point.
* **Charge now** and **Stop charging** buttons, matching the Konnect+ app (see
  [Charge now and Stop charging](#charge-now-and-stop-charging)).
* Solar charging controls matching the Konnect+ app's Power source screen (see
  [Solar charging controls](#solar-charging-controls)):
  * **Supplement with grid power** switch.
  * **Grid source power** number (kW).
  * **Charge outside schedule** switch.
  * **Boost** switch.
* **User max power** (kW) number to limit the charge rate, plus **user max current** (A), disabled by default.
* **Max system charge current** diagnostic sensor (the charger's configured maximum current, in A).
* Provides services to:
  * Disable all charging schedules: `andersen_ev.disable_all_schedules`
  * Get detailed device information: `andersen_ev.get_device_info` (results displayed in UI)
  * Get detailed real-time device…
