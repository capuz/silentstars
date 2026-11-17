---
repo: "p32929/MyHouseAdsAndroid"
name: "MyHouseAdsAndroid"
description: "Android library for cross-promoting your own apps with banner and interstitial house ads (V1, see HouseAds2)"
readmeQualityOk: true
url: "https://github.com/p32929/MyHouseAdsAndroid"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["android", "android-library", "cross-promotion", "banner-ads", "house-ads", "interstitial-ads", "java", "jitpack", "no-ad-network", "self-promotion"]
stars: 18
forks: 9
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2019-06-15T09:53:16Z"
lastCommitAt: "2026-11-17T14:37:46Z"
lastReleaseAt: "2019-06-17T04:07:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 58
undervaluedScore: 41
maintainers: ["p32929"]
openGraphImageUrl: "https://opengraph.githubassets.com/312c6328abb20a860e8d52fbb12892105109695843ed58ffb04cb18776d33408/p32929/MyHouseAdsAndroid"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/p32929"]
---

# MyHouseAdsAndroid

Promote your own Android apps inside your own Android apps. MyHouseAdsAndroid shows a small banner and a full interstitial for your other apps, loaded from a JSON file you host or from a list in your code. No ad network, no account, no revenue share.

Each time an ad is shown, the next app in your list is used, so all your apps get their turn. The ads take their colors from your app's theme, so they look right in light and dark mode.

## Screenshots

| Light | Dark |
|---|---|
|  |  |

## Features

1. **Banner ad:** your app's icon, a short line of text and a "Get" button. Tapping it opens your link.
2. **Interstitial ad:** a centered card with a big icon, "Get it" and "Later".
3. **Ad on back press:** the close button says "Exit" and closes the screen, so the ad never traps your users.
4. **Two ways to feed it:** a JSON file at any URL, or `MyAd` items in code.
5. **Follows your theme:** uses your app's primary color and background, in light and dark mode.
6. **Small:** no image or network library is added to your app.

## Install

Add JitPack to `settings.gradle.kts`:

```kotlin
dependencyResolutionManagement {
    repositories {
        google()…
