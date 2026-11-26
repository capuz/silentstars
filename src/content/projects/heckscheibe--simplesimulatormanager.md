---
repo: "Heckscheibe/SimpleSimulatorManager"
name: "SimpleSimulatorManager"
description: "A menubar tool designed to streamline your development workflow when working with Apple's simulators"
readmeQualityOk: true
url: "https://github.com/Heckscheibe/SimpleSimulatorManager"
language: "Swift"
languages: ["Swift"]
languagePcts: [97]
topics: ["ios", "simulator", "swift", "watchos", "xcode"]
stars: 54
forks: 1
openIssues: 9
closedIssues: 56
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2023-10-13T13:52:43Z"
lastCommitAt: "2026-11-26T13:02:14Z"
lastReleaseAt: "2026-11-23T20:46:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 46
maintainers: ["Heckscheibe", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/eba5af0eae566610efe55a0b8bda828351f804db91dd9b9a5f7d5aecb50339d8/Heckscheibe/SimpleSimulatorManager"
---

# Simple Simulator Manager

**A macOS menu bar app that gets you straight to the files inside your Xcode simulators.**

Type to find any simulator or app, then open its data container, `.app` package, Documents folder,
`UserDefaults` or shared App Group in Finder — without hunting through CoreSimulator UUIDs. Snapshot
an app's database to test a migration, let a coding agent query your simulators, and clean up the
dead simulators and runtimes quietly eating your disk.

```bash
brew install --cask heckscheibe/tap/simple-simulator-manager
```

---

## The problem

Inspecting a simulator app's database, cache or preferences means finding it first:

```
~/Library/Developer/CoreSimulator/Devices/<device-UUID>/data/Containers/Data/Application/<app-UUID>/
```

Both UUIDs are opaque, and the app one changes on reinstall. Xcode gives you no UI for this, so you
end up in Terminal or clicking through Finder every time.

Simple Simulator Manager puts it two clicks from the menu bar.
