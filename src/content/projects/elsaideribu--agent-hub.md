---
repo: "ElsaiDeribu/agent-hub"
name: "agent-hub"
description: "Open-source registry of reusable TypeScript AI agents, featuring interactive sandbox previews and one-command integration into any project."
readmeQualityOk: true
url: "https://github.com/ElsaiDeribu/agent-hub"
homepage: "https://agent-hub.io"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [72, 20]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-14T03:57:20Z"
lastCommitAt: "2026-08-21T04:12:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 49
maintainers: ["ElsaiDeribu"]
openGraphImageUrl: "https://opengraph.githubassets.com/9057abcf63019ba0faf37bf31dc3b5c818714335f2c79d847a6a07b9c01f9878/ElsaiDeribu/agent-hub"
---

<h1 align="center">
</h1>

Open-source registry of reusable TypeScript AI agents, with a docs UI and a
sandbox preview backend.

## Layout

| Path | Role |
|------|------|
| `registry.json` | Canonical catalog (CLI + docs + API) |
| `registry/<agent>/<framework>/` | Single source of truth: install files, code viewer, and sandbox package (`metadata.json`). Fetched on demand from GitHub. |
| `api/` | FastAPI + microsandbox session runner |
| `web/` | Browse / preview UI |
| `cli/` | `agent-hub-harness` CLI |

## Quick start (local)

### 1. Backend (sandbox)

```bash
cd api
uv sync
uv run uvicorn main:app --host 0.0.0.0 --port 8000
```

Requires hardware virtualization (KVM on Linux, or WHP on Windows for local
runs). Docker+KVM only works on Linux hosts that expose `/dev/kvm`.

```bash
# From repo root — local stack (API + Postgres)
docker compose -f api/docker-compose.local.yml up --build
```

### 2. Docs UI

```bash
cd web
cp .env.example .env   # VITE_HOST_API=http://localhost:8000
npm install
npm run dev
```

Open the docs, pick an agent, and use **Preview** — it creates a sandbox
session and streams SSE tokens. Previews are deterministic mocks; no model
API keys are collected…
