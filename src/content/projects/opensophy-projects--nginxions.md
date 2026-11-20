---
repo: "opensophy-projects/NginxionS"
name: "NginxionS"
description: "Next-Generation Open Source Proxy & Application Security Platform"
originalDescription: "Next-Generation Open Source Proxy & Application Security Platform"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/opensophy-projects/NginxionS"
language: "C++"
languages: ["C++"]
languagePcts: [53]
stars: 9
forks: 0
openIssues: 3
closedIssues: 124
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-28T13:12:42Z"
lastCommitAt: "2026-11-20T11:01:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 50
maintainers: ["claude", "opensophy-projects", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/125305f6a5fc3dd93453d076e7dedd5ec03e380935b9e31b54ea91b32162f1b3/opensophy-projects/NginxionS"
---

# NginxionS

**Next-Generation Open Source Proxy & Application Security Platform**

A reverse proxy based on nginx with built-in protection: a machine-learning WAF, CrowdSec, its own certificate authority and mTLS, traffic analytics, and roles. Everything is configured in one interface and works without the cloud.

[**Documentation**](https://opensophy.com/) · [**Quick install**](#быстрая-установка) · [**Features**](#возможности) · [**Contacts**](#безопасность-и-контакты)

## Quick install

You need a Linux x86_64 server with Docker Engine 28+ and Compose 2.23+, free ports 80, 443 and 81, and about 10 GB of disk space. Docker 28+ is required for security: in older versions, the port published on `127.0.0.1` (the panel) could be reached by neighboring machines on the same local network.

```bash
git clone https://github.com/opensophy-projects/NginxionS nginxions && cd nginxions
docker compose -f deploy/compose.yaml up -d --pull always
docker compose -f deploy/compose.yaml ps    # after 1–2 minutes all services are healthy
```
