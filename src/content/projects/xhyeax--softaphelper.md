---
repo: "XhyEax/SoftApHelper"
name: "SoftApHelper"
description: "SoftAp static server IP(v4) for Android 9+; SoftAp type hide for Android 10+; SoftAp 5G channel and bandwidth lock for Android 13+ (Xposed) "
originalDescription: "SoftAp static server IP(v4) for Android 9+; SoftAp type hide for Android 10+; SoftAp 5G channel and bandwidth lock for Android 13+ (Xposed) "
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/XhyEax/SoftApHelper"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 430
forks: 55
openIssues: 8
closedIssues: 31
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2021-12-17T14:47:15Z"
lastCommitAt: "2026-11-26T15:25:01Z"
lastReleaseAt: "2024-03-31T07:30:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 71
undervaluedScore: 20
maintainers: ["XhyEax"]
openGraphImageUrl: "https://opengraph.githubassets.com/3075d67c2aef655c13e5e529b2bf81f8e0032d60fd36c9cb1c3e47b693aba4bb/XhyEax/SoftApHelper"
---

# SoftApHelper (Xposed)

An Xposed module for configuring Android hotspots.

## Features

1. Customize the Wi-Fi hotspot IPv4 address (Android 9+) and the Ethernet tethering IPv4 address (Android 11+).
2. Hide the metered network flag of the hotspot (Android 10+).
3. Customize or randomly generate the hotspot BSSID, with an option to re-randomize it every time the hotspot is turned on (Android 13+).
4. Configure optional channels and maximum bandwidth for the 5 GHz hotspot (Android 13+).
5. Stop the Wi-Fi hotspot from advertising IPv6 to clients (Android 11+, experimental, disabled by default).

## Usage

1. Install the module, enable it in LSPosed and set the [scope](#作用域) below, then restart the phone.
2. Open SoftApHelper, set the hotspot IP, BSSID, 5 GHz channel/bandwidth, or IPv6 options, then tap "Save".
3. Turn the hotspot off and back on for the new configuration to take effect. The "Hotspot IP (actual IP)" shown on the page displays the Wi-Fi hotspot address most recently reported by the module.
