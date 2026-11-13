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
languagePcts: [86]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-10-13T19:15:16Z"
lastCommitAt: "2026-11-13T11:19:26Z"
lastReleaseAt: "2026-10-22T09:28:26Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 50
maintainers: ["t0fox"]
openGraphImageUrl: "https://opengraph.githubassets.com/04df6de1891bc5e54be1a8979dc67add9004ee4b06d20354e21577a28f02e244/t0fox/d2o"
---

# d2o — adaptive C-based censorship circumvention

**d2o** is an independent continuation of [d2k](https://github.com/necronicle/d2k) for **OpenWrt and Keenetic** routers. The network engine detects problematic connections, tests bypass variants, and saves working strategies. The package includes a web panel, Discord voice support, a DNS helper for Instagram/WhatsApp, and a local Telegram proxy **written in C11**.

**Idea:** choose a solution based on the behavior of real traffic instead of maintaining a manual list of "blocked sites". The core engine runs directly on the router, without a required VPN, WARP, or external server. Some download and DNS features use the project's network infrastructure.

> **Independent project.** d2o is not an official release of d2k or z2k and does not represent their teams. Some executable and command names remain `d2k` for compatibility; this is expected and does not mean installing from a different repository. Whether a specific strategy works depends on the network, firmware, and service.

**Quick links:** [Features](#возможности) · [Installation](#установка) · [OpenWrt](#openwrt) · [Keenetic](#keenetic) · [Panel](#веб-панель) ·…
