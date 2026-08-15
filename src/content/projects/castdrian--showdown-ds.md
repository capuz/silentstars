---
repo: "castdrian/showdown-ds"
name: "showdown-ds"
description: "Dual Screen Pokémon Showdown! client"
readmeQualityOk: true
url: "https://github.com/castdrian/showdown-ds"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
topics: ["android", "ayn-thor", "pokemon", "pokemonshowdown", "showdown"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 8
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-08-06T23:39:52Z"
lastCommitAt: "2026-08-15T04:03:18Z"
lastReleaseAt: "2026-08-10T16:10:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 64
maintainers: ["castdrian"]
openGraphImageUrl: "https://opengraph.githubassets.com/1703704dd17202e9cfc90d2541c8189366f0a74a7b8a486bf05f828773351bfb/castdrian/showdown-ds"
fundingLinks: ["GITHUB:https://github.com/castdrian", "KO_FI:https://ko-fi.com/castdrian"]
---

# Showdown!

Native Android Pokémon Showdown client for the AYN Thor dual-screen handheld.

<table>
  <tr>
    <td width="50%"><img src="media/showdown-battle.png" alt="Showdown battle"></td>
    <td width="50%"><img src="media/showdown-switch.png" alt="Showdown switch screen"></td>
  </tr>
</table>

## Hardware target

All physical measurements use metric units.

- Upper display: 1920 × 1080 pixels, 152.4 mm diagonal, 120 Hz.
- Lower display: 1240 × 1080 pixels, 99.6 mm diagonal, 60 Hz.
- Closed enclosure: 150 × 94 × 25.6 mm, approximately 380 g.

The repository AVD uses the two display resolutions and densities from the Thor target. The display sizes are listed by [AYN](https://www.ayntec.com/products/ayn-thor), with the resolution and enclosure dimensions cross-checked against [Android Central](https://www.androidcentral.com/gaming/android-games/ayn-thor-pre-orders-open-tonight-and-its-much-cheaper-than-i-thought).

## Build

```sh
./scripts/setup-android.sh
./scripts/create-ayn-thor-avd.sh
./scripts/run-ayn-thor-avd.sh
gradle assembleDebug
adb install -r app/build/outputs/apk/debug/app-debug.apk
```

Set `AYN_THOR_VSYNC_RATE=120` when validating the upper display at its target…
