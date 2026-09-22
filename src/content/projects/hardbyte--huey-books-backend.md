---
repo: "hardbyte/huey-books-backend"
name: "huey-books-backend"
description: "FastAPI + postgresql application powering Huey Books"
readmeQualityOk: true
url: "https://github.com/hardbyte/huey-books-backend"
homepage: "https://api.wriveted.com"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 6
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2021-12-23T04:33:18Z"
lastCommitAt: "2026-09-22T08:45:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 83
undervaluedScore: 77
maintainers: ["hardbyte", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/832d7c777cf9c873742b913d2beb04a0312a1defb63e5a1785c6a82e1838f28f/hardbyte/huey-books-backend"
discussionCount: 0
---

# Wriveted API

</div>

## Overview

The core API for the [Huey Books](https://hueybooks.com) reading recommendation platform. A single Docker image contains two separate FastAPI applications:

- **Public API** (`app.main:app`) -- REST API for users, books, schools, collections, chatflows, and the CMS. Documented at [api.wriveted.com/v1/docs](https://api.wriveted.com/v1/docs).
- **Internal API** (`app.internal_api:internal_app`) -- background task processing, webhook handling, log ingestion.

Both are deployed as separate Cloud Run services backed by PostgreSQL (Cloud SQL), with Google Cloud Tasks providing queuing between them.

The API is designed for use by Library Management Systems, Wriveted staff (via scripts or admin UI), and end users via Huey the Bookbot and other Wriveted applications.

</p>

</p>

### Key domain areas

| Domain | Description |
|--------|-------------|
| **Users** | [Joined-table inheritance](https://docs.sqlalchemy.org/en/14/orm/inheritance.html#joined-table-inheritance): Student, Educator, Parent, SchoolAdmin, etc. |
| **Books** | Work / Edition / CollectionItem hierarchy with provenance-aware labels and staff-owned research tools |
| **Schools &…
