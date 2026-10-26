---
repo: "auanK/kasumi"
name: "kasumi"
description: "Multi-client bidirectional file synchronization with client-side encryption over any cloud storage, without a dedicated server"
readmeQualityOk: true
url: "https://github.com/auanK/kasumi"
language: "C++"
languages: ["C++"]
languagePcts: [96]
topics: ["client-side-encryption", "cpp23", "distributed-systems", "encrypted-sync", "file-synchronization", "rclone"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-04T19:22:49Z"
lastCommitAt: "2026-10-26T19:49:34Z"
lastReleaseAt: "2026-10-23T11:59:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 54
maintainers: ["auanK"]
openGraphImageUrl: "https://opengraph.githubassets.com/953813d57c3b8437b9fd992ac0ed9547b32a33ecda944a3d26f5361775c61531/auanK/kasumi"
---

# Kasumi

Kasumi is multi-client bidirectional file synchronization with client-side encryption
over local or rclone-compatible shared storage, without a dedicated server.

Written in C++23 for **Linux and Windows**, it works with local filesystems,
network shares, and configured rclone remotes. Each machine synchronizes
independently; no dedicated Kasumi server or simultaneous connection is required.

```text
Machine A ───┐
             │
Machine B ───┼──> Shared Storage
             │
Machine C ───┘
```

## Features

- **Bidirectional, multi-client sync** across independently operated machines.
- **Client-side encryption and authentication** for file contents and history.
- **Shared storage** through local paths, network shares, or rclone remotes.
- **Immutable history and conflict handling** that preserve divergent file versions.
- **Interrupted-operation recovery** through an authenticated transaction journal.
- **Persistent BLAKE3 hash cache** shared by sync and read-only plan observation.
- **Integrity and maintenance tools** to audit referenced content and directly remove authenticated orphan Content and redundant CommitVariants.

## Quick Start

Create a profile named…
