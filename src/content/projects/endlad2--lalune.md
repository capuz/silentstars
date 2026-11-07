---
repo: "Endlad2/LaLune"
name: "LaLune"
description: "La Lune - cross-platform VPN client for bypassing whitelists and DPI blocking, built to support multiple platforms at the same time"
originalDescription: "La Lune - кроссплатформенный клиент VPN для обхода белых списков и блокировок DPI, сделанный для одновременного поддержания сразу нескольких платформ"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/Endlad2/LaLune"
language: "Rust"
languages: ["Rust", "Dart"]
languagePcts: [34, 22]
stars: 43
forks: 4
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-08-24T08:47:00Z"
lastCommitAt: "2026-11-07T09:31:45Z"
lastReleaseAt: "2026-09-04T14:02:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 39
maintainers: ["Endlad2", "github-actions[bot]", "iowa-iowa"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9dcf53bf21fc5c409deae8324fa5cffdc665dd71dc6f6f065754c6ac40f2871/Endlad2/LaLune"
discussionCount: 2
---

# LaLune

Cross-platform VPN client for the **CSQTT** protocol. A single Flutter UI, platform backends in Rust / Kotlin / Swift, with support for desktop, mobile devices, and OpenWRT routers.

## What it is

LaLune is a blocking-circumvention client based on the [CSQTT](https://github.com/Endlad2/csqtt-core) protocol. Traffic is disguised as VK Calls, TURN is used for NAT traversal, WRAP is used for encryption, and obfuscation hides the signature.

## Platforms

| Platform | Status | Stack | Core |
|---|---|---|---|
| Windows | ✅ | Flutter + Rust (axum) + Wintun | `client-windows-x86_64.exe` |
| Linux | ✅ | Flutter + Rust (axum) + TUN | `client-linux-x86_64` |
| Android | ✅ | Flutter + Kotlin + VpnService | `libclient-android-*.so` |
| iOS 17+ | ✅ | Flutter + Swift + NetworkExtension | `csqtt-core` (static lib) |
| OpenWRT | ✅ | Rust (axum) + TUN | `csqtt-client-aarch64` |

## Quick install

### Windows

```powershell
irm https://raw.githubusercontent.com/Endlad2/LaLune/main/Installer/install.ps1 | iex
```

Or download `LaLune-Installer.exe` from [Releases](https://github.com/Endlad2/LaLune/releases) and run it.

What it does: creates `%APPDATA%\.la-lune\`, downloads the client,…
