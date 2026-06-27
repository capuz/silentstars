---
repo: "chenxiaolong/Custota"
name: "Custota"
description: "Android A/B OTA updater app for custom OTA servers"
url: "https://github.com/chenxiaolong/Custota"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [75]
stars: 230
forks: 43
openIssues: 6
closedIssues: 63
watchers: 5
contributors: 4
recentReleases: 0
createdAt: "2023-07-29T20:21:52Z"
lastCommitAt: "2026-06-27T00:47:43Z"
lastReleaseAt: "2024-03-05T03:30:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 36
maintainers: ["chenxiaolong", "hexdefined"]
openGraphImageUrl: "https://opengraph.githubassets.com/c94f9f0b0c56ac35f63601dc570bfb793410bf43f8b3dcd1ac4c29be2d575221/chenxiaolong/Custota"
---

# Custota

Custota is an app for installing Android A/B OTA updates from a custom OTA server. When paired with [avbroot](https://github.com/chenxiaolong/avbroot), it can be used to seamlessly install OTAs signed by a custom key.

Custota is installed via a Magisk/KernelSU module so that it can run as a system app.

## Features

* Supports Android 13 and newer
* Supports pausing, resuming, and cancelling updates
* Supports skipping optional post-install scripts to speed up updates
* Never communicates with any server besides the configured OTA server
* OTA updates safely continue running even if the app crashes or is uninstalled during the operation
* Supports Direct Boot, allowing updates to install before the device is initially unlocked

## Limitations

* The device must support A/B updates.
  * This notably excludes all Samsung devices.
* Pre-downloading an update to install later is not supported.
  * Custota runs `update_engine` in streaming mode, which downloads and installs OTAs at the same time.
* The stock OS' Settings app on Pixel devices always launches the builtin OTA updater.
  * These shortcuts in the Settings app are loaded from GmsCore (part of Google Play…
