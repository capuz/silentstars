---
repo: "cubbit/dittofs"
name: "dittofs"
description: "A modular virtual filesystem written entirely in Go"
readmeQualityOk: true
url: "https://github.com/cubbit/dittofs"
homepage: "https://www.dittofs.io"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["filesystem", "nfs", "nfs-server", "smb", "smb-server"]
stars: 54
forks: 20
openIssues: 254
closedIssues: 1228
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2025-11-04T17:04:38Z"
lastCommitAt: "2026-11-10T14:33:37Z"
lastReleaseAt: "2026-02-12T15:15:24Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 55
maintainers: ["viquitorreis", "marmos91", "rif"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1089680967/0f8f52ee-026f-40a3-a414-761dc4dd6743"
discussionCount: 1
---

**A modular virtual filesystem written entirely in Go**

NFSv3/v4.0/v4.1/v4.2 and SMB2/3 servers in userspace — no FUSE, no kernel modules — with
pluggable metadata and block stores you can mix and match per share.

[Website](https://dittofs.io) • [Quick Start](#quick-start) • [Documentation](#documentation) • [Features](#features) • [Contributing](https://github.com/cubbit/dittofs/blob/HEAD/docs/internals/contributing.md)

---

> ⚠️ **Experimental software, pre-1.0.** Not production ready. No security audit has
> been performed. APIs and on-disk formats may change without notice. Do not use for
> data you cannot afford to lose. See [Security](#security) and [FAQ](https://github.com/cubbit/dittofs/blob/HEAD/docs/guide/faq.md).

## What is DittoFS?

Traditional file servers are welded to one storage layer and one access protocol.
DittoFS separates the two. A single server process can:

- Speak **NFSv3, NFSv4.0, NFSv4.1, NFSv4.2, and SMB2/3** at the same time, over the same data.
- Store metadata in **[BadgerDB](https://github.com/dgraph-io/badger)**, on disk or fully in memory — one store per share.
- Store file content in one **block store**…
