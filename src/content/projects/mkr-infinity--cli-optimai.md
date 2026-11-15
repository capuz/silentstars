---
repo: "mkr-infinity/cli-optimai"
name: "cli-optimai"
description: "Your 24/7 OptimAI Network node, controlled entirely from Telegram — start it, stop it, restart it, read live logs, check rewards, even log in, all with simple commands on your phone. If the node crashes at 3 AM, the bot restarts it automatically and DMs you."
readmeQualityOk: true
url: "https://github.com/mkr-infinity/cli-optimai"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [68, 26]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 29
recentReleases: 0
createdAt: "2026-11-07T07:02:28Z"
lastCommitAt: "2026-11-15T11:21:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 50
maintainers: ["mkr-infinity"]
openGraphImageUrl: "https://opengraph.githubassets.com/948616f75b1197cfea5f79fe3cb3f11efeb6d7a0e1f7213cb5ac84a7de7bd69c/mkr-infinity/cli-optimai"
---

# ⛏️ OptimAI Telegram Bot (v1.9.0)

> Autonomous 24/7 supervisor and remote Telegram management bot for the official [OptimAI CLI Node](https://github.com/OptimaiNetwork/OptimAI-CLI-Node).

---

## ⚡ Architecture

```
┌──────────────────┐    Polling     ┌───────────────────────┐   Subprocess    ┌──────────────┐   Docker Sock   ┌─────────────┐
│  Telegram App    │ <────────────> │  Telegram Bot         │ <─────────────> │ optimai-cli  │ <─────────────> │ Docker      │
│  (Remote Access) │ (No open ports)│  (Supervisor Loop)    │  Auto-Restart   │ + Local Auth │   Containers    │ AI Miner    │
└──────────────────┘                └───────────────────────┘                 └──────────────┘                 └─────────────┘
```

- **24/7 Supervisor:** Keeps the node alive with exponential backoff and circuit-breaker auto-recovery.
- **Dual Launch:** Starts both the Telegram supervisor bot and the OptimAI AI miner with a single command.
- **Remote Control:** Authenticate, control the node, monitor earnings, and view live logs from Telegram.
- **Cross-Platform:** Runs on Linux VPS, Google Cloud VM, Android (Termux), GitHub Codespaces, macOS, and Windows.

---

## 🚀 Quick Start

### 1.…
