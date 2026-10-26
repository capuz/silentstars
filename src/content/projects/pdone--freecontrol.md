---
repo: "pdone/FreeControl"
name: "FreeControl"
description: "Control Android devices from a PC"
originalDescription: "在PC上控制Android设备"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/pdone/FreeControl"
homepage: "https://fc.awaw.cc"
language: "Rust"
languages: ["Rust", "HTML"]
languagePcts: [36, 24]
topics: ["rust-lang", "scrcpy", "scrcpy-gui", "adb", "android"]
stars: 149
forks: 12
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 5
createdAt: "2025-11-24T10:34:04Z"
lastCommitAt: "2026-10-26T09:17:52Z"
lastReleaseAt: "2026-10-26T09:12:03Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 43
maintainers: ["pdone"]
openGraphImageUrl: "https://opengraph.githubassets.com/00a0c9ef021f3f0081dfef2ae2684a59f68737f061080d807750fa95e168c336/pdone/FreeControl"
---

Chinese | <a href="README.en.md">English</a> | <a href="https://fc.awaw.cc/">Official site</a>

## Features

- **Device list** —— one alias per device, mapped to a USB serial number or `IP:port`; add, delete, and edit entries; online status is visible in real time
- **Wireless pairing and discovery** —— complete pairing once with a pairing code, then with one click list the devices on the LAN that have wireless debugging enabled
- **Parameter panel** —— six groups of common options as controls, each mapped to the corresponding scrcpy long option name; every parameter has a "?" you can click for details, plus a custom parameter box
- **Device parameters** —— one parameter set per device, which takes precedence over global parameters; can be enabled or disabled as a whole
- **Connection control** —— connect or disconnect one device or all devices; multiple devices can be mirrored at the same time; processes and output are managed by the program
- **Runtime environment** —— scrcpy and adb are downloaded on demand; multiple channels fall back in order and are verified against official checksums; you can view paths, switch to an existing directory, and check for updates
- **In-app…
