---
repo: "manti-by/demetra"
name: "demetra"
description: "Software factory (runtime over harness)"
readmeQualityOk: true
url: "https://github.com/manti-by/demetra"
language: "Python"
languages: ["Python"]
languagePcts: [82]
topics: ["coderabbit", "opencode", "langchain"]
stars: 28
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-14T08:15:19Z"
lastCommitAt: "2026-11-05T11:24:08Z"
lastReleaseAt: "2026-06-02T19:30:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 42
maintainers: ["manti-by", "demetra-ai"]
openGraphImageUrl: "https://opengraph.githubassets.com/48836d8d12e2278a6f3f170977e2f3100efcd95e1ee11c3eaf7d0e426b42fc13/manti-by/demetra"
---

# Demetra

An autonomous coding platform that coordinates multiple AI agents to automate software development. Integrates Linear (issues), OpenCode (plan/build/resolve/review), with automatic linting (Ruff) and testing (pytest).

## Features

- **Workflow Orchestration**: Coordinated development from task to a pull request.
- **OpenCode Integration**: AI-powered planning, building and review.
- **Build Loop**: Automatically resolve review agents findings, lint and test errors.
- **Linear Integration**: Task retrieval from Linear issue tracker.
- **Git Worktree Management**: Isolated feature development.
- **PostgreSQL**: Persistent storage for sessions and state.

## Workflow

## Quick Start

```bash
# Install dependencies
uv sync --all-extras --dev

# Run migrations, frontend and backend apps
uv run alembic upgrade head
uv run fastapi dev demetra/app.py --host 0.0.0.0 --port 8081
cd react && bun run dev --host

# Add shared env and project via frontend app
# And run the project (auto mode enabled by default)
uv run main.py --project-name <project_name>
```

## Configuration

Set environment variables via `.env` or shell, check…
