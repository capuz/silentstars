---
repo: "cubewise-code/rushti"
name: "rushti"
description: "Parallel TI execution engine for IBM Planning Analytics"
readmeQualityOk: true
url: "https://github.com/cubewise-code/rushti"
homepage: "https://cubewise-code.github.io/rushti/"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["tm1py", "tm1", "tm1-rest-api", "turbo-integrator", "python", "cubewise", "ibm", "planning-analytics"]
stars: 13
forks: 13
openIssues: 7
closedIssues: 75
watchers: 9
contributors: 15
recentReleases: 0
createdAt: "2018-07-15T19:28:11Z"
lastCommitAt: "2026-10-26T20:59:47Z"
lastReleaseAt: "2026-02-16T18:00:19Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 74
maintainers: ["nicolasbisurgi", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/141052735/21fca05b-63ff-49ff-86ba-6a44dbbe5537"
---

---

RushTI transforms sequential TurboIntegrator execution into intelligent, parallel workflows. Define task dependencies as a DAG, and RushTI schedules them across multiple workers — starting each task the moment its predecessors complete.

## What's New in 2.0

- **DAG Execution** — True dependency-based scheduling replaces wait-based sequencing
- **JSON Task Files** — Structured format with metadata, settings, and stages
- **Self-Optimization** — EWMA-based learning reorders tasks from historical performance
- **Checkpoint & Resume** — Automatic progress saving with failure recovery
- **Exclusive Mode** — Prevents concurrent runs on shared TM1 servers
- **Statistics Storage (SQLite or DynamoDB)** — Persistent execution history with dashboards and analysis
- **TM1 Integration** — Read tasks from and write results to a TM1 cube
- **100% Backwards Compatible** — Legacy TXT task files work without changes

## Installation

### pip (recommended)

```bash
pip install rushti
```

For the latest beta:

```bash
pip install rushti --pre
```

### uv

```bash
uv pip install rushti
```

### Executable (no Python required)

Download `rushti.exe` from [GitHub…
