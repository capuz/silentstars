---
repo: "hurui200320/nsg"
name: "nsg"
description: "Nikon Smart GPS, providing GPS data to Nikon Z cameras without using SnapBridge"
readmeQualityOk: true
url: "https://github.com/hurui200320/nsg"
language: "C++"
languages: ["C++", "Kotlin"]
languagePcts: [47, 44]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-23T11:42:15Z"
lastCommitAt: "2026-07-14T05:53:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 35
maintainers: ["hurui200320"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2bae3ca9e47ed151d7eb9356c0b4b358b4980ef3cd0b1b5ee5de5611c0c0f70/hurui200320/nsg"
---

# nsg - Nikon Smart GPS

An alternative for Nikon's SnapBridge, which provide GPS location to Z cameras via the bluetooth smart mode (the mode you connect with SnapBridge).

## Why?

I own Z 50 II and Z 8 camera, and I'm living in China. China has a law to forbiden all cameras from having built-in GPS for some reason. A workaround is using SnapBridge to provide GPS locations. However, on my Samsung, it's not stable (often disconnected from camera), and consume a lot of battery.

With my new Z8, I'm thinking maybe I can made my own GPS using the 10 pin connector since it's talking NEMA-0183 at 4800 bps. But sadly the Chinese firmware blocks the GPS setting, so even you have Z9, which has built-in GPS, you can't use it.

So for me, and other Chinese users, SnapBridge is the only way to feed GPS into the camera and geotagging the photo.

## Android PoC

This project steals the reverse engineer result from [gkoh/furble](https://github.com/gkoh/furble). Initially I thought I have to go through the SnapBridge APK and capture the bluetooth package, but thankfully the community has already done that.

The Android PoC has been verified to work with both the Nikon Z50 II and Nikon Z8 over…
