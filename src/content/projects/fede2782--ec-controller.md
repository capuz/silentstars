---
repo: "Fede2782/EC-Controller"
name: "EC-Controller"
description: "Simple frontend for the msi-ec kernel driver with extra features"
readmeQualityOk: true
url: "https://github.com/Fede2782/EC-Controller"
language: "C++"
languages: ["C++"]
languagePcts: [88]
topics: ["laptop", "linux", "msi", "qt6"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-10-13T15:50:25Z"
lastCommitAt: "2026-11-15T11:25:45Z"
lastReleaseAt: "2026-11-14T23:15:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 82
undervaluedScore: 54
maintainers: ["Fede2782"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f0ef16660725e514e1dee00ab5e8a7e4b16e1c4a7e1ff37986356ef4d4bbffa/Fede2782/EC-Controller"
---

# EC Controller

A modern graphical control panel and background service for MSI laptops on Linux. EC Controller allows you to configure fan curves, performance profiles, battery charging thresholds, keyboard backlights, and hardware switches through the `msi-ec` kernel driver.

> **Disclaimer:** EC Controller is an independent, unofficial open-source project. MSI is a registered trademark of Micro-Star International Co., Ltd. This project is not affiliated with, endorsed by, sponsored by, or supported by MSI.

---

## Screenshots

| Main Application Window | Advanced Fan Curve Editor |
| :---: | :---: |
|  |  |
| *Real-time monitoring, performance modes, battery limits, and hardware toggles.* | *Fan curve chart and threshold adjustments.* |

---

## Hardware Driver Requirement (`msi-ec`)

EC Controller communicates with your laptop's Embedded Controller (EC) via sysfs interfaces exposed by the **`msi-ec`** kernel module.

To access all features (including custom fan curves, battery charge thresholds, and keyboard backlight controls), you must use the updated driver fork:

- **Required driver fork:** [**Fede2782/msi-ec**](https://github.com/Fede2782/msi-ec)

### Model Support &…
