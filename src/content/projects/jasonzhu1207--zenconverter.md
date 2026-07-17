---
repo: "Jasonzhu1207/ZenConverter"
name: "ZenConverter"
description: "Local Android file converter built with Kotlin and Jetpack Compose. Convert files on device, with no ads, accounts, or upload-based fallback."
readmeQualityOk: true
url: "https://github.com/Jasonzhu1207/ZenConverter"
homepage: "https://zenconverter.xlab.my"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
stars: 16
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-07-09T09:29:10Z"
lastCommitAt: "2026-07-17T05:59:25Z"
lastReleaseAt: "2026-07-09T13:24:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 70
undervaluedScore: 33
maintainers: ["Jasonzhu1207"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1294990410/ca373a54-3ad1-43d5-82b7-828b2d75c91e"
fundingLinks: ["CUSTOM:https://afdian.com/a/Jason1207", "CUSTOM:https://github.com/Jasonzhu1207/ZenConverter/blob/main/DONATE.md"]
---

<h1 align="center">ZenConverter</h1>

  <strong>Private, local-first file conversion for Android.</strong>
</p>

  English |
</p>

</p>

</p>

ZenConverter is a local file converter for Android. Pick a file on your phone,
convert it on your phone, and keep it off someone else's server.

The app is built with native Kotlin and Jetpack Compose. File access goes
through Android's Storage Access Framework, and longer jobs run in a foreground
service. This is still early, so the app stays deliberately narrow: formats are
added one by one, with the rough edges written down instead of hidden.

**Note:** older phones with limited RAM may crash on large files. Even on newer
devices, very large files are still something to test carefully.

## Why Build It

Desktop users already have plenty of good open-source converters. Android feels
rougher. Many converter apps are cluttered, ad-heavy, oddly priced, or built
around uploading your file somewhere first.

ZenConverter is the local-first Android converter I wanted to use:

- no network transfer for conversion work,
- no ads, accounts, paywalls, or remote uploads,
- `INTERNET` permission is only used for manual update checks,
- no extra…
