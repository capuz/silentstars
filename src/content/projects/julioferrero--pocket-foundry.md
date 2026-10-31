---
repo: "JulioFerrero/pocket-foundry"
name: "pocket-foundry"
description: "Play your own copy of Factorio on Android: the official Linux ARM64 build, run without emulation on the phone's GPU, with an on-screen controller."
readmeQualityOk: true
url: "https://github.com/JulioFerrero/pocket-foundry"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [65]
topics: ["adreno", "android", "factorio", "linux-arm64", "mesa", "termux-x11", "turnip", "zink"]
stars: 109
forks: 6
openIssues: 17
closedIssues: 17
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-10-27T19:27:12Z"
lastCommitAt: "2026-10-31T15:59:03Z"
lastReleaseAt: "2026-10-29T14:44:33Z"
status: "newborn"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 80
undervaluedScore: 32
maintainers: ["JulioFerrero", "tihonchik"]
openGraphImageUrl: "https://opengraph.githubassets.com/653abe38d4bdf092150cfda94f5e80f8a23bfe88408b2d4a642cdce5a6820d8e/JulioFerrero/pocket-foundry"
---

# Pocket Foundry

**Play your own copy of Factorio on Android.** The official Linux ARM64 build runs on the phone itself: no
emulation, no streaming, no game files in the app.

| | |
|---|---|
|  |  |
|  |  |

## Getting started

1. Install the APK from [Releases](https://github.com/JulioFerrero/pocket-foundry/releases).
2. Buy Factorio and download the **Linux (arm64) .tar.xz** from [factorio.com/download](https://factorio.com/download).
3. Open Pocket Foundry, tap **Import Factorio** and pick the file.
4. **Continue** your newest save or open the **Main menu**.

Needs Android 10 or later.

## Phones

Pocket Foundry ships one GPU driver, Turnip, and tests it on Adreno 6xx and newer. Other GPUs can use a community
driver, made and tested by others, or run the game on the phone's CPU.

| GPU | Found in | Runs with |
|---|---|---|
| Adreno 6xx and newer | Snapdragon | The bundled driver, tested |
| Xclipse | Exynos (Galaxy S24, S25) | A community driver |
| Mali | MediaTek, Google Tensor, older Exynos | A community driver on some, the CPU on the rest |
| PowerVR | Pixel 10 | The CPU |
| Adreno 5xx and older | Older Snapdragon | The CPU |

**Loads, but slow?** It's probably on the…
