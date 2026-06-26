---
repo: "Shik3i/KoalaSync"
name: "KoalaSync"
description: "Minimalist, privacy-first synchronized video playback for YouTube, Netflix, Emby, and general HTML5. Built with pure Vanilla JS and a Node.js relay."
url: "https://github.com/Shik3i/KoalaSync"
homepage: "https://sync.koalastuff.net"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [58, 33]
topics: ["chrome-extension", "video-sync", "privacy-first", "socket-io", "video-synchronization", "watch-party", "websocket", "emby", "firefox-addon", "jellyfin"]
stars: 24
forks: 4
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-04-21T04:12:57Z"
lastCommitAt: "2026-06-25T02:29:24Z"
lastReleaseAt: "2026-04-25T14:52:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 86
undervaluedScore: 46
maintainers: ["Shik3i", "actions-user", "Kaia-Alenia"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1216603421/316ca25b-4775-4f7f-8723-72ad5569e655"
fundingLinks: ["KO_FI:https://ko-fi.com/koaladev"]
discussionCount: 1
promoted: true
---

</p>

<h1 align="center">KoalaSync</h1>

</p>

### 🌟 Why KoalaSync?

*   **🛡️ Security-First**: Volatile RAM-based relay with built-in brute-force protection and zero-persistence architecture. We keep no logs of your sessions or synchronizations. *We don't track you. We only track our server* (relying on the [aggregated, anonymous, non-personal metrics](https://syncserver.koalastuff.net/health) provided under `/health`).
*   **📡 Direct Logic**: Manual Socket.IO wire implementation for reliable synchronization.
*   **🛠️ Clean Build**: Dependency-free extension runtime with no library overhead.
*   **🌐 Universal**: Works on any website with a `<video>` tag.

---

### ✨ Key Features

- **Global Synchronization**: Synchronize Play, Pause, and Seeking on any website with a `<video>` tag.
- **Episode Auto-Sync**: Perfectly sync series binges. All peers wait until everyone has loaded the next episode before starting together.
- **Smart Matching**: Automatically highlights tabs containing matching video titles.
- **Dual Heartbeat Architecture**: Robust session tracking that prevents ghost rooms and stale connections.
- **Efficient Relay**: Minimal overhead WebSocket message…
