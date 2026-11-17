---
repo: "ridgeview-apps/tube-service"
name: "tube-service"
description: "Tube status and departure boards "
readmeQualityOk: true
url: "https://github.com/ridgeview-apps/tube-service"
language: "Swift"
languages: ["Swift"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2020-07-28T11:10:57Z"
lastCommitAt: "2026-11-17T12:20:13Z"
lastReleaseAt: "2026-11-09T09:29:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 73
maintainers: ["spatel"]
openGraphImageUrl: "https://opengraph.githubassets.com/6014e2a1a770858f170ce19a97d54212e2f60d72cf8729badf1fdf3d1f692355/ridgeview-apps/tube-service"
---

## Tube Service

Welcome to the Tube Service iOS app! This is a SwiftUI app and is available on [the App Store](https://apps.apple.com/app/id1540626286#?platform=iphone).

## Screenshots

## Getting Started

1. Install the Xcode version in [`.xcode-version`](https://github.com/ridgeview-apps/tube-service/blob/HEAD/.xcode-version).
1. Open `Tube.xcodeproj`, select an iOS simulator and tap "Run".

Debug builds run without the `TFL_API_APP_KEY` and `TUBE_SERVICE_API_KEY` keys (see [`Debug.xcconfig`](https://github.com/ridgeview-apps/tube-service/blob/HEAD/Config/Debug.xcconfig)). There's no Tube Service API dev server yet, so features that use it need the API running locally on `localhost:8000`.

To run fastlane locally, install the Ruby version in [`.ruby-version`](https://github.com/ridgeview-apps/tube-service/blob/HEAD/.ruby-version), then:

```sh
bundle install
bundle exec fastlane unit_tests
```

The test and screenshot lanes need no secrets (see [`Scripts/screenshots.sh`](https://github.com/ridgeview-apps/tube-service/blob/HEAD/Scripts/screenshots.sh)). The signing and App Store Connect lanes run on CI, which holds the keys.

## Architecture

The app uses the [MV…
