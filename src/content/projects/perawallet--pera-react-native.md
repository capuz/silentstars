---
repo: "perawallet/pera-react-native"
name: "pera-react-native"
description: "ReactNative version of Pera Wallet"
readmeQualityOk: true
url: "https://github.com/perawallet/pera-react-native"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2025-12-10T15:02:42Z"
lastCommitAt: "2026-07-31T06:30:21Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 57
maintainers: ["yasin-ce", "fmsouza", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/61bc8ab4cb7369ab0876125304024c43696f3a7751dab711c811c64b322f77af/perawallet/pera-react-native"
---

# Pera Monorepo

A concise guide to structure, setup, and daily commands.

## Prerequisites

- Node.js >= 20 and pnpm 10.15+ (see packageManager in [`package.json`](https://github.com/perawallet/pera-react-native/blob/HEAD/package.json))
- iOS: Xcode 15+, CocoaPods via Bundler (Ruby), iOS Simulator
- Android: Android Studio + SDKs, JDK 17, emulator or device
- macOS: Watchman for fast reloads

## Install

```sh
pnpm install
# Set up Git hooks (pre-commit and pre-push)
pnpm run setup
# First time setup or to regenerate native projects
pnpm --filter mobile expo:prebuild
```

> **Note:** The `pnpm run setup` command installs Git hooks that automatically run linting, formatting, copyright checks before commits, and tests before pushes.

## Build the packages

```sh
pnpm build
```

This will build all packages in the monorepo and write out any generated configuration.

### 1. Start Metro

In one terminal start Metro:

```sh
pnpm mobile:start
```

### 2. Run on device / simulator

In another terminal run a platform target:

```sh
# iOS
pnpm ios

# Android
pnpm android
```

Tip: you can also run these from the app folder:

```sh
pnpm -C apps/mobile start|ios|android
```

### Clean…
