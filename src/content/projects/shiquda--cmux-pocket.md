---
repo: "shiquda/cmux-pocket"
name: "cmux-pocket"
description: "Android app for cmux: watch and drive your Mac's cmux terminals and AI agents from your phone. Live multi-workspace streaming, QR pairing, Tailscale or Cloudflare Tunnel. Open source."
readmeQualityOk: true
url: "https://github.com/shiquda/cmux-pocket"
homepage: "https://github.com/shiquda/cmux-pocket/releases/latest"
language: "Kotlin"
languages: ["Kotlin", "Rust"]
languagePcts: [47, 45]
topics: ["android", "cmux", "terminal", "developer-tools", "kotlin", "macos", "remote-development", "websocket", "rust", "ai-agents"]
stars: 14
forks: 4
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 4
createdAt: "2026-08-23T15:12:35Z"
lastCommitAt: "2026-11-05T11:24:52Z"
lastReleaseAt: "2026-10-22T07:03:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 61
maintainers: ["shiquda", "jdonager", "KNamuuu"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1343901626/cc4bb301-9cdf-41f7-bd78-4a0473b73c33"
---

# cmux Pocket

cmux Pocket is an independent Android companion for [cmux](https://cmux.com/) on Mac, for developers who want remote access to their terminal workspaces and AI agent sessions from a phone.

> **Disclaimer:** Independent community project. Not affiliated with or endorsed by cmux. “cmux” identifies the compatibility target only.

[Download Signed APK](https://github.com/shiquda/cmux-pocket/releases/latest) · [Highlights](#highlights) · [Quick Start](#quick-start) · [Documentation](#documentation)

## Highlights

## Quick Start

You need **Android 8.0+** and a **Mac with macOS 13+** running cmux. Keep the Mac awake while connected.

1. **Install Android:** download and install the latest signed APK from [GitHub Releases](https://github.com/shiquda/cmux-pocket/releases/latest).
2. **Start the Mac Gateway:**

   ```bash
   brew install shiquda/cmux-pocket/cmux-pocket
   cmux-pocket setup
   cmux-pocket status
   ```

3. **Connect the devices:** for the recommended Tailscale route, install Tailscale on both devices, connect them to the same tailnet, and enable MagicDNS and HTTPS certificates. With the `tailscale` CLI available on the Mac, run:

   ```bash
   cmux-pocket…
