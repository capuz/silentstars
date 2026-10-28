---
repo: "shirai91/nx2android"
name: "nx2android"
description: "A compatibility layer for porting Switch games to Android, one game at a time"
readmeQualityOk: true
url: "https://github.com/shirai91/nx2android"
language: "C"
languages: ["C", "Objective-C", "Python"]
languagePcts: [43, 29, 22]
stars: 93
forks: 14
openIssues: 2
closedIssues: 1
watchers: 3
contributors: 3
recentReleases: 3
createdAt: "2026-10-24T17:21:12Z"
lastCommitAt: "2026-10-28T09:54:54Z"
lastReleaseAt: "2026-10-28T09:58:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 29
maintainers: ["shirai91"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4511da2255a75804a6522b32f2aa58ebaf2661ea8d87063e82f31d351292e29/shirai91/nx2android"
---

# nx2android

Port your own Nintendo Switch games to Android, natively: the game's own arm64 code runs on the device, with the Switch's system services stood in for by a host and NVN graphics replayed on Vulkan. Pick the game's folder, click **Port**, and get an APK plus the game's data, installed on your device if you like. Bring your own game files and keys; nothing from any game is in this repository.

This is the Android port of [nxnative](https://github.com/seedds/nxnative), which does the same on iPhone and iPad. How it is put together: [docs/ARCHITECTURE.md](https://github.com/shirai91/nx2android/blob/HEAD/docs/ARCHITECTURE.md).

## Games

Each game is a profile in `nxnative/dm/games/<title ID>/` with an `android.tsv`. Which games play, on which device, and which ones each release has been checked to port: [docs/PORT_STATUS.md](https://github.com/shirai91/nx2android/blob/HEAD/docs/PORT_STATUS.md). The device's GPU must read BC-compressed textures (Adreno, Xclipse; not Mali or PowerVR).

## For players: port a game without programming

1. Download `nx2android-<version>-windows-x64.zip` from [Releases](https://github.com/shirai91/nx2android/releases/latest), unzip it and…
