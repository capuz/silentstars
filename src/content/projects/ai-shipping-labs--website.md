---
repo: "AI-Shipping-Labs/website"
name: "website"
description: "AI Shipping Labs website"
readmeQualityOk: true
url: "https://github.com/AI-Shipping-Labs/website"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 10
forks: 6
openIssues: 108
closedIssues: 1408
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-18T18:32:53Z"
lastCommitAt: "2026-09-09T08:18:25Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 98
undervaluedScore: 60
maintainers: ["alexeygrigorev", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d3c8ead0cb27cebe43b44d94ff0ee6efacdf630fcc9a4422a4db86c56e80c48/AI-Shipping-Labs/website"
---

# AI Shipping Labs

Django-based community platform for [aishippinglabs.com](https://aishippinglabs.com).

## Prerequisites

- Python 3.12+
- [uv](https://docs.astral.sh/uv/) for package management
- Node.js 24 and npm (the pinned Tailwind 3.4.17 build is lockfile-driven)

## Setup

```bash
make setup
```

This runs `scripts/setup.sh` which:
1. Creates `.env` from `.env.example` (edit it with your credentials)
2. Installs Python dependencies (`uv sync`)
3. Clones `AI-Shipping-Labs/content` into `_content-repo/`
4. Runs database migrations
5. Seeds the database with test users, tiers, and sample data
6. Syncs content from the local clone

## Running

```bash
make run
```

Visit http://localhost:8000

`make run` and `make run2` compile the minified Tailwind bundle once before
starting Django. For active template/Python/JavaScript styling work, use
`make dev`: its `Procfile.dev` runs `npm run css:watch` beside Django and the
worker. The generated `static/css/tailwind.css` is gitignored and must never be
edited or committed. Use `make css-build` for an explicit production build.

## Seed Data and Test Users

Load sample data for local development:

```bash
uv run python manage.py…
