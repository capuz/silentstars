---
repo: "weby-homelab/Power-Safety-UA"
name: "Power-Safety-UA"
description: "LIGHT⚡SAFETY / POWER⚡SAFETY — All-in-one real-time monitoring. Power-Safety-UA — autonomous power, air raid, and AQI monitoring system for Kyiv. Docker multi-arch. 📚 Documentation: https://weby-homelab.github.io/Power-Safety-UA"
originalDescription: "СВІТЛО⚡БЕЗПЕКА / POWER⚡SAFETY — All-in-one real-time monitoring. Power-Safety-UA — autonomous power, air raid, and AQI monitoring system for Kyiv. Docker multi-arch. 📚 Документація: https://weby-homelab.github.io/Power-Safety-UA"
descriptionLang: "uk"
readmeQualityOk: true
url: "https://github.com/weby-homelab/Power-Safety-UA"
homepage: "https://POWER.srvrs.top"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [76, 23]
topics: ["air-quality", "air-raid-alerts", "analytics", "aqi", "automation", "blackout", "dashboard", "electricity", "flask", "heartbeat"]
stars: 17
forks: 1
openIssues: 1
closedIssues: 40
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-21T18:36:30Z"
lastCommitAt: "2026-10-09T10:50:23Z"
lastReleaseAt: "2026-06-03T13:13:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 54
maintainers: ["weby-homelab", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c63f4b18a2138d3f05fa2353ba1510a79b46a6b6fe61ba127e47dc341d45631c/weby-homelab/Power-Safety-UA"
fundingLinks: ["CUSTOM:https://github.com/weby-homelab"]
---

# LIGHT⚡️ SAFETY (POWER-SAFETY-UA) - Docker Edition [](https://github.com/weby-homelab/Power-Safety-UA/releases/latest)

**Power-Safety-UA** (formerly *Flash Monitor Kyiv*) — a professional autonomous system for monitoring critical infrastructure and environmental safety. The project provides precision real-time power supply monitoring, intelligent processing of outage schedules (DTEK/Yasno), tracking of air raid alerts, air quality (AQI), and background radiation.

This branch (`main`) contains the **Docker Edition** of the project, designed for fast, portable, and isolated deployment in any environment. This is a fully containerized version, which is the standard for modern servers.

> **Project status:** Stable v3.9.29 (Updated: 09.2026)
> **Architecture:** FastAPI + Docker Compose + JSON Flat-DB & SQLite WAL
> **Brand:** Weby Homelab

---

## 🛠 Technology stack (Docker Edition)
- **Runtime:** Python 3.12 (slim-bookworm) in a multi-platform container (`linux/amd64`, `linux/arm64`).
- **Backend:** FastAPI (Async) + Uvicorn for instant reaction to Push signals, Web Push (VAPID), and SSE.
- **Storage:** Hybrid storage: lightweight JSON files for state and schedules +…
