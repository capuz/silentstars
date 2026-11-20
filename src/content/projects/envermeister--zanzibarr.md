---
repo: "envermeister/Zanzibarr"
name: "Zanzibarr"
description: "Zanzibarr streams NZB content from Usenet without downloading — instant start, true seek, PAR2 repair, Dolby Vision. Windows · macOS ·  iOS · Linux · Android · Google TV"
readmeQualityOk: true
url: "https://github.com/envermeister/Zanzibarr"
homepage: "https://zanzibarr.app"
language: "Dart"
languages: ["Dart", "Rust"]
languagePcts: [57, 37]
topics: ["arr-services", "arr-stack", "newsreader", "newznab", "nzb", "nzb-files", "nzb-indexers", "nzbdav", "nzbget", "nzbhydra"]
stars: 29
forks: 4
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 1
recentReleases: 6
createdAt: "2026-07-18T21:28:59Z"
lastCommitAt: "2026-11-20T11:59:33Z"
lastReleaseAt: "2026-10-13T10:03:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 87
undervaluedScore: 47
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/9dafa0acfa04f0dede181b039f5f7dc30edad792777183c897dd39d0418c31cf/envermeister/Zanzibarr"
fundingLinks: ["KO_FI:https://ko-fi.com/envermeister", "BUY_ME_A_COFFEE:https://buymeacoffee.com/envermeister"]
---

---

Zanzibarr turns Usenet into your personal streaming library. Point it at any `.nzb` and the video starts playing in seconds — **no download queue, no waiting for the full file, no disk space sacrificed**. Scrub to the final scene of a 4K remux before the first act would have finished downloading. It feels like magic; it's really just a very disciplined engine.

## Screenshots

## Why Zanzibarr is different

**Play instantly, never download**
The Rust engine maps every seek position to the exact Usenet segments that hold it, fetches only those, decodes yEnc on the fly and serves the result through a lazy, range-aware local stream. Pause the player and the network goes quiet. Close the app and nothing is left behind on your disk.

**Find it and play it — without leaving the app**
Hook up any Newznab-compatible indexer and the home screen becomes your launchpad: capability discovery, release names parsed into quality badges (2160p · HEVC · DV · HDR10+ · TrueHD · Atmos · group), and a single tap streams the NZB straight into the player. No browser round-trips, no download manager, no queue.
