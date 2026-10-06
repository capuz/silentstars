---
repo: "better-rail/app"
name: "app"
description: "An alternative mobile client for Israel Railways"
readmeQualityOk: true
url: "https://github.com/better-rail/app"
homepage: "https://better-rail.co.il"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [61]
topics: ["israel", "public-transport", "react-native"]
stars: 310
forks: 44
openIssues: 4
closedIssues: 185
watchers: 4
contributors: 17
recentReleases: 0
createdAt: "2021-04-01T16:20:00Z"
lastCommitAt: "2026-10-06T10:41:30Z"
lastReleaseAt: "2021-06-22T19:22:19Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 41
maintainers: ["guytepper", "planecore", "drehelis"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/353759096/fae1c8be-288b-4643-b48f-7c7bf6a6de9d"
---

# Better Rail

Better Rail is an open source mobile client for Israel Railways, with an emphasis on great design, performance and accessibility.

**Available on the [App Store](https://apps.apple.com/il/app/better-rail/id1562982976) & [Play Store](https://play.google.com/store/apps/details?id=com.betterrail)**

## Overview

Better Rail is built with React Native. We also use Swift and Kotlin to leverage native platform functionalities.

The repository is a Bun workspaces monorepo:

| Path           | What                                                              |
| -------------- | ----------------------------------------------------------------- |
| `apps/mobile`  | The React Native / Expo app ([README](https://github.com/better-rail/app/blob/HEAD/apps/mobile/README.md))     |
| `apps/server`  | Notification & timetable server ([README](https://github.com/better-rail/app/blob/HEAD/apps/server/README.md)) |
| `apps/website` | better-rail.co.il static site ([README](https://github.com/better-rail/app/blob/HEAD/apps/website/README.md))  |

### Installation

The following steps assume your environment is already set up for running Expo / React Native apps (Xcode for iOS, Android…
