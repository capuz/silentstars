---
repo: "pbuzdin/velta"
name: "velta"
description: "Velta is a Delta Chat client built with JavaScript, HTML, CSS, and web components inside a Tauri shell. V for Velta."
readmeQualityOk: true
url: "https://github.com/pbuzdin/velta"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [53, 31]
topics: ["android", "chat", "chatmail", "deltachat", "deltachat-client", "imap", "instant-messenger", "messenger", "openpgp", "smtp"]
stars: 10
forks: 1
openIssues: 32
closedIssues: 139
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-18T02:21:53Z"
lastCommitAt: "2026-10-31T09:54:03Z"
lastReleaseAt: "2026-09-19T02:31:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 56
maintainers: ["pbuzdin"]
openGraphImageUrl: "https://opengraph.githubassets.com/dcf4a996543860632b2fa255f1ffcfd38c86476080ae1bc912b3b85857e09148/pbuzdin/velta"
discussionCount: 2
---

# Velta

A cross-platform **Delta Chat** client built as a single PWA-ish web app wrapped by **Tauri 2**.

## Download

**[Android](https://github.com/pbuzdin/velta/releases/latest/download/Velta-android-arm64.apk)** (~55 MB) · **[Windows](https://github.com/pbuzdin/velta/releases/latest/download/Velta-windows-x64-setup.exe)** (~14 MB) · **[macOS](https://github.com/pbuzdin/velta/releases/latest/download/Velta-macos-universal.dmg)** (~38 MB) — always the latest release; sizes approximate

Android needs an arm64 phone. Windows is the x64 installer. macOS is a universal test build that isn't notarized yet, so see [Install](#install) before the first launch. Other files and older versions are on the [releases page](https://github.com/pbuzdin/velta/releases).

## What it is

Velta shares one web frontend (`app/`) between:

- **Windows desktop** — a Tauri 2 app that bundles `deltachat-rpc-server.exe` as a sidecar.
- **macOS desktop** (test build) — the same Tauri 2 app with `deltachat-rpc-server` bundled as an `externalBin` sidecar; universal (Apple Silicon + Intel), ad-hoc signed, not notarized yet — see [Install on macOS](#install).
- **Android mobile** — the same Tauri 2 app, but…
