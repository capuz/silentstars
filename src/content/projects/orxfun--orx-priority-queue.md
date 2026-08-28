---
repo: "orxfun/orx-priority-queue"
name: "orx-priority-queue"
description: "Priority queue traits and efficient d-ary heap implementations."
readmeQualityOk: true
url: "https://github.com/orxfun/orx-priority-queue"
homepage: "https://crates.io/crates/orx-priority-queue"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["data-structures", "heap", "priority-queue", "priority-queues"]
stars: 11
forks: 2
openIssues: 10
closedIssues: 1
watchers: 2
contributors: 5
recentReleases: 1
createdAt: "2023-07-22T16:57:37Z"
lastCommitAt: "2026-08-28T14:20:35Z"
lastReleaseAt: "2026-08-28T14:26:57Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 82
undervaluedScore: 38
maintainers: ["orxfun", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd7743ffb01710191e3f0d02955889ae82c7c9209821e7cdb2e82c63577037f7/orxfun/orx-priority-queue"
fundingLinks: ["GITHUB:https://github.com/orxfun"]
---

# orx-priority-queue

Priority queue traits and high performance d-ary heap implementations.

> **no-std**: This crate supports **no-std**; however, _std_ is added as a default feature. Please include with **no-default-features** for no-std use cases: `cargo add orx-priority-queue --no-default-features`.

## A. Priority Queue Traits

This crate aims to provide algorithms with the abstraction over priority queues. In order to achieve this, two traits are defined: **`PriorityQueue<N, K>`** and **`PriorityQueueDecKey<N, K>`**. The prior is a simple queue while the latter extends it by providing additional methods to change priorities of the items that already exist in the queue.

The separation is important since additional operations often requires the implementors to allocate internal memory for bookkeeping. Therefore, we would prefer `PriorityQueueDecKey<N, K>` only when we need to change the priorities.

See [DecreaseKey](https://github.com/orxfun/orx-priority-queue/blob/main/docs/DecreaseKey.md) section for a discussion on when decrease-key operations are required and why they are important.

## B. d-ary Heap Implementations

d-ary implementations are generalizations of the…
