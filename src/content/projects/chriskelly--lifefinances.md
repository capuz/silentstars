---
repo: "chriskelly/LifeFinances"
name: "LifeFinances"
description: "Personal finances and retirement planning simulator"
readmeQualityOk: true
url: "https://github.com/chriskelly/LifeFinances"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["financial-independence", "retirement-planning", "investing", "simulation"]
stars: 10
forks: 3
openIssues: 11
closedIssues: 154
watchers: 3
contributors: 11
recentReleases: 0
createdAt: "2020-08-03T02:12:12Z"
lastCommitAt: "2026-11-10T14:49:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 73
maintainers: ["chriskelly", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b7b3155756c2bb78405a80a2b39b8858b53cbeef2c6532c714ea1bd7a556f57/chriskelly/LifeFinances"
discussionCount: 0
---

# LifeFinances

Personal finances and retirement planning simulator — rebuilt 2026 with monthly TPAW modeling, SQLite, and a Python web UI.

## Setup

Requires [uv](https://docs.astral.sh/uv/) and Python 3.14+.

```bash
uv sync
uv run python scripts/init_db.py
uv run uvicorn web.app:app --reload --host 127.0.0.1 --port 8000
```

Open [http://127.0.0.1:8000/](http://127.0.0.1:8000/). Run all commands from the repository root.

**macOS:** double-click `LifeFinances.command` in Finder to do all of the above in one step —
it prepares the database, starts the server, and opens the browser. Logs appear in the Terminal
window it opens; press Ctrl+C there to stop the server. If the app is already running on port
8000, it just opens the browser instead of starting a second copy; if another program holds
port 8000, it uses the first free port up to 8010.

Working database: `data/data.db` (gitignored). Schema template: `data/data.db.blank`.

Override DB path: `LIFE_FINANCES_DB_PATH=/path/to/data.db`

Disability insurance calculator (Marimo): `uv run marimo edit tools/disability_insurance.py` — personal knobs in gitignored `tools/*.local.toml`; see `tools/README.md`.

## Development

```bash…
