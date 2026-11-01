---
repo: "heyvaldemar/authelia-traefik-letsencrypt-docker-compose"
name: "authelia-traefik-letsencrypt-docker-compose"
description: "Authelia with Let's Encrypt Using Docker Compose"
readmeQualityOk: true
url: "https://github.com/heyvaldemar/authelia-traefik-letsencrypt-docker-compose"
homepage: "https://www.heyvaldemar.com"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["authelia", "authelia-helm-chart", "devops", "docker", "docker-compose", "docker-hub", "dockerfile", "letsencrypt", "letsencrypt-certificates", "sso"]
stars: 10
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2024-10-06T17:08:14Z"
lastCommitAt: "2026-11-01T22:58:39Z"
lastReleaseAt: "2026-09-08T16:47:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 89
undervaluedScore: 83
maintainers: ["heyvaldemar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ceefa8377c81a0a785c78a5ebb785374cc228d46e00b090c47c6c7edac5b943/heyvaldemar/authelia-traefik-letsencrypt-docker-compose"
fundingLinks: ["GITHUB:https://github.com/heyvaldemar", "PATREON:https://patreon.com/heyvaldemar", "KO_FI:https://ko-fi.com/heyvaldemar", "CUSTOM:paypal.com/paypalme/heyValdemarCOM", "CUSTOM:buymeacoffee.com/heyValdemar", "CUSTOM:ko-fi.com/heyValdemar"]
---

# Authelia + Traefik + Let's Encrypt on Docker Compose

This repository deploys Authelia (single sign-on and two-factor authentication in front of the apps Traefik routes) with automatic Let's Encrypt TLS, backed by PostgreSQL and Redis. Traefik's `forwardauth` middleware is pre-wired: add one label to any service and it sits behind Authelia.

## Getting started

```bash
# 1. Clone
git clone https://github.com/heyvaldemar/authelia-traefik-letsencrypt-docker-compose
cd authelia-traefik-letsencrypt-docker-compose

# 2. Create the two Docker networks the stack expects
docker network create traefik-network
docker network create authelia-network

# 3. Generate the six secret files (gitignored, one set per deployment)
chmod +x generate-authelia-secrets.sh && ./generate-authelia-secrets.sh

# 4. Point the config at your domain
#    Replace example.com with your domain in config/configuration.yml
#    (access-control rule, session cookie domain, authelia_url).
$EDITOR config/configuration.yml

# 5. Copy the environment template and fill in required values
cp .env.example .env
$EDITOR .env

# 6. Set your own user in config/users_database.yml
#    Generate a password hash:
#    docker run…
