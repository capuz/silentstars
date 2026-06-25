---
repo: "Reedtrullz/Vifty"
name: "Vifty"
description: "Native macOS menu-bar fan control and charger-power monitor for Apple Silicon MacBook Pros."
url: "https://github.com/Reedtrullz/Vifty"
language: "Swift"
languages: ["Swift"]
languagePcts: [83]
topics: ["apple-silicon", "battery-monitor", "fan-control", "hardware-monitoring", "iokit", "launchdaemon", "local-first", "macbook-pro", "macos", "macos-app"]
stars: 73
forks: 18
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-05-21T20:52:48Z"
lastCommitAt: "2026-06-25T02:06:57Z"
lastReleaseAt: "2026-06-12T10:08:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 42
maintainers: ["Reedtrullz"]
openGraphImageUrl: "https://opengraph.githubassets.com/2836747b2bc15e0524d657930481b743886552af292c6a1a7816634f157fcd4c/Reedtrullz/Vifty"
discussionCount: 1
---

# Vifty

Open-source, local-first thermal control for Apple Silicon MacBook Pro developers. Vifty focuses on safe local thermal control for Apple Silicon MacBook Pro developer workloads: builds, tests, and local AI coding agents. It combines live thermals, fan RPM control, reusable temperature curves, bounded `viftyctl` cooling leases, and USB-C/MagSafe power telemetry in one SwiftUI utility.

![Platform](https://img.shields.io/badge/platform-macOS%2015%2B-blue)
![Swift](https://img.shields.io/badge/swift-6.0-orange)
![Architecture](https://img.shields.io/badge/architecture-Apple%20Silicon-lightgrey)
![License](https://img.shields.io/badge/license-MIT-green)

Vifty is built for local signed distribution, not the App Store. It uses private macOS SMC/HID interfaces for fan and sensor access, keeps data on-device, and refuses manual control on unsupported hardware.

Apple can change private SMC/HID behavior in macOS or new hardware revisions without notice. Vifty treats unknown fan topology, missing sensors, invalid ranges, or drifting SMC mode/target telemetry as a reason to stay in macOS Auto and collect read-only evidence first. Do not use raw SMC tools or manual fan writes to…
