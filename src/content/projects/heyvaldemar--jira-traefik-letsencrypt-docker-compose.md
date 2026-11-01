---
repo: "heyvaldemar/jira-traefik-letsencrypt-docker-compose"
name: "jira-traefik-letsencrypt-docker-compose"
description: "Jira with Let's Encrypt Using Docker Compose"
readmeQualityOk: true
url: "https://github.com/heyvaldemar/jira-traefik-letsencrypt-docker-compose"
homepage: "https://www.heyvaldemar.com"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["containers", "devops", "docker", "docker-compose", "docker-container", "docker-image", "docker-registry", "dockerfile", "healthcheck", "jira"]
stars: 27
forks: 6
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2021-05-09T04:00:54Z"
lastCommitAt: "2026-11-01T22:59:32Z"
lastReleaseAt: "2026-09-10T23:19:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 73
maintainers: ["heyvaldemar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4b47bd3d38af3c5df2a590e48f44252b45f79d59065aedae33981fea1f6c77b/heyvaldemar/jira-traefik-letsencrypt-docker-compose"
fundingLinks: ["GITHUB:https://github.com/heyvaldemar", "PATREON:https://patreon.com/heyvaldemar", "KO_FI:https://ko-fi.com/heyvaldemar", "CUSTOM:paypal.com/paypalme/heyValdemarCOM", "CUSTOM:buymeacoffee.com/heyValdemar", "CUSTOM:ko-fi.com/heyValdemar"]
---

# Jira + Traefik + Let's Encrypt on Docker Compose

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

This repository deploys Jira Software (Data Center) behind Traefik with automatic Let's Encrypt TLS, backed by PostgreSQL, with scheduled backups (database + application data) and companion restore scripts. One `docker compose up` away from issue tracking at `https://your-domain`.

📙 Full narrative installation guide on the blog: [heyvaldemar.com/install-jira-using-docker-compose/](https://www.heyvaldemar.com/install-jira-using-docker-compose/).

⚖️ Licensing note: Jira Data Center requires an Atlassian license (trials available). This template handles the infrastructure; the license is between you and Atlassian.

## Why this stack?

| Need | This stack | Manual install | Kubernetes | Other compose examples |…
