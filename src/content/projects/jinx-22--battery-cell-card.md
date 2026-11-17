---
repo: "jinx-22/battery-cell-card"
name: "battery-cell-card"
description: "Battery-Cell-Card is a Home Assistant custom card for visualizing the voltage of individual battery cells."
readmeQualityOk: true
url: "https://github.com/jinx-22/battery-cell-card"
homepage: "https://github.com/jinx-22/battery-cell-card"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["battery", "battery-life", "battery-management", "battery-management-system", "battery-monitor", "battery-monitoring", "home-assistant", "homeassistant", "lifepo4", "monitoring"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 6
createdAt: "2025-12-06T09:33:38Z"
lastCommitAt: "2026-11-17T14:45:20Z"
lastReleaseAt: "2026-11-04T10:00:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 80
maintainers: ["jinx-22"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a8ad3b5c54743695470fe6d4c1aa9b4056ea2b468d0163ef10e5b197fa6cd85/jinx-22/battery-cell-card"
discussionCount: 2
---

# Battery Cells Card - Cell Voltage Monitoring in Real Time

*(Link to German version: [Deutsch](https://github.com/jinx-22/battery-cell-card/blob/HEAD/README_DE.md))*

**Version:** 0.9.6

**Description:** A custom Home Assistant card for visualizing battery cells, cell voltages, SOC, balancing status and differences.  
Ideal for LiFePO₄ battery systems, also suitable for NMC/NCM and lead-acid batteries. Also available as a simple battery display for home batteries that don't provide cell voltage sensors.

### ✨ New in v0.9.6

---

Mode: Cell monitoring (detailed)

---

NEW: Mode: Battery monitoring (without cell voltages)

---

* **New card mode "Battery monitoring (without cell voltages)"** (`display_mode: battery`): The card shows only a single battery that is filled by the SOC sensor – ideal for home batteries without cell voltage sensors or when that level of detail isn't needed. It is selected at the top of the **Display Mode / Battery Chemistry** panel:
  * **Cell monitoring (detailed)** – the familiar view with all cell voltages (default)
  * **Battery monitoring (without cell voltages)** – only the legend as a single battery
  * Percentage labels in 5 / 10 / 20 / 25 %…
