---
repo: "EkuboProtocol/indexer"
name: "indexer"
description: "Indexes Ekubo Protocol data on Starknet or EVM chains into a Postgres database"
readmeQualityOk: true
url: "https://github.com/EkuboProtocol/indexer"
homepage: "https://ekubo.org"
language: "TypeScript"
languages: ["TypeScript", "PLpgSQL"]
languagePcts: [78, 22]
stars: 12
forks: 6
openIssues: 0
closedIssues: 25
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2025-01-17T21:14:11Z"
lastCommitAt: "2026-11-02T15:17:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 81
maintainers: ["moodysalem", "dependabot[bot]", "hey-research-lab"]
openGraphImageUrl: "https://opengraph.githubassets.com/98233c6442ca5b24e3e2a666ecc1fea6b973d4ba976fe9a3d88b85a97e670872/EkuboProtocol/indexer"
---

# `@ekubo/indexer`

Service for indexing Ekubo events into a Postgres database.

## Overview

The indexer focuses on producing an always-consistent realtime view of Ekubo events. Every network — Starknet included — is read by polling its own RPC over block ranges; see [Block streams](#block-streams).

Events are not transformed by the indexer, simply cataloged for later use such as in materialized views or complex analytical queries.

## Syncing a new node

It can take days to sync a fresh database with all the networks, so it's recommended to start from a backup of our production database.

Nightly dumps are published by `.github/workflows/pg-dump.yaml`—grab the most recent `db-backup-<timestamp>.dump` artifact from the Actions tab, then import it into your Postgres instance:

```bash
pg_restore --clean --if-exists --no-owner \
  --dbname postgres://user:pass@host:5432/dbname \
  db-backup-20240101T000000Z.dump
```

During restore you may see warnings or errors about the DigitalOcean `doadmin` role or the `pg_cron` extension; those are expected and can be ignored if your target database lacks the same privileges/extensions.

Join the [Discord](https://discord.ekubo.org) and ask…
