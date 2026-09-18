---
repo: "Endlad2/LaLune"
name: "LaLune"
description: "La Lune - кроссплатформенный клиент VPN для обхода белых списков и блокировок DPI, сделанный для одновременного поддержания сразу нескольких платформ"
readmeQualityOk: true
url: "https://github.com/Endlad2/LaLune"
language: "Dart"
languages: ["Dart", "Go"]
languagePcts: [22, 21]
stars: 15
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-08-24T08:47:00Z"
lastCommitAt: "2026-09-18T14:03:49Z"
lastReleaseAt: "2026-09-04T14:02:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 48
maintainers: ["Endlad2"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa83d95b287f0a7504095a95023fc0577c17f84003e3702461dc368950814ff9/Endlad2/LaLune"
---

# LaLune

Кроссплатформенный VPN-клиент для протокола CSQTT. Приложение объединяет в себе Desktop (Windows/Linux), мобильную (iOS) и роутерную (OpenWRT) версии с единым UI на HTML/CSS/JS.

## О проекте

LaLune — клиент для обхода блокировок на базе протокола [CSQTT](https://github.com/Endlad2/csqtt-core). Протокол использует VK Calls для маскировки трафика, TURN для обхода NAT, WRAP для шифрования и обфускацию для сокрытия.

### Поддерживаемые платформы

| Платформа | Статус | Технология |
|---|---|---|
| Windows | Готово | Wails v2 + Flutter +Wintun |
| Linux | Готово | Wails v2 + Flutter + TUN |
| OpenWRT | Готово | Go daemon |
| iOS | Готово | Swift + Network Extension |

## Архитектура

```

LaLune/
├── Frontend/          — общий HTML/CSS/JS UI
├── Desktop/           — Wails-приложение (Windows/Linux)
│   ├── Libs/          — общая Go-логика (БД, конфиги, обновления)
│   ├── Windows/       — Windows-специфичный код
│   └── Linux/         — Linux-специфичный код
├── Mobile/
│   └── IOS/           — iOS-приложение (Swift + Network Extension)
├── OpenWRT/           — демон для роутеров
└── build_desktop.py   — скрипт сборки Desktop

```

## Сборка Desktop

### Требования

- Go…
