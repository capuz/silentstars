---
repo: "Dirige/EMBY_CF"
name: "EMBY_CF"
description: "Emby Reverse Proxy"
originalDescription: "EMBY反向代理"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Dirige/EMBY_CF"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
stars: 125
forks: 102
openIssues: 1
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2026-03-01T13:19:26Z"
lastCommitAt: "2026-10-29T12:25:57Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 79
undervaluedScore: 21
maintainers: ["Dirige"]
openGraphImageUrl: "https://opengraph.githubassets.com/eab69e5eddd95d18268658f7d8b660c67b9ec979a778180eb2869e3fbf857d40/Dirige/EMBY_CF"
---

# EMBY_CF

**Emby Reverse Proxy · Multi-User Routing Panel**

A single-file Cloudflare Worker. No server or build step required. It combines reverse proxying, preferred-domain DNS, access statistics, Telegram daily reports, and multi-user subdomains. The current repository version is **v6.7.5-multi**, and the entry file is [worker.js](https://github.com/Dirige/EMBY_CF/blob/HEAD/worker.js).

- Preferred domain monitoring: <https://yx.255432.xyz/>
- Telegram group: <https://t.me/+7cbXthaBajszNjI1>

[Deployment guide](https://github.com/Dirige/EMBY_CF/blob/HEAD/DEPLOY.md) · [Environment variables](#环境变量) · [API Token permissions](#api-token-权限) · [FAQ](https://github.com/Dirige/EMBY_CF/blob/HEAD/DEPLOY.md#18-故障排查)

## Personal Edition

Single-user, VPS relay split-routing edition (three-state routing `off/on/image`, automatic fallback to the VPS when direct video connections fail, and a one-click deployment script). See **[personal/README.md](https://github.com/Dirige/EMBY_CF/blob/HEAD/personal/README.md)**.

---

## Features

| Feature | Description |
| --- | --- |
| Emby reverse proxy | Supports HTTP, HTTPS, WebSocket, Range, and streaming media |
| Multi-target routes | A single…
