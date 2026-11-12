---
repo: "iPocket-APP/MijiaLAN"
name: "MijiaLAN"
description: "macOS menu bar Mijia LAN control and Apple Home bridge · Local Mijia device control and HomeKit bridge for macOS"
originalDescription: "macOS 菜单栏米家局域网控制与 Apple Home 桥接 · Local Mijia device control and HomeKit bridge for macOS"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/iPocket-APP/MijiaLAN"
homepage: "https://mijialan.ipocket.xyz/"
language: "Swift"
languages: ["Swift"]
languagePcts: [90]
stars: 102
forks: 4
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-11-02T14:23:51Z"
lastCommitAt: "2026-11-12T11:41:22Z"
lastReleaseAt: "2026-11-06T10:26:13Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 30
maintainers: ["iPocket-APP"]
openGraphImageUrl: "https://opengraph.githubassets.com/9211abc3a266cff3ce6e0b79ca855b3f777dc34ca98fba328bd0538d24fb8840/iPocket-APP/MijiaLAN"
---

# MijiaLAN · Mijia LAN Bridge

**Simplified Chinese** · [English](https://github.com/iPocket-APP/MijiaLAN/blob/HEAD/README.en.md)

Control Mijia Wi-Fi devices from the Mac menu bar, and connect them to Apple Home over the local network.

[Download](https://github.com/iPocket-APP/MijiaLAN/releases/latest) · [Usage](#使用) · [Device Support](#设备支持) · [FAQ](#常见问题) · [Privacy](#隐私) · [Development](#开发)

MijiaLAN communicates directly with devices on the local network using the miIO / MIoT protocols. Credentials only need to be imported once: scan a QR code with the Mijia app to retrieve them from the Xiaomi cloud, or manually enter an existing token. After that, daily control runs over the LAN. The Mac also acts as a HomeKit bridge, so iPhone, Apple Watch, HomePod, and Siri can control these devices too.

## Features

- **Menu bar panel**: Control Center-style device tiles; the power switch, detail pages, and offline reasons are all in the panel. Left-click shows or hides the panel; the right-click menu can open Settings or quit.
- **Apple Home bridging**: Provides light, outlet, fan, air purifier, air conditioner, and sensor services by device type. You can choose per device whether to…
