---
repo: "DahanItamar/DockNest"
name: "DockNest"
description: "Self-hosted Docker backup and restore with a visual server map. Move sites between servers safely, encrypted SFTP or S3 storage, verified restores."
readmeQualityOk: true
url: "https://github.com/DahanItamar/DockNest"
homepage: "https://trydocknest.com"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [73, 20]
topics: ["backup", "dashboard", "disaster-recovery", "docker", "encryption", "homelab", "nodejs", "restore", "self-hosted", "sftp"]
stars: 52
forks: 0
openIssues: 10
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-10-19T20:52:21Z"
lastCommitAt: "2026-11-02T17:56:39Z"
lastReleaseAt: "2026-10-23T14:13:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 33
maintainers: ["DahanItamar"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1426164448/0048095c-ae9e-448c-bfdf-ac1b91ef4571"
discussionCount: 1
---

## What it does

DockNest is a self-hosted web app. It connects to your Linux servers over SSH, backs up each Docker or static nginx site to storage you own, and lets you restore any backup to a separate copy to check that it works.

- Discovers the Docker projects and static nginx sites on each server you connect.
- Backs up each site on its own schedule to encrypted SFTP or S3-compatible storage. Connect storage starts with a provider (own server or NAS, Hetzner, rsync.net, MinIO, Amazon S3, Cloudflare R2, Backblaze B2, Wasabi or another) and fills in its defaults.
- Verifies recovery points and restores them to a separate copy. The live site is not overwritten.
- Shows live progress, the steps of each job and the reason when one fails.

> [!NOTE]
> DockNest runs real Docker and static sites in production, and every release passes real Linux Docker tests. The [support matrix](https://github.com/DahanItamar/DockNest/blob/HEAD/docs/support-matrix.md) lists the tested configurations. Incremental backups are still in beta.

## Features

**Backup and restore**
- Captures images, volumes, bind mounts, writable layers and databases. Database capture is handled for PostgreSQL,…
