---
repo: "t0fox/d2o"
name: "d2o"
description: "Dynamic2OpenWrt — DPI bypass without bundled domain lists: the system measures the line itself and selects a strategy."
originalDescription: "Dynamic2OpenWrt — обход DPI без поставляемых списков доменов: система сама измеряет линию и подбирает стратегию."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/t0fox/d2o"
language: "C"
languages: ["C"]
languagePcts: [87]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-10-13T19:15:16Z"
lastCommitAt: "2026-11-07T16:12:11Z"
lastReleaseAt: "2026-10-22T09:28:26Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 53
maintainers: ["t0fox"]
openGraphImageUrl: "https://opengraph.githubassets.com/01f5f1e00677873d68be672cc96e02a810c6ce7903c3d63a01b2d5db56892f96/t0fox/d2o"
---

# d2o — adaptive C-based blocking bypass

**d2o** — an independent continuation of [d2k](https://github.com/necronicle/d2k) for **OpenWrt and Keenetic** routers. The network engine detects problematic connections, tests bypass options, and saves working strategies. The package includes a web panel, Discord voice support, a DNS helper for Instagram/WhatsApp, and a local Telegram proxy **in C11**.

**Idea:** choose a solution based on the behavior of real traffic, rather than maintaining a manual list of 'blocked sites'. The core engine runs directly on the router, without a mandatory VPN, WARP, or external server. Some download and DNS features use the project's network infrastructure.

> **Independent project.** d2o is not an official release of d2k or z2k and does not represent their teams. Some executable and command names remain `d2k` for compatibility — this is normal and does not mean installation from a different repository. The effectiveness of a specific strategy depends on the network, firmware, and service.

**Quick links:** [Features](#возможности) · [Installation](#установка) · [OpenWrt](#openwrt) · [Keenetic](#keenetic) · [Panel](#веб-панель) · [Telegram](#telegram)…
