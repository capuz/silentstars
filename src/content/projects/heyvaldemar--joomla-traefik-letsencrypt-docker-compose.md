---
repo: "heyvaldemar/joomla-traefik-letsencrypt-docker-compose"
name: "joomla-traefik-letsencrypt-docker-compose"
description: "Joomla with Let's Encrypt in a Docker Compose"
readmeQualityOk: true
url: "https://github.com/heyvaldemar/joomla-traefik-letsencrypt-docker-compose"
homepage: "https://www.heyvaldemar.com"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["containerization", "containers", "devops", "docker", "docker-compose", "docker-container", "docker-hub", "docker-registry", "docker-volumes", "dockerfile"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2021-10-06T02:04:56Z"
lastCommitAt: "2026-11-01T22:59:39Z"
lastReleaseAt: "2026-09-10T23:19:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "release_machine"]
healthScore: 89
undervaluedScore: 77
maintainers: ["heyvaldemar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/840b94051b924d3130d5e4851ed772a4879e81e8b667d5777f8f443e04bb51c2/heyvaldemar/joomla-traefik-letsencrypt-docker-compose"
fundingLinks: ["GITHUB:https://github.com/heyvaldemar", "PATREON:https://patreon.com/heyvaldemar", "KO_FI:https://ko-fi.com/heyvaldemar", "CUSTOM:paypal.com/paypalme/heyValdemarCOM", "CUSTOM:buymeacoffee.com/heyValdemar", "CUSTOM:ko-fi.com/heyValdemar"]
---

# Joomla + Traefik + Let's Encrypt on Docker Compose

This repository deploys Joomla behind Traefik with automatic Let's Encrypt TLS, backed by PostgreSQL 16, with an unattended first-start installation (site and admin account from `.env`), scheduled backups (database + site files) and companion restore scripts.

📙 Full narrative installation guide on the blog: [heyvaldemar.com/install-joomla-using-docker-compose/](https://www.heyvaldemar.com/install-joomla-using-docker-compose/).

## Getting started

```bash
# 1. Clone
git clone https://github.com/heyvaldemar/joomla-traefik-letsencrypt-docker-compose
cd joomla-traefik-letsencrypt-docker-compose

# 2. Create the two Docker networks the stack expects
docker network create traefik-network
docker network create joomla-network

# 3. Copy the environment template and fill in required values
cp .env.example .env
$EDITOR .env
# ^ Required: JOOMLA_DB_PASSWORD, JOOMLA_ADMIN_PASSWORD (12+ chars),
#   JOOMLA_ADMIN_EMAIL, JOOMLA_HOSTNAME, TRAEFIK_HOSTNAME,
#   TRAEFIK_ACME_EMAIL, TRAEFIK_BASIC_AUTH.

# 4. Deploy
docker compose -f joomla-traefik-letsencrypt-docker-compose.yml -p joomla up -d
```

The image installs Joomla unattended on first…
