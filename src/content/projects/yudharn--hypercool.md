---
repo: "yudharn/HyperCool"
name: "HyperCool"
description: "HyperCool — Heat & Battery Fix for Android (KernelSU / Magisk module)"
readmeQualityOk: true
url: "https://github.com/yudharn/HyperCool"
language: "HTML"
languages: ["HTML", "Shell"]
languagePcts: [54, 46]
topics: ["android", "battery", "battery-life", "hyperos", "kernelsu-module", "magisk-module", "modules", "performance", "performance-optimization", "root-module"]
stars: 29
forks: 2
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-11-05T01:42:02Z"
lastCommitAt: "2026-11-21T13:29:07Z"
lastReleaseAt: "2026-11-12T15:30:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 48
maintainers: ["yudharn", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1446403674/befeec96-d3c2-4238-a685-0960d069de7d"
---

# HyperCool - Heat & Battery Fix

KernelSU / Magisk module for Qualcomm and MediaTek phones. Less heat, less battery drain, longer battery life.
Focused on battery life, not peak performance.

Everything is configured via WebUI and applied on the next boot. Only lightweight keepers run in the background, and only when enabled.

## Screenshots

## Features
`Every feature has its own ON/OFF switch in the WebUI. Changes apply once at boot, and turning a feature off (or uninstalling) restores the original values`

`Unsupported features are skipped`

**Heat control**
- CPU big-core frequency cap (with lock)
- CPU little-core frequency cap (default off, with lock)
- GPU frequency cap (from your own GPU table, with lock)
- GPU power collapse
- Less aggressive CPU governor (WALT / schedutil)
- Disable kernel touch boost
- Background apps on little cores
- Park prime core (Qualcomm; switches core_ctl on when the kernel has it off, checks that the core is really parked, locks the nodes)
- CPU keeper: keeps the big/little caps and the prime parking in place when the ROM undoes them
- Disable UI blur
- Cooler charging (current limit) and charge limit ~80% (Xiaomi)
