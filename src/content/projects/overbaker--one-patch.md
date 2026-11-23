---
repo: "Overbaker/One-Patch"
name: "One-Patch"
description: "Lightweight (1.5 MB), 100% offline Android touch-blocking overlay for dead/ghost-touch zones & accidental touches, with floating toggle and recordable one-handed gesture replay."
readmeQualityOk: true
url: "https://github.com/Overbaker/One-Patch"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
topics: ["android-overlay", "broken-screen", "screen-repair", "touch-blocker", "ghost-touch", "accessibility", "android", "hyperos", "kotlin", "material-you"]
stars: 5
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-28T11:49:10Z"
lastCommitAt: "2026-11-23T10:24:35Z"
lastReleaseAt: "2026-04-28T11:49:27Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 80
undervaluedScore: 12
maintainers: ["Overbaker"]
openGraphImageUrl: "https://opengraph.githubassets.com/35a3298a50ad8ff016447f803adfb240b4643791b4c40f5cf266083b9a8f4457/Overbaker/One-Patch"
discussionCount: 0
---

---

**One Patch** is a lightweight (**~1.5 MB**), **100% offline** Android utility (Kotlin, no root, zero internet permission) that places a draggable, resizable touch-blocking rectangle over any screen zone — ideal for cracked-screen ghost touches, palm contact, or accidental edge taps — with a one-tap floating toggle and **recordable one-handed-mode gesture replay**.

## How It Works

## Quick Setup

Download the latest APK from [**Releases**](https://github.com/Overbaker/One-Patch/releases/latest) (or `adb install -r app-release.apk`):

| Step | Action |
|---|---|
| **1** | Grant **"Display over other apps"** permission |
| **2** *(recommended)* | Enable **One Patch Accessibility Service** (*Settings → Accessibility → Installed services*) for trusted `TYPE_ACCESSIBILITY_OVERLAY` |
| **3** *(Xiaomi / HyperOS)* | Allow **"Show on lock screen"** + **"Display pop-up windows while running in background"** and set **Battery saver → No restrictions** |
| **4** *(optional)* | Tap **录制单手模式手势** to record your device's exact OEM one-handed trigger gesture once |
