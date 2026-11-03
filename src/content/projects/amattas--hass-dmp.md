---
repo: "amattas/hass-dmp"
name: "hass-dmp"
description: "Home Assistant integration for DMP (Digital Monitoring Products) alarm systems"
readmeQualityOk: true
url: "https://github.com/amattas/hass-dmp"
homepage: "https://amattas.github.io/hass-dmp/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["home-automation", "home-security", "homeassistant", "hacs", "production"]
stars: 10
forks: 6
openIssues: 12
closedIssues: 19
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2022-12-16T05:12:40Z"
lastCommitAt: "2026-11-03T19:05:28Z"
lastReleaseAt: "2026-05-14T23:57:48Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded", "fork_magnet"]
healthScore: 78
undervaluedScore: 72
maintainers: ["amattas", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f087eb1ffbf0efade7549553efc8ca11d7b1867a2e80c05a26b1ecbcc0d6fde0/amattas/hass-dmp"
fundingLinks: ["GITHUB:https://github.com/amattas", "BUY_ME_A_COFFEE:https://buymeacoffee.com/amattas"]
discussionCount: 5
---

# DMP Integration for Home Assistant

Integrate your DMP XR series alarn panel with Home Assistant. This integration provides arming control along with zone monitoring. 

## Important Info
**Please Note: This integration is not designed to replace monitoring of your DMP panel by a UL certified monitoring center, and is solely designed to increase the ease of integrating the supervised sensors with other platforms.**

## Currently Supported Features

### Arming and Disarming
This integration implements a simplified arming/disarming model from the panel's area model to a simple Arm Home/Arm Away/Arm Night model. This aligns better to how these panels are typically deployed in residential settings and also helps integrate better with Home Assistants model. It also facilitiates surfacing the alarm panel to other integrations like HomeKit.

#### Arm Types
* Arm Home - arms the home area defined during platform configuration
* Arm Away - arms areas 01, 02, 03 - not currently configurable 
* Arm Night - arms the home area with the **instant** flag. This disables delay doors for exit and entry - alarm will trigger immediately if any zone is faulted. Shows as armed home from a status POV…
