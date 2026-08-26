---
repo: "fonoster/qcobro"
name: "qcobro"
description: "Intelligent Collections with Voz AI."
readmeQualityOk: true
url: "https://github.com/fonoster/qcobro"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
stars: 6
forks: 0
openIssues: 13
closedIssues: 31
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-01T14:45:10Z"
lastCommitAt: "2026-08-26T04:16:56Z"
status: "thriving"
tags: ["under_pressure"]
healthScore: 93
undervaluedScore: 49
maintainers: ["psanders", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e48d267ea3cbc9d928e84e31679baa1fd0f3a90db9fb579f7d204091cadf1a5/fonoster/qcobro"
---

# QCobro

QCobro (by Fonoster) is a multilingual AI-voice debt-collections platform — a
React operator console backed by a tRPC API over PostgreSQL, with voice/SMS/email
outreach.

## Local development

**Prerequisites:** Node 22 and Docker.

```bash
# 1. Backing services (Postgres, Identity, Mailpit) on localhost
docker compose -f compose.dev.yaml up -d

# 2. Config — point at the dev DB. The engine stays OFF by default (never auto-dials)
mkdir -p config
cp config/qcobro.example.json config/qcobro.json
#   set database.url to:
#   postgresql://qcobro:qcobro@localhost:5432/qcobro?schema=public

# 3. Database — apply migrations (and an optional demo seed)
npm run db:migrate --workspace=mods/apiserver
npm run db:seed    --workspace=mods/apiserver   # optional
# Starting over? Drop all app data + re-apply migrations, then re-seed (dev only):
#   npm run db:reset --workspace=mods/apiserver && npm run db:seed --workspace=mods/apiserver

# 4. Run the API + console
npm run start:dev      # apiserver on :3000
npm run start:webapp   # console on :5173
```

### Running the campaigns engine

The engine is the autonomous loop that originates outreach. It is **off by default**…
