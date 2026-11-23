---
repo: "yangyongyongyong/GeelyPassiveKey"
name: "GeelyPassiveKey"
description: "Reverse-engineering knowledge base for Geely Galaxy & vivo Wallet Bluetooth car keys, plus the “Galaxy Passive Key” Android app (unlock on approach with the screen off / lock on departure)"
originalDescription: "吉利银河 & vivo 钱包蓝牙车钥匙逆向工程知识库 + 「银河无感钥匙」Android App（息屏靠近解锁 / 离开上锁）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yangyongyongyong/GeelyPassiveKey"
language: "Java"
languages: ["Java"]
languagePcts: [96]
topics: ["android", "ble", "car-key", "geely", "reverse-engineering", "passive-key"]
stars: 26
forks: 7
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-11-06T13:41:44Z"
lastCommitAt: "2026-11-23T12:22:28Z"
lastReleaseAt: "2026-11-23T12:23:32Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 79
undervaluedScore: 34
maintainers: ["yyyy9527", "yangyongyongyong"]
openGraphImageUrl: "https://opengraph.githubassets.com/a28dfbdf1fd87b9027a61d658c815f7871390165b9cd033c1a7c12c615746577/yangyongyongyong/GeelyPassiveKey"
---

# Galaxy Passive Key · GeelyPassiveKey

This project redoes the Geely Galaxy's “unlock when approaching / lock when leaving” feature: **the phone decides by itself whether you are approaching or leaving, then connects the Galaxy app's Bluetooth key for you and unlocks the car.**

The “passive entry” switch in the head unit can stay off; this app does not depend on it.

[⬇️ Download APK](https://github.com/yangyongyongyong/GeelyPassiveKey/releases/latest) · [v4.0 design notes](https://github.com/yangyongyongyong/GeelyPassiveKey/blob/HEAD/docs/36_minimal_generic_passive_key.md) · [Reverse-engineering knowledge base](https://github.com/yangyongyongyong/GeelyPassiveKey/blob/HEAD/docs/)

> At a glance: scan for this car → connection trigger → Galaxy authentication → unlock on approach → confirm departure and lock. The connection-trigger threshold is not the same as the approach-unlock threshold.
