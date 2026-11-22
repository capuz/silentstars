---
repo: "DevModee/Aeros-Panel"
name: "Aeros-Panel"
description: "Turn an old PC into a self-hosted Linux server without Docker. ~27 MB idle RAM on an Intel Celeron N3060."
readmeQualityOk: true
url: "https://github.com/DevModee/Aeros-Panel"
homepage: "https://aerosdev.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["dashboard", "devops", "lightweight", "linux", "self-hosted", "server-management", "systemd", "typescript"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-21T04:16:58Z"
lastCommitAt: "2026-11-22T02:07:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 40
maintainers: ["DevModee"]
openGraphImageUrl: "https://opengraph.githubassets.com/34c14828b5798c808b94b4af89d049d705db43d99397641871de4920c7f6aed2/DevModee/Aeros-Panel"
---

# AerosPanel

A lightweight control panel to self-host apps on an old PC, without Docker.

It runs as a single Node.js process on Debian/Ubuntu and talks directly to Linux `/sys/class/` sensors, `systemctl`, and `journalctl`, with no background polling overhead when idle.

---

## Screenshots

---

## Why AerosPanel? (Real Measured Idle Footprint)

| Feature | **AerosPanel (measured)** | Docker + Portainer | Coolify | Pterodactyl |
| :--- | :--- | :--- | :--- | :--- |
| **Idle RAM** | **27.1 MB** cgroup (`~61 MB` total RSS, 1 process) | ~250–450 MB (`dockerd` + container) | ~1.5–2.5 GB+ (Docker + DB + proxy) | ~600 MB–1.2 GB (Panel + Wings + DB + Redis) |
| **Docker Required** | **No (Zero Docker)** | Yes | Yes | Yes |
| **Background Polling Daemons** | **None (on-demand only)** | Yes | Yes | Yes |
| **Native `systemd` Services** | **Yes (1-click templates)** | No | No | No |
| **Hardware Sensors (`/sys/class/`)** | **Native (CPU, RAM, Temp, Battery)** | External agent | Limited | No |
| **1-Click Git Deploy + Live Logs** | **Yes (WebSocket terminal)** | Manual / GitOps add-on | Yes | Manual |
