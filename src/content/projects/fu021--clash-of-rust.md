---
repo: "Fu021/Clash-of-Rust"
name: "Clash-of-Rust"
description: "A cross-platform proxy client based on Rust, Slint, and mihomo, supporting Windows, macOS, Linux, and Android."
originalDescription: "基于 Rust、Slint 与 mihomo 的跨平台代理客户端，支持 Windows、macOS、Linux 和 Android。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Fu021/Clash-of-Rust"
language: "Rust"
languages: ["Rust"]
languagePcts: [74]
topics: ["arm64", "clash", "linux", "mihomo", "proxy-client", "rust", "windows", "apple-silicon", "cross-platform", "macos"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-06T03:40:27Z"
lastCommitAt: "2026-10-21T08:49:39Z"
lastReleaseAt: "2026-10-08T06:07:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 67
maintainers: ["Fu021"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fb202ac9bead6038e1668c754a771135dcf5766c5e307323c70de1fe1ff4071/Fu021/Clash-of-Rust"
---

A native Rust proxy client based on mihomo. Supports **Windows (x64 / ARM64)**, **Debian/Ubuntu (amd64 / ARM64, Ubuntu supports only 22.04 and above)**, **macOS 14 and above (Intel / Apple Silicon)**, and **Android 8.0 and above (ARM64 / ARMv7 / x86_64)**. Version **0.6.1**; for release notes, see [Release Notes](https://github.com/Fu021/Clash-of-Rust/blob/HEAD/docs/releases/0.6.1.md).

## Features

- **Lightweight**: Native Rust + Slint UI, no WebView required; page data is loaded on demand.
- **Offline-ready**: Built-in mihomo core and Geo data; one-click Geo data update.
- **IP Detection**: 183 check items covering exit IP, GitHub, AI services, and streaming media regional access; one-click detection shows a category report, click a category or status to view details, supports filtering and retesting by category.
- **A÷ Detection**: Collects Claude region, DNS, WebRTC, and browser signals, scans recorded project configurations and displays them by category. Optional one-click protection locks the node and rule/global mode, and enables TUN, encrypted DNS, and abnormal connection blocking; after turning it off, the original settings are restored. See [Detection…
