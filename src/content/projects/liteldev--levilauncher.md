---
repo: "LiteLDev/LeviLauncher"
name: "LeviLauncher"
description: "Minecraft Bedrock Edition GDK Launcher for Windows"
readmeQualityOk: true
url: "https://github.com/LiteLDev/LeviLauncher"
homepage: "https://docs.levimc.org/LeviLauncher/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [65, 30]
topics: ["minecraft", "minecraft-bedrock-edition", "minecraft-launcher"]
stars: 451
forks: 96
openIssues: 15
closedIssues: 122
watchers: 9
contributors: 14
recentReleases: 0
createdAt: "2025-11-13T11:31:17Z"
lastCommitAt: "2026-11-07T10:36:20Z"
lastReleaseAt: "2025-11-26T12:32:16Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 36
maintainers: ["futrime", "dreamguxiang", "ShrBox"]
openGraphImageUrl: "https://opengraph.githubassets.com/c16b7e81ceb55a99fb9936bebf91a28ac0948a21111adad235cfcd76afa7b78f/LiteLDev/LeviLauncher"
---

# LeviLauncher

A desktop launcher for **Minecraft Bedrock Edition (GDK / UWP)** on **Windows**.

## Background

LeviLauncher helps you install, manage, isolate, mod, and launch Release or Preview builds while keeping content and tooling easier to organize.

This repository is the **Windows version** of LeviLauncher. The **Android version** is developed in [LiteLDev/LeviLaunchroid](https://github.com/LiteLDev/LeviLaunchroid); both are documented in one guide at https://docs.levimc.org/LeviLauncher/ (Windows / Android tabs). Developer docs for Android native mods are in the [LeviLamina docs](https://docs.levimc.org/LeviLamina/developer_guides/android/). There is no iOS version, and none is planned.

## Install

### Requirements

- Windows 10/11
- A legitimate licensed copy of Minecraft Bedrock Edition
- Microsoft Edge WebView2 Runtime
- GDK: Microsoft Gaming Services and Microsoft GameInput available on the system
- UWP: Windows Developer Mode and the UWP framework dependencies required by the package manifest
- Native mod loader (`preload-native` DLL mods): the desktop Visual C++ runtime (x64), which the launcher checks and offers to install

UWP x64 instances support the console…
