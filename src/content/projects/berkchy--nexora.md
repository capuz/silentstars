---
repo: "berkchy/nexora"
name: "nexora"
description: "CS16 Client apk is the open source of the patcher project"
readmeQualityOk: true
url: "https://github.com/berkchy/nexora"
language: "Pawn"
languages: ["Pawn", "SourcePawn", "Kotlin"]
languagePcts: [42, 30, 22]
stars: 7
forks: 4
openIssues: 1
closedIssues: 10
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-08-31T08:03:50Z"
lastCommitAt: "2026-10-25T08:40:56Z"
lastReleaseAt: "2026-09-19T22:55:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 63
maintainers: ["berkchy"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1352153560/290cd2fa-795f-4d80-9814-9ae4d3a440ef"
---

# Nexora

**AMX Mod X for Counter-Strike 1.6 on Android, without touching a single build file.**

Pick your CS 1.6 APK, hit **Patch**, install the result. Metamod, AMXX, the
modules, the bot and the plugin compiler all ride along.

---

## What it does

Nexora takes the stock CS 1.6 Android client and rewrites it into a fully
modded build. It injects the native AMXX stack, bundles a plugin compiler, and
re-signs the APK so it installs over the original.

### The four screens

| Screen | What it's for |
|---|---|
| **Patch** | Choose the source APK, see the mod bundle status, patch, sign, install |
| **Compile** | Compile `.sma` to `.amxx` with the bundled `amxxpc` |
| **Addons** | Install and manage the AMXX addons package |
| **Plugins** | Edit `plugins.ini` without leaving the app |

---

## Why it's built this way

### Updates instead of repatching

A patched APK is a large binary. Re-downloading 60 MB every night to change a
few `.so` files is wasteful, so Nexora publishes a **manifest** alongside the
release. On launch it compares the SHA-256 of every installed library with the
manifest and only pulls down what actually changed, then patches the APK in
place.

That means a…
