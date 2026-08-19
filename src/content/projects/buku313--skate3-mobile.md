---
repo: "Buku313/Skate3-Mobile"
name: "Skate3-Mobile"
description: "Play Skate 3 natively on Android. Download one APK, select your own ISO, and skate. ARM64 recompilation with Vulkan rendering."
readmeQualityOk: true
url: "https://github.com/Buku313/Skate3-Mobile"
homepage: "https://buku313.github.io/Skate3-Mobile/"
language: "C++"
languages: ["C++"]
languagePcts: [90]
topics: ["android", "arm64", "skate3", "vulkan", "rg406v", "gaming-handheld", "static-recompilation"]
stars: 27
forks: 0
openIssues: 14
closedIssues: 2
watchers: 4
contributors: 3
recentReleases: 7
createdAt: "2026-06-17T17:47:49Z"
lastCommitAt: "2026-08-19T04:09:38Z"
lastReleaseAt: "2026-08-19T04:05:55Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 70
undervaluedScore: 39
maintainers: ["mchughalex", "Buku313"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1272534715/dacecf5a-8078-4e2c-8391-cbb0306b6865"
---

# SKATE 3 MOBILE

  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
</p>

</p>

Skate 3 running as native ARM64 code on Android through static recompilation.
This is not an Xbox 360 emulator.

The current release is a developer build. The Android port is experimental,
but it is playable on the Anbernic RG406V.
It uses the native Vulkan renderer from Skate3Recomp with Android input, audio,
storage, performance profiles, and handheld tuning added in this fork.

No retail game files are included. You must provide your own legally obtained
copy of Skate 3. The phone installer obtains and verifies the supported Title
Update 3, with a manual file-selection fallback if its download is unavailable.

## Players: start here

You do not need a computer, developer tools, or an ISO extraction app.

1. [Download the latest signed Android APK](https://github.com/Buku313/Skate3-Mobile/releases/latest/download/Skate3-Mobile-Android.apk).
2. Install it and open **Skate 3 Mobile**.
3. Tap **Select My Skate 3 ISO** and choose an ISO dumped from your own copy.
4. Keep the app open while it extracts and verifies the game.
5. Tap **Play Skate 3**.

Requirements: Android 13 or newer, ARM64, Vulkan, and…
