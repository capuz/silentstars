---
repo: "chriskelly/LifeFinances"
name: "LifeFinances"
description: "Personal finances and retirement planning simulator"
readmeQualityOk: true
url: "https://github.com/chriskelly/LifeFinances"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["financial-independence", "retirement-planning", "genetic-algorithm", "investing", "monte-carlo", "simulation"]
stars: 9
forks: 3
openIssues: 13
closedIssues: 115
watchers: 3
contributors: 11
recentReleases: 0
createdAt: "2020-08-03T02:12:12Z"
lastCommitAt: "2026-07-04T23:14:26Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 74
maintainers: ["chriskelly", "cursoragent", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/af8ace9423de26a0a53ec58a64bb946406bea30ec013da38f344348319f8f8ca/chriskelly/LifeFinances"
discussionCount: 0
---

# LifeFinances

Personal finances and retirement planning simulator — rebuilt 2026 with monthly TPAW modeling, SQLite, and a Python web UI.

**Legacy v1 (Flask + React):** tag [`legacy/v1-final`](https://github.com/chriskelly/LifeFinances/tree/legacy/v1-final) and mirror repo [life-finances-legacy](https://github.com/chriskelly/life-finances-legacy).

## Setup

Requires [uv](https://docs.astral.sh/uv/) and Python 3.14+.

```bash
uv sync
uv run python scripts/init_db.py
```

Working database: `data/data.db` (gitignored). Schema template: `data/data.db.blank`.

Override DB path: `LIFE_FINANCES_DB_PATH=/path/to/data.db`

## Development

```bash
make test    # pytest
make lint    # ruff + pyright
make         # both
```

Agent conventions: [`AGENTS.md`](https://github.com/chriskelly/LifeFinances/blob/HEAD/AGENTS.md).

## Backup

Copy `data/data.db` to back up plans. No in-app export in v1.
