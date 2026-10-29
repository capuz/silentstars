---
repo: "AYwlilwYA/ColorOS16-LiquidGlass"
name: "ColorOS16-LiquidGlass"
description: "An LSPosed module that implements iOS 26-style Liquid Glass effects for the notification center / control center of ColorOS 16"
originalDescription: "为 ColorOS 16 通知中心 / 控制中心实现 iOS 26 风格液态玻璃效果的 LSPosed 模块"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/AYwlilwYA/ColorOS16-LiquidGlass"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-16T04:01:27Z"
lastCommitAt: "2026-10-29T12:25:06Z"
lastReleaseAt: "2026-10-17T17:10:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 67
undervaluedScore: 48
maintainers: ["AYwlilwYA"]
openGraphImageUrl: "https://opengraph.githubassets.com/973993ec510cc67da0e43c119dcb9a4c1708bd3eabf182e96b19d67c9e651ceb/AYwlilwYA/ColorOS16-LiquidGlass"
---

# ColorOS16 Liquid Glass

An LSPosed module that implements **iOS 26-style Liquid Glass** animation effects for the notification center / control center of **ColorOS 16**.

It does not modify system APKs or replace the View structure. By hooking ColorOS's built-in blur pipeline, it intercepts the unblurred original image and uses a custom AGSL shader to fully render the liquid glass effect (blur + SDF rounded-corner refraction + dispersion + highlights).

> **Current status**: In development / experimental. All features are disabled by default; behavior before enabling is identical to when the module is not installed.

---

## Effect

Applies a liquid glass material to the blur-based controls in the notification center / control center (notification cards, quick toggles, media cards, slider capsules, etc.): a clear inner lens, edge refraction bands, spectral dispersion, directional highlights, and vibrancy boost.

## How It Works

```
ColorOS blur pipeline (com.oplus.posteffect)
        │
        ├─ hook intercepts the unblurred original image (HardwareBuffer)
        │
        ↓
   Custom AGSL RuntimeShader
   (SDF rounded rectangle + refraction displacement + dispersion +…
