---
repo: "oneclickvirt/speedtest"
name: "speedtest"
description: "Nearest node speed testing module"
originalDescription: "就近节点测速模块"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/oneclickvirt/speedtest"
homepage: "https://github.com/oneclickvirt/ecs"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["goecs"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 9
createdAt: "2024-06-27T11:11:18Z"
lastCommitAt: "2026-09-20T08:45:03Z"
lastReleaseAt: "2026-09-08T07:44:14Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 72
maintainers: ["github-actions[bot]", "spiritLHLS", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c0fd15c6dd1cc54b54fff81d465fbbd5d22b84c7fbdcd0bdb701ed37c8f47f1/oneclickvirt/speedtest"
---

# speedtest

Nearest node speed testing module

## Description

- [x] Based on data from [speedtest.net crawler](https://github.com/spiritLHLS/speedtest.net-CN-ID) and [speedtest.cn crawler](https://github.com/spiritLHLS/speedtest.cn-CN-ID)
- [x] Secondary development based on [speedtest-go](https://github.com/showwin/speedtest-go), a native Go implementation of proximity-based speed testing that doesn't require shell commands
- [x] Compatible with speedtest-go v1.8.3: user configuration requests use randomized cache bypass parameters, and before uploading follows temporary redirects to avoid shared CDN returning configurations for other clients or uploading to invalid endpoints
- [x] `-dns-mode=auto` when local DNS is independently probed and confirmed to be invalid, only selects the lowest latency built-in DoH/DoT within the current process; transient network errors will not change the system's DNS resolution path
- [x] Core logic inspired by [ecsspeed](https://github.com/spiritLHLS/ecsspeed)
- [x] Use the shell command ```speedtest``` to perform speed testing

## TODO

- [ ] Add support for Tele speed testing

## Download speedtest or speedtest-go

Currently installs the…
