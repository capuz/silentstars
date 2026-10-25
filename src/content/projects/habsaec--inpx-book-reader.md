---
repo: "Habsaec/inpx-book-reader"
name: "inpx-book-reader"
description: "INPX Book Reader — Android client for INPX Library Server (Capacitor + Foliate)"
originalDescription: "INPX Book Reader — Android client for INPX Library Server (Capacitor + Foliate)"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/Habsaec/inpx-book-reader"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [55, 28]
stars: 7
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 9
createdAt: "2026-07-19T08:13:14Z"
lastCommitAt: "2026-10-25T09:01:01Z"
lastReleaseAt: "2026-09-07T20:23:23Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 87
undervaluedScore: 55
maintainers: ["Habsaec"]
openGraphImageUrl: "https://opengraph.githubassets.com/009b34d708a922d7ef60da409211b4d6b663b358bfecf5a74162a984250c6698/Habsaec/inpx-book-reader"
---

A mobile reader **for Android only**. Catalog and sync come from [INPX Library Server](https://github.com/Habsaec/inpx-library-server); book text is read only from the downloaded file on the device.

## What this is

| Need | How it works |
| --- | --- |
| Catalog, search, shelves, profile | Server's REST `/api/*` |
| Reading FB2 / EPUB | Local file via Foliate |
| Position, bookmarks, notes | Sync by `bookId` |
| iOS / Desktop / PWA | Not supported |

**Without a running INPX Library Server, the app is nearly useless** (no catalog, downloads, or sync). The server is the source of truth for metadata; the file path on disk is a snapshot taken at download time, not a sync field.

## Requirements

1. **[INPX Library Server](https://github.com/Habsaec/inpx-library-server)** already installed and running (default port `3000`)
2. **Node.js 20+**
3. **Android Studio** (SDK API 34+, Build-Tools, Platform-Tools) and **JDK 17**
4. Phone and server on the **same Wi‑Fi network** (for the APK, the server address must be the IP of the PC/NAS, not `localhost`)

The APK build below is designed for **Windows** (`gradlew.bat`). Details and troubleshooting:…
