---
repo: "archetype-pal/backend"
name: "backend"
description: "This is a new revamped version of the project  https://github.com/kcl-ddh/digipal"
readmeQualityOk: true
url: "https://github.com/archetype-pal/backend"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 5
forks: 2
openIssues: 14
closedIssues: 74
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2024-07-31T21:39:39Z"
lastCommitAt: "2026-10-31T15:58:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 80
maintainers: ["lanterno", "saad-mhmd"]
openGraphImageUrl: "https://opengraph.githubassets.com/501a1a8508022566069142a6fd2e3b72dc1d7476fa97eb28b0303fdcf76e61b9/archetype-pal/backend"
---

# Archetype

Backend APIs and services for the Archetype stack — revamped successor to [DigiPal](https://github.com/kcl-ddh/digipal).

See [CONTRIBUTING.md](https://github.com/archetype-pal/backend/blob/HEAD/CONTRIBUTING.md) before contributing: workflow, the checks CI runs, code guardrails and releases. Coding agents also read [AGENTS.md](https://github.com/archetype-pal/backend/blob/HEAD/AGENTS.md).

## Stack

- **Database:** PostgreSQL 18
- **Search:** Meilisearch
- **IIIF:** [SIPI](https://github.com/dasch-swiss/sipi)
- **API:** Django 6.1 / Django REST Framework, Celery (Python 3.15, uv, Docker Compose)

API docs: `/api/v1/docs/` (Swagger UI), schema at `/api/v1/schema/`.

---

## Quick start

The backend runs in Docker Compose. Use the [justfile](https://github.com/archetype-pal/backend/blob/HEAD/justfile) recipes; `just` lists them all.

1. Copy env: `cp config/test.env config/.env`
2. Start services: `just up` (or `just up-bg` for background)
3. First run: `just migrate`, then `just sync-all-search-indexes` to create and fill the search indexes

The API is then on `http://localhost:8000`. Calling `docker compose` directly needs `--env-file config/.env`; the recipes pass it…
