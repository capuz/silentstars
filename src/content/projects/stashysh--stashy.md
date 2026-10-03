---
repo: "stashysh/stashy"
name: "stashy"
description: "Self-hosted file storage"
readmeQualityOk: true
url: "https://github.com/stashysh/stashy"
language: "Go"
languages: ["Go"]
languagePcts: [86]
stars: 15
forks: 0
openIssues: 5
closedIssues: 10
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-22T12:54:33Z"
lastCommitAt: "2026-10-03T09:22:06Z"
lastReleaseAt: "2026-04-08T14:00:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 17
maintainers: ["vh"]
openGraphImageUrl: "https://opengraph.githubassets.com/e273c27c33aac4bda9f18ae383ad3db2ba896ed989143d753d0e0a63398bfcf3/stashysh/stashy"
---

# Stashy

Self-hosted file storage service with multi-protocol API.

## Quick start

```bash
export SESSION_SECRET="your-secret-here"
export GOOGLE_CLIENT_ID="your-client-id"
export GOOGLE_CLIENT_SECRET="your-client-secret"

just run
# or: go run ./cmd/stashy serve --migrate
```

Visit `http://localhost:8080` to sign in and generate API keys.
Uses SQLite by default, with PostgreSQL available when you need a separate database.

## Build

```bash
just build          # build binary
just generate       # regenerate proto code
just tidy           # go mod tidy
just clean          # remove build artifacts
```

## Docker

```bash
cp .env.example .env  # fill in your secrets
docker compose up
```

## Environment variables

| Variable | Description | Default |
|---|---|---|
| `PORT` | Server listen port | `8080` |
| `HOSTNAME` | Public base URL | `http://localhost:$PORT` |
| `DATABASE_URL` | Database connection string (see below) | `file:stashy.db` |
| `STORAGE_BACKEND` | Storage backend: `memory`, `local`, `gcs`, or `s3` | `memory` |
| `LOCAL_STORAGE_DIR` | Directory for local file storage | `./storage` |
| `GCS_BUCKET` | GCS bucket name (required when `STORAGE_BACKEND=gcs`) | — |
|…
