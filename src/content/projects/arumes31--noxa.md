---
repo: "arumes31/noxa"
name: "noxa"
description: "Self-hosted voice, video, screen sharing, and chat. Go server, Windows desktop client, and mobile/web PWA."
readmeQualityOk: true
url: "https://github.com/arumes31/noxa"
homepage: "https://noxa.wowcraft.pw"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [50, 46]
topics: ["chat", "docker", "golang", "postgresql", "pwa", "screen-sharing", "self-hosted", "video-chat", "voice-chat", "wails"]
stars: 16
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-31T20:32:30Z"
lastCommitAt: "2026-11-21T13:28:04Z"
lastReleaseAt: "2026-10-17T02:44:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 51
maintainers: ["arumes31"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a76428ce715993fbed449d59d171742eaac0e8ba6e014b7624dc3c46c09e48c/arumes31/noxa"
---

# noXa

**Self-hosted voice, video, screen sharing, and chat**

*Go server, Windows desktop client, installable mobile/web PWA, and PostgreSQL persistence.*

[Public test server](#public-test-server) • [Mobile / PWA](#mobile) • [Architecture](#architecture) • [Features](#features) • [Quick Start](#quick-start) • [Server Setup](#new-server-setup) • [Permissions](#permissions) • [ServerQuery API](#serverquery) • [Configuration](#configuration) • [Development](#development-and-checks) • [Operations](#operations)

---

*Actual client UI with fictional demo data; [capture details](https://github.com/arumes31/noxa/blob/HEAD/website/README.md#product-screenshot-provenance).*

## 🌟 Overview

**noXa** combines voice channels, camera and screen sharing, direct and group
conversations, and channel forums in a desktop client and an installable web app. Its Go server uses a
framed control protocol, a **Pion WebRTC SFU**, PostgreSQL for persistent state,
and an optional Redis readiness dependency (one server process; Redis carries no fan-out). Named roles control access and moderation.
