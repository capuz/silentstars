---
repo: "bitflyer-tools/DroidFlyer"
name: "DroidFlyer"
description: ":zap: Android client for bitFlyer"
readmeQualityOk: true
url: "https://github.com/bitflyer-tools/DroidFlyer"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
topics: ["android", "bitflyer", "app", "kotlin", "mortar", "flow", "bitcoin", "trading", "mobile-app", "rxkotlin"]
stars: 12
forks: 1
openIssues: 11
closedIssues: 111
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2017-08-23T11:58:33Z"
lastCommitAt: "2026-11-25T03:16:16Z"
lastReleaseAt: "2026-11-07T11:13:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "under_pressure"]
healthScore: 98
undervaluedScore: 75
maintainers: ["unhappychoice", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/14af726f7a3500b79dabc033812828b6931aa4e511ad1b5e28b283bd41e0e8bd/bitflyer-tools/DroidFlyer"
---

# DroidFlyer
store](https://raw.githubusercontent.com/unhappychoice/Norimaki/image/google-play-badge.png)](https://play.google.com/store/apps/details?id=com.unhappychoice.droidflyer)

DroidFlyer is a [bitFlyer Lightning](https://lightning.bitflyer.com) client for Android.

## Features

- Chart recent bitFlyer Crypto CFD trade prices in JPY with 1-minute and 5-minute candlesticks.
- Watch live bids and asks in the order book and adjust how price levels are grouped.
- Place market and limit orders, and view or cancel active orders.

## Installation

Install [DroidFlyer from Google Play](https://play.google.com/store/apps/details?id=com.unhappychoice.droidflyer).

To build from source, clone this repository and follow the [development setup](https://github.com/bitflyer-tools/DroidFlyer/blob/HEAD/CONTRIBUTING.md#set-up-your-development-environment). Install Android SDK Platform-Tools for `adb`, then run these commands from the repository root with a USB debugging-enabled Android device connected.

```sh
./gradlew assembleDebug
adb install app/build/outputs/apk/debug/app-debug.apk
```
