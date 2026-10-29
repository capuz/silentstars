---
repo: "arkeep-io/arkeep"
name: "arkeep"
description: "Manage backups across all your servers from a single dashboard."
readmeQualityOk: true
url: "https://github.com/arkeep-io/arkeep"
language: "Go"
languages: ["Go", "Vue"]
languagePcts: [65, 28]
topics: ["backup", "backup-manager", "docker", "go", "golang", "grpc", "kubernetes", "rclone", "restic", "self-hosted"]
stars: 188
forks: 8
openIssues: 3
closedIssues: 83
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2026-02-20T17:36:49Z"
lastCommitAt: "2026-10-29T14:07:02Z"
lastReleaseAt: "2026-06-03T10:42:34Z"
status: "thriving"
tags: ["funded"]
healthScore: 98
undervaluedScore: 33
maintainers: ["Fcrotti1", "filippocrotti12", "TheGuit"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba695362f42ec0e78e3c4b007686fd837ceae5ca347a2947c9ed506d4a50a9e4/arkeep-io/arkeep"
fundingLinks: ["GITHUB:https://github.com/arkeep-io"]
discussionCount: 18
---

# Arkeep

> Your infra's Ark — back up everything, keep it yours.

Open-source, self-hosted control for [Restic](https://restic.net/) and [Rclone](https://rclone.org/):
one server, a lightweight agent on every machine, one dashboard.

**[Website](https://arkeep.io)** · **[Documentation](https://arkeep.io/docs/)** · **[Quickstart](https://arkeep.io/docs/quickstart/)** · **[Discussions](https://github.com/arkeep-io/arkeep/discussions)**

---

## Features

- **One policy, many destinations** — local disk, S3-compatible storage, SFTP, restic REST server and 40+ Rclone backends, for a real 3-2-1 setup
- **Docker-aware** — volumes are discovered on their own; databases stream straight into restic with `pg_dump`, `mysqldump` and friends
- **Retention and integrity checks** — per destination, on their own schedule
- **Browse and restore** — open any snapshot, download a file or a folder, restore a selection in place or elsewhere
- **Know when it fails** — email, webhooks (Slack, Discord, n8n…) and Healthchecks.io pings
- **Your login, your rules** — local accounts with TOTP 2FA, or single sign-on with any OIDC provider
- **No lock-in** — repositories stay plain restic, readable without…
