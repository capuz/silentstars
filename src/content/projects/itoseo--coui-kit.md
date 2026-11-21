---
repo: "ItosEO/COUI-Kit"
name: "COUI-Kit"
description: "Recreating and optimizing the ColorOS 17 UI style with Compose"
originalDescription: "使用 Compose 复刻和优化 ColorOS 17 UI 风格"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ItosEO/COUI-Kit"
homepage: "https://itoseo.github.io/COUI-Kit/"
language: "Kotlin"
languages: ["Kotlin", "JavaScript"]
languagePcts: [48, 45]
stars: 155
forks: 13
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 7
createdAt: "2026-10-23T14:12:07Z"
lastCommitAt: "2026-11-21T13:32:29Z"
lastReleaseAt: "2026-11-12T10:59:37Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 78
undervaluedScore: 28
maintainers: ["ItosEO", "xiaomanjun233", "roro2239"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6e849bf89fee5b0ff63c32f9108b01c63a0c6af008be8fe2ebb5c337ecf8780/ItosEO/COUI-Kit"
---

# COUI-Kit

A COUI component and visual effects library for Android Jetpack Compose

COUI-Kit draws on the 凝光视效 visual effects of ColorOS 17, providing background blur, material color blending, rim lighting, responsive motion, and common components.

## Features

- **Modular composition**: Components and effects can be used independently or combined. They can be mixed with Material 3, Miuix, or your own design system without replacing the host's `Scaffold`, theme, or navigation.
- **Pure COUI, ready out of the box**: Provides a native `CouiTheme`, component defaults, and an optional `Scaffold` (unified slot measurement and safe areas). The core modules do not depend on Material 3.
- **Optional Material 3 adaptation**: The optional `coui-material3` module initializes adaptation at startup, so COUI's default colors and fonts update automatically with the host's `MaterialTheme`. See [Appearance and presets](https://github.com/ItosEO/COUI-Kit/blob/HEAD/docs/guide/appearance.md).
- **Flexible customization**: Supports integrating the app's custom colors, text styles, and `Shape`, and provides native light and dark presets.
