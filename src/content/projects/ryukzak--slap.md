---
repo: "ryukzak/slap"
name: "slap"
description: "Student Lesson & Attempts Platform. A lightweight queue and task management system for university courses with multiple teachers."
readmeQualityOk: true
url: "https://github.com/ryukzak/slap"
language: "Go"
languages: ["Go", "Hurl"]
languagePcts: [54, 24]
stars: 7
forks: 9
openIssues: 1
closedIssues: 18
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2025-09-01T07:40:32Z"
lastCommitAt: "2026-11-14T10:48:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 91
maintainers: ["ryukzak"]
openGraphImageUrl: "https://opengraph.githubassets.com/8367cfe95be2559d6f2dbac7ae8c927203d042bc3005ddff27c44c35951f781f/ryukzak/slap"
---

# slap

Student Lesson & Attempts Platform. A lightweight queue and task management system for university courses with multiple teachers.

## What it does

**Students** submit task solutions, register for lessons, and defend their work in a queued review session.

**Teachers** schedule lessons, review queued submissions one by one, leave feedback or scores, and track progress across all students.

**Teacher dashboard** (`/users`) provides a day-by-day activity timeline, a course-wide per-task activity heatmap (one row per task, one cell per week spanning the whole course), per-task statistics with visual bars, a students table with scores and statuses, and CSV export. The teacher directory (`/teachers`) adds per-teacher stats and a recent-scores log.

Under the hood: embedded BoltDB (no external database), JWT authentication, Markdown rendering, self-hosted static assets.

## Quick Start

### Docker (recommended)

```sh
docker compose up
```

The app will be available at http://localhost:8080.

### Local

```sh
make build
./slap
```

Or directly:

```sh
SLAP_JWT_SECRET=$(openssl rand -hex 32) go run main.go
```

## Configuration

### Config file

Default path: `conf/config.yaml`…
