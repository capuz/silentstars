---
repo: "heyvaldemar/docmost-traefik-letsencrypt-docker-compose"
name: "docmost-traefik-letsencrypt-docker-compose"
description: "Docmost with Let's Encrypt Using Docker Compose"
readmeQualityOk: true
url: "https://github.com/heyvaldemar/docmost-traefik-letsencrypt-docker-compose"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["notion-alternative", "docmost", "docker", "docker-compose", "docker-image", "docker-registry", "letsencrypt", "letsencrypt-certificates", "docker-hub", "productivity"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2024-09-23T22:30:31Z"
lastCommitAt: "2026-11-01T22:59:06Z"
lastReleaseAt: "2026-09-08T16:55:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 88
maintainers: ["heyvaldemar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a89cb2bd94525f909f20ab2a23d40346c6cf87f0b4ad399a8df589aeb0d3dc5/heyvaldemar/docmost-traefik-letsencrypt-docker-compose"
fundingLinks: ["GITHUB:https://github.com/heyvaldemar", "PATREON:https://patreon.com/heyvaldemar", "KO_FI:https://ko-fi.com/heyvaldemar", "CUSTOM:paypal.com/paypalme/heyValdemarCOM", "CUSTOM:buymeacoffee.com/heyValdemar", "CUSTOM:ko-fi.com/heyValdemar"]
---

# Docmost + Traefik + Let's Encrypt on Docker Compose

This repository deploys Docmost (an open-source collaborative wiki and documentation platform (a self-hosted Confluence/Notion alternative)) behind Traefik with automatic Let's Encrypt TLS, backed by PostgreSQL 16 and Redis, with scheduled backups (database + uploaded files) and companion restore scripts.

📙 Full narrative installation guide on the blog: [heyvaldemar.com/install-docmost-using-docker-compose/](https://www.heyvaldemar.com/install-docmost-using-docker-compose/).

## Getting started

```bash
# 1. Clone
git clone https://github.com/heyvaldemar/docmost-traefik-letsencrypt-docker-compose
cd docmost-traefik-letsencrypt-docker-compose

# 2. Create the two Docker networks the stack expects
docker network create traefik-network
docker network create docmost-network

# 3. Copy the environment template and fill in required values
cp .env.example .env
$EDITOR .env
# ^ Required: DOCMOST_DB_PASSWORD, DOCMOST_SECRET, DOCMOST_HOSTNAME,
#   DOCMOST_URL, TRAEFIK_HOSTNAME, TRAEFIK_ACME_EMAIL, TRAEFIK_BASIC_AUTH.

# 4. Deploy
docker compose -f docmost-traefik-letsencrypt-docker-compose.yml -p docmost up -d
```

Docmost runs its…
