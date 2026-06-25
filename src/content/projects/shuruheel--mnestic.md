---
repo: "shuruheel/mnestic"
name: "mnestic"
description: "mnestic is a maintained fork of CozoDB (transactional relational-graph-vector DB with Datalog), tuned as a substrate for agentic memory. Forked from cozodb/cozo."
url: "https://github.com/shuruheel/mnestic"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 19
recentReleases: 6
createdAt: "2026-05-30T13:54:17Z"
lastCommitAt: "2026-06-25T01:31:27Z"
lastReleaseAt: "2026-06-12T22:10:31Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 88
undervaluedScore: 42
maintainers: ["shuruheel"]
openGraphImageUrl: "https://opengraph.githubassets.com/849c57a3b1071434d43701c574908a87a55685e46b2749484118bf228ed4984b/shuruheel/mnestic"
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
> the Cozo Project Authors. See [`FORK.md`](FORK.md) for provenance and licensing,
> and [`CHANGELOG-FORK.md`](CHANGELOG-FORK.md) for what diverges from upstream.

## What mnestic adds over CozoDB

Highlights (full detail in [`CHANGELOG-FORK.md`](CHANGELOG-FORK.md)):

**0.8.5**

- **Flat in-RAM parallel index builds** — `::hnsw create` now constructs the
  graph in flat, integer-indexed memory (contiguous vector slab + per-node
  adjacency arrays, the hnswlib/pgvector layout) with parallel insertion under
  per-node locks, then serialises once into the unchanged on-disk format.
  Measured on the 40k ×…
