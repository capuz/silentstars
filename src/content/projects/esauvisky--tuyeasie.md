---
repo: "esauvisky/Tuyeasie"
name: "Tuyeasie"
description: "Local-first Tuya onboarding for Home Assistant: Bluetooth pairing, tuya-local import, and automatic ONVIF/RTSP camera setup."
readmeQualityOk: true
url: "https://github.com/esauvisky/Tuyeasie"
language: "Kotlin"
languages: ["Kotlin", "Python"]
languagePcts: [70, 24]
topics: ["android", "home-assistant", "kotlin", "onvif", "rtsp", "tuya"]
stars: 13
forks: 1
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2026-10-29T23:06:42Z"
lastCommitAt: "2026-11-15T08:25:14Z"
lastReleaseAt: "2026-11-15T08:29:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 69
undervaluedScore: 36
maintainers: ["esauvisky"]
openGraphImageUrl: "https://opengraph.githubassets.com/418bde86583773ab14e8582acadf897503b4b497aa9608089a1831cc5fec110f/esauvisky/Tuyeasie"
---

# Tuyeasie

Tuya will sell you a plug, then charge you a developer account, a cloud project, and a support ticket before it admits the thing has a local key. Tuyeasie skips that. Pair the device from your phone, pick how it goes into Home Assistant, and it lands there, key included. No Smart Life account, no IoT portal, no `tinytuya wizard`.

https://github.com/user-attachments/assets/b059be73-5cae-42ae-8090-d10219f59be8

## Download

Grab the APK from [GitHub Reeleases](https://github.com/esauvisky/Tuyeasie/releases) and install it.

## Set it up

1. Install [Tuya Local](https://github.com/make-all/tuya-local) in Home Assistant. The stock one is what you want for plugs, bulbs, and sensors.
2. Make an administrator long-lived access token.
3. In the app, open Settings. Home Assistant URL, the token, and the 2.4 GHz Wi-Fi the device should join.
4. Open Pair. Reset the device until it blinks fast, then tap it.
5. Wait for the scan, then pick the integrations you want. Skip is fine; you can add them later from the device screen.

The phone and Home Assistant need to be on the same network. Pairing uses the internet once. After that the device is controlled locally, which was the…
