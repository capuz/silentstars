---
repo: "Aiven-Open/myhoard"
name: "myhoard"
description: "MySQL Backup and Point-in-time Recovery service"
readmeQualityOk: true
url: "https://github.com/Aiven-Open/myhoard"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["mysql", "backup", "pitr", "restore", "cloud-object-storage"]
stars: 98
forks: 26
openIssues: 3
closedIssues: 5
watchers: 59
contributors: 50
recentReleases: 6
createdAt: "2019-05-27T08:18:04Z"
lastCommitAt: "2026-08-27T14:26:43Z"
lastReleaseAt: "2026-08-05T07:06:28Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "release_machine"]
healthScore: 88
undervaluedScore: 46
maintainers: ["alexole", "VitaliVinahradski", "danielblasina-tech"]
openGraphImageUrl: "https://opengraph.githubassets.com/a03608516b73818937b1089c962ca75843dfb52ea25639934e100db834023177/Aiven-Open/myhoard"
---

# MyHoard [](https://github.com/aiven/myhoard/actions) [](https://codecov.io/gh/aiven/myhoard)

MyHoard is a daemon for creating, managing and restoring MySQL backups.
The backup data can be stored in any of the supported cloud object storages.
It is functionally similar to [pghoard](https://github.com/aiven/pghoard)
backup daemon for PostgreSQL.

# Features

- Automatic periodic full backup
- Automatic binary log backup in near real-time
- Cloud object storage support (AWS S3, Google Cloud Storage, Azure)
- Encryption and compression
- Backup restoration from object storage
- Point-in-time-recovery (PITR)
- Automatic backup history cleanup based on number of backups and/or backup age
- Purging local binary logs once they're backed up and not needed by other
  MySQL servers (requires external system to provide executed GTID info for the
  standby servers)
- Almost no extra local disk space requirements for creating and restoring
  backups
- Incremental backups

Fault-resilience and monitoring:

- Handles temporary object storage connectivity issues by retrying all
  operations
- Metrics via statsd using [Telegraf® tag…
