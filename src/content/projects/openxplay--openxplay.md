---
repo: "OpenXPlay/OpenXPlay"
name: "OpenXPlay"
description: "CarPlay on Android head units that can't install apps, shown through software the head unit already has. · 让无法安装应用的安卓车机用上 CarPlay，通过车机自带的软件显示。"
readmeQualityOk: true
url: "https://github.com/OpenXPlay/OpenXPlay"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [55, 35]
stars: 87
forks: 7
openIssues: 4
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-17T10:35:11Z"
lastCommitAt: "2026-11-12T05:42:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 25
maintainers: ["riko2chen"]
openGraphImageUrl: "https://opengraph.githubassets.com/5623ec23029286b4e632fafe9c6645ff2bf112d2ba17139ca6d1a37afe777698/OpenXPlay/OpenXPlay"
discussionCount: 2
---

# OpenXPlay

**CarPlay for head units that can't install apps.**

OpenXPlay is for drivers who want CarPlay but cannot install third-party apps on their Android head unit. CarPlay shows on the original screen through entry points the head unit already has, such as its browser or a Carlink app.

Think of it as a set of CarPlay building blocks that you combine freely. It covers what some commercial CarPlay boxes do and adds more ways to connect and display, so you can pick the combination that fits your head unit and the devices you have. **Combined, the technologies in this project make up to 28 solutions.**

## Two ways to connect

| | How it works |
| --- | --- |
| **iPhone direct** (beta) | The OpenXPlay iPhone app connects the iPhone to the head unit directly, without a relay. [Join the TestFlight beta](https://testflight.apple.com/join/WbKejMWS) |
| **Relay** | An Android phone or a small Linux device such as a UFI003 dongle connects to the iPhone and passes CarPlay on to the head unit. |

## Connection routes

The diagram shows some of OpenXPlay's connection relationships, with iPhone direct connections emphasized and relay routes shown as alternatives. Whichever display…
