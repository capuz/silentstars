---
repo: "ef1m03/kordon"
name: "kordon"
description: "Kill switch for apps: freezes Claude, ChatGPT, Cursor, Telegram and other programs when the network or IP changes"
originalDescription: "Kill switch для приложений: замораживает Claude, ChatGPT, Cursor, Telegram и другие программы при смене сети или IP"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/ef1m03/kordon"
homepage: "https://efimovdev.ru/kordon/?utm_source=kordon&utm_medium=github"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [67, 20]
topics: ["golang", "ipv6", "kill-switch", "linux", "macos", "menubar", "privacy", "vpn", "windows"]
stars: 29
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-11-02T20:14:14Z"
lastCommitAt: "2026-11-03T10:52:17Z"
lastReleaseAt: "2026-11-03T00:17:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 30
maintainers: ["ef1m03"]
openGraphImageUrl: "https://opengraph.githubassets.com/b25b7ea9a6205f2b8fa11f578a322bc2a293946378b3d9340c15146648ac47f6/ef1m03/kordon"
---

## Why

Some programs can't be run "from the wrong" address: work software that must only go through a corporate VPN, AI assistants, messengers, torrent clients. VPNs drop constantly: after sleep, when switching Wi-Fi, on reconnect. At that moment the program is already sending requests from your real IP, and you find out last.

A regular kill switch inside a VPN client cuts off the internet entirely. Kordon works selectively: it only touches the apps you choose and leaves everything else as is.

## Why Kordon

| | Kill switch in VPN client | Firewall rules | **Kordon** |
|---|:---:|:---:|:---:|
| Affects only selected programs, the rest of the internet keeps working | ❌ cuts everything | ✅ | ✅ |
| VPN blinks for 2 seconds - the program continues from the same place | ❌ | ❌ drops connections | ✅ freeze |
| Allow an entire country, not just one address | ❌ | ❌ | ✅ |
| Shows IP and country without opening anything | ❌ | ❌ | ✅ |
| Works with VPN in proxy mode (v2rayN, Hiddify, Clash) | depends on client | ❌ | ✅ |
| Catches IPv6 leak when VPN routes only IPv4 | not always | ❌ | ✅ |
| Catches DNS leak | not always | ❌ | ✅ |
| Own rules for each application | ❌ |…
