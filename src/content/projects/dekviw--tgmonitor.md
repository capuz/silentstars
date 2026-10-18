---
repo: "DEKVIW/tgmonitor"
name: "tgmonitor"
description: "Aggregated monitoring of TG cloud-drive and movie/TV resources"
originalDescription: "聚合监控tg网盘影视资源"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/DEKVIW/tgmonitor"
homepage: "https://pan.pkll.de/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [65, 29]
stars: 31
forks: 12
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-06-04T11:27:29Z"
lastCommitAt: "2026-10-18T07:48:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 57
undervaluedScore: 47
maintainers: ["DEKVIW"]
openGraphImageUrl: "https://opengraph.githubassets.com/6cfac35f5de5dbb1c057f03a365d4d5c2f45166de6b259776059e25a1bced3b7/DEKVIW/tgmonitor"
---

# TG Monitor

TG Monitor is a web management system for monitoring Telegram channel resources, governing cloud-drive links, and operating resource transfers. The project has been migrated to the `FastAPI + React/Vite + PostgreSQL` architecture. Day-to-day use is mainly through the browser UI; the legacy Streamlit pages are no longer part of the current deployment scheme.

## Current Form

- Backend: FastAPI provides the API; SQLAlchemy accesses PostgreSQL
- Frontend: React + TypeScript + Vite, providing a complete admin interface
- Monitoring: Telethon continuously listens to Telegram channel messages and stores them in the database
- Worker: handles link inspection, transfer queues, update-tracking tasks, publishing rules, and log cleanup
- Deployment: supports local systemd services, and also retains Docker / Compose configuration

Day-to-day administration generally does not require running management commands. Channel management, link checks, AI configuration, resource operations, transfer tasks, backups, and system settings are all done in the UI. Commands are mainly used for initial setup, development startup, service deployment, backup and restore, and troubleshooting.

##…
