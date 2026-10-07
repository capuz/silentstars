---
repo: "dikeckaan/easy-vphone"
name: "easy-vphone"
description: "Native macOS GUI for vphone-cli with VM management and an integrated IPA library"
readmeQualityOk: true
url: "https://github.com/dikeckaan/easy-vphone"
language: "Swift"
languages: ["Swift", "Python"]
languagePcts: [58, 31]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-09-16T06:34:56Z"
lastCommitAt: "2026-10-07T10:31:16Z"
lastReleaseAt: "2026-09-22T18:21:57Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 49
maintainers: ["dikeckaan", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d4f138b8c6a200de0d0338c02b651f0cb4f8fa24e4130f888c5e1bef131291e/dikeckaan/easy-vphone"
---

# easy-vphone

A native macOS GUI for [Lakr233/vphone-cli](https://github.com/Lakr233/vphone-cli), with an integrated App Store IPA library. The interface supports Turkish, English, German, French, Spanish, Italian, Portuguese, Russian, Japanese and Simplified Chinese. Settings provides System / Light / Dark appearance; language and theme changes apply immediately and persist across launches. Apple Silicon, macOS 15 or later.

## What it does

- Choose a storage directory on your Mac or an external SSD; discover existing VM bundles.
- Select an iOS build from the installed vphone-cli firmware catalog and its recommended cloudOS pairing, or choose local IPSWs / HTTPS sources.
- Install regular, developer, jailbreak or experimental variants; choose disk capacity and optional Frida support.
- Clone the upstream repository, prepare an isolated runtime, run firmware creation and resume the CFW stage from the GUI.
- Start / stop a selected VM; adjust CPU and RAM while it is stopped.
- Refresh Sileo/TrollStore app registration over SSH on jb/exp VMs. Regular/dev VMs are clearly identified as lacking those jailbreak apps.
- Open an SSH command session inside the app, with per-VM port/user…
