---
repo: "wized2/Latch"
name: "Latch"
description: "Privacy-first Tasker-style automation for Android. Local if/then rules, no cloud, no trackers. Optional Shizuku/root. FOSS."
readmeQualityOk: true
url: "https://github.com/wized2/Latch"
homepage: "https://wized2.github.io/Latch/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [91]
topics: ["android", "automation", "foss", "jetpack-compose", "kotlin", "material-you", "open-source", "privacy", "shizuku", "tasker"]
stars: 18
forks: 3
openIssues: 2
closedIssues: 11
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-15T12:45:33Z"
lastCommitAt: "2026-11-07T16:11:59Z"
lastReleaseAt: "2026-10-22T11:58:55Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 55
maintainers: ["wized2", "yoreva-01"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d9556564cda31f56539986e6dadc8de1974e06cee98cf147eeb384de2627e5b/wized2/Latch"
---

Local <i>if → then</i> rules. No account, no cloud, no ads, no trackers.

## Screenshots

| Home | Settings | Settings (more) | Edit rule |
|:---:|:---:|:---:|:---:|
| <img src="docs/screenshots/01_home.png" width="160" alt="Home"/> | <img src="docs/screenshots/02_settings.png" width="160" alt="Settings"/> | <img src="docs/screenshots/03_settings_scrolled.png" width="160" alt="Settings more"/> | <img src="docs/screenshots/04_edit_rule.png" width="160" alt="Edit rule"/> |

## Engine (always-on)

- **Sticky foreground monitor** (`specialUse`) hosts **dynamic** receivers (Wi‑Fi, power, screen, …)
- **Accessibility** for instant **App opened** rules (Usage access is fallback only)
- **Exact alarms** for daily time windows
- **Shizuku/root** for elevated actions — bound only while a command runs

## Features

### Triggers
Battery · charger · headphones · daily time · boot · **Wi‑Fi** · **SSID** · **Bluetooth** · **app opened** · screen · **custom broadcast**

### Actions (chainable)
Notify · toast · ringer · **open app** · **open URL** · **brightness** · **shell** (optional root) · wait · **plugin broadcast**

### More
- Multi-step action lists per rule  
- Cooldown + notes on each…
