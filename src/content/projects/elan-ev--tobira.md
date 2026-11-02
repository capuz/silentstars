---
repo: "elan-ev/tobira"
name: "tobira"
description: "Video portal for Opencast"
readmeQualityOk: true
url: "https://github.com/elan-ev/tobira"
homepage: "https://elan-ev.github.io/tobira/"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [50, 42]
topics: ["opencast", "video-portal"]
stars: 46
forks: 28
openIssues: 156
closedIssues: 570
watchers: 7
contributors: 24
recentReleases: 0
createdAt: "2020-06-02T14:04:21Z"
lastCommitAt: "2026-11-02T13:38:41Z"
lastReleaseAt: "2023-07-18T15:13:29Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 60
maintainers: ["LukasKalbertodt", "owi92", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/baf6f0f3f0dd9d2d64fcd73119f16f1da36a62ee284c16f5158edd4dee0142df/elan-ev/tobira"
discussionCount: 3
---

# Tobira: an Opencast Video Portal

Tobira is a video portal for [Opencast](https://opencast.org) and aims to be a pleasant interface through which users interact with your Opencast content.
It lets you present videos, series and playlists in a customizable, hierarchical page structure, but also makes it easy for users to search through all media.
Additionally, it offers tools to upload and manage videos.
It's possible to connect Tobira to virtually any authentication system and integrate it into your university's/organization's infrastructure.

You can try it out for yourself here: https://tobira.opencast.org.
This is a test deployment of the `main` branch, where most data is wiped whenever it is re-deployed.

## Documentation

All our documentation lives here: [**Tobira's documentation**](https://elan-ev.github.io/tobira).
Among other things, it explains how to install and configure Tobira on your own server.

## Contribute

**Note**: read [our contribution guidelines](https://github.com/elan-ev/tobira/blob/main/docs/CONTRIBUTING.md) first!

In short: clone this repository, run the following commands and then open http://localhost:8030/.

```bash
./x.sh containers start
./x.sh…
