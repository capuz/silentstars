---
repo: "heyvaldemar/confluence-traefik-letsencrypt-docker-compose"
name: "confluence-traefik-letsencrypt-docker-compose"
description: "Confluence with Let's Encrypt Using Docker Compose"
readmeQualityOk: true
url: "https://github.com/heyvaldemar/confluence-traefik-letsencrypt-docker-compose"
homepage: "https://www.heyvaldemar.com"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["confluence", "confluence-api", "containerization", "containers", "devops", "docker", "docker-compose", "docker-container", "docker-hub", "docker-image"]
stars: 23
forks: 10
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2021-05-09T04:04:58Z"
lastCommitAt: "2026-11-01T22:58:52Z"
lastReleaseAt: "2026-09-09T15:16:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 78
maintainers: ["heyvaldemar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd32005493f5b5eff934f2ce0439b1e2fdf63308a271bf4ed382457595e962ee/heyvaldemar/confluence-traefik-letsencrypt-docker-compose"
fundingLinks: ["GITHUB:https://github.com/heyvaldemar", "PATREON:https://patreon.com/heyvaldemar", "KO_FI:https://ko-fi.com/heyvaldemar", "CUSTOM:paypal.com/paypalme/heyValdemarCOM", "CUSTOM:buymeacoffee.com/heyValdemar", "CUSTOM:ko-fi.com/heyValdemar"]
---

# Confluence + Traefik + Let's Encrypt on Docker Compose

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

This repository deploys Confluence (Data Center) behind Traefik with automatic Let's Encrypt TLS, backed by PostgreSQL, with scheduled backups (database + application data) and companion restore scripts. One `docker compose up` away from a team wiki at `https://your-domain`.

📙 Full narrative installation guide on the blog: [heyvaldemar.com/install-confluence-using-docker-compose/](https://www.heyvaldemar.com/install-confluence-using-docker-compose/).

⚖️ Licensing note: Confluence Data Center requires an Atlassian license (trials available). This template handles the infrastructure; the license is between you and Atlassian.

## Why this stack?

| Need | This stack | Manual install | Kubernetes | Other compose examples |…
