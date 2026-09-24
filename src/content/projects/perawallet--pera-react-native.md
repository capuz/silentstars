---
repo: "perawallet/pera-react-native"
name: "pera-react-native"
description: "ReactNative version of Pera Wallet"
readmeQualityOk: true
url: "https://github.com/perawallet/pera-react-native"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 12
recentReleases: 7
createdAt: "2025-12-10T15:02:42Z"
lastCommitAt: "2026-09-24T08:41:06Z"
lastReleaseAt: "2026-09-09T09:41:35Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 89
undervaluedScore: 70
maintainers: ["yasin-ce", "yasincaliskan", "wjbeau"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd19d3bbdcacd639c16d66d07181c836f90a3ace95afacde70e58dfdd29eba83/perawallet/pera-react-native"
---

# Pera Monorepo

Structure, setup, and the commands you'll use daily.

## Prerequisites

- Node.js >= 22 and pnpm 10.28+ (see `packageManager` in [`package.json`](https://github.com/perawallet/pera-react-native/blob/HEAD/package.json))
- iOS: Xcode 15+, CocoaPods via Bundler (Ruby), iOS Simulator
- Android: Android Studio + SDKs, JDK 17, emulator or device
- macOS: Watchman for fast reloads

## Install

```sh
pnpm install
pnpm run setup                       # Git hooks: lint/format/copyright, then tests on push
pnpm --filter mobile expo:prebuild      # First run, or to regenerate native projects
```

## Run the app

Metro in one terminal:

```sh
pnpm mobile:start
```

A platform target in another:

```sh
pnpm ios
pnpm android
```

Both also work from the app folder: `pnpm -C apps/mobile start|ios|android`.

To regenerate native projects from scratch, `pnpm -C apps/mobile expo:prebuild:clean`.

## Building packages

Workspace packages in `packages/*` build to `dist/`. Turbo builds them before running the mobile app
or tests, so most development needs no manual build step.

Each package's `build` runs `vite build` for the JavaScript and then `tsc -p tsconfig.build.json` for
the…
