---
repo: "backupdrill/cli"
name: "cli"
description: "Open-source CLI to back up a Supabase project (Postgres + Storage) to your own S3/R2/B2 bucket — and restore-drill it to prove the backup restores. Engine of backupdrill.com."
readmeQualityOk: true
url: "https://github.com/backupdrill/cli"
homepage: "https://backupdrill.com"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [51, 49]
topics: ["backblaze-b2", "backup", "cli", "cloudflare-r2", "database-backup", "disaster-recovery", "postgres", "postgresql", "restore", "s3"]
stars: 9
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-04T14:04:06Z"
lastCommitAt: "2026-10-24T08:08:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 36
maintainers: ["supertj"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cb27ce470dadb1fc72e2d88366127fcc0fe58de00c24955519d1ba8421bbdbf/backupdrill/cli"
---

# backupdrill — free, open-source Supabase backup CLI

Open-source CLI to back up a **Supabase** project to **your own** S3/R2/B2 bucket — the Postgres database and, once you configure its S3 keys, your Storage files — with a checksummed `manifest.json` so you can prove what was captured.

Backup is half the job. `backupdrill drill` restores your latest snapshot into a throwaway Postgres and **verifies it actually restores** — because a backup you've never restored is a guess.

Backups stream through the CLI on your machine (or your CI) straight to your bucket. **Your data never touches our servers, because there are none — this is just a CLI.**

> This is the exact engine the hosted service runs in production. Want it on a schedule, with drills that run themselves, alerts, and emailed reports? That's **[backupdrill.com](https://backupdrill.com)**. This CLI is the DIY layer; the cloud adds scheduling, alerting, and reports on top.

🎥 Prefer watching? [Where do your backups actually go — explained in about a minute](https://backupdrill.com/guides/test-supabase-backup-restore#explainer-video).

## Why

- Supabase's own database restore only brings back `storage.objects`…
