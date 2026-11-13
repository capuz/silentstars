---
repo: "dxc-technology/arca"
name: "arca"
description: "Open source S3-compatible object storage server written in Rust"
readmeQualityOk: true
url: "https://github.com/dxc-technology/arca"
language: "Rust"
languages: ["Rust"]
languagePcts: [60]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 7
createdAt: "2026-08-13T16:05:34Z"
lastCommitAt: "2026-11-13T15:40:37Z"
lastReleaseAt: "2026-10-30T17:04:17Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 79
undervaluedScore: 51
maintainers: ["pizzop"]
openGraphImageUrl: "https://opengraph.githubassets.com/acc67d73b71c7b981c55198d23931c1b33e5fd334d00e5b19c53e41b13dce8d1/dxc-technology/arca"
---

Open source S3-compatible object storage server written in Rust.<br>

---

Arca is a ground-up implementation of the S3 API, designed as a **drop-in replacement** for AWS S3, MinIO, and other S3-compatible storage services. It runs as a single node or as a symmetric, self-configuring high-availability cluster, with at-rest encryption, object versioning, RBAC, lifecycle rules, object lock, event notifications, and a web console.

## Status

Production-grade and actively developed. **30 of 31** planned phases are complete (latest release **v0.34.1**), covering 60+ S3 operations plus encryption, versioning, RBAC, monitoring, lifecycle, object lock, tagging, notifications, compression, replication, and high-availability clustering. Arca passes the [Ceph s3-tests](https://github.com/ceph/s3-tests) compatibility suite with **383/825 passing and 0 unexpected failures** (100% pass rate on implemented features; RGW-only extensions out of scope). See the [roadmap](https://dxc-technology.github.io/arca/roadmap/) for what's next.

## Features

- **S3 API compatible** — works with aws-cli, boto3, MinIO Client (mc), rclone, and any S3 client
- **High availability** — symmetric,…
