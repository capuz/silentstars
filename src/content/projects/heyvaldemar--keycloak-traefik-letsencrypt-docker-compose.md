---
repo: "heyvaldemar/keycloak-traefik-letsencrypt-docker-compose"
name: "keycloak-traefik-letsencrypt-docker-compose"
description: "Keycloak with Let's Encrypt Using Docker Compose"
readmeQualityOk: true
url: "https://github.com/heyvaldemar/keycloak-traefik-letsencrypt-docker-compose"
homepage: "https://www.heyvaldemar.com"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["containerization", "containers", "devops", "docker", "docker-compose", "docker-container", "docker-hub", "docker-image", "docker-registry", "docker-volumes"]
stars: 148
forks: 56
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 4
recentReleases: 9
createdAt: "2021-05-09T03:42:07Z"
lastCommitAt: "2026-11-01T22:59:45Z"
lastReleaseAt: "2026-09-07T20:45:28Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "release_machine"]
healthScore: 99
undervaluedScore: 53
maintainers: ["heyvaldemar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/14d2d6b1c7ad7f615e51711eadeb0a4a7a1eab6572f6d7fae9a21ac8e936c5fa/heyvaldemar/keycloak-traefik-letsencrypt-docker-compose"
---

# Keycloak + Traefik + Let's Encrypt on Docker Compose

## Contents

- [Why this stack?](#why-this-stack)
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Features](#features)
  - [Typical use cases](#typical-use-cases)
- [Supply chain trust](#supply-chain-trust)
- [Production checklist](#production-checklist)
- [Backups](#backups)
- [Restoring a database backup](#restoring-a-database-backup)
- [Testing](#testing)
- [Security Notes](#security-notes)
- [Container hardening](#container-hardening)
- [Standardization reference](#standardization-reference)
- [About the maintainer](#about-the-maintainer)

This repository deploys Keycloak behind Traefik with automatic Let's Encrypt TLS, backed by PostgreSQL, with a scheduled backup container and a companion restore script. One `docker compose up` away from a production-shaped identity-and-access-management service at `https://your-domain`.

📙 Full narrative installation guide on the blog: [heyvaldemar.com/install-keycloak-using-docker-compose/](https://www.heyvaldemar.com/install-keycloak-using-docker-compose/).

## Why this stack?

| Need | This stack | Manual install | Keycloak Helm (K8s) | Other compose…
