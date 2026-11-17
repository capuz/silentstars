---
repo: "Skylolerr/ha-energy-flow-mapper"
name: "ha-energy-flow-mapper"
description: "Visual editor for the Home Assistant energy dashboard: map grid, solar, battery, water and gas sources, devices and sub-devices in a diagram by drag and drop, group devices, create sum meters, see power and energy on every block. Backups before every save."
readmeQualityOk: true
url: "https://github.com/Skylolerr/ha-energy-flow-mapper"
homepage: "https://skylolerr.com/energy-flow-mapper/"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [60, 40]
topics: ["custom-component", "energy", "energy-dashboard", "energy-monitoring", "hacs", "hacs-integration", "home-assistant", "home-automation", "homeassistant", "integration"]
stars: 9
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-23T21:36:38Z"
lastCommitAt: "2026-11-17T14:32:41Z"
lastReleaseAt: "2026-11-12T14:26:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 80
undervaluedScore: 55
maintainers: ["Skylolerr"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1431572261/500e51a5-caac-4e7b-b85e-cc995db559e8"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/skylolerr"]
---

**Not another energy card – a visual editor that maps your sensors into the Home
Assistant energy dashboard.** Energy Flow Mapper shows your energy configuration as a
diagram – sources at the top, your home in the middle, devices below – and lets you
change it by drag and drop: which device is included in which, which sensor is your grid,
solar, battery or water meter, and which meters are not used yet.

> [!NOTE]
> **Beta.** Breaking changes are possible before 1.0. Every save keeps a backup of your
> previous energy settings, so you can always go back.

## See it in action

## Features

**See your setup**

- **Diagram of your energy dashboard** – sources, Home and devices, arranged
  automatically; zoom and move with the mouse wheel, by dragging or with two fingers.
  A large tree stays readable: *Vertical* runs it from left to right instead of top-down.
- **Live power and energy per period** – now, today, 7 days or 30 days. Every device with
  child devices shows its *untracked consumption*.
- **The whole home** – Home shows what the house used: measured by a home meter, or
  calculated from grid, solar and battery. Below it, the *untracked consumption* that no device covers…
