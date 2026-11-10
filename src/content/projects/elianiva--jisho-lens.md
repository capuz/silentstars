---
repo: "elianiva/jisho-lens"
name: "jisho-lens"
description: "An Android app that allows you to scan Japanese words from a picture and search for its meaning from a dictionary."
readmeQualityOk: true
url: "https://github.com/elianiva/jisho-lens"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
topics: ["android", "flutter", "japanese-dictionary"]
stars: 31
forks: 5
openIssues: 3
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-06-08T02:05:11Z"
lastCommitAt: "2026-11-10T11:36:26Z"
lastReleaseAt: "2023-10-08T08:29:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 34
maintainers: ["elianiva"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ce76aadd542550197e938a463fdd98c76ee6c3c34c8c91021ff83f47e5d3844/elianiva/jisho-lens"
---

Jisho Lens is an Android app that scans Japanese words from a picture and looks them up in local dictionaries. Scan a page, tap a word, and read the entry. Nothing leaves the device.

## Status

The native app lives in `app/` and uses Kotlin, Jetpack Compose, and a Yomitan-compatible SQLite database. It replaces the 1.x app, whose source and old database are no longer part of this tree.

- Preview package: `com.elianiva.preview`
- Stable package: `com.elianiva`
- Minimum Android version: 8.0 (API 26)

The native app does not read the 1.x database. Import a Yomitan `.zip` dictionary instead.

## Features

- Scan from the camera or the photo picker.
- Tap a recognized line, then a dictionary word, to open its entry.
- Search Japanese words, kanji, kana, and English glosses.
- Deinflect conjugated input, so 食べさせられた finds 食べる.
- Import several Yomitan dictionaries, enable them, reorder them, and remove them.
- Show tags, glosses, cross references, images, and frequency data from the dictionary.
- Material 3 Expressive design with Google Sans Flex. Light, dark, and system themes, with dynamic color on Android 12 and later and a blue fallback.
- Share an image to the app, or select text…
