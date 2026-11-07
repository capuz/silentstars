---
repo: "heqvyfrogg/silentbox"
name: "silentbox"
description: "Ad-free native TeraBox client for Windows: Rust CLI, TUI, and WinFsp/WebDAV drive mount. A quiet alternative to the official app."
originalDescription: "Ad-free native TeraBox client for Windows: Rust CLI, TUI, and WinFsp/WebDAV drive mount. A quiet alternative to the official app."
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/heqvyfrogg/silentbox"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-11-06T17:24:09Z"
lastCommitAt: "2026-11-07T10:35:58Z"
lastReleaseAt: "2026-11-07T08:45:21Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 13
maintainers: ["heqvyfrogg"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7af9353a281ad143f9afde8e6f7d7e204dd63ba3319cee7dc89e283220d36ee/heqvyfrogg/silentbox"
---

# tbx — Unofficial native client for TeraBox

A TeraBox client with no ads, parallel transfers, and drive mounting. Written in Rust, it provides a CLI, a TUI, and OS-native mounting from the same core.

This is a separate implementation that ports the protocol by analyzing the official app (`com.dubox.drive` 4.28.2). It does not modify or redistribute the APK. The basis for the analysis is in `docs/protocol.md`.

## Features

- **Zero ads.** The official app bundles ad SDKs from 8 networks (Pangle, Moloco, Mintegral, Smaato, Vungle, AppLovin, InMobi, Facebook). This client includes none of them.
- **Parallel downloads.** Splits downloads using `Range` specifications and resumes from where it left off after an interruption. In measurements, 4 connections performed best (on the free tier, 8 connections were actually slower).
- **Split uploads.** Sends files in parts and skips parts that have already been sent.
- **Bulk folder download.** `tbx get /dir` reproduces the directory hierarchy and downloads everything together.
- **Multiple accounts.** Stored by name and switched with `--account`.
- **Share links.** Resolves `/s/1xxxx`, lists the contents, and saves them to your own space.…
