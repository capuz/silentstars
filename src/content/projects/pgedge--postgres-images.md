---
repo: "pgEdge/postgres-images"
name: "postgres-images"
description: "Postgres images built from pgEdge Enterprise packages"
readmeQualityOk: true
url: "https://github.com/pgEdge/postgres-images"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [47, 20]
stars: 14
forks: 3
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2025-09-08T15:59:05Z"
lastCommitAt: "2026-10-29T14:06:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 65
maintainers: ["maqeel75", "mmols", "AntTheLimey"]
openGraphImageUrl: "https://opengraph.githubassets.com/99d7d1c281603072422666fdd554549f39ab5091fac524e7993f966a6590c5c7/pgEdge/postgres-images"
---

# pgEdge Postgres Images

This repository provides build scripts for generating pgEdge Postgres container images supporting Postgres versions 16, 17 and 18.

Images are built from pgEdge Enterprise Postgres packages using a rockylinux9-ubi base image.

Images are published on the [pgEdge Github Container Registry](https://github.com/orgs/pgEdge/packages/container/package/pgedge-postgres).

## Image Flavors

There are currently 2 supported image flavors: `minimal` and `standard`.

Package lists contained under `packagelists` show the exact contents of each image version.

### Minimal Images

Minimal images contain Postgres, and the following extensions:

- Spock
- LOLOR
- Snowflake

### Standard Images

Standard images are based on minimal images, and contain additional extension and tools.

- pgAudit
- PostGIS
- pgVector
- pgEdge Vectorizer
- pg_tokenizer
- vchord_bm25
- pg_vectorize
- pgmq
- pg_cron
- pg_stat_monitor
- Patroni
- pgBackRest
- psycopg2

## Entry Points

The default entry point for this image is based on the official Postgres image entrypoint. Documentation on supported entrypoint behavior is located in the [docker-library/docs…
