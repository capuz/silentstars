---
repo: "InumanSoul/kotauth"
name: "kotauth"
description: "Identity infrastructure for modern applications."
url: "https://github.com/InumanSoul/kotauth"
homepage: "https://kotauth.com/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [93]
topics: ["auth", "authentication", "authentication-backend"]
stars: 50
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-03-10T12:37:11Z"
lastCommitAt: "2026-06-24T23:39:07Z"
lastReleaseAt: "2026-03-26T11:03:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 34
maintainers: ["InumanSoul", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/96b12ae355f6a74cdcfe0694ff04388216429e04842ceceb3a0de3561621dcea/InumanSoul/kotauth"
discussionCount: 1
---

# Kotauth

> Identity infrastructure for modern applications. Self-hosted, container-native, developer-first.

Kotauth is an open-source authentication and identity platform that bridges the gap between enterprise IAM (Keycloak, Okta) and developer-friendly SaaS (Clerk, Auth0). Full OAuth2/OIDC compliance. Multi-tenant. Runs in Docker. Up in minutes.

**[Live demo](https://demo.kotauth.com)** · **[Documentation](https://kotauth.com)** · **[Roadmap](docs/ROADMAP.md)**

---

## Try it

You need Docker and Docker Compose. Nothing else.

```bash
curl -O https://raw.githubusercontent.com/inumansoul/kotauth/main/docker-compose.yml
docker compose up -d
```

Open **http://localhost:8080/admin**. Demo data is pre-loaded with two workspaces, users, roles, and applications; credentials are shown in the banner.

For configuration knobs — set your own `KAUTH_SECRET_KEY`, point at an external database, enable Redis — see the [quickstart guide](docs/deploy/quickstart.md).

---

## Features

- **OAuth2 / OIDC provider** — Authorization Code + PKCE, Client Credentials, refresh token rotation, token introspection & revocation, RFC 8707 resource indicators
- **Multi-tenancy** — Isolated workspaces,…
