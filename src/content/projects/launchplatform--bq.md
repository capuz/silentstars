---
repo: "LaunchPlatform/bq"
name: "bq"
description: "BeanQueue, a lightweight Python task queue framework based on SQLAlchemy, PostgreSQL SKIP LOCKED queries and NOTIFY / LISTEN statements."
url: "https://github.com/LaunchPlatform/bq"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["postgresql", "python", "queue", "sqlalchemy", "worker", "task-queue"]
stars: 28
forks: 3
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-05-12T18:00:19Z"
lastCommitAt: "2026-07-04T19:19:04Z"
lastReleaseAt: "2026-03-26T00:28:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 49
undervaluedScore: 25
maintainers: ["fangpenlin", "mahmoud"]
openGraphImageUrl: "https://opengraph.githubassets.com/797a9dd69942fde6749af0b89492a4a08313d6cea17c59fe89c73321f4facd9b/LaunchPlatform/bq"
---

# BeanQueue [](https://dl.circleci.com/status-badge/redirect/gh/LaunchPlatform/bq/tree/master)

BeanQueue, a lightweight Python task queue framework based on [SQLAlchemy](https://www.sqlalchemy.org/), PostgreSQL [SKIP LOCKED queries](https://www.2ndquadrant.com/en/blog/what-is-select-skip-locked-for-in-postgresql-9-5/) and [NOTIFY](https://www.postgresql.org/docs/current/sql-notify.html) / [LISTEN](https://www.postgresql.org/docs/current/sql-listen.html) statements.

**Notice**: Still in its early stage, we built this for [BeanHub](https://beanhub.io)'s internal usage. May change rapidly. Use at your own risk for now.

## Features

- **Super lightweight**: Under 1K lines
- **Easy-to-deploy**: Only relies on PostgreSQL
- **Transactional**: Commit your tasks with other database entries altogether without worrying about data inconsistencies
- **Easy-to-use**: Built-in command line tools for processing tasks and helpers for generating task models
- **Auto-notify**: Automatic generation of NOTIFY statements for new or updated tasks, ensuring fast task processing
- **Retry**: Built-in and customizable retry policies
- **Schedule**: Schedule tasks to run later
- **Worker heartbeat and…
