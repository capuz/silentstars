---
repo: "heyvaldemar/bitbucket-traefik-letsencrypt-docker-compose"
name: "bitbucket-traefik-letsencrypt-docker-compose"
description: "Bitbucket with Let's Encrypt Using Docker Compose"
readmeQualityOk: true
url: "https://github.com/heyvaldemar/bitbucket-traefik-letsencrypt-docker-compose"
homepage: "https://www.heyvaldemar.com"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["bitbucket", "bitbucket-migration", "bitbucket-pipelines", "containers", "devops", "docker", "docker-compose", "docker-container", "docker-image", "docker-registry"]
stars: 9
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2021-05-09T03:59:12Z"
lastCommitAt: "2026-11-01T22:58:46Z"
lastReleaseAt: "2026-09-07T20:42:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "release_machine", "fork_magnet"]
healthScore: 89
undervaluedScore: 90
maintainers: ["heyvaldemar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/76f85cd0800f7feb8013585c24c04443cd6f3292b63c80fad790055e9c3d41f0/heyvaldemar/bitbucket-traefik-letsencrypt-docker-compose"
fundingLinks: ["GITHUB:https://github.com/heyvaldemar", "PATREON:https://patreon.com/heyvaldemar", "KO_FI:https://ko-fi.com/heyvaldemar", "CUSTOM:paypal.com/paypalme/heyValdemarCOM", "CUSTOM:buymeacoffee.com/heyValdemar", "CUSTOM:ko-fi.com/heyValdemar"]
---

# Bitbucket + Traefik + Let's Encrypt on Docker Compose

This repository deploys Bitbucket Data Center (single node) behind Traefik with automatic Let's Encrypt TLS, backed by PostgreSQL 17, with scheduled backups (database + home directory) and companion restore scripts.

📙 Full narrative installation guide on the blog: [heyvaldemar.com/install-bitbucket-using-docker-compose/](https://www.heyvaldemar.com/install-bitbucket-using-docker-compose/).

## Getting started

```bash
# 1. Clone
git clone https://github.com/heyvaldemar/bitbucket-traefik-letsencrypt-docker-compose
cd bitbucket-traefik-letsencrypt-docker-compose

# 2. Create the two Docker networks the stack expects
docker network create traefik-network
docker network create bitbucket-network

# 3. Copy the environment template and fill in required values
cp .env.example .env
$EDITOR .env
# ^ Required: BITBUCKET_DB_PASSWORD, BITBUCKET_HOSTNAME, BITBUCKET_URL,
#   TRAEFIK_HOSTNAME, TRAEFIK_ACME_EMAIL, TRAEFIK_BASIC_AUTH.

# 4. Deploy
docker compose -f bitbucket-traefik-letsencrypt-docker-compose.yml -p bitbucket up -d
```

First start takes a few minutes (JVM warm-up plus database initialization).…
