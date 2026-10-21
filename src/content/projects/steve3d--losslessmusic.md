---
repo: "steve3d/LosslessMusic"
name: "LosslessMusic"
description: "Automated Apple Music Lossless Sample Rate Switching for Audio Devices on Macs."
readmeQualityOk: true
url: "https://github.com/steve3d/LosslessMusic"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["applemusic", "audio", "lossless-music", "macos", "menubar-app"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-04-24T10:06:54Z"
lastCommitAt: "2026-10-21T08:49:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 30
maintainers: ["steve3d"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5e6b53c54952fd6c4ae86e4438e7bbcfc95b6bf42ad793010be6acae2698961/steve3d/LosslessMusic"
---

# LosslessMusic

**Let your Mac’s audio output follow Apple Music’s lossless tracks.**

English · [简体中文](https://github.com/steve3d/LosslessMusic/blob/HEAD/README.zh-CN.md)

LosslessMusic is a lightweight macOS menu bar app that automatically adjusts your audio output’s sample rate and bit depth to the detected format of the current Apple Music track. No more repeated trips to Audio MIDI Setup when the next song uses a different sample rate.

## Features

- Automatically follows the detected lossless format of the current track.
- Displays the output device name, sample rate, and source bit depth in a compact menu.
- Switches the system output through **Output Devices**, with a checkmark beside the current device.
- Updates the available device list when devices are connected or disconnected; Bluetooth devices are excluded.
- Supports 16-bit sources on DACs that only offer 24-bit output.
- Can recover playback information when launched while Music is already playing.
- Runs in the menu bar, with no main window, Dock icon, account setup, or third-party dependencies.

## Requirements

- **macOS 27.0 or later** — the current project’s minimum system version.
- Apple Music with…
