---
repo: "bolajiwahab/pgrubic"
name: "pgrubic"
description: "PostgreSQL linter and formatter for schema migrations and design best practices."
readmeQualityOk: true
url: "https://github.com/bolajiwahab/pgrubic"
homepage: "https://pgrubic.azellar.com/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["formatter", "linter", "postgresql", "sql", "static-code-analysis", "style-guide", "formatting", "static-analysis", "pre-commit-hook", "postgres"]
stars: 21
forks: 3
openIssues: 1
closedIssues: 10
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-05-24T00:44:32Z"
lastCommitAt: "2026-10-24T08:20:39Z"
lastReleaseAt: "2025-05-23T15:11:13Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 67
maintainers: ["bolajiwahab", "dependabot[bot]", "renovate[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/805137838/bd27e898-be8d-4ce5-88f0-d3ca92ad4603"
discussionCount: 0
---

# pgrubic

pgrubic is a PostgreSQL linter and formatter for schema migrations and design best practices.

## Features

- Over 100+ rules
- Automatic violation correction (e.g., automatically add `concurrently` to index create statements)
- Linting of migrations embedded in PL/pgSQL functions and DO blocks
- River style code formatting for DML statements
- Almost identical styling with **pg_dump** for DDL statements
- Python 3.12+ compatibility
- Automatic caching to avoid reformatting unchanged files
- Violations suppression, statement level, and file level
- Can be used as a library in your own Python projects, not just as a CLI tool

## Getting Started

For more, see the [documentation](https://pgrubic.azellar.com).

## Installation

**<span style="color:red">pgrubic is only supported on Python 3.12 or higher</span>**.

### via PyPI

```bash
pip install pgrubic
```

### via GitHub

```bash
pip install git+https://github.com/bolajiwahab/pgrubic.git
```

### via Docker

```bash
docker run --rm -it -v $PWD:/sql ghcr.io/bolajiwahab/pgrubic:4.0.2 lint *.sql     # Lint SQL files
docker run --rm -it -v $PWD:/sql ghcr.io/bolajiwahab/pgrubic:4.0.2 format *.sql   # Format SQL files
```…
