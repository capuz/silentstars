---
repo: "Wonderfall/torrent7"
name: "torrent7"
description: "Modern and hardened macOS BitTorrent client built with SwiftUI and libtorrent. "
readmeQualityOk: true
url: "https://github.com/Wonderfall/torrent7"
homepage: "https://torrent7.app"
language: "Swift"
languages: ["Swift", "C++"]
languagePcts: [65, 28]
topics: ["macos", "sandbox", "security", "torrent-client-desktop"]
stars: 13
forks: 0
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2026-06-27T08:01:10Z"
lastCommitAt: "2026-09-24T08:37:11Z"
lastReleaseAt: "2026-09-24T07:49:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 53
maintainers: ["Wonderfall"]
openGraphImageUrl: "https://opengraph.githubassets.com/e99e42dca5b7949bb4f588f6773cf31bbd5cd96dfa36ef6db851405fb4c5e5c5/Wonderfall/torrent7"
---

</p>

<h1 align="center">Torrent 7</h1>

  A modern and hardened torrent client for macOS.
</p>

  <strong>Requires macOS 27 on Apple silicon.</strong>
</p>

</p>

## Table of Contents

- [Purpose](#purpose)
- [Architecture](#architecture)
- [Features](#features)
- [Security and Hardening](#security-and-hardening)
- [Sandbox Model](#sandbox-model)
- [Dependencies](#dependencies)
- [Build](#build)
- [Diagnostics and Tests](#diagnostics-and-tests)

## Purpose

Torrent 7 is a minimal macOS 27 torrent client built with SwiftUI and
libtorrent-rasterbar 2.x. It ships the torrent engine as an application-scoped
Enhanced Security helper extension so the GUI does not load libtorrent or the
C++ bridge. It targets Apple silicon as an arm64e app and leans
into Apple's pointer-authentication model, including PAC-enabled Swift, C, and
C++ code where the toolchain supports it. It also opts into Apple's Enhanced
Security entitlements, including hardened heap, dyld read-only, platform
restrictions, and checked allocations for hardware memory tagging / MTE-class
mitigation, including pure-data allocations, on supported systems. The app is
designed around App Sandbox, static third-party linking, and…
