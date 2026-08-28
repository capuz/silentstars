---
repo: "borgforge/borg-backup-ui"
name: "borg-backup-ui"
description: "Borg-Backup-UI Unraid Plugin"
readmeQualityOk: true
url: "https://github.com/borgforge/borg-backup-ui"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [62, 26]
stars: 12
forks: 0
openIssues: 9
closedIssues: 222
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-15T16:16:42Z"
lastCommitAt: "2026-08-28T15:34:01Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 48
maintainers: ["borg-codex-bot", "TheTwist76"]
openGraphImageUrl: "https://opengraph.githubassets.com/26a0834427b3de042ddec8475c46d35624d754a05b0aeccf199377a7804537c4/borgforge/borg-backup-ui"
---

# Borg Backup UI

Unraid plugin for BorgBackup with guided backup jobs, repository management,
restore verification, archive browsing, reports, notifications, and system
health checks.

Borg Backup UI is built for Unraid users who want the reliability of BorgBackup
without maintaining custom shell scripts for everyday operation. BorgBackup
remains the backup engine; this project adds the Unraid-focused control layer
around jobs, storage targets, schedules, restore workflows, checks, and support
diagnostics.

> Status: pre-publication candidate for Unraid Community Apps.
> Public installation instructions will be added after Community Apps approval.
> This project is not affiliated with BorgBackup or other Borg UI projects.

## Overview

- Guided job wizard for common Unraid backup workflows.
- Storage profiles for local paths, USB devices, SMB shares, SSH targets, and
  Hetzner Storage Box style repositories.
- Docker container and VM runtime handling during backup runs.
- Dashboard overview for backup runs, restore proof, storage data, and checks.
- Browse and Restore assistant with configurable safe restore target roots.
- Automated restore tests with structured reports and…
