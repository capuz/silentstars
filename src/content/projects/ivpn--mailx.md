---
repo: "ivpn/mailx"
name: "mailx"
description: "Audited, Open-Source Email Aliasing Service"
readmeQualityOk: true
url: "https://github.com/ivpn/mailx"
homepage: "https://mailx.net"
language: "Go"
languages: ["Go", "Vue"]
languagePcts: [58, 35]
stars: 73
forks: 4
openIssues: 12
closedIssues: 48
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2025-07-07T07:10:07Z"
lastCommitAt: "2026-09-29T10:03:48Z"
lastReleaseAt: "2026-02-11T15:12:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 51
maintainers: ["jurajhilje", "dependabot[bot]", "lamtrinhdev"]
openGraphImageUrl: "https://opengraph.githubassets.com/e51a627c26955dd1a817c159f3f6e8d11b0c7241956515b2e839e44427b4375e/ivpn/mailx"
---

# Email Service

## API

- Go
- Fiber (API, middleware)
- Gorm (ORM)
- MariaDB (Database)
- Redis (Cache)
- Docker (Containerization)
- Swagger (API Documentation)

## App

- TypeScript
- Vue.js
- Vite (Bundler)
- Tailwind (Styling)
- Docker (Containerization)

## Mailserver

- [Docker Mailserver](https://github.com/docker-mailserver/docker-mailserver)  

## Browser Extension

- [WXT](https://wxt.dev)  

## Installation

### Prerequisites

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

> [!IMPORTANT]
> Docker Mailserver officially supports Linux. If you want to run it on macOS, please read [this](https://github.com/docker-mailserver/docker-mailserver/issues/3648).

### Config
```bash
cp api/.env.sample api/.env
cp app/.env.sample app/.env
cp mailserver/.env.sample mailserver/.env
cd mailserver
mkdir -p docker-data/dms/config/rspamd/override.d
cp config/postfix-main.cf.sample docker-data/dms/config/postfix-main.cf
cp config/postfix-relay-domains.cf.sample docker-data/dms/config/postfix-relay-domains.cf
cp config/postfix-aliases.cf.sample docker-data/dms/config/postfix-aliases.cf…
