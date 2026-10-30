---
repo: "Taygun86/Doors"
name: "Doors"
description: "A fast, minimal GTK4 / Libadwaita Windows (.exe) game installer and runner for Linux powered by Proton."
readmeQualityOk: true
url: "https://github.com/Taygun86/Doors"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-10-28T19:00:11Z"
lastCommitAt: "2026-10-30T10:23:09Z"
lastReleaseAt: "2026-10-29T07:13:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 24
maintainers: ["Taygun86"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad3e066f46690f1aa6eeca124a01b9133993da08a8eddfa259e76bb11c2eb927/Taygun86/Doors"
---

---

## Overview

**Doors** (`io.github.doors.Doors`) lets you double-click any Windows `.exe` game installer or portable folder in your Linux file manager, choose a target disk and a Proton version, and click **Install**. Doors automatically creates an isolated Proton prefix (`pfx`), handles setup installers or portable game folders, extracts the embedded `.exe` icon, and adds a native application shortcut (`.desktop`) to your desktop environment's game menu.

---

## Proton & `compatibilitytools.d` Requirement

Doors does not bundle its own Wine or Proton runtime. Instead, it automatically discovers custom Proton and Wine runners installed in your system's `compatibilitytools.d` directories:

- `~/.local/share/Steam/compatibilitytools.d`
- `~/.steam/root/compatibilitytools.d`
- `~/.steam/steam/compatibilitytools.d`
- `~/.var/app/com.valvesoftware.Steam/.local/share/Steam/compatibilitytools.d`
- `/usr/share/steam/compatibilitytools.d`
- `/usr/local/share/steam/compatibilitytools.d`
- Custom paths via the `DOORS_COMPAT_TOOLS_PATH` environment variable (colon-separated)

### Installing Proton Versions with ProtonPlus (Recommended)

The easiest way to download, update, and manage…
