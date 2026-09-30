---
repo: "kdbsoft/dockercart"
name: "dockercart"
description: "A free shopping cart system. DockerCart is an open source PHP-based online e-commerce platform."
readmeQualityOk: true
url: "https://github.com/kdbsoft/dockercart"
language: "PHP"
languages: ["PHP", "JavaScript", "Twig"]
languagePcts: [43, 29, 20]
stars: 5
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-03-06T13:08:55Z"
lastCommitAt: "2026-09-30T09:57:27Z"
lastReleaseAt: "2026-04-26T13:53:38Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 61
maintainers: ["kdbsoft", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/e55ad90c164791739b0eab9cc080d622902f9b47673f8c3132177bb1cc01a40e/kdbsoft/dockercart"
---

# DockerCart

DockerCart is a full-stack e-commerce platform built on a Docker infrastructure. A single command brings up the complete stack — Nginx reverse proxy, PHP 8.5 application server, MariaDB database, Redis cache, Manticore Search full-text engine, and a scheduler daemon — pre-configured and ready to serve production traffic.

Run `make start` and a production-grade store is live.

Documentation and resources are available at [dockercart.net](https://dockercart.net), including the [capabilities list](https://dockercart.net/capabilities) and a [live demo](https://demo.dockercart.net).

---

## Technology

| Layer | Technology |
|---|---|
| Application | PHP 8.5 + Apache 2.4 |
| Reverse proxy | Nginx (alpine) |
| Database | MariaDB 11 |
| Cache | Redis 7 |
| Sessions | Persistent (file, `storage/session`) |
| Full-text search | Manticore Search 6 |
| Reverse proxy (alternative) | Traefik v3 (optional, for existing infrastructure) |
| SSL | Let's Encrypt / self-signed (auto-renewal via certbot) |
| Frontend | ES6+ · Tailwind CSS 3 · Lucide |

---

## Quick Start

```bash
git clone https://github.com/kdbsoft/dockercart.git
cd dockercart
make start
```

On first run, `make…
