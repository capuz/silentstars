---
repo: "ajstrick81/morphe-androidtv-patches"
name: "morphe-androidtv-patches"
description: "Patches for Android TV apks"
readmeQualityOk: true
url: "https://github.com/ajstrick81/morphe-androidtv-patches"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [57]
stars: 190
forks: 6
openIssues: 6
closedIssues: 75
watchers: 5
contributors: 3
recentReleases: 0
createdAt: "2026-05-16T21:28:43Z"
lastCommitAt: "2026-09-19T01:41:41Z"
lastReleaseAt: "2026-05-25T13:57:23Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 98
undervaluedScore: 28
maintainers: ["ajstrick81", "semantic-release-bot", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c1ee59a5775bc9a3e856744dcd03971dd29af37acc4222b981f8d4d14df1e92/ajstrick81/morphe-androidtv-patches"
---

# 📺 Morphe Patches — Android TV

> **Built on the Shoulders of Giants**
> 
> Huge shout-out to the [Morphe Team](https://github.com/MorpheApp/morphe-patches) for creating this beautiful community

---

## ❓ About

I'm just like you — I enjoy watching TV and movies without being bored and annoyed to death by ads. I'll try to keep this repo updated when I can. I only do it for fun and I'm trying my best to make your viewing experience as enjoyable as possible :)

---

## 📊 Patch Status

| App | Package | Status | Tested Version | Date |
|-----|---------|--------|---------------|------|
| 🟢 Disney+ | `com.disney.disneyplus` | Working | `26.16.0+rc2-2026.09.08` | 9/14/26 |
| 🟢 Prime Video | `com.amazon.amazonvideo.livingroom` | Working — native in-app ad strip (movies + TV shows), no DNS required. ⚠️ **Use `6.23.23` / engine `v15.5.x`; do NOT update to `6.24.x` (engine `v16`)** — v16 moved the ad pipeline into the native engine, so ads return there ([#120](https://github.com/ajstrick81/morphe-androidtv-patches/issues/120)). Keep **auto-updates disabled** | `6.23.23+v15.5.0.70-armv7a` | 7/30/26 |
| 🟢 Netflix | `com.netflix.ninja` | Working — native in-app ad strip (pre-roll,…
