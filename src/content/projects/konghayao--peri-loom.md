---
repo: "KonghaYao/peri-loom"
name: "peri-loom"
description: "A self-hosted, diskless SQL database platform with branching, encryption, and a built-in console."
readmeQualityOk: true
url: "https://github.com/KonghaYao/peri-loom"
language: "Rust"
languages: ["Rust", "Go"]
languagePcts: [45, 33]
stars: 5
forks: 0
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-30T08:42:08Z"
lastCommitAt: "2026-10-20T08:49:25Z"
lastReleaseAt: "2026-10-16T04:42:42Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 93
undervaluedScore: 58
maintainers: ["KonghaYao"]
openGraphImageUrl: "https://opengraph.githubassets.com/26af940dd96711652adb4dda3c8e88524dce179c0c04276a9b299700ad615ef0/KonghaYao/peri-loom"
---

A self-hosted, diskless SQL database platform with branching, encryption, and a built-in console.

- 🪶 **Diskless compute** — Keep database storage separate from compute. Worker disks are disposable caches, not your primary database.
- 🌿 **Branch, snapshot, and restore** — Explore changes on separate branches and return to retained recovery points. Snapshots and clones share storage segments within a database namespace.
- 🗄️ **Bring your own S3** — Store database objects in a dedicated bucket on your S3-compatible service.
- 🔐 **Encrypted by design** — Native page encryption, scoped access keys, and TLS-protected connections.
- 🖥️ **A console included** — Browse tables, run SQL, and manage branches and recovery points from your browser.
- 🏢 **Built for multiple projects** — Organize databases by project, with scoped credentials and quotas.
- 🐳 **Deploy with Docker Compose** — One application container. No local compiler or frontend build required.

> **Preview software.** Not ready for production workloads. Clean restart has been verified in tested deployments; crash recovery, disaster recovery, and high availability have not passed production acceptance.
