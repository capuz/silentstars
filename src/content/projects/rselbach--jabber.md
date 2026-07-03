---
repo: "rselbach/jabber"
name: "jabber"
description: "An open-source dictation tool for macOS"
url: "https://github.com/rselbach/jabber"
language: "Swift"
languages: ["Swift"]
languagePcts: [98]
stars: 135
forks: 10
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2026-01-07T10:39:58Z"
lastCommitAt: "2026-07-03T12:41:14Z"
lastReleaseAt: "2026-01-11T02:23:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 25
maintainers: ["rselbach"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1fdf05e416bbd5c49da434161b13caffd8a6a5a0ed682a0122214021377f698/rselbach/jabber"
---

# Jabber

A macOS menu bar app for local speech-to-text transcription using on-device ASR models.

All audio is processed entirely on-device — nothing leaves your Mac. (Optional transcript refinement via OpenRouter sends the transcript text to a cloud provider you choose; this is off by default.)

> **⚠️ Personal Project Notice**
>
> This code was written for my own use. It is **not supported** in any way.
> No issues, no PRs, no questions answered, no guarantees it works.
> You're welcome to use it, fork it, modify it, sell it, burn it, whatever.
> Just don't expect anything from me. Good luck.

## Requirements

- macOS 26.0+ (Tahoe)
- Apple Silicon required

## Installation

Download the latest DMG from [Releases](../../releases), open it, and drag Jabber to Applications.

## Building from Source

```bash
swift build
./scripts/build_mlx_metallib.sh debug
```

If the Metal library build reports a missing Xcode Metal Toolchain, install it:

```bash
xcodebuild -downloadComponent MetalToolchain
```

For a release build with signing:

```bash
./scripts/release.sh --skip-notarize  # local testing
./scripts/release.sh                   # full signed + notarized DMG
```

## Usage

1.…
