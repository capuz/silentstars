---
repo: "soma-smart/le-coffre"
name: "le-coffre"
description: "Le Coffre is an open source collaborative password manager."
readmeQualityOk: true
url: "https://github.com/soma-smart/le-coffre"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [61, 28]
topics: ["password", "python", "security", "vault"]
stars: 13
forks: 1
openIssues: 4
closedIssues: 16
watchers: 3
contributors: 13
recentReleases: 0
createdAt: "2025-04-12T21:38:40Z"
lastCommitAt: "2026-09-22T08:45:12Z"
lastReleaseAt: "2026-05-20T09:24:03Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 65
maintainers: ["rozzong", "vianneybacoup", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b56c4ae438108d693f9197fe89ab23b9f01354a2b8303df8439315c9bddd94f/soma-smart/le-coffre"
---

# Le Coffre

</p>

Le Coffre is an open-source password manager that allows you to securely store and manage passwords in a collaboration-friendly environment.

> 🇫🇷 Proudly supported by [SOMA 🦊](https://www.soma-smart.com)

## Application

### Setup and Encrypt Le Coffre in seconds

### Creation, Update, Sharing of Passwords ultra secure

### Group system easy to use

### SSO

### Password audit

### Admin view

## Simple to deploy

### Docker images
> ghcr.io/soma-smart/le-coffre-backend:tag_version (or latest)<br>
> ghcr.io/soma-smart/le-coffre-frontend:tag_version (or latest)

### Docker compose
```bash
# 1. Create your env file
cp .env.example .env

# 2. Generate a secret key
echo "JWT_SECRET_KEY=$(openssl rand -base64 32)" >> .env
```

**Option A — external database** (recommended): set `DATABASE_URL` in `.env`, then:
```bash
docker compose up -d
```

**Option B — bundled PostgreSQL**: set `POSTGRES_PASSWORD` in `.env`, then:
```bash
docker compose --profile postgres up -d
```

Visit <http://localhost> and you're done

### In local

[See here](#Development)

# Tech
## Frontend ([README.md](https://github.com/soma-smart/le-coffre/blob/HEAD/frontend/README.md))

- Vue 3 +…
