---
repo: "ferrosadb/ferrosa"
name: "ferrosa"
description: "Ferrosa Database is a distributed database written in Rust, compatible with the Cassandra CQL client surface, with S3-compatible object storage as the source of truth. Nodes are ephemeral — a node reads from object storage rather than streaming a copy from its peers."
readmeQualityOk: true
url: "https://github.com/ferrosadb/ferrosa"
homepage: "https://ferrosadb.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 12
forks: 5
openIssues: 5
closedIssues: 52
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-08T20:39:46Z"
lastCommitAt: "2026-11-01T22:59:07Z"
lastReleaseAt: "2026-06-16T14:23:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 57
maintainers: ["bkearns", "ferrosa-release-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/135c57f7835c5557d3d3d36e4d87105ea0d02dbafd3c462e0f42b18077c10954/ferrosadb/ferrosa"
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

## Community and support

Join the [Ferrosa Discord](https://discord.gg/BTpKMp9HRM) to discuss deployments,
ask questions, and report issues with the community and maintainers.

## Quick Install

```bash
curl -fsSL https://www.ferrosa.ai/install.sh | bash
```

The installer detects your platform (macOS arm64/x86_64, Linux x86_64/aarch64),
downloads the latest release into `~/.ferrosa/bin/`, writes a default config to
`~/.ferrosa/config/`,…
