---
repo: "simtop/BillionBeers"
name: "BillionBeers"
description: "Production-shaped multi-module Android app where the architecture rules are enforced by CI, not convention. Compose · Metro DI · Room SSOT · hand-rolled paging · on-demand dynamic features · Konsist architecture tests · Paparazzi screenshots · Gradle dependency verification."
readmeQualityOk: true
url: "https://github.com/simtop/BillionBeers"
homepage: "https://play.google.com/store/apps/details?id=com.simtop.billionbeers"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [78]
topics: ["android", "android-architecture", "clean-architecture", "dependency-injection", "dynamic-feature-modules", "gradle-convention-plugins", "jetpack-compose", "konsist", "kotlin", "multi-module"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2020-08-19T08:44:45Z"
lastCommitAt: "2026-11-06T12:18:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 76
maintainers: ["simtop", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e74358e553d378297468f37594bd5b41045f207b27a14c11604ab136826c2f98/simtop/BillionBeers"
---

# BillionBeers

BillionBeers is a beer catalog built with Jetpack Compose, Metro DI, and Room. Browse by style
or brewery, search for beers, and save favorites and filters on your device. Availability flags
are local too. The app reads the remote catalog without changing it.

The project is also a reference for multi-module Android architecture. Konsist tests and Gradle
dependency checks enforce module boundaries. [ADRs](https://github.com/simtop/BillionBeers/blob/HEAD/docs/adr/) explain the design choices.

[Run the app](#run-the-android-app) · [Architecture](#architecture) ·
[Checks](#development-checks) · [Platform support](#platform-support) · [ADRs](https://github.com/simtop/BillionBeers/blob/HEAD/docs/adr/)

## App screenshots

Captured from the Android app running in an emulator, with loaded beer artwork.

The Android app includes:

- A paged catalog, inline search, advanced filters, and browsing by style or brewery.
- Beer details with ABV, IBU, ingredients, and food pairings where available.
- Local favorites, saved filters, and availability flags, plus a Room-backed Favorites home-screen widget.
- Light and dark themes, with adaptive list-detail navigation for wider…
