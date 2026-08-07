---
repo: "Droidective/Droidective"
name: "Droidective"
description: "Native macOS command palette for Android & React Native debugging — 58 tools over adb. Swift 6 + SwiftUI."
readmeQualityOk: true
url: "https://github.com/Droidective/Droidective"
homepage: "https://droidective.com"
language: "Swift"
languages: ["Swift"]
languagePcts: [78]
stars: 60
forks: 3
openIssues: 1
closedIssues: 5
watchers: 2
contributors: 5
recentReleases: 10
createdAt: "2026-06-12T07:54:14Z"
lastCommitAt: "2026-08-07T05:16:18Z"
lastReleaseAt: "2026-06-26T04:53:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 42
maintainers: ["Rohindh-R"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a324a69d2948f466ccc7cd6e0b9640a474cf12d4e178cdcfb2ab96e11ee9247/Droidective/Droidective"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/icon.png">
    <source media="(prefers-color-scheme: light)" srcset="docs/icon-light.png">
  </picture>
</p>

# Droidective

A native macOS companion for Android and React Native debugging. One-click adb
actions in a Raycast-style command palette — no terminal required.

  </a>
  <br>
  <em>▶ <a href="https://droidective.com/assets/demo.mp4">Full-resolution video</a> · <a href="https://droidective.com/">droidective.com</a></em>
</p>

Built in Swift 6 + SwiftUI, with all logic in a platform-agnostic Swift package
(`ADBKit`) so the engine stays testable and a future cross-platform port only
needs a new UI layer.

> Requires macOS 14+ and the Android `adb` tool. Release builds are signed with a
> Developer ID and notarized; see [Building](#building) and
> [Install a release build](#install-a-release-build).

## Features

A searchable palette (`⌘T`) of 60 tools, organised by category and
gathered into focused hubs (React Native, Simulate, Connection, APK Studio) so
the sidebar stays short. Every action is on by default; hide the ones you don't want from
the in-app catalog.

- **Input & clipboard** — send text…
