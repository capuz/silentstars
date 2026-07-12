---
repo: "shaman007/home-k3s"
name: "home-k3s"
description: "Everyting Kubernetes I need to run my own mail, file storage and some more things"
readmeQualityOk: true
url: "https://github.com/shaman007/home-k3s"
language: "Python"
languages: ["Python"]
languagePcts: [79]
stars: 25
forks: 1
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2023-11-10T17:39:47Z"
lastCommitAt: "2026-07-12T06:18:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 55
maintainers: ["shaman007"]
openGraphImageUrl: "https://opengraph.githubassets.com/51b190bc7157ddbdf3f5f795a2e62f374f1b371450fc9993177951c167262309/shaman007/home-k3s"
---

# home-k3s

Here is my pet-project of home/small-office cluster that can handle everything
you purchase as a service from the Google or Microsoft, but with significantly
more pain and fun. On the other hand, this would be enough for 20-30 employees
at 1000 USD setup and easy to scale. K3S is used because it's much simplier to
install and I don't really need all that cloud provider's drivers since the
goal was to be self-sustainable.
`home-k3s` is a homelab/small-office cluster built on k3s and managed mostly
through Argo CD manifests in this repository. The cluster runs user-facing
apps, shared platform services, observability, and storage.

Older photo:

## Current stack

Core platform:

- k3s
- Traefik
- Argo CD
- External Secrets
- Vault
- Longhorn

Data and messaging:

- PostgreSQL
- MySQL
- Redis (operator + app-specific instances)
- SeaweedFS (S3-compatible object storage)
- Elasticsearch (ECK operator + stack)

User-facing apps:

- Mail (Postfix + Dovecot + Rspamd)
- Bitwarden
- Nextcloud + Collabora
- Synapse (Matrix messaging server)
- Mastodon
- WordPress
- Plex
- Minecraft
- Keycloak
- Dawarich
- Karakeep
- Your Spotify
- Year calendar
- ConvertX
- Stirling PDF
- UniFi…
