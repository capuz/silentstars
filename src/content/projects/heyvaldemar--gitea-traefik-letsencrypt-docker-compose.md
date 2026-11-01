---
repo: "heyvaldemar/gitea-traefik-letsencrypt-docker-compose"
name: "gitea-traefik-letsencrypt-docker-compose"
description: "Gitea with Let's Encrypt Using Docker Compose"
readmeQualityOk: true
url: "https://github.com/heyvaldemar/gitea-traefik-letsencrypt-docker-compose"
homepage: "https://www.heyvaldemar.com"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["containerization", "containers", "devops", "docker", "docker-compose", "docker-container", "docker-hub", "docker-image", "docker-registry", "dockerfile"]
stars: 32
forks: 13
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2021-05-09T03:48:14Z"
lastCommitAt: "2026-11-01T22:59:12Z"
lastReleaseAt: "2026-09-10T23:19:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 73
maintainers: ["heyvaldemar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/04163d873c5586b7e3c947b074cca886a817bad678284350087f193631c526e1/heyvaldemar/gitea-traefik-letsencrypt-docker-compose"
fundingLinks: ["GITHUB:https://github.com/heyvaldemar", "PATREON:https://patreon.com/heyvaldemar", "KO_FI:https://ko-fi.com/heyvaldemar", "CUSTOM:paypal.com/paypalme/heyValdemarCOM", "CUSTOM:buymeacoffee.com/heyValdemar", "CUSTOM:ko-fi.com/heyValdemar"]
---

# Gitea + Traefik + Let's Encrypt on Docker Compose

## Contents

- [Why this stack?](#why-this-stack)
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Features](#features)
- [Updating](#updating)
  - [Typical use cases](#typical-use-cases)
- [SSH access to repositories](#ssh-access-to-repositories)
- [Supply chain trust](#supply-chain-trust)
- [Production checklist](#production-checklist)
- [Backups](#backups)
- [Testing](#testing)
- [Security Notes](#security-notes)
- [About the maintainer](#about-the-maintainer)

This repository deploys Gitea behind Traefik with automatic Let's Encrypt TLS, backed by PostgreSQL, with git-over-SSH routed through a dedicated Traefik TCP entrypoint, a scheduled backup container (database + repositories), and companion restore scripts. One `docker compose up` away from a self-hosted software forge at `https://your-domain`.

📙 Full narrative installation guide on the blog: [heyvaldemar.com/install-gitea-using-docker-compose/](https://www.heyvaldemar.com/install-gitea-using-docker-compose/).

## Why this stack?

| Need | This stack | Manual install | Kubernetes | Other compose examples |…
