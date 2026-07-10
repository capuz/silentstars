---
repo: "AI-Shipping-Labs/website"
name: "website"
description: "AI Shipping Labs website"
readmeQualityOk: true
url: "https://github.com/AI-Shipping-Labs/website"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 8
forks: 5
openIssues: 68
closedIssues: 1056
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-18T18:32:53Z"
lastCommitAt: "2026-07-10T06:59:14Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 99
undervaluedScore: 61
maintainers: ["alexeygrigorev"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d7fef103c4b7d1b68ab48f4ecf1f25c72ce98a1daccf19516563f03be702e84/AI-Shipping-Labs/website"
---

# AI Shipping Labs

Django-based community platform for [aishippinglabs.com](https://aishippinglabs.com).

## Prerequisites

- Python 3.12+
- [uv](https://docs.astral.sh/uv/) for package management

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

## Seed Data and Test Users

Load sample data for local development:

```bash
uv run python manage.py seed_data
```

This creates tiers, users, articles, courses, events, recordings, projects, polls, notifications, and newsletter subscribers. The command is idempotent -- running it twice won't create duplicates. Use `--flush` to wipe and recreate everything.

### Test Users

All test users have the password `testpass123`:

| Email | Tier | Role |
|-------|------|------|
| `admin@aishippinglabs.com` | Premium | Superuser/staff (password: `admin123`) |
|…
