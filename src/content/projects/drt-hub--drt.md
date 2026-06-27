---
repo: "drt-hub/drt"
name: "drt"
description: "Reverse ETL for the code-first data stack"
url: "https://github.com/drt-hub/drt"
homepage: "https://drt-hub.github.io/drt-web/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["bigquery", "cli", "data-engineering", "dbt", "duckdb", "etl", "postgres", "python", "reverse-etl", "data-activation"]
stars: 27
forks: 36
openIssues: 46
closedIssues: 266
watchers: 1
contributors: 32
recentReleases: 10
createdAt: "2026-03-27T00:00:35Z"
lastCommitAt: "2026-06-27T00:34:56Z"
lastReleaseAt: "2026-04-02T01:07:54Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 97
undervaluedScore: 61
maintainers: ["masukai", "Muawiya-contact", "Pawansingh3889"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1193163237/b8d67d82-7289-4f4a-987c-0bd6392bfb29"
discussionCount: 6
---

[English](./README.md) | [日本語](./README.ja.md)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/drt-hub/.github/main/profile/assets/logo-dark.svg">
</picture>

# drt — data reverse tool

> Reverse ETL for the code-first data stack.

**drt** syncs data from your data warehouse to external services — declaratively, via YAML and CLI.
Think `dbt run` → `drt run`. Same developer experience, opposite data direction.

</p>

```bash
pip install drt-core          # core (DuckDB included)
drt init && drt run
```

---

## Why drt?

| Problem                              | drt's answer             |
| ------------------------------------ | ------------------------ |
| Census/Hightouch are expensive SaaS  | Free, self-hosted OSS    |
| GUI-first tools don't fit CI/CD      | CLI + YAML, Git-native   |
| dbt/dlt ecosystem has no reverse leg | Same philosophy, same DX |
| LLM/MCP era makes GUI SaaS overkill  | LLM-native by design     |

> **What's always free?** All connectors, CLI, MCP server, and sync engine. See [OPEN_CORE.md](./OPEN_CORE.md) for the open core boundary.

---

## Quickstart

No cloud accounts needed — DuckDB + httpbin.org,…
