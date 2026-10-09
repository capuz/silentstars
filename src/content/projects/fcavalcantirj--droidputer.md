---
repo: "fcavalcantirj/droidputer"
name: "droidputer"
description: "Run open-source Cardputer apps on Android: plug an ESP32-S3 over USB-OTG and the phone is the screen, keyboard, GPS and flasher. Apps are rebuilt on demand from GitHub against a display/keyboard shim."
readmeQualityOk: true
url: "https://github.com/fcavalcantirj/droidputer"
homepage: "https://droidputer.vercel.app"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [48]
topics: ["android", "cardputer", "esp32", "esp32-s3", "m5stack", "platformio", "usb-otg", "cardputer-adv", "cardputeradv", "cardputter"]
stars: 50
forks: 6
openIssues: 2
closedIssues: 89
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-09-02T13:03:03Z"
lastCommitAt: "2026-10-09T18:56:13Z"
lastReleaseAt: "2026-10-09T18:44:26Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 46
maintainers: ["verdicts", "fcavalcantirj"]
openGraphImageUrl: "https://opengraph.githubassets.com/5636b8d94d7d74a8efc5e053f1b7b975b10709600f54f9a21db0003265f1c6b9/fcavalcantirj/droidputer"
---

flashed from the phone, mirrored on the phone, driven from the phone's keyboard and GPS.<br>
The ESP32-S3 runs the app; the phone adds screen, keys, location and a flasher. No display needed on the board.</p>

flashed from the phone, mirrored and driven from the phone. No display on the board.</em></p>

## What it is

Any open-source Cardputer app, rebuilt **unchanged** against a patched M5GFX 0.2.27 / M5Cardputer 1.1.1
**shim**, becomes a phone app: the shim tees every pixel write over the ESP32-S3's native USB-CDC and
merges the phone's KEY and GPS frames into the app's keyboard and serial. Builds happen on GitHub
Actions through a small proxy, the phone flashes the result itself, and the same phone is then the
display, keyboard, GPS and app launcher. A real Cardputer ADV is only used in development because its
own TFT shows the same frames next to the phone.

## How to use

1. Install the release APK from https://github.com/fcavalcantirj/droidputer/releases
   (`adb install droidputer-<tag>.apk`, e.g. `droidputer-v0.0.7.apk` (named `droidputter-…` up to v0.0.6), or open the file on the
   phone). Android 8+ with USB-OTG host support.
2. Plug an ESP32-S3 into the phone's USB-C…
