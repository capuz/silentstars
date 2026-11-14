---
repo: "FROWNINGdev/orm-lens"
name: "orm-lens"
description: "ER diagrams, N+1 detection, schema drift & migration-risk linting for Django and SQLAlchemy (Alembic) — VS Code, CLI and MCP server. Static analysis: no database, no app boot. Free & MIT. Formerly django-orm-lens."
readmeQualityOk: true
url: "https://github.com/FROWNINGdev/orm-lens"
homepage: "https://frowningdev.github.io/orm-lens/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [68, 21]
topics: ["developer-tools", "django", "er-diagram", "orm", "python", "vscode-extension", "schema-visualization", "ai-agents", "mcp", "mcp-server"]
stars: 110
forks: 37
openIssues: 12
closedIssues: 63
watchers: 2
contributors: 33
recentReleases: 0
createdAt: "2026-07-12T19:37:45Z"
lastCommitAt: "2026-11-14T22:01:28Z"
lastReleaseAt: "2026-07-12T20:56:53Z"
status: "thriving"
tags: ["needs_contributors", "funded"]
healthScore: 95
undervaluedScore: 35
maintainers: ["FROWNINGdev", "dependabot[bot]", "sarankumar1325"]
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

Cold clone, broken venv, no settings module — you still see every app and model of the project, then the N+1 loops and risky migrations in it, right in your…
