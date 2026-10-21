---
repo: "tosun-si/bigtesty"
name: "bigtesty"
description: "BigTesty is a framework that allows to create Integration Tests with BigQuery on a real and short lived Infrastructure."
readmeQualityOk: true
url: "https://github.com/tosun-si/bigtesty"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 67
forks: 1
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 7
createdAt: "2023-06-20T14:13:03Z"
lastCommitAt: "2026-10-21T17:32:06Z"
lastReleaseAt: "2026-10-19T22:53:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 48
maintainers: ["tosun-si", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1eaad0c4bb97447b493215fecc565f98aa1e5195badec8d15a35612d8db48bae/tosun-si/bigtesty"
---

BigTesty is an integration testing framework for BigQuery, running the tests on a real and short-lived
infrastructure.

**Documentation: [tosun-si.github.io/bigtesty](https://tosun-si.github.io/bigtesty/)**

- **The real BigQuery engine**, no emulator: the SQL behaves exactly as in production.
- **Given / When / Then** test files in YAML or JSON: load test data, run any SQL (queries, DML, `MERGE`,
  scripts, procedures), then assert on query results or table contents.
- **Isolated and ephemeral**: each scenario of each run gets its own datasets, created and destroyed by BigTesty.
  Several developers and CI pipelines can run the tests at the same time.
- **Production SQL unchanged**: the references to your datasets are rewritten to the isolated datasets.

## Installation

Python 3.11+ is required.

```bash
# as a dev dependency of a uv project, the version is locked in uv.lock
uv add --dev bigtesty
# or as a standalone CLI
uv tool install bigtesty
```

BigTesty uses [Application Default Credentials](https://cloud.google.com/docs/authentication/application-default-credentials):

```bash
gcloud auth application-default login
```

## Quick start

A BigTesty project is a…
