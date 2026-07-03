---
repo: "AI-Shipping-Labs/website"
name: "website"
description: "AI Shipping Labs website"
url: "https://github.com/AI-Shipping-Labs/website"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 7
forks: 5
openIssues: 30
closedIssues: 1006
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-18T18:32:53Z"
lastCommitAt: "2026-07-03T12:40:14Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 99
undervaluedScore: 64
maintainers: ["alexeygrigorev", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/00a8c0dd6a57ec4c662c08ca580adde34ed90bd307ce8da7297e92d63777967e/AI-Shipping-Labs/website"
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
