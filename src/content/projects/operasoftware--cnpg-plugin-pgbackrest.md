---
repo: "operasoftware/cnpg-plugin-pgbackrest"
name: "cnpg-plugin-pgbackrest"
description: "pgBackRest CNPG-I backup plugin"
readmeQualityOk: true
url: "https://github.com/operasoftware/cnpg-plugin-pgbackrest"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 52
forks: 15
openIssues: 24
closedIssues: 24
watchers: 2
contributors: 22
recentReleases: 0
createdAt: "2025-04-24T13:46:09Z"
lastCommitAt: "2026-10-30T11:03:31Z"
lastReleaseAt: "2026-01-12T12:28:59Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 50
maintainers: ["renovate[bot]", "Agalin", "ermakov-oleg"]
openGraphImageUrl: "https://opengraph.githubassets.com/8eb9a7e6e65c12d581859f6842e76f43b514d50ee394cadcc2d275c111ecacc9/operasoftware/cnpg-plugin-pgbackrest"
---

# pgBackRest CNPG-I plugin

**Status:** EXPERIMENTAL

Welcome to the codebase of the [pgBackRest](https://pgbackrest.org) CNPG-I
plugin for [CloudNativePG](https://cloudnative-pg.io/).

## Table of contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [WAL Archiving](#wal-archiving)
  - [Backup](#backup)
  - [Restore](#restore)
  - [Replica clusters](#replica-clusters)

## Features

This plugin enables continuous backup to object storage for a PostgreSQL
cluster using the [pgbackrest](https://pgbackrest.org) tool suite.

The features provided by this plugin are:

- Data Directory Backup
- Data Directory Restore
- WAL Archiving
- WAL Restoring
- Point-in-Time Recovery (PITR)
- Replica Clusters
- Client-side encryption of both backups and WAL archives

> [!WARNING]
> While all data necessary to use various restore modes in pgbackrest is properly stored
> in the object store, restore is currently tested only with full backup recovery
> to the latest backup. Reports on more advanced recovery attempts are welcome.

This plugin is currently only compatible with S3 object storage.

The following storage solutions have…
