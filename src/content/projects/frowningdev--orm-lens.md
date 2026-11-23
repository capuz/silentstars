---
repo: "FROWNINGdev/orm-lens"
name: "orm-lens"
description: "ER diagrams, N+1 detection, schema drift & migration-risk linting for Django and SQLAlchemy (Alembic) — VS Code, CLI and MCP server. Static analysis: no database, no app boot. Free & MIT. Formerly django-orm-lens."
readmeQualityOk: true
url: "https://github.com/FROWNINGdev/orm-lens"
homepage: "https://frowningdev.github.io/orm-lens/"
language: "Python"
languages: ["Python"]
languagePcts: [72]
topics: ["developer-tools", "django", "er-diagram", "orm", "python", "vscode-extension", "schema-visualization", "ai-agents", "mcp", "mcp-server"]
stars: 114
forks: 54
openIssues: 8
closedIssues: 94
watchers: 2
contributors: 49
recentReleases: 0
createdAt: "2026-07-12T19:37:45Z"
lastCommitAt: "2026-11-23T12:22:39Z"
lastReleaseAt: "2026-07-12T20:56:53Z"
status: "thriving"
tags: ["needs_contributors", "funded"]
healthScore: 97
undervaluedScore: 37
maintainers: ["FROWNINGdev", "bfs2021", "flipcyde101"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1298571736/1bb39dc9-e995-490a-b66d-5662332b0680"
fundingLinks: ["GITHUB:https://github.com/FROWNINGdev"]
discussionCount: 9
---

**English** · [Русский](https://github.com/FROWNINGdev/orm-lens/blob/main/docs/i18n/README.ru.md) · [Español](https://github.com/FROWNINGdev/orm-lens/blob/main/docs/i18n/README.es.md) · [中文](https://github.com/FROWNINGdev/orm-lens/blob/main/docs/i18n/README.zh.md)

# ORM Lens

### ER diagrams, N+1 detection and migration-risk checks for Django and SQLAlchemy — without booting either.

Your entire model graph — live in your editor sidebar, gating your CI, and answering your AI agent over MCP. All from static parsing: no database, no `runserver`, no working venv. Django models and migrations, SQLAlchemy models and Alembic revisions.

**Replaces:** `graph_models` + `django-schema-graph` + hand-drawn ER diagrams + grep archaeology.

---

## ⚡ 10 seconds to first insight

```bash
uvx orm-lens scan -f table   # every app and model at a glance
uvx orm-lens nplusone        # N+1 loops, with the select_related / selectinload to add
uvx orm-lens migration-risk  # Django migrations and Alembic revisions that lock tables or fail
```
