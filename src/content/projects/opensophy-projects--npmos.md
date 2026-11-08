---
repo: "opensophy-projects/NPMOS"
name: "NPMOS"
description: "Next-Generation Open Source Proxy & Application Security Platform"
originalDescription: "Next-Generation Open Source Proxy & Application Security Platform"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/opensophy-projects/NPMOS"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [44, 43]
stars: 6
forks: 0
openIssues: 5
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-07-28T13:12:42Z"
lastCommitAt: "2026-11-08T10:40:31Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 45
maintainers: ["claude", "opensophy-projects", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6a46430053885ad3095e638588a1d7092764db9c50f4091de481fd399a3a2f2/opensophy-projects/NPMOS"
---

# NginxionS

**Next-Generation Open Source Proxy & Application Security Platform**

Reverse proxy based on nginx with built-in protection: machine-learning WAF, CrowdSec, its own certificate authority and mTLS, traffic analytics and roles. Everything is configured in a single interface and works without the cloud.

[**Документация**](https://opensophy.com/) · [**Быстрая установка**](#быстрая-установка) · [**Возможности**](#возможности) · [**Контакты**](#безопасность-и-контакты)

## Quick install

You need a Linux server with Docker Engine 26+ and Compose 2.23+.

```bash
git clone https://github.com/opensophy-projects/NPMOS nginxions && cd nginxions
docker compose -f deploy/compose.yaml up -d
```

Open `https://<адрес-сервера>:81` and register an administrator. Service passwords are generated automatically, so there is no need to edit `.env`. Ports: `80` and `443` for sites, `81` for the panel.

For detailed installation, upgrades and troubleshooting, see the [documentation](https://opensophy.com/).

## Features

| | What it does | How it looks |
|---|---|---|
| **Hosts** | Proxy, redirects, TCP/UDP streams and 404 hosts in one table: TLS, WAF, mTLS and access for each host are…
