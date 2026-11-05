---
repo: "ItosEO/COUI-Kit"
name: "COUI-Kit"
description: "Replicate and optimize the ColorOS 17 UI style with Compose"
originalDescription: "使用 Compose 复刻和优化 ColorOS 17 UI 风格"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ItosEO/COUI-Kit"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [89]
stars: 11
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2026-10-23T14:12:07Z"
lastCommitAt: "2026-11-05T14:05:25Z"
lastReleaseAt: "2026-11-05T12:57:06Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 49
maintainers: ["ItosEO", "xiaomanjun233", "roro2239"]
openGraphImageUrl: "https://opengraph.githubassets.com/03fea1d889e9d1626fc695e382ac7f2312f8f6f17ef1c30373904ce13c951b2f/ItosEO/COUI-Kit"
---

# COUI-Kit

A COUI component and visual effects library for Android Jetpack Compose

COUI-Kit draws on ColorOS 17's "Ningguang" visual effects and provides background blur, material color mixing, rim light, and responsive motion effects.

## Features

- Components and effects can be used separately or combined.
- Pure COUI pages can compose `CouiTheme` with an optional [Scaffold](https://github.com/ItosEO/COUI-Kit/blob/HEAD/docs/components/scaffold.md), unifying slot measurement and safe areas without Material 3.
- Settings-style layouts provide `Group`, `Item`, `Divider`, and `Footer`. `Item` can handle an optional full-row click itself, or only lay out its content and leave selection, switches, and other state to the host.
- You can use a single COUI component on its own, mixing it with Material, Miuix, or your own design. Replacing the host's Scaffold, theme, and navigation is not required; see [Host Page Integration](https://github.com/ItosEO/COUI-Kit/blob/HEAD/docs/guide/secondary-pages.md).
- Supports integrating your app's color scheme, text styles, and shapes, and provides common appearance presets.
- Provides native themes, component defaults, and an optional…
