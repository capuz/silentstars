---
repo: "callstack/timezone-hermes-fix"
name: "timezone-hermes-fix"
description: "A cross-platform React Native library that fixes timezone-related issues in Hermes JavaScript engine by providing native timezone cache reset functionality for accurate date/time calculations."
readmeQualityOk: true
url: "https://github.com/callstack/timezone-hermes-fix"
language: "Kotlin"
languages: ["Kotlin", "TypeScript"]
languagePcts: [24, 23]
topics: ["cache", "hermes", "timezone"]
stars: 18
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 12
recentReleases: 1
createdAt: "2025-06-18T16:38:51Z"
lastCommitAt: "2026-08-21T04:10:24Z"
lastReleaseAt: "2026-08-21T04:11:16Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 32
maintainers: ["troZee"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4d7aaaf779aa9a0c45aa8e4e7f87b94b122a2e9ee79482de8f4eb553bd7afda/callstack/timezone-hermes-fix"
---

# 🕐 Timezone Hermes Fix

**Timezone Hermes Fix** is a cross-platform React Native library that provides a robust workaround for timezone-related issues when using the Hermes JavaScript engine. It includes native modules for both Android and iOS, designed as a drop-in solution for React Native projects requiring accurate timezone handling.

## 🚀 React Native Support

| Library Version | React Native Version |
| --------------- | -------------------- |
| 0.1.x - 0.3.x   | 0.80.2 - 0.81.x      |
| 0.4.x           | 0.82.x - 0.86.x      |
| 0.5.x           | 0.87.x and above     |

## 🔧 The Problem

React Native apps using the Hermes JavaScript engine may experience timezone calculation issues, particularly when:

- The device timezone changes while the app is running
- Date/time calculations don't reflect the current timezone
- Inconsistent behavior across different devices or regions

This library fixes these [known issues](https://github.com/facebook/hermes/pull/1693) by providing native timezone cache reset.

## 📦 Installation

### Using Yarn (recommended)

```sh
yarn add @callstack/timezone-hermes-fix
```

### Using npm

```sh
npm install @callstack/timezone-hermes-fix
```…
