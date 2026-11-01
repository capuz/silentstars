---
repo: "heyvaldemar/mattermost-traefik-letsencrypt-docker-compose"
name: "mattermost-traefik-letsencrypt-docker-compose"
description: "Mattermost with Let's Encrypt Using Docker Compose"
readmeQualityOk: true
url: "https://github.com/heyvaldemar/mattermost-traefik-letsencrypt-docker-compose"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["backup", "devops", "docker-compose", "letsencrypt", "mattermost", "postgresql", "self-hosted", "traefik"]
stars: 19
forks: 8
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2023-08-29T00:31:38Z"
lastCommitAt: "2026-11-01T22:59:51Z"
lastReleaseAt: "2026-09-10T23:19:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 89
undervaluedScore: 71
maintainers: ["heyvaldemar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/30a7f2308e0a6c5a8432d349839c2dad24a4487f499f6ce49d3ead3c872c86f8/heyvaldemar/mattermost-traefik-letsencrypt-docker-compose"
fundingLinks: ["GITHUB:https://github.com/heyvaldemar", "PATREON:https://patreon.com/heyvaldemar", "KO_FI:https://ko-fi.com/heyvaldemar", "CUSTOM:paypal.com/paypalme/heyValdemarCOM", "CUSTOM:buymeacoffee.com/heyValdemar", "CUSTOM:ko-fi.com/heyValdemar"]
---

# Mattermost + Traefik + Let's Encrypt on Docker Compose

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

This repository deploys Mattermost Team Edition behind Traefik with automatic Let's Encrypt TLS, backed by PostgreSQL, with scheduled backups (database + file uploads) and companion restore scripts. One `docker compose up` away from self-hosted team chat at `https://your-domain`.

📙 Full narrative installation guide on the blog: [heyvaldemar.com/install-mattermost-using-docker-compose/](https://www.heyvaldemar.com/install-mattermost-using-docker-compose/).

## Why this stack?

| Need | This stack | Manual install | Kubernetes | Other compose examples |
|------|-----------|----------------|------------|------------------------|
| Ready to deploy in <10 min | ✅ | ❌ | ✅ if K8s is already running | Often |
| TLS via Let's Encrypt, auto-renewed…
