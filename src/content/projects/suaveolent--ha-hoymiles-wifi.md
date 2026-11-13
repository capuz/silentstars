---
repo: "suaveolent/ha-hoymiles-wifi"
name: "ha-hoymiles-wifi"
description: "Home Assistant custom component for Hoymiles DTUs and the HMS-XXXXW-2T microinverters"
readmeQualityOk: true
url: "https://github.com/suaveolent/ha-hoymiles-wifi"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["dtu", "home-assistant", "hoymiles", "python"]
stars: 361
forks: 43
openIssues: 7
closedIssues: 175
watchers: 20
contributors: 12
recentReleases: 0
createdAt: "2023-11-24T15:01:41Z"
lastCommitAt: "2026-11-13T18:30:47Z"
lastReleaseAt: "2024-02-03T09:24:13Z"
status: "thriving"
tags: ["solo_builder", "funded", "community_hub"]
healthScore: 77
undervaluedScore: 32
maintainers: ["suaveolent", "richarddu07", "markoberholzer-es"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cd95d96f2a5baad800964c0dcab6f67effd03f0f145f6092eb5547c248b4728/suaveolent/ha-hoymiles-wifi"
fundingLinks: ["GITHUB:https://github.com/suaveolent", "BUY_ME_A_COFFEE:https://buymeacoffee.com/suaveolent"]
discussionCount: 36
---

# Hoymiles for Home Assistant

This custom component integrates Hoymiles DTUs, HMS-XXXXW microinverters and hybrid inverters into Home Assistant, providing live inverter data.
It uses the [hoymiles-wifi](https://github.com/suaveolent/hoymiles-wifi) Python library to communicate directly with the devices over your local network — no cloud connection required.

> [!NOTE]
> Disclaimer: This library is not affiliated with Hoymiles. It is an independent project developed to provide tools for interacting with Hoymiles DTUs and Hoymiles HMS-XXXXW series micro-inverters featuring integrated WiFi DTU. Any trademarks or product names mentioned are the property of their respective owners.

## Supported Devices

The custom component was successfully tested with:

- Hoymiles HMS-400W-1T
- Hoymiles HMS-800W-2T
- Hoymiles HMS-1000W-2T
- Hoymiles HMS-2000DW-4T
- Hoymiles DTU-WLite
- Hoymiles DTU-Pro (S)
- Hoymiles HAS-5.0LV-EUG1
- Hoymiles HYS-4.6LV-EUG1
- Hoymiles HYT-5.0HV-EUG1
- Hoymiles HAT-8.0HV-EUG1
- Solenso H-1000 (not tested for command, only to get data)
- Solenso DTU_SLS (not tested for command, only to get data)

## Warning

> [!CAUTION]
> Please refrain from using the persistent…
