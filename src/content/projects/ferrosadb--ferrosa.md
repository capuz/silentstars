---
repo: "ferrosadb/ferrosa"
name: "ferrosa"
description: "Cassandra-compatible distributed database in Rust with S3-backed storage. Developer preview."
url: "https://github.com/ferrosadb/ferrosa"
homepage: "https://ferrosadb.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 5
forks: 4
openIssues: 2
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-08T20:39:46Z"
lastCommitAt: "2026-06-24T23:21:24Z"
lastReleaseAt: "2026-06-16T14:23:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 76
maintainers: ["bkearns"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb6d9e576dd1615912ce8b4e394fb986397a212b722baa3f696e199a142b5b7b/ferrosadb/ferrosa"
discussionCount: 0
---

# Ferrosa

A Rust reimplementation of Apache Cassandra with S3-backed storage.

Ferrosa is a developer-preview distributed database that targets the Cassandra CQL
client surface. The current implementation supports a useful subset of CQL and common
driver workflows, but it is not yet a drop-in Cassandra replacement. Under the hood, it replaces
Cassandra's local-disk storage model with a write-behind architecture where ephemeral
local storage serves as a fast cache and S3-compatible object storage provides
durability.

> **Status: Developer Preview.** Ferrosa is under active development. APIs, on-disk
> formats, and configuration may change before a stable 1.0. Don't run it on data you
> can't lose. Please report issues — we want to hear them.

## Quick Install

```bash
curl -fsSL https://ferrosadb.com/install.sh | bash
```

The installer detects your platform (macOS arm64/x86_64, Linux x86_64/aarch64),
downloads the latest release into `~/.ferrosa/bin/`, writes a default config to
`~/.ferrosa/config/`, and offers to register a launchctl/systemd unit and set CQL
admin credentials.

To build from source instead, see [Building](#testing) below.

## Why Ferrosa?

Apache Cassandra is a…
