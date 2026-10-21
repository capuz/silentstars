---
repo: "z0brk/netamade-releases"
name: "netamade-releases"
description: "Server not available"
originalDescription: "Server not available"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/z0brk/netamade-releases"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2025-09-11T06:38:13Z"
lastCommitAt: "2026-10-21T08:48:37Z"
lastReleaseAt: "2026-10-21T08:47:57Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 42
maintainers: ["z0brk"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0c9ac4f60c0ff3e224f3f431d69898a292672c2f836e0cf7f2a841d4e46cd8d/z0brk/netamade-releases"
---

# netamade-releases

The main branch of this repository is a snapshot of the current version, keeping only one parentless commit. Each release replaces main and the retained version tags, so this repository cannot be used to trace historical versions.

## Retention rules

- App Releases: the latest stable and latest testing release, one each, determined by `stable.json` and `testing.json`.
- Tool Releases: keep `speedtest` and `android-fio-arm64`. The client still depends on their download URLs.
- The four retained tags all point to the single commit on main. APK versions, attachment names, and download URLs remain unchanged.
- Delete old app Releases (including attachments and release notes) and all other tags. Copies cached by GitHub and third-party mirrors are outside what the repository scripts can guarantee to clear.
- The appstore branch and its history are maintained independently. The release scripts do not modify it.
- Currently only stable and testing are supported. A future beta channel requires first defining the client update contract before implementation.

## Automatic publishing

Run `make publish-release` or `make publish-testing` in the adjacent Netamade source…
