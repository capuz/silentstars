---
repo: "ClashKingInc/ClashKingApp"
name: "ClashKingApp"
description: "Mobile app + companion for clashking & clash of clans"
readmeQualityOk: true
url: "https://github.com/ClashKingInc/ClashKingApp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["clashofclans"]
stars: 7
forks: 4
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2024-03-23T22:37:11Z"
lastCommitAt: "2026-11-09T00:52:51Z"
lastReleaseAt: "2026-04-11T20:09:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 78
maintainers: ["MagicTheDev", "Destinea"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e52870b732990ec2fb8d151187a201a174a818e8e37f8e656e467f7e1bab0bf/ClashKingInc/ClashKingApp"
---

# ClashKing Mobile App

ClashKing is a Clash of Clans companion app for iOS and Android, built with Expo, React Native, and TypeScript.

## Features

- Player and clan profiles
- Ranked and Legend League tracking
- War and Clan War League statistics
- Upgrade tracking and calculators
- Home-screen widgets
- Multiple languages and light/dark themes

## Getting started

You will need Node.js 22, npm, and the native tools for your platform:

- Android: Android Studio and an Android SDK
- iOS: macOS and Xcode

Clone the repository and install the app dependencies:

```bash
git clone https://github.com/ClashKingInc/ClashKingApp.git
cd ClashKingApp/expo
npm ci
```

Run a development build:

```bash
npm run android
# or, on macOS:
npm run ios
```

For an already installed development build, start Metro with:

```bash
npm start
```

Expo Go is not supported because the app uses custom native modules. Ask a maintainer for any development configuration you need, and never commit credentials or local environment files.

## Project structure

- `expo/src/features/` — app features and screens
- `expo/src/core/` — shared services and application code
- `expo/src/ui/` — shared UI components
-…
