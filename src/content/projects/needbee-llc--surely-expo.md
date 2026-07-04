---
repo: "NeedBee-LLC/surely-expo"
name: "surely-expo"
description: "Official client for the Surely todo app. An Expo React Native app that builds to both iOS and web."
readmeQualityOk: true
url: "https://github.com/NeedBee-LLC/surely-expo"
homepage: "https://surelytodo.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["expo", "react-native", "json-api", "react-native-web", "react-navigation", "react-native-paper"]
stars: 29
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2021-09-09T10:01:48Z"
lastCommitAt: "2026-07-04T22:18:55Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 58
maintainers: ["CodingItWrong", "dependabot[bot]", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/77e94971cc15a0a807b4e943545bd277bbe768b37eab786e0c12de1c6ea9c931/NeedBee-LLC/surely-expo"
---

# Surely-Expo

Official client for the Surely todo app. An Expo React Native app that builds to both iOS and web.

Backend is <https://api.surelytodo.com>. If you'd like to build the client yourself, you can still use the same backend, or you can set up your own installation of [surely-api](https://github.com/CodingItWrong/surely-api) to point to.

## Code Features

- Deployed to both [iOS](https://apps.apple.com/us/app/surely/id1586633713) and [web](https://surelytodo.com). Only blocker on Android is a dependency requiring [intl support](https://github.com/web-ridge/react-native-paper-dates#android-caveats).
- Material Design with dark mode support on all platforms via React Native Paper.
- Navigation via React Navigation, including predictable web URLs and a drawer that smoothly transitions between persistent on large viewports and collapsible on small.
- Uses a custom styling library, [`react-native-style-queries`](https://github.com/bignerdranch/BNR-react-native-style-queries), to apply responsive styles declaratively in a way inspired by media queries.
- Thoroughly tested via React Native Testing Library.
- Dependencies kept up-to-date with minimal effort: when tests pass and…
