---
repo: "kevinlester/ShadeAuto-HomeAssistant"
name: "ShadeAuto-HomeAssistant"
description: "Local control of Norman ShadeAuto shades (Gen 2 hub) for Home Assistant"
readmeQualityOk: true
url: "https://github.com/kevinlester/ShadeAuto-HomeAssistant"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["cover", "hacs", "hacs-custom", "hacs-integration", "home-assistant", "home-assistant-custom-component", "home-assistant-integration", "norman-shades", "shadeauto"]
stars: 9
forks: 5
openIssues: 1
closedIssues: 5
watchers: 4
contributors: 3
recentReleases: 5
createdAt: "2025-11-10T19:44:50Z"
lastCommitAt: "2026-11-17T14:21:22Z"
lastReleaseAt: "2026-11-12T18:10:27Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 94
undervaluedScore: 80
maintainers: ["Modusmundi", "kevinlester", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ed4fb3c054ef92405fbf5052f60d3f147883166c0fdf42f7018f04e134f14c8/kevinlester/ShadeAuto-HomeAssistant"
---

# Norman ShadeAuto — Home Assistant Custom Integration

Control Norman **ShadeAuto** shades locally through the hub's undocumented HTTP API. Shades appear as standard Home Assistant covers with open, close, stop, set position, and tilt where the shade supports it, plus battery sensors and state that follows the shade however it was moved.

---
> ⚠️ This uses **undocumented** local endpoints (`/NM/v1/*`). Firmware may change behavior.
---

## Features
- **Finds every shade on the hub** by itself; works with **multiple hubs** (add each hub by IP/hostname; there is no network discovery of hubs).
- One **Device** per discovered shade, named as in the ShadeAuto app, showing model and motor firmware.
  - One **Cover** entity per shade that supports the following:
    - open / close / stop
    - set position (0–100)
    - tilt (open / close / set / stop) on PerfectSheer shades and SmartDrapes
  - One **Top** cover for two-rail shades
  - **Battery (%)** sensor per shade
  - **Battery low** flag per shade
  - **Identify** button per shade: jogs the shade a little so you can tell which one it is.
- **State syncing**. The hub acts as the source of truth, which allows this integration to…
