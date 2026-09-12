---
repo: "wlphi/ess-docker-compose"
name: "ess-docker-compose"
description: "Element Server Suite on Docker Compose"
readmeQualityOk: true
url: "https://github.com/wlphi/ess-docker-compose"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 140
forks: 18
openIssues: 1
closedIssues: 30
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-10-30T20:49:28Z"
lastCommitAt: "2026-09-12T08:04:45Z"
lastReleaseAt: "2026-04-22T13:26:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 81
undervaluedScore: 21
maintainers: ["wlphi"]
openGraphImageUrl: "https://opengraph.githubassets.com/2dca88982b9e04eaef7705ac1899142541dd4d0eed354cc29d2c2207d447a5d8/wlphi/ess-docker-compose"
---

# Matrix Server - Docker Compose Setup

A self-hosted Matrix server stack with modern OIDC authentication, web clients, optional video calling, messaging bridges, and observability.

> **Run NixOS?** See [**nixmatrix**](https://github.com/wlphi/nixmatrix) — the same
> stack as a single declarative NixOS flake (deploy to a fresh VPS with
> `nixos-anywhere`). This Docker Compose project is the right choice for running on
> an existing Docker host; nixmatrix is the right choice if you prefer NixOS.

## What's Included

### Core (always on)

- [Synapse](https://github.com/element-hq/synapse) — Matrix homeserver
- [Matrix Authentication Service (MAS)](https://github.com/element-hq/matrix-authentication-service) — OIDC-based authentication (replaces legacy password auth)
- [Element Web](https://github.com/element-hq/element-web) — Web client
- [Ketesa](https://github.com/etkecc/ketesa) — Admin dashboard (user/room management via Synapse Admin API)
- [synapse_auto_compressor](https://github.com/matrix-org/rust-synapse-compress-state) — Continuous state-group compression to reduce DB bloat
- [PostgreSQL 16](https://www.postgresql.org/) — Database
- [Caddy](https://caddyserver.com/) —…
