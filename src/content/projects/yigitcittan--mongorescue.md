---
repo: "YigitCittan/mongorescue"
name: "mongorescue"
description: "Self-hosted MongoDB backup and disaster recovery: streaming mongodump to disk or S3, safe-clone restores, encryption, alerts, web dashboard and MCP server. Single Go binary."
readmeQualityOk: true
url: "https://github.com/YigitCittan/mongorescue"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [73, 21]
topics: ["backup", "backup-tool", "dashboard", "database-backup", "devops", "disaster-recovery", "docker", "encryption", "go", "golang"]
stars: 6
forks: 0
openIssues: 21
closedIssues: 13
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-25T09:32:48Z"
lastCommitAt: "2026-10-05T10:47:36Z"
lastReleaseAt: "2026-09-30T11:48:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 87
undervaluedScore: 52
maintainers: ["YigitCittan", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a57b1e5bd992f1cc0cb377cc72e9df7c1d21bfac004248132c7c47669aef6028/YigitCittan/mongorescue"
discussionCount: 0
---

MongoDB backups and restores that stream, verify and encrypt.<br>
  A single Go binary with a built-in dashboard.

| | |
| --- | --- |
|  |  |
| First-run setup | MongoDB connections |
|  |  |
| Scheduled jobs | Restore into a safe clone |
|  |  |
| Storage targets | Notifications |
|  |  |
| Restore history | Backups |

MongoRescue runs `mongodump` on a schedule, streams the archive to local disk or any S3-compatible bucket, and brings it back with `mongorestore` when you need it. The dump is piped straight through, so memory use stays flat no matter how large the database is.

Restores go into a separate copy of the database (`<db>_rescue_<timestamp>`) unless you explicitly ask to overwrite the original. Nothing touches production by accident.

## Features

- Manage many MongoDB servers from one instance: connections are tested, their databases and collections listed, and backups can be restored into another server
- Scheduled and on-demand backups with retention by age or count, a dry-run preview of what retention deletes, pins (legal hold) and a retention history
- Jobs that back up one database, a list of them, all databases of a connection or those matching glob patterns…
