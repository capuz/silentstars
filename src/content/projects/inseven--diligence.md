---
repo: "inseven/diligence"
name: "diligence"
description: "SwiftUI About Screens"
readmeQualityOk: true
url: "https://github.com/inseven/diligence"
language: "Swift"
languages: ["Swift"]
languagePcts: [98]
topics: ["ios", "macos", "swift", "swiftui"]
stars: 21
forks: 0
openIssues: 3
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-11-02T00:37:24Z"
lastCommitAt: "2026-10-29T12:25:58Z"
lastReleaseAt: "2023-04-27T14:41:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 81
undervaluedScore: 54
maintainers: ["renovate[bot]", "jbmorley"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9166fe45de249f31c1d1770a5e47782a9d1c362e040054dabc5ab536c80f04c/inseven/diligence"
fundingLinks: ["GITHUB:https://github.com/jbmorley", "BUY_ME_A_COFFEE:https://buymeacoffee.com/jbmorley"]
---

# Diligence

SwiftUI About Screens

## Overview

Diligence is a lightweight Swift package with a collection UI controls for building about screens for macOS and iOS apps.

## Screenshots

### iOS

| Anytime                            | StatusPanel                                | OPL                        |
| ---------------------------------- | ------------------------------------------ | -------------------------- |
|  |  |  |

### macOS

## Build Numbers

Diligence supports build numbers conforming to the following structure:

```
YYmmddHHMMxxxxxxxx
```

- `YY` -- two-digit year
- `mm` -- month
- `dd` -- day
- `HH` -- hours (24h)
- `MM` -- minutes
- `xxxxxxxx` -- zero-padded integer representation of a 6-character commit SHA

These build numbers are guaranteed to be always incrementing and, as such, safe to be used for iOS and macOS apps while also encoding the build date and commit.

If Diligence detects a build number in this format, it will display this additional information in the about screen.

#### Generating Build Numbers

Diligence comes with a Swift command-line script that can be used to generate suitable build numbers. From the root Diligence directory, run the…
