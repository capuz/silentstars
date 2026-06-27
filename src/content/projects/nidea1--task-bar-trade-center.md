---
repo: "nidea1/task-bar-trade-center"
name: "task-bar-trade-center"
description: "A lightweight Windows tray utility and in-game HUD overlay for TaskBarHero to track Steam Community Market item prices in real-time."
url: "https://github.com/nidea1/task-bar-trade-center"
language: "Go"
languages: ["Go"]
languagePcts: [76]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-19T12:48:09Z"
lastCommitAt: "2026-06-27T00:37:11Z"
lastReleaseAt: "2026-06-22T13:49:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 54
maintainers: ["nidea1"]
openGraphImageUrl: "https://opengraph.githubassets.com/34bf1d4d6903b3715ef889b6226a26642d370a7cfa052a3d6ae0bffcf30fe4ab/nidea1/task-bar-trade-center"
fundingLinks: ["PATREON:https://patreon.com/16264399"]
---

# <img src="./assets/icon.png" width="48" height="48" valign="middle" /> Task Bar Trade Center

Task Bar Trade Center is a modern Windows desktop companion and utility overlay for TaskBarHero, created by nidea1. It monitors the game in the background, tracks your player inventory directly from memory, schedules Steam Community Market pricing requests with built-in rate-limit protection, and displays a powerful real-time analytics dashboard along with a cursor-attached price overlay HUD.

---

## 🏗️ Architecture & How It Works

The application operates on a hybrid architecture designed for minimal system impact and seamless Windows integration:

- **Frontend (Wails + React + TypeScript + Vite):** A modern, high-performance desktop UI that displays your real-time portfolio value, active item details, pricing sync status, and automated item sale recommendations.
- **Backend (Go):** 
  - **Memory Hook & Scanner:** Attaches to `TaskBarHero.exe` to read player inventory state and active item coordinates.
  - **Steam SCM API Scheduler:** Safely queues price requests with adaptive rate-limiting, queuing, and backoffs to prevent Steam's HTTP 429 rate limit.
  - **Windows Shell…
