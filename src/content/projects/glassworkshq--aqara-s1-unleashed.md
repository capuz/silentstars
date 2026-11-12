---
repo: "GlassworksHQ/aqara-s1-unleashed"
name: "aqara-s1-unleashed"
description: "Turn the Aqara Panel Hub S1 Plus into a local Home Assistant wall panel: kiosk, voice, Music Assistant, Zigbee/Thread. Installs from your browser over USB, with backup and undo."
readmeQualityOk: true
url: "https://github.com/GlassworksHQ/aqara-s1-unleashed"
homepage: "https://s1.edm.sh"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [65]
topics: ["a133", "allwinner", "aqara", "esphome", "fel", "geckoview", "home-assistant", "kiosk", "magisk", "music-assistant"]
stars: 8
forks: 0
openIssues: 33
closedIssues: 6
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-11-09T06:19:13Z"
lastCommitAt: "2026-11-12T05:42:20Z"
lastReleaseAt: "2026-11-11T08:24:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 79
undervaluedScore: 50
maintainers: ["aguilaair"]
openGraphImageUrl: "https://opengraph.githubassets.com/90cee9e5573dca946f293fa5abbe6feee2ca84b93604115aac72d9c0f5f3cfe7/GlassworksHQ/aqara-s1-unleashed"
---

Dashboard, voice assistant, music, presence and the built-in Zigbee/Thread radio, all local.<br>
  Installed from your browser over one USB cable, with a backup first and undo built in.

  Current release: <a href="https://github.com/GlassworksHQ/aqara-s1-unleashed/releases/latest"><b>v0.4.1</b></a> ·

---

## Why

The S1 Plus is good wall hardware: a 1440×720 touchscreen, a microphone and a speaker, a
time-of-flight presence sensor, an ambient light sensor, a Zigbee/Thread radio and a mains relay
base. Out of the box it only runs Aqara's launcher and talks to Aqara's cloud. Its system
WebView is Chromium 74, which is too old for the current Home Assistant frontend.

S1 Unleashed replaces the software layer and leaves the hardware alone. The panel boots into
**S1 Kiosk**, a small open-source app built on GeckoView (Firefox's engine). It shows your
dashboard and appears in Home Assistant as a single ESPHome device. You don't need an Aqara
account, soldering, or a terminal.

## What you get

**Your dashboard, full screen.** A current Home Assistant frontend in a kiosk that is the panel's
home screen. HA's header and sidebar are hidden. You sign in by scanning a QR code with your…
