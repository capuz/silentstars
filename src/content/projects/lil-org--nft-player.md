---
repo: "lil-org/nft-player"
name: "nft-player"
description: "view full collections"
readmeQualityOk: true
url: "https://github.com/lil-org/nft-player"
homepage: "https://player.lil.org"
language: "Swift"
languages: ["Swift"]
languagePcts: [82]
topics: ["macos", "nft", "swift", "tvos", "visionos", "ios"]
stars: 14
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-11-17T19:42:05Z"
lastCommitAt: "2026-09-18T08:25:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 67
maintainers: ["grachyov"]
openGraphImageUrl: "https://opengraph.githubassets.com/05c6926e598420054cbbf4c9156562551f9e2e4cc18832e7ece71e02f8a0e2e0/lil-org/nft-player"
---

# nft-player

ios / macos / visionos / tvos

download on the [app store](https://player.lil.org)

> [!IMPORTANT]  
> big thanks to [nouns](https://nouns.camp) for supporting nft player with a [garden round](https://prop.house/0x6c7f962819d04c5e95a1ca750e8f076c9735da2b/2) grant

## development

Open `nft-player.xcodeproj` in Xcode to run the app. Run the complete Swift package and iOS test suites with:

```sh
scripts/test.sh
```

The script runs package tests first, then uses the first available iPhone simulator for the iOS tests. Override the destination or derived-data location when needed:

```sh
IOS_TEST_DESTINATION='platform=iOS Simulator,name=iPhone 17 Pro,OS=latest' \
TEST_DERIVED_DATA_PATH='build/custom-derived-data' \
scripts/test.sh
```

Derived data defaults to the ignored `build/test-derived-data` directory.

## app store
Install [asc](https://asccli.sh) and Node.js, then authenticate asc with App Store Connect. The release helper uses Node for JSON parsing; no npm packages are required.

The release metadata lives in `app_store/metadata/<platform>/app-info` and `app_store/metadata/<platform>/version/<version>`, screenshots live in `app_store/screenshots/<platform>`,…
