---
repo: "exmergo/dex"
name: "dex"
description: "Dex lets your agent build your analytics."
readmeQualityOk: true
url: "https://github.com/exmergo/dex"
homepage: "https://www.exmergo.com/dex"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["agent", "agent-skills", "analytics-engineering", "bigquery", "claude-code", "claude-code-plugin", "claude-code-skill", "data-contracts", "data-engineering", "databricks"]
stars: 109
forks: 48
openIssues: 142
closedIssues: 473
watchers: 1
contributors: 44
recentReleases: 0
createdAt: "2026-06-23T16:37:57Z"
lastCommitAt: "2026-11-04T11:28:10Z"
lastReleaseAt: "2026-07-06T04:55:47Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 95
undervaluedScore: 36
maintainers: ["marcociav-exmergo", "MbappeWU", "bradleyjoejoseph"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1278285296/ec39d74f-e7e1-4f5c-b484-3a0aa43c8119"
---

> *Most deadly errors arise from obsolete assumptions.*
>
> Frank Herbert, *Children of Dune*

# Dex

**Dex lets your agent build your analytics.**

Explore your data, build models and semantic layers, and keep them in sync
as schemas change.

Works with databases, data warehouses, lakehouses, and SQL engine endpoints
through [supported connectors](#connectors).

**Built by [Exmergo](https://www.exmergo.com)**

## Install

**Any agent** (run in your terminal):

```bash
npx skills add exmergo/dex
```

**Claude Code** (run these inside Claude Code, one at a time):

```
/plugin marketplace add exmergo/exmergo-agent-plugins
```

```
/plugin install dex@exmergo
```

**Codex**:

```bash
npx skills add exmergo/dex --agent codex
```

## What you get

- **Explore** your database, data warehouse, or SQL endpoint. Find the tables that matter, understand their structure, and verify how they join. Get column profiles, personal-data flags, and an ER diagram.
- **Transform** your dbt project and semantic layer. Create models, tests, docs, and metrics as reviewable plans, then build and verify on a dev target.
- **Maintain** your models and metrics as sources change. Detect drift in schemas,…
