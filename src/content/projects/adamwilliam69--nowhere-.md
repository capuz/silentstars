---
repo: "AdamWilliam69/nowhere-"
name: "nowhere-"
description: "Automatically apply for SSL certificates for your own domain, one-click installation of the Nowhere service, extremely simple operation requiring only a Cloudflare API, with automatic certificate renewal."
readmeQualityOk: true
url: "https://github.com/AdamWilliam69/nowhere-"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 10
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-02T16:39:39Z"
lastCommitAt: "2026-09-20T08:46:46Z"
lastReleaseAt: "2026-07-27T15:16:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 50
maintainers: ["AdamWilliam69"]
openGraphImageUrl: "https://opengraph.githubassets.com/c58a2aa7aa628abbc625fb321575653303a17f70c098d122c8230a75a6077eda/AdamWilliam69/nowhere-"
---

## 🔗 Upstream Projects

This project is based on the following upstream repositories:

-  **Nowhere**: https://github.com/NodePassProject/Nowhere  
-  **Anywhere**: https://github.com/NodePassProject/Anywhere  
-  **nowhere-sh**: https://github.com/chikacya/nowhere-sh  

## Nowhere Portal Installer

A simple one-click installer for automatic TLS certificate setup and deployment of the Nowhere service.

## Features

- One-click deployment script
- Automatic SSL certificate via Cloudflare DNS API
- Systemd service management
- Minimal configuration required

## Requirements

- A domain managed by Cloudflare
- Cloudflare API Token with DNS edit permission
- Linux VPS (Ubuntu 20+/Debian 11+recommended)

## Installation

```bash
wget -O nowhere-install.sh https://raw.githubusercontent.com/AdamWilliam69/nowhere-/main/nowhere-install.sh && chmod +x nowhere-install.sh && bash nowhere-install.sh
