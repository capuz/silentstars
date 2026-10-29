---
repo: "ercanatay/cybokron-dock-groups"
name: "cybokron-dock-groups"
description: "Free & open-source macOS menu bar app: put apps and websites into named groups and open, hide or close a whole group from a popup over the Dock. Keyboard filter, Quick Look, Most Used, standalone Dock icons, Siri & Shortcuts (MIT)"
readmeQualityOk: true
url: "https://github.com/ercanatay/cybokron-dock-groups"
homepage: "https://cybokron.com/dock-groups/"
language: "Swift"
languages: ["Swift"]
languagePcts: [99]
topics: ["appkit", "dock", "macos", "swift", "swiftui", "dockgroups", "menu-bar", "open-source", "app-launcher", "launcher"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-17T08:46:18Z"
lastCommitAt: "2026-10-29T14:07:23Z"
lastReleaseAt: "2026-10-18T20:31:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 70
maintainers: ["ercanatay"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1423125743/59ed1ed1-1e4e-4170-af97-f3252170cdeb"
fundingLinks: ["GITHUB:https://github.com/ercanatay", "BUY_ME_A_COFFEE:https://buymeacoffee.com/ercanatay", "KO_FI:https://ko-fi.com/ercanatay", "CUSTOM:https://cybokron.com"]
discussionCount: 1
---

# Cybokron Dock Groups

A free, open-source macOS menu bar utility that organizes your apps into named groups. Choose a
group from the menu bar to see its apps in a popup over the Dock, or open them all at once.

> Status: in active development — current release v0.6.3 (Developer ID signed and notarized), with 26 languages.

## Screenshots

## Features (so far)

- Menu bar item listing your groups with their tiles. Choosing a group shows its **popup**; holding
  ⌥ while choosing opens all of its apps right away, holding ⇧⌥ hides its running apps, and holding
  ⌃⌥ **starts** it (below). While a group is current, the menu begins with it and **Finish**.
- Group popup: a floating panel over the Dock (it doesn't take focus from the app you're using)
  with the group's app icons in a grid and a running indicator per app. Click an app to open it or
  bring it to the front; **Open All** opens every app; **Hide All** hides the group's running apps
  (apps that aren't running stay closed); **Close All** quits the group's running apps
  normally, ⌘-click force quits them — except protected apps (below). **Start** (▶) starts the
  group, and for the current group **Finish** (■) takes its…
