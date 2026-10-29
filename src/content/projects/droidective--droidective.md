---
repo: "Droidective/Droidective"
name: "Droidective"
description: "Native macOS command palette for Android & React Native debugging — 58 tools over adb. Swift 6 + SwiftUI."
readmeQualityOk: true
url: "https://github.com/Droidective/Droidective"
homepage: "https://droidective.com"
language: "Swift"
languages: ["Swift", "TypeScript"]
languagePcts: [62, 28]
stars: 62
forks: 5
openIssues: 0
closedIssues: 15
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2026-06-12T07:54:14Z"
lastCommitAt: "2026-10-29T05:49:46Z"
lastReleaseAt: "2026-06-26T04:53:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 38
maintainers: ["Rohindh-R", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0d949ee5cc26f781a448a336d1ac049eecd160f6a38090d417a9d7e15db9883/Droidective/Droidective"
---

61 adb-powered tools in a Raycast-style command palette — no terminal required.</em>

---

## Contents

- [What it is](#what-it-is)
- [Install](#install)
- [Requirements](#requirements)
- [Features](#features)
- [The workspace](#the-workspace)
- [Reactotron, and an MCP server for AI agents](#reactotron-and-an-mcp-server-for-ai-agents)
- [Platforms](#platforms)
- [Repository layout](#repository-layout)
- [Architecture](#architecture)
- [Building from source](#building-from-source)
- [Testing](#testing)
- [Releases and channels](#releases-and-channels)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

---

## What it is

Everything you normally do to an Android device from a terminal — `adb shell`,
`dumpsys`, `pm`, `logcat`, `scrcpy`, `bundletool`, `jadx` — with a searchable UI
in front of it, on the device you have selected, with the output rendered rather
than printed.

Hit `⌘T`, type "battery", press ⏎ — the device is at 15%. Type "logcat" and the
stream opens filtered to your app. Drag an APK onto the mirrored screen and it
installs on that phone. There is no adb syntax to remember and no serial to
paste, because the device bar already…
