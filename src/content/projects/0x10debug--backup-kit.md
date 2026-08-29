---
repo: "0x10debug/backup-kit"
name: "backup-kit"
description: "VPS Backup Made Simple - Encrypted, Automated, Tested Recovery"
readmeQualityOk: true
url: "https://github.com/0x10debug/backup-kit"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-17T07:21:17Z"
lastCommitAt: "2026-08-27T05:16:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 13
maintainers: ["0x10debug"]
openGraphImageUrl: "https://opengraph.githubassets.com/f47730db6e0bd77cad7f2181ac894f7d11ff70fd16c2a7594d22105a04dd9d25/0x10debug/backup-kit"
---

# VPS Backup Made Simple — Encrypted, Automated, Tested Recovery

Protect your self-hosted data with encrypted, automated backups designed for VPS and Docker. Pre-configured strategies for Restic and Kopia handle encryption, retention, and cleanup—just add your storage backend. Includes Docker volume backup scripts, one-command restore, and automated recovery drills that verify your backups actually work. Because a backup you've never tested is just a hope, not a backup.

> **Already running apps on your VPS?** This is the safety net. Deploy your services with [compose-recipes](https://github.com/0x10debug/compose-recipes), then set up backup-kit to protect `/data/` — all your app data, encrypted, off-site, and tested.

## Why This Exists

Restic, Kopia, and Borgmatic are excellent backup **tools** — but they're not **strategies**. They give you the engine but not the route. You still have to decide:

1. **Which tool** fits your setup (Restic vs Kopia vs Borgmatic)?
2. **Which backend** (S3-compatible cloud vs SFTP to another VPS)?
3. **What retention policy** (how many daily, weekly, monthly snapshots)?
4. **How to back up Docker volumes** (you can't just `cp` them)?
5. **How to…
