---
repo: "kevinlee-06/adb2"
name: "adb2"
description: "E6A98B"
url: "https://github.com/kevinlee-06/adb2"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 2
createdAt: "2026-06-20T17:52:22Z"
lastCommitAt: "2026-06-23T06:41:21Z"
lastReleaseAt: "2026-06-20T19:07:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 18
maintainers: ["kevinlee-06"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7cd2bf08e0c0736309c2a65b1f4e09da07b331138c55b7e537379ff759afd3b/kevinlee-06/adb2"
---

# ADB Kit

[中文版 README](README.zh_TW.md)

A minimal Android app that automatically sets `adb_enabled` on boot to bypass financial app debug detection.

## How It Works

Many financial/banking apps check `Settings.Global.ADB_ENABLED == 1` to detect USB debugging. By setting the value to **2**, these simple equality checks fail — the app thinks ADB is off, while Android still treats any non-zero value as enabled.

ADB Kit applies this setting automatically every time the device boots, so you never have to worry about it resetting.

## Features

- 🔄 **Auto-apply on boot** — `BroadcastReceiver` listens for `BOOT_COMPLETED`
- 🔧 **Configurable value** — Choose between `0`, `1`, or `2`
- 🎨 **Material 3 UI** — Native look with Dynamic Colors (Material You)
- 🌐 **i18n** — English & Traditional Chinese
- 🔒 **Direct Boot aware** — Applies before user unlock
- 📦 **Tiny** — No unnecessary dependencies

## Setup

### 1. Build

Requires Java 17 and Android SDK.

```bash
JAVA_HOME=/path/to/java17 \
ANDROID_HOME=/path/to/android-sdk \
./gradlew assembleDebug
```

### 2. Install

```bash
adb install app/build/outputs/apk/debug/app-debug.apk
```

### 3. Grant Permission…
