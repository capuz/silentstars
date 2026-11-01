---
repo: "heyvaldemar/affine-traefik-letsencrypt-docker-compose"
name: "affine-traefik-letsencrypt-docker-compose"
description: "Affine with Let's Encrypt Using Docker Compose"
readmeQualityOk: true
url: "https://github.com/heyvaldemar/affine-traefik-letsencrypt-docker-compose"
homepage: "https://www.heyvaldemar.com"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["affine", "devops", "docker", "docker-compose", "docker-hub", "docker-image", "docker-registry", "dockerfile", "letsencrypt", "letsencrypt-certificates"]
stars: 21
forks: 5
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2024-09-29T16:07:45Z"
lastCommitAt: "2026-11-01T22:58:33Z"
lastReleaseAt: "2026-09-10T23:19:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 77
maintainers: ["heyvaldemar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce66d114fc1353f2f0d61060607ccc59c8320cb3cc17af66272e9900a3ea9091/heyvaldemar/affine-traefik-letsencrypt-docker-compose"
fundingLinks: ["GITHUB:https://github.com/heyvaldemar", "PATREON:https://patreon.com/heyvaldemar", "KO_FI:https://ko-fi.com/heyvaldemar", "CUSTOM:paypal.com/paypalme/heyValdemarCOM", "CUSTOM:buymeacoffee.com/heyValdemar", "CUSTOM:ko-fi.com/heyValdemar"]
---

# AFFiNE + Traefik + Let's Encrypt on Docker Compose

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

This repository deploys AFFiNE (the open-source knowledge base: docs + whiteboards + databases) behind Traefik with automatic Let's Encrypt TLS, backed by PostgreSQL and Redis, with a migration job, scheduled backups (database + application data), and companion restore scripts. One `docker compose up` away from a self-hosted workspace at `https://your-domain`.

📙 Full narrative installation guide on the blog: [heyvaldemar.com/install-affine-using-docker-compose/](https://www.heyvaldemar.com/install-affine-using-docker-compose/).

## Why this stack?

| Need | This stack | Manual install | AFFiNE's own compose | Other examples |
|------|-----------|----------------|----------------------|----------------|
| Ready to deploy in <10 min | ✅ | ❌ | ✅…
