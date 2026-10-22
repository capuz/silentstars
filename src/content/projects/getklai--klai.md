---
repo: "GetKlai/klai"
name: "klai"
description: "Klai open-source AI platform"
readmeQualityOk: true
url: "https://github.com/GetKlai/klai"
language: "Python"
languages: ["Python"]
languagePcts: [79]
stars: 11
forks: 2
openIssues: 16
closedIssues: 111
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-03-22T10:25:30Z"
lastCommitAt: "2026-10-22T08:51:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 54
maintainers: ["klai-renovate[bot]", "mvletter"]
openGraphImageUrl: "https://opengraph.githubassets.com/802d0fd850813f6560930c5b881403c7329f3e45047376fcf0ea6e386787c9f9/GetKlai/klai"
---

# Klai

Open-source AI platform — self-hostable, multi-tenant, production-ready.

Klai bundles the tools your team needs to work with AI: a chat interface, a knowledge base, transcription, and document research — all in one platform you control.

## What's included

| Package | Description |
|---------|-------------|
| [`klai-portal/`](https://github.com/GetKlai/klai/blob/HEAD/klai-portal/) | Web portal — tenant management, knowledge base, transcription, research |
| [`docs/`](https://github.com/GetKlai/klai/blob/HEAD/docs/) | Documentation site |
| [`deploy/`](https://github.com/GetKlai/klai/blob/HEAD/deploy/) | Self-hosting stack — Docker Compose, Caddy, Zitadel, LiteLLM, LibreChat |

## Self-hosting

See [deploy/README.md](https://github.com/GetKlai/klai/blob/HEAD/deploy/README.md) for the full self-hosting guide.

**Quick start:**
```bash
git clone https://github.com/GetKlai/klai.git
cd klai/deploy
cp config.example.env config.env
# Fill in your domain, server IP, and credentials
bash setup.sh
```

## Tech stack

- **Portal backend:** Python 3.12, FastAPI, SQLAlchemy, PostgreSQL
- **Portal frontend:** React 19, Vite, TanStack Router, Mantine, Tailwind CSS
- **Auth:** Zitadel…
