---
repo: "Diegofuego871/ha-device-panel"
name: "ha-device-panel"
description: "Home Assistant panel showing all devices: outages, availability history and software versions"
readmeQualityOk: true
url: "https://github.com/Diegofuego871/ha-device-panel"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [62, 35]
topics: ["hacs", "home-assistant", "home-assistant-custom", "integration", "hacs-integration"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-01T14:59:34Z"
lastCommitAt: "2026-11-05T11:24:10Z"
lastReleaseAt: "2026-10-02T13:51:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 54
maintainers: ["claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/aecb08337d6fad0d0e18c5f61533d5db8d3fd4111495bf48a6320083b321638b/Diegofuego871/ha-device-panel"
---

[Deutsch](https://github.com/Diegofuego871/ha-device-panel/blob/main/README.de.md)

## Installation

Device Panel is in the default catalog of the **Marketplace** (Settings › Marketplace in Home Assistant).

1. Marketplace → search for "Device Panel" (or use the blue button above, it opens the integration in your Marketplace).
2. Download "Device Panel" and restart Home Assistant.
3. Settings → Devices & services → Add integration → "Device Panel".

Fallback, if the search does not find it (for example with an old version): Marketplace → "Add from link" → `https://github.com/Diegofuego871/ha-device-panel`, type "Integration".

Updates: to make the Marketplace look for a new version of Device Panel right away (it checks only every few hours), create an app of the kind "Action" in the launcher with the command `marketplace/repository/refresh` and the data `{"repository": "<ID>"}` (the ID is the "Unique ID" in the settings of the entity `update.device_panel_update`). The settings (gear icon) show the installed and the newest version and update via the Marketplace. While a pre-release is installed, a violet pill "pre-release" stands behind the version title (it disappears once the…
