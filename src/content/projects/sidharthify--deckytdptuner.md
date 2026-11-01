---
repo: "sidharthify/DeckyTDPTuner"
name: "DeckyTDPTuner"
description: "Decky plugin that finds the lowest TDP holding your target framerate"
readmeQualityOk: true
url: "https://github.com/sidharthify/DeckyTDPTuner"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [75, 20]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-11-01T14:43:08Z"
lastCommitAt: "2026-11-01T23:00:17Z"
lastReleaseAt: "2026-11-01T17:57:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 44
maintainers: ["sidharthify"]
openGraphImageUrl: "https://opengraph.githubassets.com/2afd7096b090e198c27f5f2e3e87031a0dfd6fd01fa59ddef970e2a4521006a1/sidharthify/DeckyTDPTuner"
---

# DeckyTDPTuner

## Overview
>[!WARNING]
> This plugin runs as **root** and writes straight to the amdgpu power limits in sysfs (`power1_cap` and `power2_cap`). It never goes outside the range the driver reports, but if something goes wrong a reboot puts everything back to stock.

>[!LLM Usage]
> This entire codebase has been handcoded by hand without the use of any Large Language Model. I may have asked Claude or Gemini about a few things here and there, but all the code was written by me.

---

Pick a target framerate in the Quick Access Menu, press "Find lowest TDP" and leave the game running somewhere that's roughly as heavy as the rest of it (a busy town, not a loading screen). The plugin starts at 15W, checks that the game can actually hold the target there, and then binary searches down until it finds the lowest wattage that still keeps the average and the 5% lows above the target. Each step settles for 5 seconds and samples for 10. The lowest passing wattage isn't always the nicest one though (Geometry Dash holds 90 fps at 4W but the frametime graph turns into a sawtooth, at 5W it's flat), so once it has a result it also measures frametime jitter and keeps going up 1W at a…
