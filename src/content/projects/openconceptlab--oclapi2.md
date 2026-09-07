---
repo: "OpenConceptLab/oclapi2"
name: "oclapi2"
description: "OCL Terminology Service v2 in python/django"
readmeQualityOk: true
url: "https://github.com/OpenConceptLab/oclapi2"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 20
forks: 43
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 19
recentReleases: 0
createdAt: "2020-06-05T16:23:50Z"
lastCommitAt: "2026-09-07T08:35:06Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 87
undervaluedScore: 67
maintainers: ["snyaggarwal", "filiperochalopes", "jamlung-ri"]
openGraphImageUrl: "https://opengraph.githubassets.com/5bf59e9b6870ff11844df04382b5ce516b843d6e89625d164ed438852f37b047/OpenConceptLab/oclapi2"
---

# oclapi2
The new and improved OCL terminology service v2

### Dev Setup
1. `sysctl -w vm.max_map_count=262144` #required by Elasticsearch
2. `docker compose up -d`
3. Go to http://localhost:8000/swagger/ to benefit.

### Dev Setup with KeyCloak (SSO)
1. `sysctl -w vm.max_map_count=262144` #required by Elasticsearch
2. `docker compose -f docker-compose.yml -f docker-compose.sso.yml up -d`
3. Go to http://localhost:8000/swagger/ to benefit.
4. Go to http://localhost:8080 for keyCloak.

### Dev Setup on Apple Silicon / arm64
The published `openconceptlab/oclapi2` Docker images are amd64-only. On arm64 hosts (Apple M-series Macs, arm64 Linux) they run under Rosetta/QEMU emulation, and under load — especially Celery's post-restart indexing — the emulated cores saturate hard enough to block the API for tens of seconds. Use the local-build override to compile from the local Dockerfile instead:
1. `sysctl -w vm.max_map_count=262144` #required by Elasticsearch (no-op on Docker Desktop / OrbStack)
2. `docker compose -f docker-compose.yml -f docker-compose.local.yml up -d`
3. Go to http://localhost:8000/swagger/ to benefit.

If you previously pulled the amd64 image and have it cached, force…
