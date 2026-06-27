---
repo: "better-rail/app"
name: "app"
description: "An alternative mobile client for Israel Railways"
url: "https://github.com/better-rail/app"
homepage: "https://better-rail.co.il"
language: "TypeScript"
languages: ["TypeScript", "Swift", "Kotlin"]
languagePcts: [52, 23, 21]
topics: ["israel", "public-transport", "react-native"]
stars: 186
forks: 33
openIssues: 5
closedIssues: 173
watchers: 4
contributors: 16
recentReleases: 0
createdAt: "2021-04-01T16:20:00Z"
lastCommitAt: "2026-06-27T00:48:15Z"
lastReleaseAt: "2021-06-22T19:22:19Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 95
undervaluedScore: 40
maintainers: ["guytepper", "drehelis"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/353759096/fae1c8be-288b-4643-b48f-7c7bf6a6de9d"
fundingLinks: ["PATREON:https://patreon.com/BetterRail"]
---

# Better Rail

Better Rail is an open source mobile client for Israel Railways, with an emphasis on great design, performance and accessibility.

**Available on the [App Store](https://apps.apple.com/il/app/better-rail/id1562982976)</a> & [Play Store](https://play.google.com/store/apps/details?id=com.betterrail)**

## Overview

Better Rail is written primarily with React Native. We also use Swift & SwiftUI to leverage native iOS functionalities.

### Installation

The following steps assumes your environment is already set up for running React Native apps.  
If this is your first time, check out the [official set up guide](https://reactnative.dev/docs/set-up-your-environment) beforehand.

#### Prerequisites

- **Bun**: This project uses Bun as the package manager. Please see the [Bun installation guide](https://bun.com/docs/installation) for instructions.

#### Setup Steps

- Fork the repo and clone to your machine.
- Run `bun install`
- **MacOS / Linux users**: Run `bun rename-dev-configs` to rename the firebase development configs.
- **Windows users**: Duplicate the firebase configs in `/ios` and `/android/app`, and remove the `.development` suffix from the duplicated files.
-…
