---
repo: "yas4891/pv-payback-card"
name: "pv-payback-card"
description: "A custom dashboard card for Home Assistant that projects the payback period on your solar installation. "
readmeQualityOk: true
url: "https://github.com/yas4891/pv-payback-card"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["custom-card", "hacs", "home-assistant", "home-assistant-component", "home-assistant-custom", "home-assistant-hacs", "lovelace", "lovelace-card", "photovoltaic", "solar"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-08-28T10:19:30Z"
lastCommitAt: "2026-08-29T17:27:46Z"
lastReleaseAt: "2026-08-29T17:27:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 39
maintainers: ["yas4891"]
openGraphImageUrl: "https://opengraph.githubassets.com/f34e47c1f0611728aa8ac1c517dd6553abc985ed20941e384d8f04fb0b1851c5/yas4891/pv-payback-card"
---

# PV Payback Card

PV Payback Card is a custom Lovelace card for [Home Assistant](https://www.home-assistant.io/). It estimates when a photovoltaic installation reaches payback from cumulative self-consumption and grid-export energy.

The card calculates the financial benefit directly in the browser. It needs no companion integration and no vendor-specific inverter integration. Configure cumulative production and export energy entities, or a direct self-consumption entity when available.

The card accepts `Wh`, `kWh`, and `MWh` sensors. It also preserves the latest valid reading during a temporary overnight `unknown` or `unavailable` state.

## Screenshots

### Standard progress bar

### Separate self-consumption and export contributions

## Features

- Configurable start date, investment cost, electricity price, and feed-in tariff.
- Cumulative production and export-energy entities, or a direct self-consumption entity, chosen in the visual editor.
- Payback forecast from the observed average financial benefit since the start date.
- Optional location-aware seasonal forecast, calculated locally from the Home Assistant location.
- Optional baseline values for counters that started…
