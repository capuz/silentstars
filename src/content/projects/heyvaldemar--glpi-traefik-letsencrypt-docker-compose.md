---
repo: "heyvaldemar/glpi-traefik-letsencrypt-docker-compose"
name: "glpi-traefik-letsencrypt-docker-compose"
description: "GLPI with Let's Encrypt in a Docker Compose"
readmeQualityOk: true
url: "https://github.com/heyvaldemar/glpi-traefik-letsencrypt-docker-compose"
homepage: "https://www.heyvaldemar.com"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["containerization", "containers", "devops", "docker", "docker-compose", "docker-container", "docker-hub", "docker-image", "docker-registry", "dockerfile"]
stars: 17
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2021-09-13T03:31:05Z"
lastCommitAt: "2026-11-01T22:59:25Z"
lastReleaseAt: "2026-09-10T12:16:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "release_machine"]
healthScore: 89
undervaluedScore: 73
maintainers: ["heyvaldemar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d943b34a2adc3c748d17f115b94966cece169e64860c1afb3f84044ddd3524a/heyvaldemar/glpi-traefik-letsencrypt-docker-compose"
fundingLinks: ["GITHUB:https://github.com/heyvaldemar", "PATREON:https://patreon.com/heyvaldemar", "KO_FI:https://ko-fi.com/heyvaldemar", "CUSTOM:paypal.com/paypalme/heyValdemarCOM", "CUSTOM:buymeacoffee.com/heyValdemar", "CUSTOM:ko-fi.com/heyValdemar"]
---

# GLPI + Traefik + Let's Encrypt on Docker Compose

## Contents

- [Why this stack?](#why-this-stack)
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Features](#features)
- [Updating](#updating)
- [Supply chain trust](#supply-chain-trust)
- [Production checklist](#production-checklist)
- [Backups](#backups)
- [Testing](#testing)
- [Security Notes](#security-notes)
- [About the maintainer](#about-the-maintainer)

This repository deploys GLPI (IT asset management + helpdesk) behind Traefik with automatic Let's Encrypt TLS, backed by MariaDB 11.4 LTS, with scheduled backups (database + application data) and companion restore scripts. One `docker compose up` away from an ITSM service at `https://your-domain`.

📙 Full narrative installation guide on the blog: [heyvaldemar.com/install-glpi-using-docker-compose/](https://www.heyvaldemar.com/install-glpi-using-docker-compose/).

## Why this stack?

| Need | This stack | Manual install | Other compose examples |
|------|-----------|----------------|------------------------|
| Ready to deploy in <10 min | ✅ | ❌ PHP + webserver + DB by hand | Often |
| TLS via Let's Encrypt, auto-renewed | ✅ Traefik ACME built-in…
