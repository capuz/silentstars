---
repo: "mikeg-dal/QK4"
name: "QK4"
description: "Cross Platform Remote Control Application for Elecraft K4 and Elecraft KPA1500."
readmeQualityOk: true
url: "https://github.com/mikeg-dal/QK4"
homepage: "https://mikeg-dal.github.io/QK4/"
language: "C++"
languages: ["C++"]
languagePcts: [96]
topics: ["linux", "macos", "raspberry-pi", "apple-silicon", "cpp", "macos-14", "qt", "windows"]
stars: 18
forks: 11
openIssues: 20
closedIssues: 103
watchers: 8
contributors: 6
recentReleases: 0
createdAt: "2025-12-29T14:49:59Z"
lastCommitAt: "2026-11-02T15:17:24Z"
lastReleaseAt: "2026-02-25T15:33:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 62
maintainers: ["mikeg-dal"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9356a65ad0a81d0d1bafefdc929e39975d55c98a2f0ea818e2de57e18890b44/mikeg-dal/QK4"
---

# QK4

A cross-platform desktop application for remote control of Elecraft K4 radios over TCP/IP with real-time audio streaming and spectrum display.

## Supported Platforms

| Platform | Minimum Version | Architecture |
|----------|-----------------|--------------|
| macOS | 15 (Sequoia) — set by `LSMinimumSystemVersion` in `resources/Info.plist.in` | Apple Silicon |
| Windows | 11 | x64 |
| Linux | Raspberry Pi OS / Debian Trixie | ARM64 (Raspberry Pi 4/5) |
| Linux | Any distribution with Flatpak | x86_64 |

## Features

- **TLS/PSK encrypted connection** — TLS 1.2 or later with a pre-shared key on port 9204. PSK needs Qt's OpenSSL TLS backend; the packages ship it. Port 9205 is the unencrypted connection.
- **Dual VFO display** — frequency, mode, S-meter and tuning rate for VFO A and B
- **GPU spectrum** — panadapter and waterfall drawn with Qt RHI: Metal on macOS, Direct3D 11 on Windows, OpenGL on Linux
- **Mini-pan** — compact spectrum view in each VFO area
- **Band-plan strip** — IARU region 1/2/3 segments across the top of the panadapter
- **Dual-channel audio** — MAIN and SUB receiver audio (Opus or uncompressed, chosen per radio), with separate volume and balance
-…
