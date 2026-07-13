---
repo: "shaarkys/com.xiaomi-miio"
name: "com.xiaomi-miio"
description: "Homey app to control Mi Home devices that implement the miIO protocol and Xiaomi gateway child devices"
readmeQualityOk: true
url: "https://github.com/shaarkys/com.xiaomi-miio"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [70, 30]
topics: ["homey", "homeyapp", "xiaomi", "mihome", "mihomey", "miio", "zigbee", "gateway", "mi"]
stars: 473
forks: 88
openIssues: 0
closedIssues: 290
watchers: 14
contributors: 14
recentReleases: 0
createdAt: "2017-05-13T10:12:18Z"
lastCommitAt: "2026-07-13T06:38:03Z"
lastReleaseAt: "2018-01-18T19:15:57Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 97
undervaluedScore: 37
maintainers: ["shaarkys", "LieuweJ", "N-Bark"]
openGraphImageUrl: "https://opengraph.githubassets.com/9df526314b22d1506bb113173d8244b4a6e35912f4c85995f176622cb1a99fe2/shaarkys/com.xiaomi-miio"
fundingLinks: ["CUSTOM:paypal.me/bkubesa"]
---

# Homey app for Xiaomi Mi Home devices
Use [Homey](https://www.athom.com/) to control WiFi devices which connect trough the Xiaomi Mi Home app. You can also use this app to control Xiaomi / Aqara Zigbee devices which are connected to a Xiaomi gateway. There are no restrictions to the number of connected Zigbee devices, since you can have multiple Mi Gateway devices and distribute all Zigbee devices between them.

## Important
Xiaomi does not officially support controlling devices from outside the Mi Home app. Additional steps are required for pairing these devices with Homey that require some technical knowledge. It also means not all available devices are supported. Also be aware that Xiaomi can make changes to it's eco system at any time resulting in Homey not being able to control these devices anymore.

## Adding miIO devices
For Homey to be able to communicate with devices over the miIO protocol a unique device token needs to be obtained. In some cases technical knowledge is needed for retrieving these tokens. See the instructions [here](https://github.com/shaarkys/com.xiaomi-miio/wiki/Obtain-token) on retrieving device tokens.

## (Un)supported devices
As mentioned not all…
