---
repo: "heyvaldemar/homeassistant-traefik-letsencrypt-docker-compose"
name: "homeassistant-traefik-letsencrypt-docker-compose"
description: "Home Assistant with Let's Encrypt Using Docker Compose"
readmeQualityOk: true
url: "https://github.com/heyvaldemar/homeassistant-traefik-letsencrypt-docker-compose"
homepage: "https://www.heyvaldemar.com"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["homeassistant", "homeassistant-addons", "homeassistant-components", "homeassistant-config", "homeassistant-configuration", "homeassistant-custom-component", "homeassistant-device", "homeassistant-frontend", "homeassistant-integration", "homeassistant-sensor"]
stars: 11
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2023-11-09T21:29:28Z"
lastCommitAt: "2026-10-29T05:50:47Z"
lastReleaseAt: "2026-09-12T11:44:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 89
undervaluedScore: 81
maintainers: ["heyvaldemar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b028ba9476978872cc258aa3ac07e890ac8c7c5b1ace44d462f158a140508b6c/heyvaldemar/homeassistant-traefik-letsencrypt-docker-compose"
fundingLinks: ["GITHUB:https://github.com/heyvaldemar", "PATREON:https://patreon.com/heyvaldemar", "KO_FI:https://ko-fi.com/heyvaldemar", "CUSTOM:paypal.com/paypalme/heyValdemarCOM", "CUSTOM:buymeacoffee.com/heyValdemar", "CUSTOM:ko-fi.com/heyValdemar"]
---

# Home Assistant + Traefik + Let's Encrypt on Docker Compose

This repository deploys Home Assistant (container edition) behind Traefik with automatic Let's Encrypt TLS. The bundled `configuration.yaml` pre-configures the reverse-proxy trust settings HA needs to work behind Traefik, and `/config` persists in a named volume.

📙 Full narrative installation guide on the blog: [heyvaldemar.com/install-home-assistant-using-docker-compose/](https://www.heyvaldemar.com/install-home-assistant-using-docker-compose/).

## Getting started

```bash
# 1. Clone
git clone https://github.com/heyvaldemar/homeassistant-traefik-letsencrypt-docker-compose
cd homeassistant-traefik-letsencrypt-docker-compose

# 2. Create the two Docker networks the stack expects
docker network create traefik-network
docker network create homeassistant-network

# 3. Copy the environment template and fill in required values
cp .env.example .env
$EDITOR .env

# 4. Deploy
docker compose -f homeassistant-traefik-letsencrypt-docker-compose.yml -p homeassistant up -d
```

Within a minute `https://${HOMEASSISTANT_HOSTNAME}` serves the onboarding wizard with a fresh Let's Encrypt certificate. Create the owner account right…
