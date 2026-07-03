---
repo: "syalia-srl/une-status"
name: "une-status"
description: "Status board for Empresa Eléctrica de La Habana — public Telegram channel crawl + static dashboard"
url: "https://github.com/syalia-srl/une-status"
language: "Python"
languages: ["Python"]
languagePcts: [72]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-12T12:45:21Z"
lastCommitAt: "2026-07-03T12:23:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 46
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/755e0229a13f5a3300bf8fe3d54b02fc6b04f6e0e61c1e9619d130c5c96b15ef/syalia-srl/une-status"
---

# une-status

Status board for Empresa Eléctrica de La Habana. Crawls the public Telegram channel
[@EmpresaElectricaDeLaHabana](https://t.me/EmpresaElectricaDeLaHabana), extracts
events with regex/heuristics (zero AI), aggregates rollups, and publishes a
static dashboard.

**Live:** https://syalia-srl.github.io/une-status/

## How it works

- Every 15 minutes, GitHub Actions runs `une-status` which fetches the latest
  page of the public channel preview (`t.me/s/<channel>`), classifies new
  messages, extracts structured events, updates today's rollup, and rewrites
  `data/data.json` (consumed by the dashboard).
- Backfill (2022-08-05 → today) is done offline via `une-backfill` and the
  resulting `daily/` and `monthly/` rollups are committed once.
- Raw messages and per-event records are retained only for the current and
  previous day; older data is preserved as compact daily and monthly rollups.

## Local dev

```sh
uv sync
uv run python -m une_status.update        # one incremental pass
uv run python -m une_status.backfill      # full historical backfill
uv run pytest                              # tests
```

## Data layout

```
data/
├── data.json              # the dashboard…
