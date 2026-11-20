---
repo: "ef1m03/kordon"
name: "kordon"
description: "Kill switch for applications: freezes Claude, ChatGPT, Cursor, Telegram and other programs when the VPN drops, the network changes, or the IP changes"
originalDescription: "Kill switch для приложений: замораживает Claude, ChatGPT, Cursor, Telegram и другие программы при обрыве VPN, смене сети или IP"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/ef1m03/kordon"
homepage: "https://efimovdev.ru/kordon/"
language: "PowerShell"
languages: ["PowerShell", "Shell"]
languagePcts: [60, 40]
topics: ["golang", "ipv6", "kill-switch", "linux", "macos", "menubar", "privacy", "vpn", "windows"]
stars: 147
forks: 10
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2026-11-02T20:14:14Z"
lastCommitAt: "2026-11-20T12:19:11Z"
lastReleaseAt: "2026-11-20T12:18:17Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 69
undervaluedScore: 23
maintainers: ["ef1m03"]
openGraphImageUrl: "https://opengraph.githubassets.com/05080b09c5a6231a893eda75cb8fe5b847e522bd37dcebfbae86966cf3f5d269/ef1m03/kordon"
discussionCount: 1
---

## Why

Some programs must not be run "from the wrong" address: work software that should only go through a corporate VPN, AI assistants, messengers, torrent clients. VPNs drop constantly: after sleep, when switching Wi-Fi, during reconnection. At that moment a program is already sending requests from your real IP, and you find out last.

A regular kill switch inside a VPN client cuts off the internet entirely. Kordon works selectively: it only affects the applications you choose and leaves everything else as it is.
