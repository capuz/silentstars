---
repo: "Shik3i/KoalaSync"
name: "KoalaSync"
description: "Minimalist, privacy-first synchronized video playback for YouTube, Netflix, Emby, and general HTML5. Built with pure Vanilla JS and a Node.js relay."
readmeQualityOk: true
url: "https://github.com/Shik3i/KoalaSync"
homepage: "https://sync.koalastuff.net"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [52, 29]
topics: ["chrome-extension", "video-sync", "privacy-first", "socket-io", "video-synchronization", "watch-party", "websocket", "emby", "firefox-addon", "jellyfin"]
stars: 68
forks: 3
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-21T04:12:57Z"
lastCommitAt: "2026-08-02T04:00:41Z"
lastReleaseAt: "2026-04-25T14:52:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 37
maintainers: ["Shik3i", "actions-user"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1216603421/316ca25b-4775-4f7f-8723-72ad5569e655?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260805%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260805T060918Z&X-Amz-Expires=300&X-Amz-Signature=8f053a17cd99c84f71bad1233bb9a0a335badedc323e0a2126a85078b5c3f722&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTkxMDQ1OCwibmJmIjoxNzg1OTEwMTU4LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.IfS57a8ZTGE5ysqEcDK41BbMPTbWNoXJOazj-kltKkk"
fundingLinks: ["KO_FI:https://ko-fi.com/koaladev"]
discussionCount: 1
postedAt: "2026-06-26T21:38:25.211Z"
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
- **Host Control & Co-Hosts**: Room hosts can lock playback control to trusted controllers while guests keep watching in sync.
- **Smart Matching**: Automatically highlights tabs containing matching video titles.
- **Dual Heartbeat Architecture**: Robust…
