---
repo: "dea1hwatcher/nfqws2-android"
name: "nfqws2-android"
description: "AntiDPI root module for Android."
originalDescription: "AntiDPI root module for Android."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/dea1hwatcher/nfqws2-android"
language: "Lua"
languages: ["Lua", "Shell", "JavaScript"]
languagePcts: [37, 28, 24]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-10-03T07:50:36Z"
lastCommitAt: "2026-11-07T10:33:16Z"
lastReleaseAt: "2026-10-07T05:24:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 52
maintainers: ["dea1hwatcher"]
openGraphImageUrl: "https://opengraph.githubassets.com/543a537599bc01efbbd673424fe26a0f161b82a45145111d214567228a2ff5f0/dea1hwatcher/nfqws2-android"
---

# nfqws2-android

Full-featured port of **nfqws2** ([zapret2](https://github.com/bol-van/zapret) by bol-van) with support for Keenetic strategy syntax on Android.

The module is designed to bypass TSPU/DPI natively at the kernel level through the `netfilter` (NFQUEUE) subsystem. Unlike VPN apps (V2Ray, ByeDPI, etc.), this method **does not create a virtual network interface (tun)**, does not use extra battery power, and does not reduce connection speed.

Questions, strategy selection, and news are in the project's Telegram chat: **[t.me/nfqws2android](https://t.me/nfqws2android)**

## Features

* **Native operation via NFQUEUE**: packets are modified on the fly without starting a local VPN service.
* **Ready-made strategies by group**: Flowseal ALT, FAKE TLS AUTO, SIMPLE FAKE, and author presets. Any of them can be edited directly in the WebUI and restored to its original with one tap.
* **Import of nfqws2-keenetic configs**: files are converted to the form of built-in strategies and appear in the strategy selection. Several can be imported at once.
* **Pause on home Wi-Fi network**: if your router already bypasses DPI, the module can be set to disable itself automatically on the…
