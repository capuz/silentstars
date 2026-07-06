---
repo: "lwp2070809/speculonic-android"
name: "speculonic-android"
description: "Speculonic is an open-source Android music player built on the Subsonic API."
originalDescription: "Speculonic is an open-source Android music player built on the Subsonic API."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/lwp2070809/speculonic-android"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-06-01T01:04:49Z"
lastCommitAt: "2026-07-06T07:03:58Z"
lastReleaseAt: "2026-06-30T11:19:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 53
maintainers: ["lwp2070809"]
openGraphImageUrl: "https://opengraph.githubassets.com/41dbd90f094e09b8164d57f3e2aa2f0380f8a3c6dae591b02ec755589c645593/lwp2070809/speculonic-android"
---

# Speculonic

**Download Latest**

[简体中文](#简体中文)

---

Speculonic is an open-source OpenSubsonic / Subsonic (v1.16.1) music client built with native Android technologies. Compatibility with Navidrome servers has been fully verified.

## Design Philosophy

The project is built on the philosophy of treating the application as a local mirror of the remote Subsonic server. It provides synchronization and diff capabilities with remote Subsonic servers, alongside the performance and extensibility of a high-performance local music player.

Based on this design philosophy, the app always prioritizes fetching and playing the original resources from the server, including original audio files and original album art, to ensure that the content on the device remains strictly consistent with the server, avoiding any additional discrepancies caused by client-side processing.

Therefore, some common features found in mainstream Subsonic clients will not be provided at present, including:

* Audio transcoding
* Playback bitrate selection
* Album art download quality selection

## Features

* **Native Android Development**: Built on native Android Jetpack Compose and Kotlin technologies. Supports…
