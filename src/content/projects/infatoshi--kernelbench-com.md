---
repo: "Infatoshi/kernelbench.com"
name: "kernelbench.com"
description: "kernelbench.com — GPU kernel engineering benchmarks for autonomous LLM coding agents. v3 archive + v-hard latest."
readmeQualityOk: true
url: "https://github.com/Infatoshi/kernelbench.com"
homepage: "https://kernelbench.com"
language: "HTML"
languages: ["HTML"]
languagePcts: [93]
stars: 48
forks: 6
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-04-30T01:30:59Z"
lastCommitAt: "2026-07-20T06:32:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 41
maintainers: ["Infatoshi"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3618545df596db79cd533106ec1e05008ac7910cdd97f49c63dd2528aef7573/Infatoshi/kernelbench.com"
---

# kernelbench.com

GPU kernel engineering benchmarks for autonomous LLM coding agents.

This is the canonical monorepo: it ships both the public website and the benchmark suites it visualizes. The website reads benchmark data straight from `benchmarks/*/results/` at build time — what's on disk is what's on the site.

## Layout

```
.
├── app/                    Next.js website (app/_lib/data.ts reads benchmark data at build time)
├── public/                 Website static assets
├── media/                  Tracked chart generators (kbh_theme.py + make_*.py + generate_dark_plots.py)
├── benchmarks/
│   ├── hard/             Latest (2026-04). Single Blackwell, 6 problems, 10 models. Live on /hard.
│   │   ├── SPEC.md         Design + methodology.
│   │   ├── DEVLOG.md       Decisions, dead ends, lessons.
│   │   ├── LEADERBOARD.md  Human-readable cross-model grid + rubric-leak footnotes.
│   │   ├── results/
│   │   │   ├── leaderboard.json    Schema-versioned, machine-readable (drives the site).
│   │   │   └── annotations/        Per-cell YAML commentary (clean / rubric_leak / etc.).
│   │   ├── problems/       Problem definitions (reference.py, check.py, benchmark.py, …).
│   │…
