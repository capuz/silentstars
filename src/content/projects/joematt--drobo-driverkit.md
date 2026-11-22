---
repo: "JoeMatt/drobo-driverkit"
name: "drobo-driverkit"
description: "DriverKit driver for the Drobo 8D Thunderbolt array on Apple silicon Macs. No kext, no Reduced Security. Read-only for now."
readmeQualityOk: true
url: "https://github.com/JoeMatt/drobo-driverkit"
homepage: "http://joemattiello.dev/drobo-driverkit/"
language: "Swift"
languages: ["Swift", "C++"]
languagePcts: [62, 29]
topics: ["apple-silicon", "driverkit", "drobo", "macos", "thunderbolt"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-11-15T04:24:02Z"
lastCommitAt: "2026-11-22T02:10:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 50
maintainers: ["JoeMatt", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/887670ae14c9d5c64238b4753deee1fdba7abad7b586686994ac4ba3f0f3cd3a/JoeMatt/drobo-driverkit"
---

# drobo-driverkit

A macOS driver for the **Drobo 8D** Thunderbolt array on **Apple silicon** Macs.

Drobo, Inc. is gone. Their Thunderbolt driver is a kernel extension that modern Macs only load
if you lower the machine's security settings, and it will stop working entirely as Apple removes
kext support. This project replaces it with a DriverKit driver extension: no kext, no Reduced
Security, System Integrity Protection stays on.

Other open projects cover Drobo's network (NAS) models. As far as we know this is the only one
for the direct-attached Thunderbolt units.
