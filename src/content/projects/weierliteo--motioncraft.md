---
repo: "WeiErLiTeo/MotionCraft"
name: "MotionCraft"
description: "An Android app for viewing, converting, and creating Live Photos / Motion Photos."
readmeQualityOk: true
url: "https://github.com/WeiErLiTeo/MotionCraft"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-08-01T04:19:53Z"
lastCommitAt: "2026-11-11T11:19:19Z"
lastReleaseAt: "2026-11-11T11:24:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 23
maintainers: ["WeiErLiTeo"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e92e56a8ef44f0e97b83dacf6331493feb1c0d5cdadd19beb8b2cb456a5d6a9/WeiErLiTeo/MotionCraft"
---

# MotionCraft (Live Photos Studio)

---

## Project Overview

**MotionCraft** is an Android utility for viewing, converting, and creating Live Photos (Motion Photos).
It supports scanning and playing local motion photos, extracting video clips and still frames, converting videos or image-audio pairs into motion photos, and batch-importing Apple `.livp` / `.zip` archives.

---

## Format and Platform Support

| Platform / Format | Status |
| :--- | :---: |
| **Universal Fusion (`GCamera` + `MicroVideo` + SEF)** | Supported |
| **OPPO / OnePlus / realme Live Photo** | Supported |
| **Xiaomi / Redmi Live Photo** | Supported |
| **Samsung Galaxy Motion Photo** | Supported |
| **vivo / iQOO Live Photo** | Supported |
| **Google Pixel Motion Photo** | Supported |
| **Apple Live Photo (`.livp` / `.zip` Archive Import)** | Supported |

> Live photo implementations vary across manufacturers in XMP/EXIF tags, MP4 box layout, and container structure. MotionCraft writes standard XMP metadata and vendor-specific trailers according to the selected target protocol.

---

## Core Features

- **Live Photo Gallery**: Scans local storage for motion photos, supporting grid preview, search, and batch…
