---
repo: "AInine9/Onimusha-DualSense"
name: "Onimusha-DualSense"
description: "DualSense haptics and adaptive triggers for Onimusha: Way of the Sword on PC"
readmeQualityOk: true
url: "https://github.com/AInine9/Onimusha-DualSense"
language: "C#"
languages: ["C#"]
languagePcts: [93]
stars: 7
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-09-09T05:25:16Z"
lastCommitAt: "2026-09-13T08:29:31Z"
lastReleaseAt: "2026-09-13T08:30:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 43
maintainers: ["AInine9"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8ef4a34487a2310e9677022e9208bfb8e466ff6dd05f23800dc708a5c41dc0f/AInine9/Onimusha-DualSense"
---

# Onimusha DualSense

An unofficial DualSense haptics mod for the PC version of Onimusha: Way of the Sword.
It adds sound- and action-based haptic feedback together with adaptive-trigger effects.

This mod does not reproduce the PS5’s haptic feedback or the game’s official haptic effects.
It generates haptic files from the game’s sound effects and plays them as a mod.

## Requirements

- Windows x64, the supported PC version of the game, and one DualSense or DualSense Edge connected by USB or Bluetooth. Bluetooth HID haptics are supported for compatible Windows Bluetooth collections; USB remains the recommended setup. Edge support is provisional and has not been tested on physical hardware.
- [.NET 10 Runtime for Windows x64](https://dotnet.microsoft.com/download/dotnet/10.0). The .NET SDK is not required for installation.
- A game-compatible version of [REFramework](https://github.com/praydog/REFramework).
- Steam Input can remain enabled. The DualSense audio device must be enabled in Windows.

## Install

Installation
1. Install a compatible version of REFramework in the game folder.
2. Download mod and unpack
3. Run `Setup.cmd`.
4. If Setup cannot find the game automatically,…
