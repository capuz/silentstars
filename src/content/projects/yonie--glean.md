---
repo: "yonie/glean"
name: "glean"
description: "Browser-based sample browser + drum machine: explore samples in a sound-similarity map, then build beats. No install."
readmeQualityOk: true
url: "https://github.com/yonie/glean"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [45, 42]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-06-18T20:04:05Z"
lastCommitAt: "2026-11-15T11:22:33Z"
lastReleaseAt: "2026-11-15T11:06:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 65
undervaluedScore: 28
maintainers: ["yonie"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1091fa8d33886ee1a6d1bbb006cc511cbd3757ebc53a79104b74fd5a03593cd/yonie/glean"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/yonie"]
---

# Glean — sample browser + drum machine

**Explore your samples by *sound*, then build beats — all in the browser, no install.**

Glean analyzes the actual audio of every `.wav` in a folder, lays them out in a 2D
**similarity map** (sounds that *sound* alike sit together, colored by type), lets you
**drag across the map to audition by ear**, and drop the ones you like onto an **8-track
step sequencer** with per-track filter, EQ, pan and pitch. Inspired by XLN Audio XO and
Waves Cosmos (not affiliated with or endorsed by either).

🔗 **Live demo:** https://yonie.github.io/glean/ — zero install; open it and point it at a folder of samples. Everything runs locally; nothing is uploaded.

### The similarity map

### The drum machine

## Features

- **Sound-based map** — each sample becomes a ~17-dimensional timbre vector (envelope,
  spectral centroid/spread/rolloff/flatness, log-band energies, zero-crossing rate) and
  the whole library is projected to 2D with PCA. Similar sounds cluster; dot color is the
  sample's audio-classified type (kick, snare, hat, …) — *not* its filename.
- **Drag-to-scan** — hold the mouse and sweep across the map; it retriggers the nearest
  sound as you…
