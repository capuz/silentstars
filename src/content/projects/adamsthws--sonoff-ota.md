---
repo: "adamsthws/Sonoff-OTA"
name: "Sonoff-OTA"
description: "Sonoff Liberator - OTA Auto-Flasher"
readmeQualityOk: true
url: "https://github.com/adamsthws/Sonoff-OTA"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 21
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-10-05T09:10:23Z"
lastCommitAt: "2026-10-29T21:22:30Z"
lastReleaseAt: "2026-10-25T01:25:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 46
maintainers: ["adamsthws", "mvoss96"]
openGraphImageUrl: "https://opengraph.githubassets.com/4058cd033da83104f9d8df324df7f6b5a899887d167a43f129f6553e20e0465f/adamsthws/Sonoff-OTA"
fundingLinks: ["KO_FI:https://ko-fi.com/adamsthws", "CUSTOM:https://www.paypal.me/adamsthws"]
discussionCount: 3
---

# Sonoff S60 → Tasmota or ESPHome, OTA
***Flash it, don't smash it.***

## Fully automated 'Over The Air' firmware conversion

Turn your stock Sonoff S60 smart plug into one running **Tasmota** or
**ESPHome** using OTA method - no soldering, no taking the plug apart. Move the plug between the two, or back to Sonoff's own firmware.

> Conversion with this tool is fully automated end to end, with checks at every stage. It is resumable and can be restarted at any point.

### No More Soldering

Until now, the established way to put Tasmota on an S60 was to open it, perform some soldering and
flash it over USB-serial - hard work, because the case is plastic-welded shut.

> The community threads for the soldering method:
>
> - UK version: [arendst/Tasmota#22554](https://github.com/arendst/Tasmota/discussions/22554)
> - EU version: [arendst/Tasmota#21255](https://github.com/arendst/Tasmota/discussions/21255)

### Indistinguishable

Converted plugs end up identical to a plug flashed over USB
> The final automated checks verify this by reading their flash back at the end of the conversion. Every block of it is read back before the plug switches to it.

## What you need

**The plug** 
> A…
