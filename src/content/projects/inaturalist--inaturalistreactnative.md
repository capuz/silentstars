---
repo: "inaturalist/iNaturalistReactNative"
name: "iNaturalistReactNative"
description: "Cross-platform version of the iNat mobile app"
readmeQualityOk: true
url: "https://github.com/inaturalist/iNaturalistReactNative"
language: "Fluent"
languages: ["Fluent", "TypeScript"]
languagePcts: [58, 24]
stars: 134
forks: 51
openIssues: 84
closedIssues: 1254
watchers: 6
contributors: 29
recentReleases: 0
createdAt: "2021-09-13T21:34:52Z"
lastCommitAt: "2026-11-02T11:36:04Z"
lastReleaseAt: "2022-07-11T22:47:28Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 47
maintainers: ["jtklein", "abbeycampbell", "sepeterson"]
openGraphImageUrl: "https://opengraph.githubassets.com/97fb07d9e665e3c7f51670077c57676eb0f8ab97633de9341c5f026c9136096e/inaturalist/iNaturalistReactNative"
discussionCount: 1
---

# iNaturalistReactNative   

This is an official iNaturalist client written in React Native that will eventually replace our existing iOS and Android apps. Achieving parity with those established apps is taking some time, but we're getting there!

## Contributing
See [CONTRIBUTING](https://github.com/inaturalist/iNaturalistReactNative/blob/HEAD/CONTRIBUTING.md) for guidelines on contributing to this project.

## Setup

### Requirements

* Xcode 15 or above
* [Android and iOS environment setup](https://reactnative.dev/docs/environment-setup) described in the RN docs

### Install packages and pods

1. Run `npm install`
1. Run `npx pod-install` or `cd ios && pod install` from the root directory
1. `cp env.example .env.staging` for staging and `cp env.example .env` for production and fill in appropriate values. This is not part of the code repo (contains secrets, such as OAuth client ID).
1. **Debug builds** (`npm run ios`, `npm run android`, or Xcode Debug) read **`.env.staging` only**; **Release** builds read **`.env` only**. Creating `.env` alone does not configure a local Debug build.
1. To run on Android, do this `cp android/example-keystore.properties…
