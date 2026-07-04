---
repo: "AieatAssam/android-network-tools"
name: "android-network-tools"
description: "Android app with multiple network tools in one shell. Swiss army knife of networking. "
url: "https://github.com/AieatAssam/android-network-tools"
homepage: "https://play.google.com/store/apps/details?id=net.aieat.netswissknife"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["android", "apk", "app", "dns", "kotlin", "network-analysis", "ping", "portscan", "traceroute", "wifi-network"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-21T10:57:39Z"
lastCommitAt: "2026-07-04T19:20:06Z"
lastReleaseAt: "2026-03-23T23:22:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 52
maintainers: ["AieatAssam", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/7bb4a278626e1ddf21f0d328b002a692d9b0b9c0c4ab424d00861f8effb90cfd/AieatAssam/android-network-tools"
---

# Net Swiss Knife – Android Networking Utilities

**Net Swiss Knife** is an Android "Swiss army knife" app for network diagnostics and utilities. It provides a collection of networking tools in a clean, modern Jetpack Compose + Material 3 UI.

---

## Features

### Ping
ICMP round-trip latency measurement with real-time streaming results.
- Configurable probe count (1–50 via slider; default configurable up to 100 in Settings), timeout (100–30,000 ms), and packet size (1–65,507 bytes)
- Per-probe RTT reporting with sequence numbers and status (SUCCESS / TIMEOUT / ERROR)
- Live stats panel during active ping: packet loss %, min, avg, and max RTT updating after every packet
- RTT chart with Y-axis ms labels and fill gradient, rendered as results arrive
- **Continuous mode** — toggle replaces the count slider; pings indefinitely while the app is on screen, screen kept on automatically, stops when backgrounded or screen locked
  - Rolling window of the last 100 packets drives live stats and chart
  - Full session log streamed to a temp CSV file; shareable via the Share button on completion
- Recent hosts saved per-session and offered as quick-select chips

### Traceroute
Network path…
