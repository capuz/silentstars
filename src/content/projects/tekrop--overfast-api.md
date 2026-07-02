---
repo: "TeKrop/overfast-api"
name: "overfast-api"
description: "⚡ Unofficial Overwatch API, built with FastAPI, provides data on heroes, game modes, maps, and player careers"
url: "https://github.com/TeKrop/overfast-api"
homepage: "https://overfast-api.tekrop.fr"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["api", "fastapi", "overwatch", "overwatch-api", "overwatch-stats", "python", "blizzard", "blizzard-profile-pages", "overwatch-heroes", "overwatch-maps"]
stars: 189
forks: 23
openIssues: 1
closedIssues: 70
watchers: 8
contributors: 12
recentReleases: 0
createdAt: "2021-11-17T22:11:27Z"
lastCommitAt: "2026-07-02T06:34:10Z"
lastReleaseAt: "2022-12-09T10:30:06Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 44
maintainers: ["TeKrop", "dependabot[bot]", "danielsogl"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/429216369/d0d4468e-c006-4bac-9db0-37a126160cb0"
discussionCount: 8
---

# ⚡ OverFast API

> OverFast API provides comprehensive data on Overwatch heroes, game modes, maps, and player statistics by scraping Blizzard pages. Built with **FastAPI** and **Selectolax**, **PostgreSQL** for persistent storage, **Stale-While-Revalidate caching** via **Valkey** and **nginx (OpenResty)**, **taskiq** background workers, and **TCP Slow Start + AIMD throttling** for Blizzard requests.

## Table of contents
* [✨ Live instance](#-live-instance)
* [🐋 Run for production](#-run-for-production)
* [💽 Run as developer](#-run-as-developer)
* [👨‍💻 Technical details](#-technical-details)
* [🐍 Architecture](#-architecture)
* [📊 Monitoring](#-monitoring)
* [🤝 Contributing](#-contributing)
* [🚀 Community projects](#-community-projects)
* [🙏 Credits](#-credits)
* [📝 License](#-license)

## ✨ [Live instance](https://overfast-api.tekrop.fr)
The live instance operates with a rate limit applied per second, shared across all endpoints. You can view the current rate limit on the home page, and this limit may be adjusted as needed. For higher request throughput, consider hosting your own instance on a dedicated server 👍

- Live instance (Redoc documentation) :…
