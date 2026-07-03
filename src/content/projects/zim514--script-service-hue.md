---
repo: "zim514/script.service.hue"
name: "script.service.hue"
description: "Kodi add-on for Philips Hue"
url: "https://github.com/zim514/script.service.hue"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["python", "hue", "qhue", "kodi-addon", "kodi", "xbmc-addon", "xbmc"]
stars: 41
forks: 15
openIssues: 0
closedIssues: 55
watchers: 3
contributors: 48
recentReleases: 0
createdAt: "2019-05-29T14:49:02Z"
lastCommitAt: "2026-07-03T12:22:48Z"
lastReleaseAt: "2019-06-27T03:31:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 59
maintainers: ["zim514", "dependabot[bot]", "weblate"]
openGraphImageUrl: "https://opengraph.githubassets.com/00d7aaf81c750a016456a9caef9cd811d1ceb481823fbc752faa3e2197842162/zim514/script.service.hue"
---

# **Kodi Service for Philips Hue**
## script.service.hue

Automate your [Hue lights](https://www.meethue.com/) on audio or video playback with [Kodi Media Player](https://kodi.tv/)

## Requirements
- Kodi 19 (Matrix) or higher
- Hue Bridge V2 (Square)

## Installation

**Stable version**
- [Install from official Kodi repo](https://kodi.wiki/view/Add-on_manager#How_to_install_add-ons_from_a_repository)

**Development version**

1. [Repo with auto-updates](https://zim514.github.io/repo/repository.snapcase/repository.snapcase-1.0.11.zip) **(Recommended)** or [Download latest .zip version](https://github.com/zim514/script.service.hue/releases/latest)
2. [Install to Kodi from Zip](https://kodi.wiki/view/HOW-TO:Install_add-ons_from_zip_files)

## Features:
- Use standard Hue Scenes
  - Configure scenes from the official Hue app and select them in the add-on settings

- Daytime configuration
    - Uses Hue's sunset and geolocation settings
    - Disable until configured morning time (default 8:00 AM)
    - If sunset falls while watching media, optionally turn on lights
    - Add-on does nothing at sunset if there's no playback

- Scheduling
    - Set a start and end time at which the…
