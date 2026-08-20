---
repo: "Qudaeo/react-native-yamap-plus"
name: "react-native-yamap-plus"
description: "Библиотека для интеграции Yandex MapKit SDK в React Native"
readmeQualityOk: true
url: "https://github.com/Qudaeo/react-native-yamap-plus"
language: "Kotlin"
languages: ["Kotlin", "Objective-C++"]
languagePcts: [45, 35]
stars: 33
forks: 8
openIssues: 2
closedIssues: 15
watchers: 4
contributors: 23
recentReleases: 0
createdAt: "2025-02-10T07:15:36Z"
lastCommitAt: "2026-08-20T04:09:24Z"
lastReleaseAt: "2025-07-08T03:52:47Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 41
maintainers: ["Qudaeo", "KirillAtWowa"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce63c84fbf47ca7e30036318dfc99c749333cfdb6274c68abc2825ac47f35786/Qudaeo/react-native-yamap-plus"
---

## React Native Yandex Maps (Яндекс Карты)

Форк библиотеки [react-native-yamap](https://github.com/volga-volga/react-native-yamap), разработанной компанией [Волга-Волга](https://vvdev.ru/)

Библиотека для интеграции MapKit SDK в React Native

| Version | React Native New Arch support |
|---------|-------------------------------|
| 6       | New Arch                      |
| 5       | Legacy + New Arch             |
| 4       | Legacy Arch                   |

## Миграция `4` → `5` или `4` → `6`

- Компоненты `Circle`, `Marker`, `Polygon` и `Polyline`:
  - дефолтное значение `handled` изменено с `true` на `false`

- Изменены названия и дефолтные значения props компонентов `Yamap` и `ClusteredYamap`:
  - `interactive`(`true`) → `interactiveDisabled`(`false`)
  - `scrollGesturesEnabled`(`true`) → `scrollGesturesDisabled`(`false`)
  - `zoomGesturesEnabled`(`true`) → `zoomGesturesDisabled`(`false`)
  - `tiltGesturesEnabled`(`true`) → `tiltGesturesDisabled`(`false`)
  - `rotateGesturesEnabled`(`true`) → `rotateGesturesDisabled`(`false`)
  - `fastTapEnabled`(`true`) → `fastTapDisabled`(`false`)

## Установка

```
yarn add react-native-yamap-plus
```

### Использование Lite версии Yandex…
