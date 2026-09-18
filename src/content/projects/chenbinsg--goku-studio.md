---
repo: "chenbinsg/goku-studio"
name: "goku-studio"
description: "Goku Studio — AI application construction API (agents, workflows, tools, MCP, knowledge)"
readmeQualityOk: true
url: "https://github.com/chenbinsg/goku-studio"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [58, 41]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2026-06-06T10:56:41Z"
lastCommitAt: "2026-09-18T14:01:27Z"
lastReleaseAt: "2026-06-18T02:11:37Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 52
maintainers: ["chenbinsg", "Jora0326", "zhangzleee"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ff48d3c1344512ec13fbc233a9de057648ace70ceea8de176fa4b395e33a119/chenbinsg/goku-studio"
---

# Goku Studio — AI Application Construction API

> Owner: **智能体应用チーム**  
> Status: Stub (being extracted from monorepo)

This repo owns the **Studio domain**: building and managing AI agents, workflows,
tools, MCP server connections, knowledge bases, and memory profiles.

It does **not** own:
- Task execution / ReAct loop → **goku-core**
- Users / tenants / auth → **goku-core**
- Chat / conversations → **goku-core**
- Channel integrations → **goku-core**

## Architecture

```
goku-studio/
  backend/
    app/
      main.py               ← FastAPI app, mounts /api/studio/v1
      models_studio.py      ← Studio ORM (symlink or copy from monorepo during transition)
      routers/studio/       ← 18 router files
      schemas/              ← Studio-specific Pydantic schemas
    alembic/studio/         ← Studio migration chain (starts from baseline 0086)
    requirements.txt
    Makefile

packages/goku-shared/       ← Shared dep: db, config, auth, schemas (separate repo)
```

## Dependencies

- `goku-shared` — database, config, JWT auth primitives
- Same MySQL database as goku-core (shared DB strategy, Phase B)
- Studio tables: `agent_definitions`, `workflows`, `tools`, `mcp_servers`,…
