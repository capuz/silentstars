---
repo: "kexi1412/PayloadDumper-Flux"
name: "PayloadDumper-Flux"
description: "ColorOS 16 style Android A/B OTA payload.bin partition dumper — parallel engine, resume, Jetpack Compose UI, Actions-built APK"
readmeQualityOk: true
url: "https://github.com/kexi1412/PayloadDumper-Flux"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [72]
stars: 23
forks: 3
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-07-15T18:43:11Z"
lastCommitAt: "2026-10-29T21:23:44Z"
lastReleaseAt: "2026-10-15T17:54:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 60
undervaluedScore: 29
maintainers: ["kexi1412"]
openGraphImageUrl: "https://opengraph.githubassets.com/33ab7ad15837a84e44e75768254bc78fce12a5fdfc39423e558680f367bff739/kexi1412/PayloadDumper-Flux"
---

# Payload Dumper · Flux — Android + PC

The `main` branch now contains both **Android** and **Windows x64 desktop** applications. Previous feature, fix, smoke and PC branch histories are merged here. Both apps use the same validated Kotlin firmware extraction core; desktop adds a new-api-inspired workbench.

**[PC usage and build instructions](https://github.com/kexi1412/PayloadDumper-Flux/blob/HEAD/<desktop/README.md>)** · **[Windows build workflow](https://github.com/kexi1412/PayloadDumper-Flux/blob/HEAD/<.github/workflows/build-pc.yml>)**

---

# Payload Dumper · Flux

**English** · [简体中文](https://github.com/kexi1412/PayloadDumper-Flux/blob/HEAD/<README.zh-CN.md>)

Extract partition images on Android — from a **picked local file** or an HTTP OTA direct link.

## New in 3.0.0

- **Picker-only local source:** tap the file card to open Android's system document picker. Local mode contains no path text field, cannot open the keyboard, and shows the selected name and size. Cancelling the picker keeps the previous selection.
- **Independent sources:** the local document and network URL are remembered separately. Changing modes cannot accidentally parse the other source; an active…
