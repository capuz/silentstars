---
repo: "kamrul1157024/helios"
name: "helios"
description: "A platform that orchestrates AI coding agents on your machine"
readmeQualityOk: true
url: "https://github.com/kamrul1157024/helios"
language: "Go"
languages: ["Go", "Dart"]
languagePcts: [51, 30]
stars: 7
forks: 4
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-09T10:42:39Z"
lastCommitAt: "2026-08-12T05:13:36Z"
lastReleaseAt: "2026-04-12T18:42:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 46
maintainers: ["kamrul1157024", "MusavvirK"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2b8fc76fd03e6ed69b5d295a29c01a3b35f7d97bae7e683d1a79cf1214401ac/kamrul1157024/helios"
---

# helios

**A platform that orchestrates AI coding agents on your machine.**

You run 5 Claude sessions across 3 projects. One needs permission to run a test. Another finished refactoring and is waiting for your next instruction. A third hit a rate limit 20 minutes ago. You don't know any of this because you're in a different terminal tab.

Helios fixes this. It's a daemon that sits between you and your AI coding tools. It runs each session in a terminal of its own, watches for events via hooks, and notifies you the moment any session needs attention — on your desktop, your phone, your browser, wherever you are. It also narrates what your agents are doing in real time via voice reporting, so you can stay informed hands-free without watching the screen.

**The killer feature:** Full session management and notifications from your phone — see all sessions across multiple machines, approve or deny permissions, send follow-up messages, create new tasks, and get push notifications the moment any session needs attention. No terminal required.

```mermaid
graph LR
    Phone["📱 Helios App<br/>sessions · approve<br/>deny · send msgs"]
    Tunnel["🌐 Tunnel<br/>(Cloudflare)"]…
