---
repo: "etalab-ia/document-ia"
name: "document-ia"
description: "Automatiser le traitement des pièces justificatives pour accélérer les démarches administratives et éliminer les aller-retours entre les usagers et les instructeurs"
readmeQualityOk: true
url: "https://github.com/etalab-ia/document-ia"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 15
forks: 5
openIssues: 34
closedIssues: 6
watchers: 0
contributors: 7
recentReleases: 1
createdAt: "2025-08-22T07:11:21Z"
lastCommitAt: "2026-11-04T13:04:47Z"
lastReleaseAt: "2026-08-26T07:40:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 72
undervaluedScore: 63
maintainers: ["nicolasSagon", "odulcy", "kaaloo"]
openGraphImageUrl: "https://opengraph.githubassets.com/abf13b5c5417ececf2031d89ef24c463ec75bec09ee8d5eaf4a9db213026d15c/etalab-ia/document-ia"
---

# Document IA

Document IA is a backend stack for running document-processing workflows: files are uploaded through a FastAPI API, stored in S3-compatible storage, queued through Redis Streams, processed by an asynchronous worker, and tracked in a PostgreSQL Event Store.

The repository is organized as a Python monorepo with separate packages for the API, worker, shared infrastructure code, document schemas, and evaluation tools.

## Quickstart

Prerequisites:

- Python 3.13
- UV 0.11.x
- Docker Compose

Create your local environment file:

```bash
cp env.example .env
```

Start the local infrastructure services:

```bash
docker compose up -d
```

This starts PostgreSQL, Redis, MinIO, MockServer, and the MinIO bucket initialization service.

Run the API in one terminal:

```bash
cd document-ia-api
uv sync
uv run python src/document_ia_api/main.py
```

Run the worker in another terminal:

```bash
cd document-ia-worker
uv sync
uv run python src/document_ia_worker/main.py
```

Optional: run the evaluation app in a third terminal:

```bash
cd document-ia-evals
uv sync
uv run streamlit run src/document_ia_evals/app.py
```

Useful local URLs:

- API Swagger UI:…
