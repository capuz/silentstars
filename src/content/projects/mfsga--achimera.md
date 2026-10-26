---
repo: "MFSGA/AChimera"
name: "AChimera"
description: "Android client for Chimera Proxy (Clash-rs / Mihomo-compatible Rust proxy core)."
originalDescription: "Android client for Chimera Proxy (Clash-rs / Mihomo-compatible Rust proxy core)."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/MFSGA/AChimera"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [95]
topics: ["clash", "clash-meta", "hysteria2", "mihomo", "xhttp", "xray-core", "android", "android-app"]
stars: 10
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-02-12T09:53:00Z"
lastCommitAt: "2026-10-26T18:06:08Z"
lastReleaseAt: "2026-08-09T18:38:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 49
maintainers: ["MFSGA", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/df6cfac33cf0403e9762dcca0cd9af7088b6fb65a3e347605dd444e1916ac0e8/MFSGA/AChimera"
---

# AChimera — Android Client for Chimera Proxy

> Experimental Android client built with Kotlin/Jetpack Compose and a Rust proxy core.

## Chimera Ecosystem

```text
Chimera Desktop
       ↕
Chimera Client (Rust client core)
       ↕ VLESS / REALITY
Chimera Proxy Server (Rust server core)
       ↕
AChimera (Android client) · Proxy Wiki
```

- [Chimera](https://github.com/MFSGA/Chimera) — cross-platform desktop application
- [Chimera Client](https://github.com/MFSGA/Chimera_Client) — Rust client core
- [Chimera Proxy Server](https://github.com/MFSGA/Chimera_Service) — Rust server core
- [Proxy Wiki](https://mfsga.github.io/Proxy_WIKI/) — documentation and deployment notes

AChimera is an experimental proxy client project based on Android + Kotlin/Jetpack Compose + Rust/UniFFI. The current repository already provides foundational capabilities including the Android UI, VPN service entry point, configuration import and validation, Rust core bridging, log viewing, and a node panel. Its goal is to split the mobile experience and the underlying network core into a clear multi-module structure.
The current application name is `Chimera Lite`. The package contains both the Android UI layer…
