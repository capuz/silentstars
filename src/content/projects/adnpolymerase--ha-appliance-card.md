---
repo: "ADNPolymerase/ha-appliance-card"
name: "ha-appliance-card"
description: "Home Assistant Lovelace card for washers/dryers/dishwashers — works across brands via configurable entity mapping"
readmeQualityOk: true
url: "https://github.com/ADNPolymerase/ha-appliance-card"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["custom-cards", "hacs", "home-assistant", "lovelace", "lovelace-card"]
stars: 27
forks: 4
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-06T07:12:35Z"
lastCommitAt: "2026-08-30T09:25:30Z"
lastReleaseAt: "2026-07-06T19:55:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 50
maintainers: ["ADNPolymerase", "pbarone"]
openGraphImageUrl: "https://opengraph.githubassets.com/168f27d87ee734f4130b41f7b0af883e86608e53e9181567ca73d7a812e46aca/ADNPolymerase/ha-appliance-card"
fundingLinks: ["GITHUB:https://github.com/ADNPolymerase"]
---

# HA Appliance Card

A Lovelace card for kitchen and laundry appliances: washers, dryers, dishwashers, ovens, microwaves, cooker hoods, cooktops, fridges, kettles, cookers, coffee machines and rice cookers. Cycle in progress, program, remaining time, temperature, fan speed, cooking zones, door status, alerts and controls.

No brand assumed: every field is a configurable entity mapping, so it works with **any** integration (Electrolux, Samsung, LG, Home Connect, Miele, a smart plug + template sensors…).

> Feedback and issues welcome.
> 🇫🇷 [Lire en français](https://github.com/ADNPolymerase/ha-appliance-card/blob/HEAD/README.fr.md)

## Features

- **State normalization**: `Idle`, `RUNNING`, `wash`, `En marche`… are auto-detected (accent-insensitive) and mapped to idle / preheating / running / paused / done / delayed / error. `state_map` covers anything else; unmatched states are shown as-is.
- **Twelve appliance types**, each with its own animated illustration: washer (water), dryer (tumbling), dishwasher (spray arm), oven (glowing elements, door dropping open), microwave (turntable, lit cavity), cooker hood (rising airflow, light beams), cooktop (per-zone level and residual…
