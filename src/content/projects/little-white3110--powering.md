---
repo: "Little-White3110/powering"
name: "powering"
description: "A LSPosed module for HyperOS (MIUI) that draws a ring-shaped battery indicator around the camera punch-hole and hides the original battery icon in the status bar."
originalDescription: "一个面向 HyperOS（MIUI） 的 LSPosed 模块：在摄像头挖孔（punch-hole）外圈绘制环形电量，并隐藏状态栏原有电池图标。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Little-White3110/powering"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [93]
topics: ["battery", "battery-monitor", "hyperos", "hyperos-4", "lsp", "lsposed"]
stars: 15
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-09-15T16:05:48Z"
lastCommitAt: "2026-10-31T15:59:15Z"
lastReleaseAt: "2026-10-24T10:12:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 47
maintainers: ["Little-White3110"]
openGraphImageUrl: "https://opengraph.githubassets.com/070a5e0742e0f7bff538cabbe0775052d74cfe94b7189ef14a422e4fdf36642f/Little-White3110/powering"
---

LSPosed module for HyperOS (MIUI) · MIT License

A LSPosed module for **HyperOS (MIUI)** that draws a ring-shaped battery indicator around the camera punch-hole and hides the original battery icon in the status bar.

> This is a prototype project under development. It has only been adapted for the SystemUI version reverse-engineered on the target device and has not been verified across a wide range of device models.

## Features

**Ring and battery**

- **Punch-hole ring battery**: Draws a battery arc around the camera punch-hole. The radius and center are calculated from the actual punch-hole geometry (`DisplayCutout`), and can be fine-tuned with scale and offset.
- **Hide the original battery icon**: Hooks `MiuiStatusBatteryContainer.setIsHideBattery(Boolean)`, reusing the system's built-in hiding path (the same mechanism the system uses when Dynamic Island appears). Layout recalculation and privacy-dot avoidance are handled by the system.
- **Battery data**: Directly reuses the callbacks of SystemUI's internal `BatteryController`, so no separate broadcast listener needs to be built.
- **Show battery / percentage number nodes by tapping the punch-hole**: A single tap briefly…
