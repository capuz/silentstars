---
repo: "shuruheel/mnestic"
name: "mnestic"
description: "mnestic is a maintained fork of CozoDB (transactional relational-graph-vector DB with Datalog), tuned as a substrate for agentic memory. Forked from cozodb/cozo."
readmeQualityOk: true
url: "https://github.com/shuruheel/mnestic"
homepage: "https://mnesticdb.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 17
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 19
recentReleases: 8
createdAt: "2026-05-30T13:54:17Z"
lastCommitAt: "2026-07-04T23:16:05Z"
lastReleaseAt: "2026-07-04T17:20:53Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 48
maintainers: ["shuruheel"]
openGraphImageUrl: "https://opengraph.githubassets.com/0687694534faa8dd928fda5d130e32b6378fe362a70e5aaf7a9d9b89bd2bf3be/shuruheel/mnestic"
discussionCount: 1
---

# `mnestic`

> **mnestic** is an independently maintained fork of [CozoDB](https://github.com/cozodb/cozo),
> a transactional relational-graph-vector database that uses Datalog for queries —
> "the hippocampus for AI." This fork continues the project as a substrate for
> **agentic memory**, with performance, correctness, and operational fixes on top
> of upstream `481af05` (the last upstream commit, 2024-12-04).
>
> mnestic is **not** the official CozoDB and is not affiliated with or endorsed by
> its original authors. All credit for the original design belongs to Ziyang Hu and
> the Cozo Project Authors. See [`FORK.md`](https://github.com/shuruheel/mnestic/blob/HEAD/FORK.md) for provenance and licensing,
> and [`CHANGELOG-FORK.md`](https://github.com/shuruheel/mnestic/blob/HEAD/CHANGELOG-FORK.md) for what diverges from upstream.

[ English | [中文](https://github.com/shuruheel/mnestic/blob/HEAD/README-zh.md) ]

## What mnestic adds over CozoDB

Highlights (full detail in [`CHANGELOG-FORK.md`](https://github.com/shuruheel/mnestic/blob/HEAD/CHANGELOG-FORK.md)):

**0.10.0**

- **Bitemporality — system-versioned (`TxTime`) relations.** An engine-assigned
  transaction-time axis…
