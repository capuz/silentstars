---
repo: "Datus-ai/datus-db-adapters"
name: "datus-db-adapters"
description: "Datus database adapters "
readmeQualityOk: true
url: "https://github.com/Datus-ai/datus-db-adapters"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 13
forks: 25
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 17
recentReleases: 0
createdAt: "2025-11-06T07:01:08Z"
lastCommitAt: "2026-11-13T05:38:17Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 79
maintainers: ["stukid", "Louis-Law", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c9415c4ccbeef1089b810efe29131d2759c3f9d371599b71557227a1a5b5363/Datus-ai/datus-db-adapters"
---

# Datus Database Adapters

Independent database adapter packages for Datus Agent.

## Overview

This repository contains database adapter implementations for Datus Agent, using a plugin architecture where each database is an independent package that can be installed on demand.

## Database SQL guidance

Adapters with a `datus.skills` entry point bundle a `db-<dialect>-sql` skill. Its
`SKILL.md` contains query and existing-data semantics; linked `references/` files
provide task-specific DDL, writes, loading and procedural guidance on demand.

Use an Agent with `skill_location` and skill-bundle reference reading support for
the complete guidance. The legacy SQL-notes hook returns only the short entrypoint
body; custom hosts can resolve its reference links relative to the skill directory
under `get_skills_dir()`. Coordinate Agent support before deploying these adapter
updates to hosts that need the operational references.

## Architecture

```
datus-agent (Core package - SQLite/DuckDB only)
    ↓
Plugin Adapters (Independent packages, install as needed)
├── datus-sqlalchemy (SQLAlchemy base layer)
│   ├── datus-mysql
│   ├── datus-starrocks
│   ├── datus-postgresql
│   ├──…
