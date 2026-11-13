---
repo: "rafsaf/ogion"
name: "ogion"
description: "A tool for performing scheduled database backups and transferring encrypted data to secure clouds, for home labs, hobby projects, etc., in environments such as k8s, docker, vms."
readmeQualityOk: true
url: "https://github.com/rafsaf/ogion"
homepage: "https://ogion.rafsaf.pl"
language: "Python"
languages: ["Python"]
languagePcts: [91]
topics: ["backup", "backup-tool", "backup-utility", "cron", "docker", "kubernetes", "mariadb", "mysql", "postgresql", "python"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-07-10T13:35:29Z"
lastCommitAt: "2026-11-13T18:32:15Z"
lastReleaseAt: "2023-05-06T21:40:24Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 56
maintainers: ["github-actions[bot]", "dependabot[bot]", "rafsaf"]
openGraphImageUrl: "https://opengraph.githubassets.com/271377f15eb4567f5df05536b559359b78a9f15b21a30a2df78082e5adecbbfe/rafsaf/ogion"
---

# Ogion

A tool for performing scheduled database backups and transferring encrypted data to secure public clouds, for home labs, hobby projects, etc., in environments such as k8s, docker, vms.

Backups are in [age](https://github.com/FiloSottile/age) format, with strong encryption under the hood. Why age? it's modern replacement for GnuPG, available for most architectures and systems. [Lzip](https://www.nongnu.org/lzip/) compression is used before encryption step.

At this point, no fundamental breaking changes are planned, you may consider this as a stable, feature complete software.

## Documentation

- [https://ogion.rafsaf.pl](https://ogion.rafsaf.pl)

## Alternatives

There are better tools for bigger databases like [pgBackRest - Reliable PostgreSQL Backup & Restore](https://pgbackrest.org/).

## Supported backup targets

- PostgreSQL: `18`, `17`, `16`, `15`.
- MariaDB: `13.0`, `12.3`, `11.8`, `11.4`, `10.11`.
- MySQL: `26.10`, `9.7`, `8.4`.
- Single file
- Directory

## Supported upload providers

- Google Cloud Storage bucket
- S3 storage compatibile bucket (AWS, Minio)
- Azure Blob Storage
- Debug (local)

## Notifications

- Discord
- Email (SMTP)
- Slack

## Deployment…
