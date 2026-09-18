---
repo: "Innei/electron-sparkle-updater"
name: "electron-sparkle-updater"
description: "Sparkle-based auto-updates for Electron apps on macOS — native N-API bridge + appcast release toolchain"
readmeQualityOk: true
url: "https://github.com/Innei/electron-sparkle-updater"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [59, 24]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-07-18T10:57:39Z"
lastCommitAt: "2026-09-18T14:02:21Z"
lastReleaseAt: "2026-09-11T12:40:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 78
undervaluedScore: 49
maintainers: ["Innei", "wibus-wee"]
openGraphImageUrl: "https://opengraph.githubassets.com/69393d335c2cb7e1e45584a1947ef65b1cd074b45bc3fc210f502934c16cc877/Innei/electron-sparkle-updater"
fundingLinks: ["GITHUB:https://github.com/Innei", "CUSTOM:https://afdian.com/@Innei"]
---

# electron-sparkle-updater

An Electron bridge and release toolchain for Sparkle, including bounded multi-hop delta updates. Kansoku consumes the bridge and release Action.

Electron's update story on macOS is Squirrel.Mac (`electron-updater` / the built-in `autoUpdater`). Sparkle — the de-facto macOS update framework used by most native Mac apps — has no maintained Electron bridge on npm. This library provides one: an N-API bridge to Sparkle.framework plus the release toolchain (appcast generation, EdDSA signing, delta updates) needed to make Sparkle actually usable end to end, extracted from a production Electron app.

**Platform positioning.** This solves a macOS-specific pain: Squirrel.Mac requires a paid Developer ID signing identity, while Sparkle works fine with ad-hoc signing. On Windows/Linux the ecosystem answer is already good — `electron-updater` (NSIS with differential updates, AppImage) or store channels (MSIX/winget, Snap/Flatpak) — so the recommended combination is **this library on macOS, `electron-updater` elsewhere**.

## Requirements

- macOS 12+ (matches Sparkle's `MACOSX_DEPLOYMENT_TARGET`)
- Node >= 20.19 (the afterPack wrapper relies on require() of ES…
