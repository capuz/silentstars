---
repo: "HereIamGosu/amnezia-config-gen"
name: "amnezia-config-gen"
description: "Tool for generating AmneziaWG configurations. Instead of complex settings, just click a button and get a ready-made configuration."
originalDescription: "Инструмент для генерации конфигураций AmneziaWG. Вместо сложных настроек, просто нажмите кнопку и получите готовый конфиг."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/HereIamGosu/amnezia-config-gen"
homepage: "https://valokda-amnezia.vercel.app/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [70]
topics: ["amneziawg", "generator", "javascript", "web-app", "web-application", "windows"]
stars: 148
forks: 7
openIssues: 1
closedIssues: 2
watchers: 3
contributors: 2
recentReleases: 1
createdAt: "2024-12-22T14:53:32Z"
lastCommitAt: "2026-10-03T21:53:38Z"
lastReleaseAt: "2026-09-12T17:41:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 44
maintainers: ["HereIamGosu", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/907006271/568851d2-a93b-47b1-a307-6367719e6a55"
---

# 🌐🔧 AmneziaWG Config Generator

[English](https://github.com/HereIamGosu/amnezia-config-gen/blob/HEAD/README.md) | [Русский](https://github.com/HereIamGosu/amnezia-config-gen/blob/HEAD/README.ru.md)

Web UI and HTTP API for building `.conf` files for the **AmneziaWG** client (WireGuard with Amnezia obfuscation extensions). Primary use case: **Cloudflare WARP** profiles — registers a fresh WARP device via Cloudflare's official API, returns the keys and tunnel parameters, optionally narrows `AllowedIPs` to selected domain presets.

| | |
| --- | --- |
| **Generator** | <https://awgconfig.com/> |
| **Project info page** | <https://hereiamgosu.github.io/amnezia-config-gen/> |
| **Telegram channel** | <https://t.me/amnezia_config> |
| **Source code** | <https://github.com/HereIamGosu/amnezia-config-gen> |

## Features

- Explicit routing mode selection: full tunnel (all traffic) or split tunnel (selected presets only)
- Four config formats: **Legacy**, **AWG 2.0**, **AWG 3.0**, and **AWG 3.1** (`mode=legacy|awg2|awg3|awg31`). AWG 3.x modes use a WARP-safe client-side profile.
- Route presets: tile-selectable domain bundles → aggregated IPv4 (or IPv4+IPv6) CIDRs in `AllowedIPs`. With…
