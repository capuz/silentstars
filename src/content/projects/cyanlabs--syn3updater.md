---
repo: "cyanlabs/Syn3Updater"
name: "Syn3Updater"
description: "Windows, Linux and macOS application for updating Ford Sync 3 infotainment systems"
readmeQualityOk: true
url: "https://github.com/cyanlabs/Syn3Updater"
homepage: "https://cyanlabs.net/applications/syn3-updater/"
language: "C#"
languages: ["C#"]
languagePcts: [95]
stars: 156
forks: 14
openIssues: 0
closedIssues: 196
watchers: 10
contributors: 3
recentReleases: 0
createdAt: "2020-08-17T22:05:43Z"
lastCommitAt: "2026-11-13T18:22:00Z"
lastReleaseAt: "2021-01-17T19:31:11Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 45
maintainers: ["fma965", "UrbanPotato"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab037f945d55488e2d172fdb0169035ac9bba459813d159134ff44c5bd699a33/cyanlabs/Syn3Updater"
---

# Syn3 Updater

Prepare a USB drive to update the Ford SYNC 3 system in your car. Pick your region, SYNC release and maps, and Syn3 Updater
downloads the packages, checks them, copies them to the drive and writes the `autoinstall.lst` / `reformat.lst` the head unit needs.

This is v3 of CyanLabs' Syn3 Updater: a cross-platform rewrite (Windows, macOS, Linux) on .NET 10 and [Avalonia](https://avaloniaui.net).

## Install

Download the file for your system from the [Releases page](https://github.com/cyanlabs/Syn3Updater/releases). To check a download,
compare its checksum with `SHA256SUMS`: `sha256sum -c --ignore-missing SHA256SUMS`. Replace `<v>` below with the version (for example `3.0.0`).

### Windows

Download `Syn3Updater-<v>-win-x64.zip` (`win-arm64` on ARM PCs), extract it and run `Syn3Updater.exe`. It asks for Administrator rights,
which it needs to format USB drives. There is no installer: delete the folder to remove it. The app is not code-signed, so SmartScreen may
warn: click *More info*, then *Run anyway*.

### macOS

Download `Syn3Updater-<v>-macos-arm64.dmg` (Apple Silicon) or `-macos-x64` (Intel), open it and drag *Syn3 Updater* onto *Applications*.
The first time,…
