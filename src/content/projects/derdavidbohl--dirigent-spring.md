---
repo: "DerDavidBohl/dirigent-spring"
name: "dirigent-spring"
description: "Git-powered Docker Compose deployment orchestration made simple."
readmeQualityOk: true
url: "https://github.com/DerDavidBohl/dirigent-spring"
language: "Java"
languages: ["Java", "TypeScript"]
languagePcts: [67, 31]
topics: ["docker", "docker-compose", "gitops", "self-hosted"]
stars: 55
forks: 0
openIssues: 4
closedIssues: 12
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-01-08T06:11:11Z"
lastCommitAt: "2026-10-23T12:04:04Z"
lastReleaseAt: "2025-11-12T18:03:51Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 49
maintainers: ["DerDavidBohl", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/67968fbcd37aa584680351a72912cb9bccf26a89f4770790dc0f1a3e3ea6ffff/DerDavidBohl/dirigent-spring"
fundingLinks: ["KO_FI:https://ko-fi.com/davidbohl", "BUY_ME_A_COFFEE:https://buymeacoffee.com/davidbohl"]
---

# <img src="https://raw.githubusercontent.com/DerDavidBohl/dirigent-spring/latest/assets/icon-background.svg" width="80px"></img> Dirigent
Tool to manage your docker compose deployments via git.

See the [changelog](https://github.com/DerDavidBohl/dirigent-spring/blob/HEAD/CHANGELOG.md) for release notes and the [2.x to 3.0 upgrade guide](https://github.com/DerDavidBohl/dirigent-spring/blob/HEAD/docs/upgrading-to-3.0.md) when upgrading from 2.x. Installations still on 1.x should first follow the [1.x to 2.0 upgrade guide](https://github.com/DerDavidBohl/dirigent-spring/blob/HEAD/docs/upgrading-to-2.0.md).

## Table of Contents

- [Screenshots](#screenshots)
- [Why Dirigent?](#why-dirigent)
- [Setup](#setup)
  - [docker-compose](#docker-compose)
  - [docker CLI](#docker-cli)
  - [Environment Variables](#environment-variables)
  - [Authentication](#authentication)
  - [deployments.yml](#deploymentsyml)
  - [Volumes](#volumes)
  - [Step by Step (Gitea)](#step-by-step-gitea)
- [Tweaks](#tweaks)
- [API](#api)
  - [Gitea Webhook](#gitea-webhook)
  - [Deployments](#deployments)
    - [Start](#start)
      - [All Deployments](#all-deployments)
      - [Deployment by…
