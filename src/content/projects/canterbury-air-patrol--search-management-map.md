---
repo: "canterbury-air-patrol/search-management-map"
name: "search-management-map"
description: "Plan and manage search and rescue missions"
readmeQualityOk: true
url: "https://github.com/canterbury-air-patrol/search-management-map"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [74, 24]
topics: ["django", "leaflet", "postgis", "sar", "search-and-rescue"]
stars: 9
forks: 6
openIssues: 11
closedIssues: 18
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2019-03-22T09:11:40Z"
lastCommitAt: "2026-07-20T06:35:29Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 91
undervaluedScore: 77
maintainers: ["sparlane", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b69c79e32b0fac186fd5eb8c218051846af7c0cabbef432ca61393cca4d3f399/canterbury-air-patrol/search-management-map"
---

# Search Management Map

A system for planning and managing searches. Define a search area and monitor progress in real time.

## Getting Started

### Prerequisites

* python3 with venv and pip
* postgresql with postgis

### Fetching and start

```
git clone https://github.com/canterbury-air-patrol/search-management-map.git
cd search-management-map
./setup-venv.sh
# follow the instructions in the output from setup-venv.sh
./start-venv.sh
```

### With Docker
```
git clone https://github.com/canterbury-air-patrol/search-management-map.git
cd search-management-map
docker-compose up
```

#### You can run the tests under docker with:
```
docker-compose run app ./docker/app/test.sh
```

#### Configuration

The container generates `smm/local_settings.py` from the template at startup and
reads its configuration from environment variables (see `docker-compose.yaml`
for a working example):

| Variable | Purpose | Default |
| --- | --- | --- |
| `DB_HOST` | PostGIS host | (from template) |
| `DB_NAME` | Database name | (from template) |
| `DB_USER` | Database user | (from template) |
| `DB_PASS` | Database password | (from template) |
| `ALLOWED_HOSTS` | Comma-separated allowed hosts |…
