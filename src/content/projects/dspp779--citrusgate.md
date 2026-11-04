---
repo: "dspp779/CitrusGate"
name: "CitrusGate"
description: "A lightweight macOS utility for launching supported Gamania games (Beanfun)."
originalDescription: "A lightweight macOS utility for launching supported Gamania games (Beanfun)."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/dspp779/CitrusGate"
language: "Swift"
languages: ["Swift"]
languagePcts: [95]
stars: 12
forks: 3
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-21T06:27:24Z"
lastCommitAt: "2026-11-04T08:04:29Z"
lastReleaseAt: "2026-07-30T09:13:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 47
maintainers: ["dspp779", "cursoragent", "doralu1023"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0d14a4a86594cf8b33ed8b1698737efa2a36759dbcaa4c7ea95b114dc54c22f/dspp779/CitrusGate"
---

# Beanfun OTP for macOS

An unofficial Beanfun game login tool designed for macOS. Scan the QR Code with Gama Play to securely obtain an OTP and launch the game automatically. Zero external package dependencies (no Python, Node.js, or Homebrew required).

## Core Features

- **Zero dependencies and standalone operation**: Pure native build. Unzip and run, with no runtime environment to install.
- **Supports multiple classic games**: New MapleStory, MapleStory: Classic, New Mabinogi (新瑪奇), Aer Light (艾爾之光).
- **Automatic login with parameters and launch**: After scanning the code, the OTP is fetched automatically and the game starts with parameters. A single account logs in with one click automatically.
- **Automatic Quarantine protection**: Before launch, the macOS quarantine flag (`com.apple.quarantine`) is cleared automatically, preventing permission blocks from Wine / Cyder.
- **Classic edition NexonPlug protocol integration**: Supports receiving and forwarding the web `NexonPlug://` protocol, with a single-instance mechanism and automatic exit on cold start.
- **One-click client download**: Integrates pinned-version client downloaders…
