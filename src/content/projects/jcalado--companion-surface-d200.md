---
repo: "jcalado/companion-surface-d200"
name: "companion-surface-d200"
description: "Bitfocus Companion surface plugin for the Ulanzi Stream Controller D200"
readmeQualityOk: true
url: "https://github.com/jcalado/companion-surface-d200"
homepage: "https://www.ulanzi.com/products/stream-controller-d200"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["bitfocus-companion", "companion", "hid", "node-hid", "stream-controller", "stream-deck", "typescript", "ulanzi", "companion-surface", "ulanzi-d200"]
stars: 9
forks: 3
openIssues: 6
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-20T20:13:22Z"
lastCommitAt: "2026-10-31T07:45:17Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 58
undervaluedScore: 14
maintainers: ["jcalado", "stianeklund"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ac67a5b305d91892ffee7b6f283926f8562a5cc8fd3e9b8232cbde6500aacc2/jcalado/companion-surface-d200"
---

# companion-surface-ulanzi-stream-controller

> [!TIP]
> If this plugin is useful to you, you can buy me a coffee at
> [ko-fi.com/jcalado](https://ko-fi.com/jcalado). Support helps keep the project
> maintained and encourages future work (more surfaces, bug fixes, features).

Companion surface plugin for the **[Ulanzi Stream Controller D200 / D200X](https://www.ulanzi.com/products/stream-controller-d200)**: 13–14 physical
buttons on a 5×3 grid plus a status window, 196×196 px icons.

Built against [`@companion-surface/base`](https://github.com/bitfocus/companion-surface-api).
Wire protocol reverse-engineered with help from
[redphx/strmdck](https://github.com/redphx/strmdck) and USBPcap captures of
Ulanzi Studio.

## Features

- 13 configurable buttons, each with a Companion-rendered icon
- Brightness control from Companion
- Button press/release events
- Small-window status display with seven modes (analog dial clock, four
  digital clock variants (time; time + weekday; time + date; date + time +
  weekday), system stats (CPU / RAM), or a custom background image),
  selectable per-surface via the ⚙ **Config** panel. Digital modes honour a
  12/24-hour checkbox. Background images…
